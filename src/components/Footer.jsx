import React from "react";
import style from "./footer.module.css";
export default function Footer() {
  return (
    <div className={style.f_container}>
      <div className={style.f_up}>
        <div>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
            alt="kfc_logo"
          />
        </div>
        <div>
          <h5>KFC Food</h5>
          <h5>Menu</h5>
          <h5>Order Lookup</h5>
          <h5>Gift card</h5>
        </div>
        <div>
          <h5>Support</h5>
          <h5>Get Help</h5>
          <h5>Contact Us</h5>
          <h5>KFC Feedback</h5>
          <h5>Privacy Policy</h5>
        </div>
        <div>
          <h5>Legal</h5>
          <h5>Terms and Conditions</h5>
          <h5>Privacy Policy</h5>
          <h5>Disclaimer</h5>
          <h5>Caution Notice</h5>
        </div>
        <div>
          <h5>KFC India</h5>
          <h5>About KFC</h5>
          <h5>KFC Care</h5>
          <h5>Careers</h5>
          <h5>Our Golden Past</h5>
        </div>
        <div>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg"
            alt="logo"
          />
          <a className={style.aa} href="">Find a KFC</a>
        </div>
        <div>
          <img
            className={style.play}
            src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0"
            alt="logo"
          />
        </div>
        <div>
          <img
            className={style.app}
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="logo"
          />
        </div>
      </div>
      <div className={style.down}>
        <div className={style.left}>
          <h6 className={style.copyright}>Copyright © KFC Corporation 2021 All Rights Reserved</h6>
        </div>
        <div className={style.right}>
          <img className={style.logo} src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg" alt="logo" />
          <img className={style.logo} src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg" alt="logo" />
          <img className={style.logo} src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
}