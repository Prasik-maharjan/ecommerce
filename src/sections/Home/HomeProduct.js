import { product } from "../../data/Homedata";

function Product({ product }) {
  return (
    <div className="relative border-[1px] rounded-xl">
      <div>
        <img src={product.imag} alt="abc" />
      </div>
      <div className="p-2 pb-4">
        <p>{product.detail}</p>
        <p className="font-bold text-sm">{product.price}</p>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <div className="px-10">
        <div className="py-16">
          <h1 className="text-4xl">Trending Product</h1>
        </div>
        <div className="grid  md:grid-cols-3 grid-cols-2  gap-7">
          {product.map((a, i) => (
            <Product key={i} product={a} />
          ))}
        </div>
      </div>
    </div>
  );
}
  