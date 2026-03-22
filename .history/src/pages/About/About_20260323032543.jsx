// import React from 'react'
// import './About.css';
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaTwitterSquare } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
// import Counter from "../../Components/Counter/Counter"; 



// const members = [
//   {
//     name: "Peter Green",
//     role: "Astrologer, taroter",
//     img: "/src/assets/images/our-astr-team-6.png",
//   },
//   {
//     name: "Anna Jin",
//     role: "Astrologer",
//     img: "/src/assets/images/our0ast-team-1.png",
//   },
//   {
//     name: "Greta Martins",
//     role: "Astrologer, numerologist",
//     img: "/src/assets/images/team-102.png",
//   },
//   {
//     name: "Mike Jones",
//     role: "Product Manager",
//     img: "/src/assets/images/our-astr-team-3.png",
//   },
//   {
//     name: "Moira Anderson",
//     role: "Numerologist",
//     img: "/src/assets/images/our-astr-tteam-6.png",
//   },
//   {
//     name: "Alexa Gold",
//     role: "Founder and CEO",
//     img: "/src/assets/images/our-astr-team-2.png",
//   },
//     {
//     name: "Kate Watson",
//     role: "Marketing manager",
//     img: "/src/assets/images/team-103.png",
//   },
//       {
//     name: "Paula Adams",
//     role: "Numerologist",
//     img: "/src/assets/images/team-104.png",
//   },
//     {
//     name: "Rita Griffin",
//     role: "Accountant",
//     img: "/src/assets/images/our-astr-team-5.png",
//   },
// ];
// const stats = [
//   { end: 546000, label: "Happy Clients" , format: (n) => `${n / 1000}K`  },
//   { end: 83, label: "Numerologists in our team" },
//   { end: 10, label: "Years of Experience" }
// ];

// function About() {
//   return (
//     <div className='about-section'>
//       <div className='text'>
//         <h5 style={{color:'#D5846E'}}>OUR STORY</h5>
//         <p className='company' style={{marginBottom:'20px'}}>About our company</p>
//         <p className='text-description' style={{ fontSize:'20px', lineHeight:'30px'}}>
//           We provide trusted astrological insights to inspire and guide your journey.
//           Our mission is to help you discover harmony, clarity, and self-awareness.
//         </p>
//         <div className="about-container">
//         <div className="about-images">
//           <div className="about-image-large">
//             <img src="/src/assets/images/adult-man-woman-sit-together-after-practicing-asana-yoga-concept-energy-practices-mixed-media.png" alt="Astrology team" />
//           </div>
//           <div className="about-image-row">
//             <img src="/src/assets/images/w-about.png" alt="Astrology woman" />
//             <img src="/src/assets/images/Group-1035.png" alt="Tarot cards" />
//           </div>
//         </div>

//         <div className="about-text">
//           <p className="about-subtitle">WHAT WE DO</p>
//           <p className="about-title">We know everything about astrology</p>
//           <p className="about-description">
//             We know everything about astrology and its ancient wisdom.
//             Our team understands the power of the stars and planets. 
//             We explore zodiac signs to reveal personality and destiny.
//             Every horoscope we share is based on deep astrological knowledge.
//             We believe the universe holds the answers to life’s mysteries.
//             Astrology is our passion, and we love guiding people with it.
//           </p>
//           <button className="about-button">Get started</button>
//         </div>
//       </div>
//       </div>
//         <div className="about-counters">
//       {stats.map((stat) => (
//         <Counter
//           key={stat.label}
//           end={stat.end}
//           label={stat.label}
//           format={stat.format} // format funksiyasını burdan göndəririk
//         />
//       ))}
//     </div>

//     <div className='team-section'>
//       <div className="team-text">
//           <h5 className="team-subtitle">OUR TEAM</h5>
//           <p className="team-title">Meet our leading astrologers</p>
//           <p className="team-description">
//             Meet the experts who bring wisdom and insight from the stars.
//             Our leading astrologers are here to guide you with knowledge and care.
//           </p>
//         </div>
//            <div className="team-images">
//         {members.map((member, index) => (
//           <div className="team-member" key={index}>
//             <img src={member.img} alt={member.name} />
//             <h3>{member.name}</h3>
//             <p>{member.role}</p>
//             <div className="social-icons">
//               <a href="https://facebook.com" target="_blank" rel="noreferrer">
//                 <FaFacebookSquare />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noreferrer">
//                 <FaTwitterSquare />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noreferrer">
//                 <FaInstagramSquare  />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
// </div>
//     <div className='photos-section'>
//       <div className='relative1'><img  src="/src/assets/images/droste-effect-background-abstract-design-concepts-related-astrology-fantasy-1.png" alt="photo1" /></div>
//       <div className='relative1' > <img src="/src/assets/images/gallery-about-astro-2.png" alt="photo2" /></div>
//       <div className='relative1'><img src="/src/assets/images/galley-about-astro.png" alt="photo3" /></div>
//       <div className='relative1'> <img src="/src/assets/images/hands-with-purple-nails-rings-deck-tarot-cards-fanned-out-white-surface-with-fern-leaf-shadow-top-view.png" alt="photo4" /></div>     
//     </div>
   
//     <div className='partners-section'>
//     <div className="partner-text">
//           <h5 className="partner-subtitle">PARTNERSHIP</h5>
//           <p className="partner-title">Meet our partners</p>
//           <p className="partner-description">
//             We proudly collaborate with trusted partners who share our vision.
//             Together, we create meaningful connections to bring you the best experience.
//           </p>
//         </div>
//             <div className='partners-images'>
//       <img src="/src/assets/images/logo04-part.png" alt="photo1" />
//       <img src="/src/assets/images/logo-1-part.png" alt="photo2" />
//       <img src="/src/assets/images/logo-5-part.png" alt="photo3" />
//       <img src="/src/assets/images/logo-6-part.png" alt="photo4" />
//       <img src="/src/assets/images/logo04-part.png" alt="photo4" />
//     </div>
//     </div>


//     </div>
//   )
// }

// export default About


