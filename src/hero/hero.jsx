import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./hero.scss";
import logo from '../asstes/img/Group 63.svg'

const Hero = () => {
  const form = useRef();
    const [activ,setActiv] = useState(false)
    const [inputActiv,setInputActiv] = useState(false)
    const [email,setEmail] = useState()

    const apiHandler = (e) =>{
         e.preventDefault();
          emailjs
            .sendForm(
              "service_bmzxi5l",
              "template_qjpqr1h",
              form.current,
              "Ubhu0hMFRhm8JQPIp"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
        setInputActiv(true)
    }

  return (
    <div className={activ ? "wrapper active" : "wrapper"}>
      <div className="container">
        <div className="logo">
          <img
            src={logo}
            onClick={() => setActiv(!activ)}
            alt="img nout found"
          />
        </div>
        <h1 className="title">Coming soon</h1>
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
              {inputActiv
                ? `Thank you for your trust! We'll get back to you soon.`
                : "notify me"}
            </button>
          </div>
        </form>
        <p className="notify">👋🏼 Notify me when app is launched 👋🏼</p>
      </div>
    </div>
  );
};

export default Hero;
