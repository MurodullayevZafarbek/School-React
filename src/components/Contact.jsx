import { useState } from "react"

import "../Style/App.css"  
import "./Style/Contact.css"

function Contact() {
  return (
     <div className="Contact" id="contact">
        <div className="container">
           <div className="content">
              <h1 className="Prime_Text">Biz bilan bog'laning</h1>
              <h3 className="Secondary_Text">Biz siz bilan 24 soat aloqadamiz</h3>
              <div className="contact">
                 <h2 className="Text_32">Bizga ulaning</h2>
                 <div className="social">
                    <a href="https://t.me/Uchtepa_295maktab_axil_oila"><i className="fab fa-facebook"></i>Facebook</a>
                    <a href="https://t.me/Uchtepa_295maktab_axil_oila"><i className="fab fa-instagram-square"></i>Instagram</a>
                    <a href="https://t.me/Uchtepa_295maktab_axil_oila"><i className="fab fa-telegram"></i>Telegram</a>
                    <a href="tel:+998999999999"><i className="fas fa-phone-square"></i>Telefon</a>
                 </div>
              </div>
           </div>
           <form action="">
              <span className="ng">
                 <div>
                     <label htmlFor="" className="Text_26_Form">Ism</label>
                     <input type="text" className="Text_26_Form" />
                 </div>
                 <div>
                     <label htmlFor="" className="Text_26_Form">Familiya</label>
                     <input type="text"  className="Text_26_Form"/>
                 </div>
              </span>
              <div>
                  <label htmlFor="" className="Text_26_Form">Email</label>
                  <input type="Elmail"  className="Text_26_Form"/>
              </div>
              <div>
                  <label htmlFor="" className="Text_26_Form">User type</label>
                 <select name=""  className="Text_26_Form" id="">
                    <option value="">Ota / Ona</option>
                    <option value="">O`quvchi</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="" className="Text_26_Form">Xabar</label>
                  <textarea name="" id="" placeholder="..." cols="30" rows="10" className="Text_26_Form"></textarea>
              </div>
              <input type="submit" className="btn_prime" value="Jo`natish" />
           </form>
        </div> 
    </div>
  );
}
export default Contact;  