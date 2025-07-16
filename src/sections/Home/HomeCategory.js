import { category } from "../../data/Homedata";

function Category({ category }) {
  return (
    <div>
      <div className="relative">
        <div className=" top-[9%] left-[10%] absolute">
          <h1 className="font-medium text-[20px]">{category.heading}</h1>
          <p>6 items</p>
        </div>

        <img src={category.image} alt="electronics" />

        <button className="bottom-[10%] left-[10%] absolute bg-white py-[9px] px-5 rounded-full font-medium text-sm">
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
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-7">
          {category.map((c, i) => (
            <Category key={i} category={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
