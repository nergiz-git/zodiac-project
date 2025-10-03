import React, { useEffect, useRef, useState } from "react";
import "./Counter.css";

export default function Counter({ end, duration = 2000, formatter, label, format }) {
  const [value, setValue] = useState(0); 
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    startRef.current = null;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); 
      const current = Math.ceil(end * eased);

      setValue((prev) => (prev !== current ? current : prev));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration]);

  const display = formatter ? formatter(value) : value.toLocaleString();

  return (
    // <div className="stat">
    //   <div className="counter-number">{display}</div>
    //   <div className="counter-label">{label}</div>
    // </div>
        <div className="stat">
      <h3 className="counter-number">{format ? format(end) : end}</h3>
      <p className="counter-label">{label}</p>
    </div>

  );
}

// export default function Counter() {
//   const stats = [
//     {
//       key: "clients",
//       target: 546000,
//       label: "Happy clients",
//       duration: 2200,
//       formatter: (v) => (v >= 1000 ? `${Math.floor(v / 1000)}K` : `${v}`),
//     },
//     {
//       key: "numerologists",
//       target: 83,
//       label: "Numerologists in our team",
//       duration: 1800,
//     },
//     {
//       key: "experience",
//       target: 10,
//       label: "Years of experience",
//       duration: 1500,
//     },
//   ];

//   return (
//     <section className="counter-section" aria-label="Statistics">
//       <div className="counter-wrapper">
//         {stats.map((s) => (
//           <AnimatedCounter
//             key={s.key}
//             target={s.target}
//             duration={s.duration}
//             formatter={s.formatter}
//             label={s.label}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
