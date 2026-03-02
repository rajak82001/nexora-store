import { useEffect, useRef } from "react";
import featuredProducts from "../data/featuredProducts.json";
import ProductCard from "./ProductCard";
import { revealUp } from "../animations/revealAnimation";

const FeaturedProducts = () => {
  const ref = useRef([]);

  useEffect(() => {
    revealUp(ref.current);
  }, []);

  return (
    <section className="py-16 bg-beige">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            Featured Products
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (ref.current[index] = el)}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;