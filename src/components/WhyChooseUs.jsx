
function WhyChooseUs() {
  const features = [
    {
      icon: "✦",
      title: "Premium Quality",
      description: "Enjoy carefully selected fabrics and quality clothing for everyone.",
    },
    {
      icon: "♡",
      title: "Latest Fashion",
      description: "Discover modern styles and the latest trends for every season.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Get your favorite fashion items delivered right to your doorstep.",
    },
    {
      icon: "↻",
      title: "Easy Returns",
      description: "Enjoy a simple and convenient shopping experience.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-amber-800 tracking-[4px] text-sm font-semibold">
            THE FASHION HUB EXPERIENCE
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Why Choose Us?
          </h2>

          <p className="text-gray-500 mt-4">
            Making your fashion shopping simple and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 border border-gray-100 hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl text-amber-700 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500 leading-6 mt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
