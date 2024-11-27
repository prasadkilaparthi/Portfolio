
const ContactForm = () => {
  return (
    <section className="bg-white py-20" id="contact">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16">
        {/* Contact Illustration */}
        {/* <img
          src={contactSvg}
          className="w-full h-64 object-cover"
          alt="Contact Illustration"
        /> */}

        {/* Form Section */}
        <article>
          <h2 className="text-3xl font-semibold text-gray-800">Contact Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I’d love to hear from you! Whether you have a question about my
            work, a project idea, or just want to say hi, feel free to drop a
            message.
          </p>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Add your email sending logic here
            }}
          >
            {/* Name Input */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default ContactForm;
