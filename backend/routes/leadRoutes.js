const express = require("express");
const Lead = require("../models/lead");
const nodemailer = require("nodemailer");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to generate AI email content (for logout)
async function generateEmailContent(leadScore) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Generate a personalized email based on this lead score: ${leadScore}.`;
  const result = await model.generateContent(prompt);
  return result.response.candidates[0].content.parts[0].text;
}

// New function: AI lead scoring
async function generateLeadScore(previousScore, interaction) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `
    You are an AI lead scoring system.
    A user's current lead score is ${previousScore}.
    The user has just performed the following interaction: "${interaction}".
    Based on this, please provide an updated lead score as an integer between 0 and 100, where a higher score means more engagement.
    Only output the integer value.
  `;
  const result = await model.generateContent(prompt);
  const scoreText = result.response.candidates[0].content.parts[0].text.trim();
  const newScore = parseInt(scoreText, 10);
  return isNaN(newScore) ? previousScore : newScore;
}

// Updated endpoint for tracking interactions with AI lead scoring
router.post("/interact", async (req, res) => {
  const { userId, interaction } = req.body;
  const lead = await Lead.findOne({ userId });
  if (!lead) return res.status(404).json({ message: "Lead not found" });

  const oldScore = lead.score;
  // Use the AI model to determine the new score based on the interaction
  const newScore = await generateLeadScore(oldScore, interaction);
  lead.score = newScore;
  lead.interactions += 1;
  await lead.save();
  res.json({ message: "Interaction recorded", lead });
});

// Logout endpoint remains the same (uses AI to generate email content)
router.post("/logout", async (req, res) => {
  const { userId } = req.body;
  const lead = await Lead.findOne({ userId });
  if (!lead) return res.status(404).json({ message: "Lead not found" });

  const emailContent = await generateEmailContent(lead.score);

  await nodemailer.createTransport({
    service: "gmail",
    auth: { 
      user: process.env.EMAIL,
      pass: process.env.PASSWORD 
    },
  }).sendMail({
    from: process.env.EMAIL,
    to: lead.email,
    subject: "Thank You!",
    text: emailContent,
  });

  res.json({ message: "Logout successful. AI-generated email sent!" });
});

module.exports = router;
