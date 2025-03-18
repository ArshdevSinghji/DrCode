import React from 'react';
import { motion } from 'framer-motion';
import headphone from '../assets/headphone.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import style from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className={style.container}>
          <div className={style.hero}>
            <span style={{ fontFamily: "Bebas Neue" }}>Shop</span>
          </div>
          <div className={style.products}>
            <div className={style.heading}>
              <h2>Give All You Need</h2>
            </div>
            <div className={style.productList}>
              <div className={style.product}>
                <div className={style.productImage}>
                  <img src={headphone} alt='headphone' />
                </div>
                <div className={style.details}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div><span style={{ fontWeight: "500" }}>Headphone</span></div>
                    <div><span style={{ color: "red" }}>$200</span></div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <button className={style.btn}>Add to Cart</button>
                  </motion.div>
                </div>
              </div>
              <div className={style.product}>
                <div className={style.productImage}>
                  <img src={headphone} alt='headphone' />
                </div>
                <div className={style.details}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div><span style={{ fontWeight: "500" }}>Headphone</span></div>
                    <div><span style={{ color: "red" }}>$200</span></div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <button className={style.btn}>Add to Cart</button>
                  </motion.div>
                </div>
              </div>
              <div className={style.product}>
                <div className={style.productImage}>
                  <img src={headphone} alt='headphone' />
                </div>
                <div className={style.details}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div><span style={{ fontWeight: "500" }}>Headphone</span></div>
                    <div><span style={{ color: "red" }}>$200</span></div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <button className={style.btn}>Add to Cart</button>
                  </motion.div>
                </div>
              </div>
              <div className={style.product}>
                <div className={style.productImage}>
                  <img src={headphone} alt='headphone' />
                </div>
                <div className={style.details}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div><span style={{ fontWeight: "500" }}>Headphone</span></div>
                    <div><span style={{ color: "red" }}>$200</span></div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <button className={style.btn}>Add to Cart</button>
                  </motion.div>
                </div>
              </div>
              <div className={style.product}>
                <div className={style.productImage}>
                  <img src={headphone} alt='headphone' />
                </div>
                <div className={style.details}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div><span style={{ fontWeight: "500" }}>Headphone</span></div>
                    <div><span style={{ color: "red" }}>$200</span></div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <button className={style.btn}>Add to Cart</button>
                  </motion.div>
                </div>
              </div>
              <div className={style.product}>
                <div className={style.productImage}>
                  <img src={headphone} alt='headphone' />
                </div>
                <div className={style.details}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div><span style={{ fontWeight: "500" }}>Headphone</span></div>
                    <div><span style={{ color: "red" }}>$200</span></div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <button className={style.btn}>Add to Cart</button>
                  </motion.div>
                </div>
              </div>
              <div className={style.product}>
                <div className={style.productImage}>
                  <img src={headphone} alt='headphone' />
                </div>
                <div className={style.details}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div><span style={{ fontWeight: "500" }}>Headphone</span></div>
                    <div><span style={{ color: "red" }}>$200</span></div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <button className={style.btn}>Add to Cart</button>
                  </motion.div>
                </div>
              </div>
              <div className={style.product}>
                <div className={style.productImage}>
                  <img src={headphone} alt='headphone' />
                </div>
                <div className={style.details}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div><span style={{ fontWeight: "500" }}>Headphone</span></div>
                    <div><span style={{ color: "red" }}>$200</span></div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <button className={style.btn}>Add to Cart</button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;