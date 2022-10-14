import { useState } from "react"

import "../Style/App.css"
import "./Style/Building.css"

function Building() {
   const [item, setitem] = useState([
      { src:"picture/3 (1).jpg"},
      { src:"picture/3 (2).jpg"},
      { src:"picture/3 (3).jpg"},
      { src:"picture/3 (4).jpg"},
      { src:"picture/3 (5).jpg"},
      { src:"picture/3 (6).jpg"},
      { src:"picture/3 (7).jpg"},
      { src:"picture/3 (8).jpg"},
      { src:"picture/3 (9).jpg"},
      { src: "picture/3 (10).jpg" },
      { src:"picture/3 (11).jpg"},
      { src:"picture/3 (12).jpg"},
      { src:"picture/3 (13).jpg"},
      { src:"picture/3 (14).jpg"},
      { src:"picture/3 (15).jpg"},
      { src:"picture/3 (16).jpg"},
      { src:"picture/3 (17).jpg"},
      { src:"picture/3 (18).jpg"},
      { src:"picture/3 (19).jpg"},
      { src:"picture/3 (20).jpg"},
   ])
   let r = 0
   const change = (index) => {
      r = index
      const slider = document.querySelector("#sliderB")
      const sliderElements = document.querySelectorAll("#sliderB>div");
      sliderElements.forEach((element, ind) => {
         if (ind == index) {
            element.className = "active";
            element.firstChild.className = "img"
         }
         else {
            element.className = "C_Card";
            element.lastChild.className = "img"
         }
      });
      const way = slider.getBoundingClientRect().x - sliderElements[index].getBoundingClientRect().x
      slider.style = `
      transform:translatex(${way}px);
      transition: All 1s
      `
   }
   const place1 = () => {
      if (r != 0) {
         const slider = document.querySelector("#sliderB")
         const sliderElements = document.querySelectorAll("#sliderB>div");
         const carusel = document.querySelector("#carusel4")
         slider.style = `
      transform:translatex(${slider.clientWidth - carusel.clientWidth}px);
      transition: All .5s
      `
         sliderElements[0].className = "active"
         sliderElements[r].className = "C_Card"
         sliderElements[r].lastChild.className = "img"
         sliderElements[0].lastChild.className = "img"
      }
   }
   return (
      <div className="Building" id="binolar">
         <div className="container">
            <div className="content">
               <h1 className="Prime_Text">Tashqi ko'rinish</h1>
               {/*<h3 className="Secondary_Text"></h3>*/}
            </div>
            <div className="carusel" id="carusel4">
               <div className="slider" id="sliderB">
                  {item.map((element, index) => {
                     return (
                        index == 0 ?
                           <div className="active" key={index} onClick={() => { change(index) }}  >
                              <img src={element.src} className="img" alt="" />
                           </div>
                           :
                           <div className="C_Card" key={index} onClick={() => { change(index) }}>
                              <img src={element.src} className="img" alt="" />
                           </div>
                     )
                  })}
               </div>

               <button className="btn_prime" onClick={() => { place1() }}><i className="fas fa-arrow-left"></i>Boshiga qaytish</button>
            </div>
         </div>
      </div>
   );
}
export default Building;  