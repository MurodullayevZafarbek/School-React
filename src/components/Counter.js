import "../Style/App.css"
import "./Style/Counter.css"
function Counter() {
//   const [item, setitem] = useState([
//      { quvvati: 960, uquvchi_soni: "Palonchiyev pistonchi", title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, doloremque aperiam sapiente deleniti nesciunt." },
//]) 
  return (
     <div className="Counter">
        <div className="container">
           <section>
               <div className="content">
                  <h1>1251</h1>
                  <p>Quvvati</p>
                  </div>
                  <div className="content">
                     <h1>1244</h1>
                     <p>O'quvchi soni</p>
                  </div>
            </section>
           <section>
               <div className="content">
                     <h1>1991</h1>
                     <p>Qurigan yili</p>
                  </div>
                  <div className="content">
                     <h1>2020</h1>
                     <p>Qayta tamirlash</p>
                  </div>
            </section>
        </div>
    </div>
  );
}


export default Counter;  