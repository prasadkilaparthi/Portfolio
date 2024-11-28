import emailjs from "emailjs-com";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactme from "../assets/contactme.png";
import VisitorCounter from "./Counter";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      toast.info("Sending message...");
      const response = await emailjs.send(
        "service_t8vb3xf",
        "template_cu0wnq1",
        {
          to_name: "Prasad",
          from_name: formData.name,
          message: formData.message,
          reply_to: formData.email,
        },
        "mro7Vnw2ft_hYJu-Y"
      );
      if (response.status === 200) {
        toast.success("Message sent to Prasad!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("Message failed to send. Please try again.");
    }
  };

  return (
    <section className="bg-indigo-200 py-20" id="contact">
      <ToastContainer
        autoClose={1000}
        position="top-right"
        hideProgressBar
        theme="dark"
      />
      <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Form Section */}
        <article className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">Contact Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I’d love to hear from you! Whether you have a question about my
            work, a project idea, or just want to say hi, feel free to drop a
            message.
          </p>
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </article>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={contactme}
            alt="Contact Me"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <VisitorCounter />
    </section>
  );
};

export default Contact;
