import {Link, NavLink, Outlet} from "react-router-dom";
import logo from "../../assets/react.svg";
export default function Gallary(){
  return (
    <div className="gallary about">

      <img src={logo} alt="logo" className="w-20 h-20" onClick={ () => {console.log("logo clicked")}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-lg font-bold">
          <h1>Gallary Component</h1>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="" className="hover:text-blue-200">Web</Link></li>
          <li><Link to="mobile" className="hover:text-blue-200">Mobile</Link></li>
        </ul>
      </div>

     <div className="container">
       <Outlet></Outlet>
     </div>

    </div>
  );
}