import Feedback from "../components/Feedback";
import React, { useEffect, useState } from "react";

function ContactUs() {
  const [contactNum, setContactNum] = useState([]);

  useEffect(() => {
    fetch(
      "https://csrng.net/csrng/csrng.php?min=0&max=100"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("QWERTYUJI", data);
        setContactNum(data)
      })
      .catch((error) => console.error("Error", error));
  }, [contactNum]);

  return (
    <div className="contact-container">
      <div>
        <h2>CONTACT US</h2>
      </div>
      <div className="contact-info">
        <div className="info-cnt">
          <h3>Los Angeles</h3>
          <p>22 East Str, New York,</p>
          <p>Los Angeles, CA 023455, USA,</p>
          {contactNum.map((number, index) => (
            <p key={index}>{number}</p>
          ))}
          <p>
            <a href="mailto:thezhibeks@gmail.com">thezhibeks@gmail</a>
          </p>
        </div>
        <div className="info-cnt">
          <h3>Los Angeles</h3>
          <p>22 East Str, New York,</p>
          <p>Los Angeles, CA 023455, USA,</p>
          {contactNum.map((number, index) => (
            <p key={index}>{number}</p>
          ))}
          <p>
            <a href="mailto:thezhibeks@gmail.com">thezhibeks@gmail</a>
          </p>
        </div>
        <div className="info-cnt">
          <h3>Los Angeles</h3>
          <p>22 East Str, New York,</p>
          <p>Los Angeles, CA 023455, USA,</p>
          {contactNum.map((number, index) => (
            <p key={index}>{number}</p>
          ))}
          <p>
            <a href="mailto:thezhibeks@gmail.com">thezhibeks@gmail</a>
          </p>
        </div>
      </div>


      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.22552495623611!2d76.93557556157343!3d43.26132704957878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836febec3b0c4b%3A0xed256eb952441fdf!2sVINCI%20Restobar!5e0!3m2!1sru!2skz!4v1712904835191!5m2!1sru!2skz"
          width="800"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div>
        <h2>GET IN TOUCH.</h2>
        <p>
          If you have questions or suggestions, you can write to us and we will
          contact you immediately.
        </p>
      </div>
      <br />
      <Feedback />
    </div>
  );
}

export default ContactUs;
