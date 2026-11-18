
import { useState } from "react";

function Women({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Dresses",
    "Tops",
    "Jeans",
    "Eastern Wear",
    "Winter Wear",
  ];

 const products = [
  {
    id: "w1",
    name: "Elegant Floral Dress",
    category: "Dresses",
    price: "$45",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700",
  },
  {
    id: "w2",
    name: "Classic White Top",
    category: "Tops",
    price: "$28",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=700",
  },
  {
    id: "w3",
    name: "Blue Denim Jeans",
    category: "Jeans",
    price: "$39",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=700",
  },
  {
    id: "w4",
    name: "Modern Summer Outfit",
    category: "Dresses",
    price: "$52",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700",
  },
  {
    id: "w5",
    name: "Casual Fashion Shirt",
    category: "Tops",
    price: "$32",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
  },
  {
    id: "w6",
    name: "Elegant Winter Coat",
    category: "Winter Wear",
    price: "$75",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=700",
  },
  {
    id: "w7",
    name: "Traditional Style Outfit",
    category: "Eastern Wear",
    price: "$58",
image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700",
  },
  {
    id: "w8",
    name: "Trendy Denim Outfit",
    category: "Jeans",
    price: "$42",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=700",
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

      {/* Women Banner */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800"
          alt="Women's Fashion Collection"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">
          <p className="text-amber-300 tracking-[5px] text-sm font-semibold">
            NEW SEASON COLLECTION
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-5">
            Women's Fashion
          </h1>

          <p className="text-gray-100 mt-5 max-w-lg leading-7">
            Discover beautiful styles, timeless outfits and
            the latest fashion trends made for every occasion.
          </p>

          <a
            href="#women-products"
            className="bg-white text-gray-900 px-7 py-3 mt-8 w-fit text-sm font-semibold hover:bg-amber-700 hover:text-white transition"
          >
            SHOP COLLECTION
          </a>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-amber-800 tracking-[4px] text-sm font-semibold">
            FIND YOUR STYLE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Shop Women's Collection
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

      {/* Products */}
      <section
        id="women-products"
        className="bg-gray-50 py-16 px-6"
      >
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
              <div
                key={product.id}
                className="bg-white group"
              >
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

export default Women;
