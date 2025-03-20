
import { useState } from "react"
import {Link} from "react-router-dom"
import {Menu, Router, X}from "lucide-react"
const Navbar =()=>{
    const [isOpen, setIsOpen]=useState(false);
    return(
        <nav className="bg-green-700 text-white p-4 shadow-md sticky top-0 z-50">
            <div>
                <Link to="/Home">VERDANT</Link>
                <button className="md:hidden">{isOpen ? <X size={28}/>:<Menu size={28}/>}</button>
                <div className={`md:flex md:gap-6 absolute md:static ${isOpen?"block":"hidden"}`}>
                 <Link to="/Home" className="block md:inline-block">Home</Link>
                 <Link to="/Forum" className="block md:inline-block">Forum</Link>
                 <Link to="/Articles" className="block md:inline-block">Articles</Link>
                 <Link to="/Login" className="block md:inline-block">Login</Link>
                </div>
            </div>
        </nav> )
    };
   
        
   

export default Navbar;