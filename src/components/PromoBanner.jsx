const PromoBanner = () => {
  return (
    <section className="py-20 bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Weekend Discount
        </h2>
        <p className="text-gray-600 mb-6">
          Get up to 40% off on selected products.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default PromoBanner;