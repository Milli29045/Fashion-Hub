
function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Ahmed",
      rating: 5,
      review: "Beautiful collection and excellent fabric quality. I absolutely love my outfit!",
    },
    {
      id: 2,
      name: "Ali Khan",
      rating: 5,
      review: "Great shopping experience. The clothing quality and designs are impressive.",
    },
    {
      id: 3,
      name: "Ayesha Malik",
      rating: 4,
      review: "Amazing styles and comfortable outfits. I would definitely shop again.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-amber-800 tracking-[4px] text-sm font-semibold">
            CUSTOMER FEEDBACK
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-4">
            Real shopping experiences from our happy customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="flex gap-1 text-amber-500 text-xl">
                {"★".repeat(item.rating)}
                <span className="text-gray-300">
                  {"★".repeat(5 - item.rating)}
                </span>
              </div>

              <p className="text-gray-600 leading-7 mt-6">
                "{item.review}"
              </p>

              <div className="border-t border-gray-100 mt-7 pt-5">
                <h3 className="font-bold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  Verified Customer
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
