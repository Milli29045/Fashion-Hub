
function Cart({ cartItems }) {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-lg">
            Your cart is currently empty.
          </p>
        ) : (
          <div className="space-y-5">
            {cartItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="bg-white p-5 flex items-center gap-6 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-28 object-cover"
                />

                <div>
                  <h2 className="font-semibold text-lg">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 mt-2">
                    {item.category}
                  </p>
                  <p className="text-amber-800 font-bold mt-2">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
