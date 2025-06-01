import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const { t } = useTranslation();
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
          alert(t('contact.form.successMessage'));
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert(t('contact.form.errorMessage'));
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
    <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 sticky top-16 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          {t('contact.title')}
        </h2>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://www.facebook.com/Nguyenlamtruong/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transform hover:scale-110 transition-all duration-300"
            aria-label={t('contact.social.facebook')}
          >
            <FaFacebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/nltruong3101/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transform hover:scale-110 transition-all duration-300"
            aria-label={t('contact.social.instagram')}
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="mailto:truong310100@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transform hover:scale-110 transition-all duration-300"
            aria-label={t('contact.social.email')}
          >
            <FaEnvelope size={32} />
          </a>
          <a
            href="https://github.com/truong310100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transform hover:scale-110 transition-all duration-300"
            aria-label={t('contact.social.github')}
          >
            <FaGithub size={32} />
          </a>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white transition-colors duration-300">
            {t('contact.form.title')}
          </h3>
          
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                {t('contact.form.subject')}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('contact.form.subjectPlaceholder')}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                required
              />
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                {t('contact.form.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.messagePlaceholder')}
                rows="6"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg"
              >
                {t('contact.form.send')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
