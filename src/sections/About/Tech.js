import { items } from "../../data/Aboutdata.js";

function Items({ items }) {
  return (
    <div className="flex-1 overflow-hidden">
      <img className="z-0 hover:z-10 transition-transform duration-[1.2s] hover:scale-110" src={items.imag} alt="items"/>
    </div>
  );
}

export function Tech() {
  return (
    <div className="my-32">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl">Shop Tech</h1>
        <p className="py-7">Inspire and let yourself be inspired, from one unique tech to another.</p>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 py-10">
        {items.map((e, i) => (
          <Items key={i} items={e} />
        ))}
      </div>
    </div>
  );
}
