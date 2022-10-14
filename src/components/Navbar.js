import "./Style/Navbar.css"
import "./Style/Navbar.css"
import $ from "jquery"
function Navbar() {
   $(function () {
      function scrollTop(pot) {
         $("html,body").animate({
            scrollTop: pot-120
         }
            , "10000"
         );
      }
      
      $("#home a").click(function () {
         let attr = $(this).attr("href");
         let d = $(attr).offset().top;
         scrollTop(d);
      });
   });
   function myFunction() {
      var element = document.getElementById("myDIV");
      element.classList.toggle("mystyle");
      const navList = document.querySelector(".nav_list")
      navList.style.cssText = `
      transform:translateX(-100%)
      `
   }
   function close() {
      const navList = document.querySelector(".nav_list")
      navList.style.cssText = `
      transform:translateX(0%)
      `
   }
  return (
     <div className="Navbar">
        <div className="container" id="home">
           <a href="#asos" onClick={() => myFunction()}>
           <div className="logo">
              <div className="svg">
              </div>
              <span>295-Maktab</span>
              </div>
              </a>
            <ul className="nav_list"  id="myDIV">
               <li><a href="#asos" onClick={() => myFunction()}>Asosiy</a></li>
               <li><a href="#yangi"onClick={() => myFunction()}>Yangilikalar</a></li>
               <li><a href="#about_us"onClick={() => myFunction()}>Biz haqimizda</a></li>
               <li><a href="#binolar"onClick={() => myFunction()}>Binolar</a></li>
               <li><a href="#child"onClick={() => myFunction()}>O'quvchilar</a></li>
           </ul>
           <a href="#contact">
           <button className="btn_prime">Biz bilan bog`laning</button>
           </a>
           <i className="fas fa-bars" onClick={() => close()}></i>
        </div>
    </div>
  );
}


export default Navbar;  
