import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { sale, shipping,gallary } from "../../data/Shopdata";
// import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
// import { PiXLogoLight } from "react-icons/pi";

function SaleProduct({ sale }) {
  return (
    <div className="flex gap-3">
      <div>
        <img className="w-28" src={sale.image} alt="" />
      </div>
      <div>
        <h1>{sale.det}</h1>
        <p className="font-bold text-sm">{sale.pricee}</p>
      </div>
    </div>
  );
}

function Shipping({ shipping }) {
  return (
    <div className="flex gap-5">
      <div className="border-[1px] w-fit p-3 rounded-full hover:border-black">
        <img src={shipping.service} alt="" />
      </div>
      <div>
        <h1 className="font-semibold">{shipping.head}</h1>
        <p className="text-sm">{shipping.par}</p>
      </div>
    </div>    
  );
}

function Gallary({gallary}){
  return(
    <div className="w-24">
      <img className="bg-blue-50" src={gallary.gal} alt=""/>
    </div>
  )
}

export function Categories() {
  return (
    <div>
      <Accordion
        preExpanded={["Category", "Color", "Sale Product", "Shipping","Gallary"]}
      >
        <AccordionItem uuid={"Category"}>
          <AccordionItemHeading>
            <AccordionItemButton className="text-xl font-semibold">
              <div>Category</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="flex flex-col gap-2 items-start text-sm font-semibold my-4">
              <button>Screen Protector</button>
              <button>Headphones</button>
              <button>Cables</button>
              <button>Adapter</button>
              <button>Docks and hubs</button>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <div
          role="list"
          className="divide-y divide-gray-200 border-t border-gray-200 w-[350px]"
        ></div>

        <AccordionItem uuid={"Color"}>
          <AccordionItemHeading>
            <AccordionItemButton className="text-xl font-semibold">
              <div>Color</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="gap-2 flex my-4">
              <button className="bg-black rounded-full border-[2px] h-7 w-7 hover:border-black"></button>
              <button className="bg-blue-500 rounded-full border-[2px] h-7 w-7 hover:border-blue-500"></button>
              <button className="bg-[#945454] rounded-full border-[2px] h-7 w-7 hover:border-[#945454]"></button>
              <button className="bg-green-500 rounded-full border-[2px] h-7 w-7 hover:border-green-500"></button>
              <button className="bg-orange-500 rounded-full border-[2px] h-7 w-7 hover:border-orange-500"></button>
              <button className="bg-white rounded-full border-[2px] h-7 w-7 hover:border-black"></button>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <div
          role="list"
          className="divide-y divide-gray-200 border-t border-gray-200 w-[350px]"
        ></div>

        <AccordionItem uuid={"Sale Product"}>
          <AccordionItemHeading>
            <AccordionItemButton className="text-xl font-semibold">
              <div className="py-3">Sale Product</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="gap-3 pb-5 flex flex-col">
              {sale.map((s, i) => (
                <SaleProduct key={i} sale={s} />
              ))}
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <div
          role="list"
          className="divide-y divide-gray-200 border-t border-gray-200 w-[350px]"
        ></div>

        <AccordionItem uuid={"Shipping"}>
          <AccordionItemHeading>
            <AccordionItemButton className="text-xl font-semibold">
              <div className="py-3">Shipping & Delivery</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="gap-5 pb-5 flex flex-col">
              {shipping.map((b, i) => (
                <Shipping key={i} shipping={b} />
              ))}
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <div
          role="list"
          className="divide-y divide-gray-200 border-t border-gray-200 w-[350px]"
        ></div>

      <AccordionItem uuid={"Gallary"}>
          <AccordionItemHeading>
            <AccordionItemButton className="text-xl font-semibold">
              <div className="py-3">Gallary</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="gap-2 pb-5 grid grid-cols-3">
              {gallary.map((g, i) => (
                <Gallary key={i} gallary={g} />
              ))}
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <div
          role="list"
          className="divide-y divide-gray-200 border-t border-gray-200 w-[350px]"
        ></div>

         <AccordionItem uuid={"Follow"}>
          <AccordionItemHeading>
            <AccordionItemButton className="text-xl font-semibold">
              <div className="py-3">Follow Us</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="gap-3 pb-5 flex">
              {/* <div className="text-blue-500 border-[1px] p-2 rounded-full hover:text-white hover:bg-blue-500 "><CiFacebook /></div>
        <div className="text-blue-500 border-[1px] p-2 rounded-full hover:text-white hover:bg-blue-500"><CiInstagram /></div>
        <div className="text-blue-500 border-[1px] p-2 rounded-full hover:text-white hover:bg-blue-500"><PiXLogoLight /></div>
        <div className="text-blue-500 border-[1px] p-2 rounded-full hover:text-white hover:bg-blue-500"><CiLinkedin /></div> */}
            </div>
          </AccordionItemPanel>
        </AccordionItem>

      </Accordion>
    </div>
  );
}
