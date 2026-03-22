// import React, { useState, useEffect } from 'react'
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { FaLinkedinIn, FaFacebookF, FaGoogle,FaTwitter} from "react-icons/fa"

// import "./Profile.css"
// import { Link } from 'react-router';
// function Profile() {
//     useEffect(() => {
//         document.title = 'Login';
//     }, []);
//     const [addclass, setAddClass] = useState("")
//     const [passwordType, setPasswordType] = useState('password')
//     const [passwordIcon, setPasswordIcon] = useState(<AiOutlineEyeInvisible />)
//     const [signUp, setSignUp] = useState('sign-up-container')
//     const [signIn, setSignIn] = useState('sign-in-container')

//     const handelToggle = () => {
//         if (passwordType === 'password') {
//             setPasswordType('text');
//             setPasswordIcon(<AiOutlineEye />)
//         } else {
//             setPasswordType('password');
//             setPasswordIcon(<AiOutlineEyeInvisible />)
//         }
//     }

//     const chanceSiginUp = () => {
//         if (signIn === 'sign-in-container') {
//             setSignIn("remove-sign-in")
//             setSignUp('sign-up-container')
//         } else {
//             setSignIn("sign-in-container")
//             setSignUp('remove-up-sign')
//         }


//     }

//     return (
//         <section className='login'>
//             <div className={`container-login ${addclass}`} id='container-login'>
//                 {/* <div className="login-col"> */}
//                 <div className={`form-container ${signUp} `}>
//                     <form >
//                         <h1>Create Account</h1>
//                         <input type="text" className="input-box"  placeholder='NAME' />
//                         <input type="email" className="input-box"  placeholder='EMAIL' />
//                         <div className="pasword-icon">
//                             <input type={passwordType} className="input-box"  placeholder='PASSWORD' />
//                             <div className='pas-icons' onClick={handelToggle}>
//                                 {passwordIcon}
//                             </div>
//                         </div>
//                         <div className="remember-me">
//                             <input type="checkbox" /><p>I agree  <b>Terms </b>the Privacy Policy</p>
//                         </div>
//                         <Link to="/">
//                         <button className='loginBtn' type='submit'>REGISTER</button>
//                         </Link>
//                         <div className="or-sign">
//                             <hr />
//                             <span className='login-span'>or Register with</span>
//                         </div>
//                         <hr />

//                         <div className="forum-img">
// <div className="login-watch-icon">
// <a href="https://facebook.com" target="_blank" rel="noreferrer">
//     <FaFacebookF style={{ color: "white", fontSize: "24px" }}/>
//     </a>
// </div>
// <div className="login-watch-icon">
//         <a href="https://google.com" target="_blank" rel="noreferrer" >
//     <FaGoogle style={{ color: "white", fontSize: "24px" }}/>
//     </a>
// </div>
// <div className="login-watch-icon">
//    <a href="https://twitter.com" target="_blank" rel="noreferrer" >
//    <FaTwitter style={{ color: "white", fontSize: "24px" }} />
//    </a>
// </div>
// <div className="login-watch-icon">
//     <a href="https://linkedin.com/" target="_blank" rel="noreferrer" >
//     <FaLinkedinIn style={{ color: "white", fontSize: "24px" }} />
//     </a>
// </div>
// </div>
//                         <p className='account-text'>Don't have an account? <a href="#" className='sign-up-btn2' onClick={chanceSiginUp}><b>Login</b></a></p>
//                     </form>
//                     <hr />
//                 </div>
//                 <div className={`form-container  ${signIn}`}>
//                     <form >
//                         <h1>Login</h1>
//                         <input type="email" className="input-box"  placeholder='EMAIL' />
//                         <div className="pasword-icon">
//                             <input type={passwordType} className="input-box"  placeholder='PASSWORD' />
//                             <div className='pas-icons' onClick={handelToggle}>
//                                 {passwordIcon}
//                             </div>
//                         </div>
//                         <div className="remember-me">
//                             <input type="checkbox" /><p>Remember me</p>
//                         </div>
//                         <Link to="/">
//                         <button className='loginBtn' type='submit'>LOGIN</button>
//                         </Link>
//                         <div className="or-sign">
//                             <hr />
//                             <span className='login-span'>or Login Up with</span>
//                         </div>
//                         <hr />
//                         <div className="forum-img">
// <div className="login-watch-icon">
//     <a href="https://facebook.com" target="_blank" rel="noreferrer">
//     <FaFacebookF style={{ color: "white", fontSize: "24px" }}/>
//     </a>
// </div>
// <div className="login-watch-icon">
//         <a href="https://google.com" target="_blank" rel="noreferrer">
//     <FaGoogle style={{ color: "white", fontSize: "24px" }}/>
//     </a>
// </div>
// <div className="login-watch-icon">
//    <a href="https://twitter.com" target="_blank" rel="noreferrer">
//    <FaTwitter style={{ color: "white", fontSize: "24px" }}/>
//    </a>
// </div>
// <div className="login-watch-icon">
//     <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
//     <FaLinkedinIn style={{ color: "white", fontSize: "24px" }}/>
//     </a>
    
// </div>
// </div>

//                         <p className='account-text'>Don't have an account? <a href="#" className='sign-up-btn2' onClick={chanceSiginUp}><b>Register</b></a></p>
//                     </form>

//                 </div>
//                 {/* </div> */}

//                 <div className="overlay-container">
//                     <div className="overlay-sign">
//                         <div className="overlay-panel overlay-left">
//                             <div className="overlay-img">
//                                <img src="./src/assets/images/Lunara.png" alt="lunara"   />
//                             </div>
                          
//                             <button className='ghost' id='signIn' onClick={() => setAddClass("")}>GO TO LOGIN</button>
                        
//                         </div>
//                         <div className="overlay-panel overlay-right">
//                             <div className="overlay-img">
//                                 <img src="./src/assets/images/Lunara.png" alt="lunara"   />
//                             </div>
                           
//                             <button className='ghost' id='signUp' onClick={() => setAddClass("right-panel-active")}>GO TO REGISTER</button>
                         
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>

//     )
// }

// export default Profile


