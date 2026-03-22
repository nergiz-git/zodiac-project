import React, { useState } from "react";
import { Link } from "react-router";
import "./FindYourZodiac.css";
import ariesImg from "/src/assets/images/Aries.png";
import taurusImg from "/src/assets/images/taurus.png";
import geminiImg from "/src/assets/images/gemini.png";
import cancerImg from "/src/assets/images/cancer.png";
import leoImg from "/src/assets/images/leo.png";
import virgoImg from "/src/assets/images/virgo.png";
import libraImg from "/src/assets/images/libra.png";
import scorpioImg from "/src/assets/images/scorpio.png";
import sagittariusImg from "/src/assets/images/sagittarius.png";
import capricornImg from "/src/assets/images/capricorn.png";
import aquariusImg from "/src/assets/images/aquarius.png";
import piscesImg from "/src/assets/images/pisces.png";
import { FaStar } from "react-icons/fa6";


// Full Zodiac Data
const zodiacData = {
  "Aries ♈": {
    date: "March 21 - April 19",
    element: "Fire 🔥",
    color: "Red ❤️",
    stone: "Diamond 💎",
    traits: "Courageous, energetic, natural leader",
    message: "You are Aries – your energy inspires everyone around you!",
    img: ariesImg,
  },
  "Taurus ♉": {
    date: "April 20 - May 20",
    element: "Earth 🌍",
    color: "Green 💚",
    stone: "Emerald 💎",
    traits: "Patient, reliable, practical",
    message: "You are Taurus – your stability makes people trust you!",
    img: taurusImg,
  },
  "Gemini ♊": {
    date: "May 21 - June 20",
    element: "Air 🌬️",
    color: "Yellow 💛",
    stone: "Agate 💎",
    traits: "Talkative, witty, adaptable",
    message: "You are Gemini – always curious and ready to learn something new!",
    img: geminiImg,
  },
  "Cancer ♋": {
    date: "June 21 - July 22",
    element: "Water 💧",
    color: "White 🤍",
    stone: "Pearl 💎",
    traits: "Caring, emotional, intuitive",
    message: "You are Cancer – your kindness and empathy touch everyone!",
    img: cancerImg,
  },
  "Leo ♌": {
    date: "July 23 - August 22",
    element: "Fire 🔥",
    color: "Gold 💛",
    stone: "Ruby 💎",
    traits: "Confident, generous, charismatic",
    message: "You are Leo – you shine bright like the sun and attract attention!",
    img: leoImg,
  },
  "Virgo ♍": {
    date: "August 23 - September 22",
    element: "Earth 🌍",
    color: "Brown 🤎",
    stone: "Sapphire 💎",
    traits: "Practical, analytical, detail-oriented",
    message: "You are Virgo – your perfectionism makes everything better!",
    img: virgoImg,
  },
  "Libra ♎": {
    date: "September 23 - October 22",
    element: "Air 🌬️",
    color: "Pink 💗",
    stone: "Opal 💎",
    traits: "Balanced, social, fair-minded",
    message: "You are Libra – your harmony brings peace to those around you!",
    img: libraImg,
  },
  "Scorpio ♏": {
    date: "October 23 - November 21",
    element: "Water 💧",
    color: "Black 🖤",
    stone: "Topaz 💎",
    traits: "Passionate, mysterious, determined",
    message: "You are Scorpio – your intensity makes you unforgettable!",
    img: scorpioImg,
  },
  "Sagittarius ♐": {
    date: "November 22 - December 21",
    element: "Fire 🔥",
    color: "Purple 💜",
    stone: "Turquoise 💎",
    traits: "Adventurous, optimistic, free-spirited",
    message: "You are Sagittarius – your curiosity leads you to amazing journeys!",
    img: sagittariusImg,
  },
  "Capricorn ♑": {
    date: "December 22 - January 19",
    element: "Earth 🌍",
    color: "Gray 🤎",
    stone: "Garnet 💎",
    traits: "Ambitious, disciplined, responsible",
    message: "You are Capricorn – your hard work always pays off!",
    img: capricornImg,
  },
  "Aquarius ♒": {
    date: "January 20 - February 18",
    element: "Air 🌬️",
    color: "Blue 💙",
    stone: "Amethyst 💎",
    traits: "Innovative, independent, humanitarian",
    message: "You are Aquarius – your ideas change the world!",
    img: aquariusImg,
  },
  "Pisces ♓": {
    date: "February 19 - March 20",
    element: "Water 💧",
    color: "Sea green 💚",
    stone: "Aquamarine 💎",
    traits: "Compassionate, artistic, dreamy",
    message: "You are Pisces – your imagination has no limits!",
    img: piscesImg,
  },
};

