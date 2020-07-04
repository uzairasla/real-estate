import React from "react";

const contactus = () => {
  return (
    <section id="contact">
      <div class="container">
        <h2>Contact Us</h2>

        <div class="flex">
          <div id="form-container">
            <h3>Contact Form</h3>
            <form>
              <label for="name">Name</label>
              <input type="text" id="name" />

              <label for="email">Email</label>
              <input type="text" id="email" />

              <label for="subject">Subject</label>
              <input type="text" id="subject" />

              <label for="message">Message</label>
              <textarea id="message">Write your message here..</textarea>

              <button class="rounded">Send Message</button>
            </form>
          </div>

          <div id="address-container">
            <label>Address</label>
            <address>Ny City Manhattan California, USA</address>

            <label>Phone</label>
            <a href="#">909-633-2045</a>

            <label>Email Address</label>
            <a href="#">realtors@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default contactus;
