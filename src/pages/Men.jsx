
import { useState } from "react";

function Men({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "T-Shirts",
    "Shirts",
    "Jeans",
    "Trousers",
    "Jackets",
    "Formal Wear",
  ];

  const products = [
    {
      id: "m1",
      name: "Classic White T-Shirt",
      category: "T-Shirts",
      price: "$25",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700",
    },
    {
      id: "m2",
      name: "Casual Denim Shirt",
      category: "Shirts",
      price: "$38",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=700",
    },
    {
      id: "m3",
      name: "Slim Fit Blue Jeans",
      category: "Jeans",
      price: "$45",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=700",
    },
    {
      id: "m4",
      name: "Modern Casual Outfit",
      category: "T-Shirts",
      price: "$32",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700",
    },
    {
      id: "m5",
      name: "Premium Formal Shirt",
      category: "Formal Wear",
      price: "$42",
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=700",
    },
    {
      id: "m6",
      name: "Classic Black Jacket",
      category: "Jackets",
      price: "$68",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700",
    },
    {
      id: "m7",
      name: "Comfort Fit Trousers",
      category: "Trousers",
      price: "$40",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=700",
    },
    {
      id: "m8",
      name: "Premium Casual Shirt",
      category: "Shirts",
      price: "$36",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <main className="bg-white">

      {/* Men's Fashion Banner */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=1800"
          alt="Men's Fashion Collection"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">
          <p className="text-amber-300 tracking-[5px] text-sm font-semibold">
            MODERN STYLE COLLECTION
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-5">
            Men's Fashion
          </h1>

          <p className="text-gray-100 mt-5 max-w-lg leading-7">
            Upgrade your wardrobe with timeless essentials,
            modern designs and premium everyday fashion.
          </p>

          <a
            href="#men-products"
            className="bg-white text-gray-900 px-7 py-3 mt-8 w-fit text-sm font-semibold hover:bg-amber-700 hover:text-white transition"
          >
            SHOP COLLECTION
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-amber-800 tracking-[4px] text-sm font-semibold">
            EXPLORE MEN'S STYLE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Shop Men's Collection
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm border transition ${
                activeCategory === category
                  ? "bg-gray-900 text-white border-gray-900"
                  : "border-gray-300 text-gray-700 hover:border-amber-700 hover:text-amber-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Men's Products */}
      <section id="men-products" className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              {activeCategory === "All"
                ? "Latest Arrivals"
                : activeCategory}
            </h2>

            <p className="text-sm text-gray-500">
              {filteredProducts.length} Products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white group">

                <div className="h-[350px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs text-gray-500">
                    {product.category}
                  </p>

                  <h3 className="text-base font-semibold mt-2">
                    {product.name}
                  </h3>

                  <p className="text-amber-800 font-bold mt-3">
                    {product.price}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-5 bg-gray-900 text-white py-3 text-sm hover:bg-amber-800 transition"
                  >
                    ADD TO CART
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}

export default Men;
