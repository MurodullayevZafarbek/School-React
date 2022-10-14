import "../Style/App.css"
import "./Style/About.css"
function About() {
   const Capital = {
      textTransform: "uppercase"
   }
  return (
     <div className="About" id="asos">
        <div className="container">
           <div className="content">
              <h1 className="Prime_Text" style={Capital}>Yangi O'zbekiston maktab ostonasidan boshlanadi</h1>
              {/*<h3  className="Secondary_Text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, doloremque aperiam sapiente deleniti nesciunt necessitatibus expedita ex unde architecto dolores vel quod dolor facere quis quasi porro earum deserunt sed.</h3>*/}
           </div>
           <div className="picture_1">
              <img src="Group.png" alt="" />
           </div>
        </div>
    </div>
  );  
}


export default About;  