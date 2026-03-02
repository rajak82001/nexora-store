import newArrivals from "../data/newArrivals.json";

const NewArrivals = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        <div 
          className="p-10 rounded-lg flex flex-col justify-center bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Samsung Galaxy Note20 Ultra 5G
            </h2>
            <button className="bg-primary text-black font-bold bg-white px-6 py-3 rounded-lg w-fit hover:opacity-90 transition-opacity">
              Shop Now
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {newArrivals.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 rounded-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150';
                }}
              />

              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <div className="text-yellow-400">
                  {"★".repeat(item.rating)}
                </div>
                <p className="font-bold text-primary">
                  ${item.price}.00
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;