import { Link} from "react-router-dom";


export function New(){
    return(
    <div className="bg-white z-10 w-40 h-[10rem]">
        <div className="flex flex-col">
              <Link to="/home" className={"/home"}>
              Home
            </Link>
            <Link to="/about" className={"/about"}>
              About
            </Link>
            <Link to="/shop" className={"/shop"}>
              Shop
            </Link>
            <Link to="/blog" className={"/blog"}>
              Blog
            </Link>
        </div>
    </div>
);
};