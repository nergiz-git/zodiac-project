import React, { useEffect, useState } from "react";
import { TbMessageCircle } from "react-icons/tb";
import "./ChatMessage.css";

function ChatMessage() {
  const [isVisible, setIsVisible] = useState(false); // chat button görünməsi
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [forecast, setForecast] = useState("");
  const [showIcon, setShowIcon] = useState(false); 

  const toggleChat = () => setIsVisible(!isVisible);

  const nextStep = () => setStep((prev) => prev + 1);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") nextStep();
  };

  const handleZodiacSelect = (z) => {
    setZodiac(z);
    nextStep();
  };

  const handleForecastSelect = (f) => {
    setForecast(f);
    nextStep();
  };

   useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



  const forecasts = {
  "Qoç": {
    daily: "Bugün enerjiniz yüksəkdir, yeni addımlar üçün uyğundur 🌟",
    monthly: "Bu ay maliyyə və münasibətlərdə diqqətli olun 🔮"
  },
  "Buğa": {
    daily: "Bugün səbrli olun, işlərdə diqqətli davranın 🌟",
    monthly: "Bu ay yaradıcılığınız inkişaf edəcək və yeni tanışlıqlar faydalı olacaq 🔮"
  },
  "Əkizlər": {
    daily: "Bugün kommunikasiya bacarıqlarınız güclüdür 🌟",
    monthly: "Bu ay iş və şəxsi həyat balansı vacib olacaq 🔮"
  },
  "Xərçəng": {
    daily: "Bugün emosional enerjiniz yüksək olacaq 🌟",
    monthly: "Bu ay ailə və dostlarla əlaqələr güclənəcək 🔮"
  },
  "Şir": {
    daily: "Bugün motivasiyanız yüksəkdir və liderlik qabiliyyətiniz ön plandadır 🌟",
    monthly: "Bu ay karyera və şəxsi inkişaf üçün əlverişlidir 🔮"
  },
  "Qız": {
    daily: "Bugün detallara diqqət yetirin 🌟",
    monthly: "Bu ay planlama və maliyyə məsələlərinə diqqət vacibdir 🔮"
  },
  "Tərəzi": {
    daily: "Bugün dostlarla paylaşım faydalı olacaq 🌟",
    monthly: "Bu ay sosial əlaqələr güclənəcək 🔮"
  },
  "Əqrəb": {
    daily: "Bugün fokus və motivasiya yüksəkdir 🌟",
    monthly: "Bu ay yaradıcılıq və innovativ ideyalar ön planda olacaq 🔮"
  },
  "Oxatan": {
    daily: "Bugün yeni öyrənmə fürsətləri var 🌟",
    monthly: "Bu ay səyahət və şəxsi inkişaf üçün əlverişlidir 🔮"
  },
  "Oğlaq": {
    daily: "Bugün iş və layihələrdə diqqətli olun 🌟",
    monthly: "Bu ay karyera və maliyyə mövzusunda planlama vacibdir 🔮"
  },
  "Dolça": {
    daily: "Bugün intuisiya və yaradıcılıq güclüdür 🌟",
    monthly: "Bu ay yeni bacarıqlar öyrənmək üçün əlverişlidir 🔮"
  },
  "Balıq": {
    daily: "Bugün emosional əlaqələr ön plandadır 🌟",
    monthly: "Bu ay sosial fəaliyyətlər və şəxsi layihələrdə irəliləyiş olacaq 🔮"
  },
};


  return (
    <div className="chat-wrapper">
    {showIcon && (
  <div className="chat-icon" onClick={toggleChat}>
    <TbMessageCircle size={32} />
  </div>
)}


      {isVisible && (
        <div className="chat-box">
          {step === 0 && (
            <div className="chat-message">
              <p>Salam ✨ Burç ChatBot-a xoş gəlmisiniz!</p>
              <button onClick={nextStep}>Başla</button>
            </div>
          )}

          {step === 1 && (
            <div className="chat-message">
              <p>Adınızı qeyd edin zəhmət olmasa 🌸</p>
              <form onSubmit={handleNameSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Adınız"
                  required
                />
                <button type="submit">Göndər</button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="chat-message">
              <p>Salam {name} 💫 Hansı bürcünüzdür?</p>
              <div className="options">
                {[
                  "Qoç",
                  "Buğa",
                  "Əkizlər",
                  "Xərçəng",
                  "Şir",
                  "Qız",
                  "Tərəzi",
                  "Əqrəb",
                  "Oxatan",
                  "Oğlaq",
                  "Dolça",
                  "Balıq",
                ].map((z) => (
                  <button key={z} onClick={() => handleZodiacSelect(z)}>
                    {z}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="chat-message">
              <p>{zodiac} bürcünüz üçün hansı proqnozu öyrənmək istəyirsiniz?</p>
              <div className="options">
                <button onClick={() => handleForecastSelect("Gündəlik")}>
                  🔮 Gündəlik
                </button>
                <button onClick={() => handleForecastSelect("Aylıq")}>
                  🌙 Aylıq
                </button>
              </div>
            </div>
          )}

        {step === 4 && (
  <div className="chat-message">
    {forecast === "Gündəlik" && (
      <p>{zodiac} bürcü üçün günlük proqnoz: {forecasts[zodiac].daily}</p>
    )}
    {forecast === "Aylıq" && (
      <p>{zodiac} bürcü üçün aylıq proqnoz: {forecasts[zodiac].monthly}</p>
    )}
    {/* <button onClick={() => setStep(0)}>Başqa Bürc</button> */}
    <button onClick={() => {
  setStep(0);      // chatı yenidən başlat
  setName("");      // əvvəlki adı sil
  setZodiac("");    // əvvəlki bürcü sil
  setForecast("");  // əvvəlki proqnozu sil
}}>
  Başqa Bürc
</button>
  </div>
)}

        </div>
      )}
    </div>
  );
}

export default ChatMessage;
