import React, { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import avatar from "../assets/avatar.jpg";
import pdf from "../assets/NguyenLamTruong-CV.pdf";
import logoQR from "../assets/logoQR.png";

const Summary = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const dataQR = "https://truong310100.github.io/portfolio/";
  const qrCodeRef = useRef(null); 

  useEffect(() => {
    // Clear previous QR code
    if (qrCodeRef.current) {
      qrCodeRef.current.innerHTML = '';
    }

    const qrCode = new QRCodeStyling({
      width: 150,
      height: 150,
      type: "svg",
      shape: "square",
      // data: window.location.href,
      data: dataQR,
      image: logoQR, 
      margin: 1,
      dotsOptions: {
        color: isDark ? "#F3F4F6" : "#111827",
        type: "dots",
      },
      backgroundOptions: {
        color: isDark ? "#111827" : "#F3F4F6",
      },
      cornersSquareOptions: {
        type: "extra-rounded",
        color: isDark ? "#F3F4F6" : "#111827",
      },
      cornersDotOptions: {
        type: "extra-rounded",
        color: isDark ? "#F3F4F6" : "#111827",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 1,
      },
    });

    if (qrCodeRef.current) {
      qrCode.append(qrCodeRef.current);
    }
  }, [isDark]);

  return (
    <section id="summary" className="pt-20 px-6 py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 sticky top-16 py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">{t('summary.title')}</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-1/3 w-full flex flex-col items-center gap-2">
            <img
              src={avatar}
              alt="Nguyen Lam Truong"
              className="rounded-full w-64 h-64 object-cover shadow-lg dark:shadow-gray-700 transition-shadow duration-300"
            />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">NGUYEN LAM TRUONG</h3>
            <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{t('summary.role')}</p>
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300"><strong>{t('summary.birthday')}:</strong> 25/01/2000</p>
              <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300"><a href="tel:+84853714852" className="hover:text-blue-600 dark:hover:text-blue-400"><strong>{t('summary.phone')}:</strong> +84 853714 852</a></p>
              <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300"><strong>{t('summary.location')}:</strong> {t('summary.address')}</p>
            </div>
          </div>
          <div className="md:w-2/3 w-full">
            <p className="md:text-lg text-justify text-gray-800 dark:text-gray-200 leading-relaxed transition-colors duration-300">
              {t('summary.description')}
            </p>
            <div className="flex flex-col justify-center items-center gap-4 mt-6">
              <a
                href={pdf}
                download
                className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                📄 {t('summary.downloadCV')}
              </a>
              <a ref={qrCodeRef} href={dataQR} target="_blank" className="mt-4 rounded-lg cursor-pointer transition-transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
