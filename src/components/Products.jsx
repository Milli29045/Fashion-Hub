
function Products({ searchTerm = "", addToCart }) {
  const products = [
    {
      id: 1,
      name: "Elegant Summer Dress",
      category: "Women",
      price: "$45",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700",
    },
    {
      id: 2,
      name: "Casual Men's Shirt",
      category: "Men",
      price: "$35",
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=700",
    },
    {
      id: 3,
      name: "Kids Casual Outfit",
      category: "Kids",
      price: "$28",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700",
    },
    {
      id: 4,
      name: "Women's Fashion Outfit",
      category: "Women",
      price: "$50",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700",
    },
  ];

const normalizedSearch = searchTerm.toLowerCase().trim();

const filteredProducts = products.filter((product) => {
  const searchableText = [
    product.name,
    product.category,
    product.price,
  ].join(" ").toLowerCase();

  return normalizedSearch === "" || searchableText.includes(normalizedSearch);
});

  return (
    <section id="products" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-amber-800 tracking-[4px] text-sm font-semibold">
            OUR SELECTION
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-4">
            Explore our latest fashion arrivals.
          </p>
        </div>

        {filteredProducts.length > 0 ? (
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
                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
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
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-800">
              No Products Found
            </h3>
            <p className="text-gray-500 mt-3">
              Try searching with another product name or category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Products;
