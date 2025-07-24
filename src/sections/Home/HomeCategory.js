import { useNavigate } from "react-router-dom";
import { category } from "../../data/Homedata";

function Category({ category }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className=" top-[9%] left-[10%] absolute z-20">
          <h1 className="font-medium text-[20px]">{category.heading}</h1>
          <p>6 items</p>
        </div>

        <img className="z-0 hover:z-10 transition-transform duration-[1.2s] hover:scale-110" src={category.image} alt="electronics" />

        <button
        onClick={()=>navigate("/shop")}
        className="bottom-[10%] left-[10%] absolute bg-white py-[9px] px-5 rounded-full font-medium text-sm">
          Shop now
        </button>
      </div>
    </div>  
  );
}

export function Categorys() {
  return (
    <div>
      <div className="px-10">
        <h1 className="my-16 text-4xl">Shop By Category.</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
          {category.map((c, i) => (
            <Category key={i} category={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
