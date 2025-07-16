import { service } from "../../data/Homedata";

function Service({ service }) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-white  rounded-full h-16 w-16 flex items-center justify-center">
        <svg
          className="w-8 h-8 flex justify-center items-center"
          xmlns="://www.w3.org/2000/svg"
        >http
          <path d={service.path}></path>
        </svg>
      </div>
      <div>
        <h1 className="font-semibold text-lg">{service.name}</h1>
        <p className="text-sm">{service.desc}</p>
      </div>
    </div>
  );
}


export function Services(){
    return(
        <div>
<div className="p-10 mt-16 bg-[#f5f5f5] ">
        <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7">
          {service.map((s, i) => (
            <Service key={i} service={s} />
          ))}
        </div>
      </div>
    </div>
  );
}