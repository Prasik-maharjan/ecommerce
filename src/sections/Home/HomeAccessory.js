import { useNavigate } from "react-router-dom";
import { accessories } from "../../data/Homedata";

function Accessories({ accessories }) {
  const navigate =useNavigate();
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img
          className="z-0 hover:z-10 transition-transform duration-[1.2s] hover:scale-110"
          src={accessories.img}
          alt="abc"
        />
      </div>
      <div className="absolute bottom-[1%] right-[27%] flex flex-col items-center">
        <h1 className="font-bold text-sm my-1">{accessories.info}</h1>
        <p className=" text-[30px]  lg:text-[40px] ">{accessories.name}</p>
        <button
        onClick={()=>navigate("/shop")}
        className="text-black py-[9px] px-5 rounded-full font-bold my-5 text-sm bg-[#93F859]">
          Shop now
        </button>
      </div>
    </div>
  );
}

export function Accessory(){
    return(
        <div> <div className="grid md:grid-cols-2 grid-cols-1 gap-7 px-10 mb-5">
                {accessories.map((a, i) => (
                  <Accessories key={i} accessories={a} />
                ))}
              </div>
        </div>
    )
}