import { product } from "../../data/Shopdata";

function Product({ product }) {
  return (
    <div>
      <div>
        <img className="bg-gray-200" src={product.imag} alt="abc" />
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
      <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-7">
        {product.map((a, i) => (
          <Product key={i} product={a} />
        ))}
      </div>
    </div>
  );
}
