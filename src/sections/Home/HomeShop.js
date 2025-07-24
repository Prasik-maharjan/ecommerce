import { useNavigate } from "react-router-dom";

export function Shop() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="bottom-[75%] sm:bottom-[20%] left-[10%] absolute">
        <h1 className="hidden md:block font-bold">
          UP TO 40% OFF CHARGERS AND MORE.
        </h1>
        <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
          Savings for <br></br> dads and grads.
        </p>
        <button
        onClick={()=>navigate("/shop")}
         className="flex gap-4 font-bold items-center py-2 px-4 bg-black text-white rounded-full my-7">
          Shop collection <p className="font-bold sm:text-xl">{">"}</p>
        </button>
      </div>
      <div className="pt-10">
        <img
          src="https://ecomus.magentech.com/pub/media/wysiwyg/slidershow/home-6/slider-1.jpg"
          alt="mobile"
        />
      </div>
      <div className="whitespace-nowrap overflow-hidden block  bg-[#93F859]">
        <div className=" w-full">
          <div className="flex gap-x-10 text-xs py-6 font-bold animate-marquee w-max">
            <p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
            <p>FREE SHIPPING AND RETURNS</p>
            <p>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
            <p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
            <p>FREE SHIPPING AND RETURNS</p>
            <p>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
