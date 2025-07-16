import { design } from "../../data/Aboutdata.js";

function Design({ design }) {
  return (
    <div className="flex flex-col flex-1 items-center px-7">
      <img className="w-16 rounded-full border-black border-[1px]" src={design.svg} alt=""/>
      <h1 className="text-2xl font-semibold py-3">{design.heading}</h1>
      <p className="text-sm text-center">{design.descr}</p>
    </div>
  );
}

export function Quality() {
  return (
    <div className="bg-[#fbf7f0] py-10 rounded-xl my-20 md:my-32">
      <div className="flex flex-col items-center py-10">
        <h1 className="text-4xl font-semibold pb-5">Quality is our priority</h1>
        <p className="text-lg text-center w-fit  sm:w-[38rem]">
          Our talented stylists have put together outfits that are perfect for
          the season. They've variety of ways to inspire your next
          fashion-forward look.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-10">
        {design.map((d, i) => (
          <Design key={i} design={d} />
        ))}
      </div>
    </div>
  );
}
