import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./hero.scss";
import logo from '../asstes/img/Group 63.svg'
import soon from '../asstes/img/Coming soon.svg'

const Hero = () => {
  const form = useRef();
    const [activ,setActiv] = useState(false)
    const [loader,setLoader] = useState(false)
    const [inputActiv,setInputActiv] = useState(false)
    const [email,setEmail] = useState('')

    const apiHandler = async (e) => {
      e.preventDefault();
      if(email === '') return alert('invalit value')
      else{
        setLoader(!loader)
        await emailjs
           .sendForm(
             "service_bmzxi5l",
             "template_qjpqr1h",
             form.current,
             "Ubhu0hMFRhm8JQPIp"
           )
           .then(
             (result) => {
               setInputActiv(true);
               setLoader(false);
               console.log(result.text);
             },
             (error) => {
               setLoader(!loader);
               console.log(error.text);
             }
           );
      }
        // setInputActiv(true)
    }

  return (
    <div className={activ ? "wrapper active" : "wrapper"}>
      <div className="container">
        <div className="logo">
          <img
            src={logo}
            alt="img nout found"
          />
        </div>
        <h1 className="title">
          <img src={soon} alt="img bout found" />
        </h1>
        <h2 className="description">Comfortable finance</h2>
        <form ref={form} onSubmit={apiHandler}>
          <div
            className={inputActiv ? "inputWrapper inputActiv" : "inputWrapper"}
          >
            <input
              type="email"
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email adress"
              name="email"
            />
            <button disabled={inputActiv} type="submit" className="btn">
              {!loader ? (
                <p>
                  {inputActiv
                    ? `Thank you for your trust! We'll get back to you soon.`
                    : "notify me"}
                </p>
              ) : (
                <div className="lds-dual-ring"></div>
              )}
            </button>
          </div>
        </form>
        <p className="notify">👋🏼 Notify me when app is launched 👋🏼</p>
      </div>
    </div>
  );
};

export default Hero;
