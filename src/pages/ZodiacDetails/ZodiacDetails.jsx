import React from 'react'
import './ZodiacDetails.css'
import { Link } from 'react-router';

function ZodiacDetails() {
 const zodiacSigns = [
    {
      name: "Aries",
      symbol: "♈",
      dates: "March 21 - April 19",
      element: "Fire",
      quality: "Cardinal",
      rulingPlanet: "Mars",
      traits: ["Courageous", "Determined", "Confident"],
      description: "Aries is a bold leader with fiery energy.",
      colors: ["Red", "Orange"],
      luckyNumbers: [1, 9, 19],
      dailyLink: "/daily/aries",
      monthlyLink: "/monthly/aries"
    },
    {
      name: "Taurus",
      symbol: "♉",
      dates: "April 20 - May 20",
      element: "Earth",
      quality: "Fixed",
      rulingPlanet: "Venus",
      traits: ["Reliable", "Patient", "Practical"],
      description: "Taurus is grounded, reliable, and enjoys comfort.",
      colors: ["Green", "Pink"],
      luckyNumbers: [2, 6, 8],
      dailyLink: "/daily/taurus",
      monthlyLink: "/monthly/taurus"

    },
    {
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 - Jun 20",
    element: "Air",
    quality: "Mutable",
    rulingPlanet: "Mercury",
    traits: ["Adaptable", "Outgoing", "Intelligent", "Curious"],
    description: "Expressive and quick-witted, Gemini represents two different personalities in one.",
    colors: ["Yellow", "Light Blue"],
    luckyNumbers: [5, 7, 14, 23],
    dailyLink: "/daily/gemini",
    monthlyLink: "/monthly/gemini"
   

  },
  {
    name: "Cancer",
    symbol: "♋",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    quality: "Cardinal",
    rulingPlanet: "Moon",
    traits: ["Intuitive", "Emotional", "Protective", "Sympathetic"],
    description: "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know.",
    colors: ["White", "Silver"],
    luckyNumbers: [2, 7, 11, 16, 20, 25],
     dailyLink: "/daily/cancer",
    monthlyLink: "/monthly/cancer"
  },
  {
    name: "Leo",
    symbol: "♌",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    quality: "Fixed",
    rulingPlanet: "Sun",
    traits: ["Creative", "Passionate", "Generous", "Cheerful"],
    description: "Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac.",
    colors: ["Gold", "Orange"],
    luckyNumbers: [1, 3, 10, 19],
    dailyLink: "/daily/leo",
    monthlyLink: "/monthly/leo"
  },
  {
    name: "Virgo",
    symbol: "♍",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    quality: "Mutable",
    rulingPlanet: "Mercury",
    traits: ["Analytical", "Practical", "Hardworking", "Kind"],
    description: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs.",
    colors: ["Navy Blue", "Gray"],
    luckyNumbers: [6, 14, 18, 29, 35],
    dailyLink: "/daily/virgo",
    monthlyLink: "/monthly/virgo"
  },
  {
    name: "Libra",
    symbol: "♎",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    quality: "Cardinal",
    rulingPlanet: "Venus",
    traits: ["Diplomatic", "Fair-minded", "Social", "Gracious"],
    description: "Partnership and marriage are extremely important for Libras, as they find balance through companionship.",
    colors: ["Blue", "Pastel Green"],
    luckyNumbers: [4, 6, 13, 15, 24],
    dailyLink: "/daily/libra",
    monthlyLink: "/monthly/libra"
  },
  {
    name: "Scorpio",
    symbol: "♏",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    quality: "Fixed",
    rulingPlanet: "Pluto",
    traits: ["Resourceful", "Brave", "Passionate", "Stubborn"],
    description: "Scorpios are known by their calm and cool behavior, and by their mysterious appearance.",
    colors: ["Deep Red", "Black"],
    luckyNumbers: [8, 11, 18, 22],
    dailyLink: "/daily/scorpio",
    monthlyLink: "/monthly/scorpio"
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    quality: "Mutable",
    rulingPlanet: "Jupiter",
    traits: ["Generous", "Idealistic", "Great sense of humor", "Adventurous"],
    description: "Sagittarius is extrovert, optimistic and enthusiastic, and likes changes.",
    colors: ["Turquoise", "Purple"],
    luckyNumbers: [3, 9, 15, 21, 22],
    dailyLink: "/daily/sagittarius",
    monthlyLink: "/monthly/sagittarius"
  },
  {
    name: "Capricorn",
    symbol: "♑",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    quality: "Cardinal",
    rulingPlanet: "Saturn",
    traits: ["Responsible", "Disciplined", "Self-control", "Good managers"],
    description: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious.",
    colors: ["Brown", "Black"],
    luckyNumbers: [4, 8, 13, 22],
    dailyLink: "/daily/capricorn",
    monthlyLink: "/monthly/capricorn"
  },
  {
    name: "Aquarius",
    symbol: "♒",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    quality: "Fixed",
    rulingPlanet: "Uranus",
    traits: ["Progressive", "Original", "Independent", "Humanitarian"],
    description: "Aquarius-born are shy and quiet, but on the other hand they can be eccentric and energetic.",
    colors: ["Light Blue", "Silver"],
    luckyNumbers: [4, 7, 11, 22, 29],
    dailyLink: "/daily/aquarius",
    monthlyLink: "/monthly/aquarius"
  },
  {
    name: "Pisces",
    symbol: "♓",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    quality: "Mutable",
    rulingPlanet: "Neptune",
    traits: ["Compassionate", "Artistic", "Intuitive", "Gentle"],
    description: "Pisces are very friendly, so they often find themselves in a company of very different people.",
    colors: ["Sea Green", "Lavender"],
    luckyNumbers: [3, 9, 12, 15, 18, 24],
    dailyLink: "/daily/pisces",
    monthlyLink: "/monthly/pisces"
  }
  ];


  return (
    <div className="cards-container">
      {zodiacSigns.map((sign, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <div className="symbol">{sign.symbol}</div>
            <h2>{sign.name}</h2>
            <p>{sign.dates}</p>
          </div>

          <div>
            <span className={`badge element-${sign.element.toLowerCase()}`}>
              {sign.element}
            </span>
            <span className="badge badge-outline">{sign.quality}</span>
          </div>

          <div className="section">
            <h4>Ruling Planet</h4>
            <p>{sign.rulingPlanet}</p>
          </div>

          <div className="section">
            <h4>Key Traits</h4>
            <div className="traits">
              {sign.traits.map((trait, i) => (
                <span key={i} className="badge badge-outline">
                  {trait}
                </span>
              ))}
            </div>
          </div>
          <div className="section">
  <h4>Description</h4>
  <p>{sign.description}</p>
</div>

<div className="section">
  <h4>Lucky Colors</h4>
  <div className="traits">
    {sign.colors.map((color, i) => (
      <span key={i} className="badge badge-outline">{color}</span>
    ))}
  </div>
</div>

<div className="section">
  <h4>Lucky Numbers</h4>
  <div className="traits">
    {sign.luckyNumbers.map((num, i) => (
      <span key={i} className="badge badge-outline">{num}</span>
    ))}
  </div>
</div>

<div className="zodiac-links">
  <Link to={sign.dailyLink} className="badge badge-outline">
    Daily
  </Link>
  <Link to={sign.monthlyLink} className="badge badge-outline">
    Monthly
  </Link>
</div>

        </div>
      ))}
    </div>
  );
}
export default ZodiacDetails;




