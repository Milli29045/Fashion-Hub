
function Collections() {
  const collections = [
    {
      id: "women",
      title: "Women",
      subtitle: "Discover Elegant Styles",
      image:
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900",
    },
    {
      id: "men",
      title: "Men",
      subtitle: "Explore Modern Fashion",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900",
    },
    {
      id: "kids",
      title: "Kids",
      subtitle: "Little Styles, Big Smiles",
      image:
        "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=900",
    },
  ];

  return (
<section id="collections" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-amber-800 tracking-[4px] text-sm font-semibold">
            EXPLORE OUR COLLECTIONS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Shop By Category
          </h2>

          <p className="text-gray-500 mt-4">
            Discover the perfect style for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

          {collections.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="relative h-[480px] overflow-hidden group cursor-pointer"
            >

              <img
                src={item.image}
                alt={`${item.title} Fashion Collection`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition duration-500"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 text-white">

               <h3 className="text-2xl md:text-3xl font-bold">
                  {item.title}
                </h3>

               <p className="mt-1 text-xs md:text-sm tracking-wide">
                  {item.subtitle}
                </p>

                <button className="mt-4 border border-white px-5 py-2 text-xs tracking-wider hover:bg-white hover:text-black transition duration-300">
                  EXPLORE COLLECTION
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Collections;
