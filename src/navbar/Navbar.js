import { Link } from "react-router-dom";
import { useState } from "react";
import { New } from "../component/common/New";

export const Navbar = () => {
  const [showNew, setShowNew] = useState(false);

  return (
    <div className="relative z-10">
      <div className="w-full fixed top-0 bg-white shadow-md p-3 z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-5">

            <button
              onClick={() => setShowNew(true)}
              className="block sm:hidden"
            >
              <img
                className="w-10"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAACsCAMAAADWrWn/AAAADFBMVEX///9hYWHh4eF/f38Ty1YyAAAAcklEQVR4nO3aMQ6AQAwDwQP+/2dKrqCgiGRhzfxgO0vJWgAAAAAAAAAAAAAAAD92DUl37I4h6Y6dJk0pmjSlnEPSHQAAvGvcsJo0pWjSlNLYBADAo/FW07hhNWlK0aQppfHXDQAAAAAAAAAAAAAAAIDPbjrYCQGLtoUSAAAAAElFTkSuQmCC"
                alt="Menu"
              />
            </button>

            <p className="font-bold text-3xl text-center sm:text-center">
              ecomus
            </p>
          </div>

          <div className="hidden sm:flex gap-7 font-semibold">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </div>

      
      {showNew && (
        <div className="fixed h-full bg-white  z-20 flex justify-center text-xl">
          <div className="bg-white p-5 rounded shadow-lg relative">
             <p className="font-bold text-3xl text-center sm:text-center">
              ecomus
            </p>
            <button
              className="absolute top-3 right-3 text-black text-xl"
              onClick={() => setShowNew(false)}
            >
              ×
            </button>
            <New />
          </div>
        </div>
      )}
    </div>
  );
};
