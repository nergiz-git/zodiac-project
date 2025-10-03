import { Link, useParams } from "react-router";
import zodiacHoroscopes from "../../data/zodiacHoroscopes";
import './HoroscopePage.css'
import ariesIcon from "/src/assets/images/aries.svg";
import taurusIcon from "/src/assets/images/taurus.svg";
import geminiIcon from "/src/assets/images/gemini.svg";
import cancerIcon from "/src/assets/images/cancer.svg";
import leoIcon from "/src/assets/images/leo.svg";
import virgoIcon from "/src/assets/images/virgo.svg";
import libraIcon from "/src/assets/images/libra.svg";
import scorpioIcon from "/src/assets/images/scorpio.svg";
import sagittariusIcon from "/src/assets/images/sagittarius.svg";
import capricornIcon from "/src/assets/images/capricorn.svg";
import aquariusIcon from "/src/assets/images/aquarius.svg";
import piscesIcon from "/src/assets/images/pisces.svg";


const zodiacIcons = {
  aries: ariesIcon,
  taurus: taurusIcon,
  gemini: geminiIcon,
  cancer: cancerIcon,
  leo: leoIcon,
  virgo: virgoIcon,
  libra: libraIcon,
  scorpio: scorpioIcon,
  sagittarius: sagittariusIcon,
  capricorn: capricornIcon,
  aquarius: aquariusIcon,
  pisces: piscesIcon,
};
function HoroscopePage({ type }) {
  const { sign } = useParams();
  const horoscope = zodiacHoroscopes.find(
    (z) => z.name.toLowerCase() === sign.toLowerCase()
  );
  if (!horoscope) {
    return <p>Bu bürc üçün məlumat tapılmadı.</p>;
  }
  return (
    <div className="horoscopeForecast">
        <p className="forecastText">Daily & Monthly Horoscopes</p>

      <div className="horoscopeHeader">
       <img src={zodiacIcons[sign.toLowerCase()]} alt={horoscope.name} className="horoscopeIcon" 
       />
        <div className="right-text">
      <h2>
        {horoscope.name}{" "}
        {type === "daily" ? "Daily Horoscope" : "Monthly Horoscope"}
      </h2>
       <p>March 21 - April 19</p>
       </div>
             </div>

      <div className="column">
       <p>{type === "daily" ? horoscope.daily : horoscope.monthly}
        </p>
      </div>
           <Link to="/zodiacdetails" className="back-link">
        Back to Zodiac Details
      </Link>

    </div>
  );
}
export default HoroscopePage;
