import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {



    return (
        <div>
        <div>Logo</div>
        <div>
           
           //Link fetches our pages before they are clicked
            <Links/>
            
            
        </div>
        </div>
    )
}

export default Navbar;