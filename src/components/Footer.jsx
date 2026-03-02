import { useState } from "react";
import { newsletterSchema } from "../lib/validations";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = newsletterSchema.safeParse({ email });

    if (!result.success) {
      setError(result.error.errors[0].message);
    } else {
      setError("");
      alert("Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-primary">
            ELECTRO
          </h2>
          <p className="mt-4 text-gray-600">
            Premium electronic products store.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Newsletter
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border p-3 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button className="bg-primary text-white px-6 py-2 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;