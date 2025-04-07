import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi email thông qua EmailJS
    emailjs
      .send(
        "service_k28dwf8", 
        "template_b13v4jg",
        formData,
        "hPqBp9kNMw6fX0xfr",
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("There was an error sending your message. Please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 sticky top-16 py-2 bg-white">CONTACT</h2>

        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://www.facebook.com/Nguyenlamtruong/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/nltruong3101/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="mailto:truong310100@gmail.com"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaEnvelope size={30} />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 border border-blue-300 rounded-md outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 border border-blue-300 rounded-md outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 border border-blue-300 rounded-md outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-blue-300 rounded-md outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
