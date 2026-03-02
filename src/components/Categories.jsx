import { useEffect, useRef } from "react";
import categories from "../data/categories.json";
import { revealUp } from "../animations/revealAnimation";

const Categories = () => {
  const sectionRef = useRef([]);

  useEffect(() => {
    revealUp(sectionRef.current);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              ref={(el) => (sectionRef.current[index] = el)}
              className="bg-gray-50 p-6 text-center rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl">{cat.icon}</div>
              <p className="mt-3 font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;