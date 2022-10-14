import { useState } from "react"

import "../Style/App.css"  
import "./Style/Footer.css"

function Footer() {
  return (
     <div className="Footer">
        <div className="container">
           <div className="content">
              <span className="logo">295-Maktab</span>
              <h1>Asosiy joylashgan joy</h1>
              <p>Uchtepa tumani 24 kvartal 11000   p.h 56.76.4.3.23</p>
           </div>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.3272069132954!2d69.15133983337438!3d41.264100514944886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae897d7f1340a1%3A0xffac1f1d0a526a41!2zMjk1INGI0LrQvtC70LA!5e0!3m2!1sru!2s!4v1645767746386!5m2!1sru!2s"></iframe>
        </div> 
    </div>
  );
}
export default Footer;  