import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
 
  
    return (
    <div className="bg-dark text-center text-white p-2 m-2">
    <h1 className=''>Todos</h1>
      <Link to="/" className="text-white lead" > Home </Link>
      |<Link to="/about" className="text-white lead"> About </Link>
    </div>
  );
}
