export function Discount(){
    return(<div>
          <div className="relative p-10">
        <div className="overflow-hidden rounded-2xl">
          <img
            className="z-0 hover:z-10 transition-transform duration-[1.2s] hover:scale-110"
            src="https://ecomus.magentech.com/pub/media/wysiwyg/banner/electronics-1.jpg"
            alt="discount"
          />
        </div>
        <div className="absolute top-[33%] left-[10%] text-white ">
          <p className="font-bold text-sm">SALE UP TO 30% OFF TODAY</p>
          <h1 className="text-[30 px] sm:text-[41px]">Best Deals Discounts</h1>
          <p className="text-sm sm:text-xl ">Fast wireless charging on-the-go</p>
          <button className="text-black py-[9px] px-5 rounded-full font-bold text-sm my-5 bg-[#93F859]">
            Shop collection
          </button>
        </div>
      </div>
        </div>
        )
}