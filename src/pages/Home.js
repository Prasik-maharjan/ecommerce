import { Shop } from "../sections/Home/HomeShop";
import { Categorys } from "../sections/Home/HomeCategory";
import { Discount } from "../sections/Home/HomeDiscount";
import { Accessory } from "../sections/Home/HomeAccessory";
import { Products } from "../sections/Home/HomeProduct";
import { Client } from "../sections/Home/HomeClient";
import { Blogs } from "../sections/Home/HomeBlog";
import { Services } from "../sections/Home/HomeServices";


export function Home() {
  return (
    <div>
      <div>
        <Shop />
        <Categorys />
        <Discount />
        <Accessory />
        <Products />
        <Client />
        <Blogs />
        <Services />
      </div>
    </div>
  );
}