function FindYourZodiac() {
  const [birthDate, setBirthDate] = useState("");
  const [zodiac, setZodiac] = useState("");

  const calculateZodiac = () => {
    if (!birthDate) {
      setZodiac("Please select your birth date 🌙");
      return;
    }

    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    let sign = "";

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) sign = "Aries ♈";
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) sign = "Taurus ♉";
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) sign = "Gemini ♊";
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) sign = "Cancer ♋";
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) sign = "Leo ♌";
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) sign = "Virgo ♍";
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) sign = "Libra ♎";
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) sign = "Scorpio ♏";
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) sign = "Sagittarius ♐";
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) sign = "Capricorn ♑";
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) sign = "Aquarius ♒";
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) sign = "Pisces ♓";

    setZodiac(sign);
  };

  return (
    <div className="find-container">
      <h1>🔮 Find Your Zodiac</h1>
      <p>Enter your birth date and discover your zodiac sign ✨</p>

<div className="input-wrapper">
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="date-input"
      />
      <button onClick={calculateZodiac} className="find-btn">
        Find
      </button>
</div>
      {zodiac && zodiacData[zodiac] && (
        <div className="result-card">
          <img src={zodiacData[zodiac].img} alt={zodiac} className="zodiac-img" />
          <h2>{zodiac}</h2>
          <p><strong>Date range:</strong> {zodiacData[zodiac].date}</p>
          <p><strong>Element:</strong> {zodiacData[zodiac].element}</p>
          <p><strong>Lucky color:</strong> {zodiacData[zodiac].color}</p>
          <p><strong>Lucky stone:</strong> {zodiacData[zodiac].stone}</p>
          <p><strong>Traits:</strong> {zodiacData[zodiac].traits}</p>
          <p className="fun-message">{zodiacData[zodiac].message}</p>

          <Link to="/compatibilityTest">
            <button className="compat-btn">💞 Check Compatibility</button>
          </Link>
        </div>
      )}
  
     <section className="services-section">
      <div className="services-header">
        <p className="faStar"><FaStar /></p>
        <p className="subtitle">OUR SERVICES</p>
        <h2>Astrology is just a finger pointing at reality</h2>
      </div>
      <div className="services-cards">
        <div className="service-card">
          <img src="/src/assets/images/services@2x.png" alt="consultation" />
          <h4>General consultation</h4>
          <p>Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.</p>
        </div>
        <div className="service-card">
          <img src="/src/assets/images/services-3@2x.png" alt="personal advice" />
          <h4>Personal life advice</h4>
          <p>Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.</p>
        </div>
        <div className="service-card">
          <img src="/src/assets/images/services-4@2x.png" alt="forecast" />
          <h4>Annual forecast</h4>
          <p>Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.</p>
        </div>
         <div className="service-card">
          <img src="/src/assets/images/services-2@2x.png" alt="forecast" />
          <h4>Annual forecast</h4>
          <p>Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.</p>
        </div>
         <div className="service-card">
          <img src="/src/assets/images/services-1@2x.png" alt="forecast" />
          <h4>Annual forecast</h4>
          <p>Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.</p>
        </div>
         <div className="service-card">
          <img src="/src/assets/images/services-5@2x.png" alt="forecast" />
          <h4>Annual forecast</h4>
          <p>Astrology is one of the earliest attempts made by man to find the order hidden behind or within the confusing and apparent chaos that exists in the world.</p>
        </div>
      </div>
    </section>

         <section className="astrology-section">
      <div className="video-container">
        <iframe
          className="video-embed"
          src="https://www.youtube.com/embed/EqIKzG79VCs"
          title="Astrology Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-container">
        <p className="subtitle">FOR BEGINNERS</p>
        <p className="title">How can astrology help me?</p>
        <p className="description">
        Astrology is an ancient science that studies the
        influence of stars and planets on our lives. For
        beginners, it can help understand personality 
        traits, relationships, and potential future events.
        Astrological charts reveal personal strengths and
        weaknesses. It can guide daily decisions, making 
        us more aware and prepared. Astrology is also a
        fascinating tool for self-discovery and personal growth.
        Each zodiac sign has its own unique characteristics,
        and learning them helps gain a deeper understanding
        of life. Through astrology, you can better recognize
         life’s patterns and opportunities.
        </p>
       <Link to="/contact" style={{color:'#D5846E', textDecoration:'none'}} className="learn-more">
         <span>Learn more</span>
       </Link>
      </div>
    </section>
     </div>
  );
}

export default FindYourZodiac;
export {zodiacData}
