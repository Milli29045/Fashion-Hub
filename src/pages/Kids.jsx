
import { useState } from "react";

function Kids({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Boys",
    "Girls",
    "Baby",
    "Casual Wear",
    "Party Wear",
  ];

  const products = [
    {
      id: "k1",
      name: "Boys Casual Outfit",
      category: "Boys",
      price: "$25",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700",
    },
    {
      id: "k2",
      name: "Girls Summer Dress",
      category: "Girls",
      price: "$32",
      image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=700",
    },
    {
      id: "k3",
      name: "Baby Cotton Outfit",
      category: "Baby",
      price: "$22",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=700",
    },
    {
      id: "k4",
      name: "Kids Everyday Wear",
      category: "Casual Wear",
      price: "$28",
      image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=700",
    },
    {
      id: "k5",
      name: "Girls Party Dress",
      category: "Party Wear",
      price: "$45",
      image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=700",
    },
    {
      id: "k6",
      name: "Boys Summer Shirt",
      category: "Boys",
      price: "$24",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700",
    },
    {
      id: "k7",
      name: "Cute Baby Clothing",
      category: "Baby",
      price: "$26",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=700",
    },
    {
      id: "k8",
      name: "Kids Party Outfit",
      category: "Party Wear",
      price: "$39",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700",
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

      {/* Kids Fashion Banner */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=1800"
          alt="Kids Fashion Collection"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">
          <p className="text-amber-300 tracking-[5px] text-sm font-semibold">
            LITTLE STYLES, BIG SMILES
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-5">
            Kids Fashion
          </h1>

          <p className="text-gray-100 mt-5 max-w-lg leading-7">
            Explore adorable outfits, playful designs and
            comfortable clothing for your little ones.
          </p>

          <a
            href="#kids-products"
            className="bg-white text-gray-900 px-7 py-3 mt-8 w-fit text-sm font-semibold hover:bg-amber-700 hover:text-white transition"
          >
            SHOP COLLECTION
          </a>
        </div>
      </section>

      {/* Kids Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-amber-800 tracking-[4px] text-sm font-semibold">
            EXPLORE LITTLE STYLES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Shop Kids Collection
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

      {/* Kids Products */}
      <section id="kids-products" className="bg-gray-50 py-16 px-6">
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

export default Kids;
