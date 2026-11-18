
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="bg-white">

      {/* Contact Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800"
          alt="Fashion Hub Store"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-5">
          <p className="text-amber-300 tracking-[5px] text-sm font-semibold">
            WE ARE HERE TO HELP
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Contact Us
          </h1>

          <p className="text-gray-200 mt-4">
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <p className="text-amber-800 tracking-[4px] text-sm font-semibold">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Let's Talk About Fashion
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Have a question about an order, product or our collection?
            Send us a message and our team will be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">

            <div className="flex gap-5 p-6 bg-gray-50">
              <div className="bg-amber-100 p-4 h-fit">
                <Mail className="text-amber-800" size={24} />
              </div>

              <div>
                <h3 className="font-bold text-lg">Email Support</h3>
                <p className="text-gray-500 text-sm mt-2">
                  For product and order-related questions, send us a message.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-gray-50">
              <div className="bg-amber-100 p-4 h-fit">
                <Phone className="text-amber-800" size={24} />
              </div>

              <div>
                <h3 className="font-bold text-lg">Customer Care</h3>
                <p className="text-gray-500 text-sm mt-2">
                  We are here to help with your shopping experience.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-gray-50">
              <div className="bg-amber-100 p-4 h-fit">
                <MapPin className="text-amber-800" size={24} />
              </div>

              <div>
                <h3 className="font-bold text-lg">Our Store</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Visit our store location details when available.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-gray-50">
              <div className="bg-amber-100 p-4 h-fit">
                <Clock className="text-amber-800" size={24} />
              </div>

              <div>
                <h3 className="font-bold text-lg">Support Hours</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Contact us anytime through the message form.
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-50 p-7 md:p-10">

            <h2 className="text-2xl font-bold mb-2">
              Send Us a Message
            </h2>

            <p className="text-gray-500 text-sm mb-8">
              Fill out the form below to get in touch with us.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-amber-700"
                  />
                </div>

              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="6"
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 text-sm font-semibold hover:bg-amber-800 transition"
              >
                SEND MESSAGE
                <Send size={17} />
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;
