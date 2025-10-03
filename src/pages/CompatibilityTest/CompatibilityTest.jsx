import React, { useState } from "react";
import compatibilityData from "../../data/compatibilityData";
import "./CompatibilityTest.css";

function CompatibilityTest() {
  const [sign1, setSign1] = useState("");
  const [sign2, setSign2] = useState("");
  const [result, setResult] = useState(null);

  const zodiacSigns = Object.keys(compatibilityData);

  const handleTest = () => {
    const data = compatibilityData[sign1][sign2];
    setResult(data);
  };

  return (
    <div className="compatibility-container">
      {/* Discover text */}
      <div className="discover-text">
        <h1>Discover Your Zodiac Compatibility</h1>
        <p>
          Discover how well your zodiac sign matches with others.
          Our compatibility test explores love, friendship, and partnership potential.
          Learn which traits bring harmony and which may cause challenges.
        </p>
      </div>

      {/* Image + Test side by side */}
      <div className="content-section">
        <div className="discover-photo"></div>

        <div className="test-section">
          <h1 className="title">✨ Compatibility Test ✨</h1>

          {/* Dropdowns */}
          <div className="selectors">
            <select value={sign1} onChange={(e) => setSign1(e.target.value)}>
              <option value="" disabled>-- Select Sign --</option>
              {zodiacSigns.map((sign) => (
                <option key={sign} value={sign}>
                  {sign}
                </option>
              ))}
            </select>

            <select value={sign2} onChange={(e) => setSign2(e.target.value)}>
              <option value="" disabled>-- Select Sign --</option>
              {zodiacSigns.map((sign) => (
                <option key={sign} value={sign}>
                  {sign}
                </option>
              ))}
            </select>

            <button onClick={handleTest}>Check</button>
          </div>

          {/* Result card */}
          {result && (
            <div className="result-card">
              <h2>
                {sign1} ❤️ {sign2}
              </h2>
              <p className="percentage">Percentage: {result.percentage}%</p>
              <p>{result.description}</p>

              <div>
                <h3>Strengths:</h3>
                <ul>
                  {result.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3>Challenges:</h3>
                <ul>
                  {result.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3>Relationship Advice:</h3>
                <p>{result.advice}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompatibilityTest;

