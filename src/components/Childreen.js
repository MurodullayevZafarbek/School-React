import "../Style/App.css"
import "./Style/Workers.css"

function Workers(props) {
   let r = 0
   const change = (index) => {
      r = index;
      const slider = document.querySelector("#sliderch")
      const sliderElements = document.querySelectorAll("#sliderch>div");
      sliderElements.forEach((element, ind) => {
         if (ind === index) {
            element.className = "active12";
            element.firstChild.className = "text1"
            element.lastChild.className = "img21"
         }
         else {
            element.className = "C_Card12";
            element.firstChild.className = "text"
            element.lastChild.className = "img1"
         }
      });
      const way = slider.getBoundingClientRect().x - sliderElements[index].getBoundingClientRect().x
      slider.style = `
      transform:translatex(${way}px);
      transition: All 1s
      `
      //place(index, sliderElements,slider)
   }
   const xabar = () => { 
      alert("Ushbu Funksiya ishlab chiqish jarayonida")
   }
   const place = () => {
      if (r !== 0) {
         const slider = document.querySelector("#sliderch")
         const sliderElements = document.querySelectorAll("#sliderch>div");
         const carusel = document.querySelector("#carusel")

         slider.style = `
      transform:translatex(${slider.clientWidth - carusel.clientWidth}px);
      transition: All .5s
      `
         sliderElements[0].className = "active12"
         sliderElements[r].className = "C_Card12"
         sliderElements[0].firstChild.className = "text1"
         sliderElements[0].lastChild.className = "img21"
         sliderElements[r].firstChild.className = "text"
         sliderElements[r].lastChild.className = "img1"
      }

   }
   return (
      <div className="Workers" id="child">
         <div className="container">
            <div className="content">
               <h1 className="Prime_Text">Faxrli o'quvchilarimiz</h1>
               {/*<h3 className="Secondary_Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eum!</h3>*/}
            </div>
            <div className="carusel" id="carusel">
               <div className="slider" id="sliderch">
                  {props.item.map((element, index) => {
                     return (
                        index === 0 ?
                           <div className="active12" key={index} onClick={() => { change(index) }}  >
                              <div className="text1">
                                 <span className="Data__Text">{element.job}</span>
                                 <h1 className="Text_32">{element.fullname}</h1>
                                 <h1 className="Text_26">{element.title}</h1>
                                 <button className="btn_prime" onClick={() => { xabar() }}>Ovoz berish</button>
                              </div>
                              <img className="img21" src={element.src} alt="" />
                           </div>
                           :
                           <div className="C_Card12" key={index} onClick={() => { change(index) }}>
                              <div className="text">
                                 <span className="Data__Text">{element.job}</span>
                                 <h1 className="Text_32">{element.fullname}</h1>
                                 <h1 className="Text_26">{element.title}</h1>
                                 <button className="btn_prime" onClick={() => { xabar() }}>Ovoz berish</button>
                              </div>
                              <img className="img1" src={element.src} alt="" />
                           </div>
                     )
                  })}
               </div>

               <button className="btn_prime" onClick={() => { place() }}><i className="fas fa-arrow-left"></i>Boshiga qaytish</button>
            </div>
         </div>
      </div>
   );
}
export default Workers;  