import "./Style/App.css"
import Navbar from "./components/Navbar.js"
import About from "./components/About.js";
import Counter from "./components/Counter.js";
import News from "./components/News.js";
import Workers from "./components/Workers.js";
import Childreen from "./components/Childreen.js";
import Building from "./components/Building.js";
import Links from "./components/Links.js";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react"

function App() {
   const [item, setitem] = useState([
      { job: "O'qituvchi", fullname: "Rahimova Farog'at", title: "Biologiya fani o'qituvchisi.", src:"picture/Untitled-1.png" },
      { job: "O'qituvchi", fullname: "Azimova Dilrabo", title: "Biologiya fani o'qituvchisi.", src:"picture/Untitled-2.png" },
      { job: "O'qituvchi", fullname: "Karimova Dilfuza", title: "Kimyo fani o'qituvchisi.", src:"picture/Untitled-3.png" },
      { job: "O'qituvchi", fullname: "Shomurotova Lobarxon", title: "Ingiliz tili o'qituvchisi. C1 darajadagi sefr sertifikati.", src:"picture/Untitled-4.png" },
      { job: "O'qituvchi", fullname: "Eshboboyeva Dilrabo", title: "Boshlang'ich sinf o'qituvchisi", src:"picture/Untitled-5.png" },
      { job: "O'qituvchi", fullname: "Qodiyrova Maktuba", title: "Oliy toifali. Boshlang'ich sinf o'qituvchisi", src:"picture/Untitled-6.png" },
      { job: "O'qituvchi", fullname: "Bozorova Oysuluv", title: "Onatili va adabiyot fani o'qituvchisi.", src:"picture/Untitled-7.png" },
   ])
   const [item2, setitem2] = useState([
      { job: "O'quvchi", fullname: "Akilhonova Muslimaxon", title: "8-A sinf ingiliz tili fan olimpiyadasi g'olibi.", src:"picture/5 (1).png" },
      { job: "O'quvchi", fullname: "Qahramonova Nafisa", title: "6-A sinf fan olimpiyadasi qatnashchisi.", src:"picture/5 (2).png" },
      { job: "O'quvchi", fullname: "Usmonova Sakina", title: "sdfsdf fsdf", src:"picture/5 (3).png" },
      { job: "O'quvchi", fullname: "Boysariyev Asilbek", title: "9-B sinf Tarix fanidan olimpiyada g'olibi.", src:"picture/5 (4).png" },
      { job: "O'quvchi", fullname: "Ibrohimov Islomali", title: "8-B 2020-2021 yillar Kamalik bosh sardori.", src:"picture/5 (5).png" },
      { job: "O'quvchi", fullname: "Bashorotova Shohista", title: "Toshkent shaxar iftiqoq sardori.", src:"picture/5 (6).png" },
      { job: "O'quvchi", fullname: "Ziyodullayeva Fotima", title: "7-V Matimatika fani olimasi.", src:"picture/5 (7).png" },
      { job: "O'quvchi", fullname: "Ziyodullayeva Zuhra", title: "7-V Shahmat ustasi.", src:"picture/5 (8).png" },
      { job: "O'quvchi", fullname: "Hakimov Samoyiddin", title: "8-V Judo sport turi ustasi.", src:"picture/5 (9).png" },
   ])
  return (  
     <div className="App">
        <Navbar />
        <About/>
        <Counter />
        <News />
        <Workers item={ item }/>
        <Building />
        <Childreen item={ item2 }/>
        {/*<div className="C_yellow">
         <Counter />
        </div>*/}
        <Links />
        <Contact />
        <Footer />
    </div>
  );
}


export default App;  
