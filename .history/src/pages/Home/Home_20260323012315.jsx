import React from 'react'
import './Home.css'
import { Link } from 'react-router';
import { products } from '../../data/products';
import Shop from '../Shop/Shop';
import ChatMessage from '../../Components/ChatMessage/ChatMessage';



function Home({ cartItems, addToCart }) {
  return (
     <div className="home-container">
      <h1 style={{marginLeft:'100px', fontSize:'60px'}}>Welcome to Zodiac World ✨</h1>
      <p style={{marginLeft:'100px', fontSize:'20px', marginTop:'20px', marginBottom:'20px'}}>Discover your zodiac sign, check compatibility, and learn more about each sign.</p>

      <div className="home-buttons">
        <Link to="/zodiacdetails" className="btn">View All Zodiac Signs</Link>
        <Link to="/findyourzodiac" className="btn">Find Your Zodiac</Link>
      </div>
      <div className='right'></div>

        <div className="sections-container">
<div className='part1'>
<div className='icon1'></div>
<div className="text-wrapper">
<h5 className='text1 privacy'>Privacy</h5>
<p className='info'>Information obtained during the consultation is private</p>
</div>
</div>zodiac-container


<div className='part1'>
<div className='icon2'></div>
<div className="text-wrapper">
<h5 className='text1'>Result guarantee</h5>
<p className='info'>We provide a guaranteed 100% result</p>
</div>
</div>


<div className='part1'>
<div className='icon3'></div>
<div className="text-wrapper">
<h5 className='text1'>Competence</h5>
<p className='info'>We only take on issues that we can solve</p>
</div>
</div>
</div>


<div className='second-container'>
  <div className='secondPhoto'></div>
  <div className='home-text'>
    <h5 style={{ marginBottom:'25px', fontSize:'20px'}}>WHAT WE DO</h5>
    <h6 style={{ fontSize:'50px', marginBottom:'25px'}}>We know everything about astrology</h6>
    <p style={{fontSize:'20px', width:'500px'}}>
    Astrology helps us understand the deeper
    meaning behind the stars and their influence
    on our lives. From zodiac signs to planetary
    movements, every detail carries a unique message.
    With years of wisdom and insight, we guide you
    through the mysteries of the cosmos. Discover your
    true path and let the universe reveal its secrets to you.
    </p>
        <Link to="/contact">
            <button className="home-btn">Get started</button>
        </Link>
      </div>
</div>

<div className="zodiac-container">
  <img className='aries' src="/src/assets/images/aries-300x300.png" alt="Aries" />
  <img src="/src/assets/images/tarius-300x300.png" alt="Tarius" />
  <img src="/src/assets/images/gemini-300x300.png" alt="Gemini" />
  <img src="/src/assets/images/cancer-300x300.png" alt="Cancer" />
  <img src="/src/assets/images/leo-300x300.png" alt="Leo" />
  <img src="/src/assets/images/virgo-300x300.png" alt="Virgo" />
  

  <img src="/src/assets/images/libre-300x300.png" alt="Libra" />
  <img src="/src/assets/images/scorpio-300x300.png" alt="Scorpio" />
  <img src="/src/assets/images/sagittarius-300x300.png" alt="Sagittarius" />
  <img src="/src/assets/images/capricorn-300x300.png" alt="Capricorn" />
  <img src="/src/assets/images/aquarius-300x300.png" alt="Aquarius" />
  <img src="/src/assets/images/pisces-300x300.png" alt="Pisces" />
</div>

<div className='shop-containerhome'>
  <h5>OUR PRODUCTS</h5>
  <p style={{ fontSize:"40px", fontWeight:" bold", width:"450px" }}>Welcome to our astro online store</p>
  <p style={{ marginBottom: "60px" }}>Astrology is one of the oldest and most accurate tools known to mankind.</p>
       <div className="products-grid" >
          {products.slice(0,6).map(p => (
            
            <div key={p.id} className="product-card">
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p className="product-price">${p.price}</p>
              <div className="product-buttons">
        <button onClick={() => addToCart(p)}>Add to Cart</button>
          <Link to="/cart" style={{textDecoration:"none"}}><button>View Cart</button></Link>
      </div>
            </div>
          ))}
          </div>
        <Link to="/shop">
          <button className="see-more-btn">See More</button>
        </Link>
          
</div>
 <div className='third-container'>
  <div className='third-text'>
  <h6 style={{color:'#D5846E', marginBottom:'25px', fontSize:'20px'}}>GIFT CARDS</h6>
  <p style={{color:'#FFFFFF', fontSize:'50px', marginBottom:'25px'}}>Free astrological express consultation</p>
  <p style={{color:'#A2A2AC', fontSize:'20px', marginBottom:'25px'}}>The way that I see astrology is as a repository of thought and psychology. A system we’ve created as a culture as way to make things mean things.</p>
   <Link to="/contact" style={{color:'#D5846E', textDecoration:'none'}}>
  <span>Learn more</span>
  </Link>
</div>
  <div className='star'></div>
 </div>

  <div className='fourth-container'>
  <div className='tarot'></div>
  <div className='fourth-text'>
    <h5 style={{color:'#D5846E', marginBottom:'25px', fontSize:'20px'}}>OTHER SERVICES</h5>
    <h6 style={{fontSize:'40px', marginBottom:'25px'}}>Tarot consultations on various topics</h6>
    <p style={{fontSize:'20px', lineHeight:'1.8', marginBottom:'30px'}}>
          Tarot readings shed light on different areas
          of life — love, career, health, and personal
          growth. Each card serves as a guide, helping
          you make the right decisions and uncover hidden
          energies.With a tarot session, you can find answers
          to your questions and explore possible paths ahead.
          Listen to your intuition and the messages the cards reveal.
     </p>
           <Link to="/contact" style={{color:'#D5846E', textDecoration:'none'}} className=''>
  <span>Learn more</span>
  </Link>
      </div>

</div>
   <div className="stats-container">
  <div className="stat-item">
    <h2 className="stat-number">95</h2>
    <p className="stat-label">Countries</p>
  </div>
  <div className="stat-item">
    <h2 className="stat-number">58</h2>
    <p className="stat-label">Astrologers</p>
  </div>
  <div className="stat-item">
    <h2 className="stat-number">10</h2>
    <p className="stat-label">Years</p>
  </div>
  <div className="stat-item">
    <h2 className="stat-number">40</h2>
    <p className="stat-label">Partners</p>
  </div>
</div>

   <div className='seventh-container'>
    <div className='moon'></div>
    <div className='seventh-text'>
      <p style={{marginBottom:'25px', fontSize:'45px'}}>Get an answer to one question for free</p>
      <p style={{marginBottom:'25px', fontSize:'20px'}}>Your path is illuminated by a road-map of stars. I am here to guide you!</p>
      <Link to="/shop">
          <button className="see-more-btn">See More</button>
        </Link>
    </div>
   </div>
   <ChatMessage />
    </div>
  );
}

export default Home

