import { Products } from "../sections/Shop/ShopProducts";
import { Categories } from "../sections/Shop/ShopCategory";

export function Shop() {
  return (
    <div className=" pt-16">
      <div className="flex flex-col text-center py-20 bg-pink-50">
        <h1 className="text-4xl">Electronics</h1>
        <p>Home / Electronics</p>
      </div>
      
      <div className="grid grid-cols-3 px-10 py-20 w-full">
        <div className="col-span-1 lg:block hidden">
          <Categories />
        </div>
        <div className="lg:col-span-2 col-span-full">
          <Products />
        </div>
      </div>
    </div>
  );
}