import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> تماس با ما</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">نام و نام خانوادگی</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">ایمیل</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">پیام</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> ارسال پیام</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;