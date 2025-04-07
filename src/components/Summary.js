import React, { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import avatar from "../assets/avatar.jpg";
import pdf from "../assets/NguyenLamTruong-CV.pdf";
import logoQR from "../assets/logoQR.png";

const Summary = () => {
  const dataQR = "https://truong310100.github.io/portfolio/";
  const qrCodeRef = useRef(null); 

  useEffect(() => {
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
        color: "#000000",
        type: "dots",
      },
      backgroundOptions: {
        color: "#ffffff",
      },
      cornersSquareOptions: {
        type: "extra-rounded",
        color: "#000000",
      },
      cornersDotOptions: {
        type: "extra-rounded",
        color: "#000000",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 1,
      },
    });

    qrCode.append(qrCodeRef.current);
  }, []);

  return (
    <section id="summary" className="pt-20 px-6 py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 sticky top-16 py-2 bg-gray-100">SUMMARY</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-1/3 w-full flex flex-col items-center gap-2">
            <img
              src={avatar}
              alt="Nguyen Lam Truong"
              className="rounded-full w-64 h-64 object-cover shadow-md"
            />
            <h3 className="text-2xl font-bold">NGUYEN LAM TRUONG</h3>
            <p className="text-gray-700">FullStack Developer</p>
            <div>
              <p className="text-gray-500"><strong>Birthday:</strong> 25/01/2000</p>
              <p className="text-gray-500"><a href="tel:+84853714852"><strong>Phone:</strong> +84 853714 852</a></p>
              <p className="text-gray-500"><strong>Location:</strong> Ho Chi Minh City, Viet Nam</p>
            </div>
          </div>
          <div className="md:w-2/3 w-full">
            <p className="md:text-lg text-justify">
              Hi, I'm Nguyen Lam Truong, a dedicated FullStack Developer with 2 years of experience in JavaScript, specializing in backend development using React, Node.js, Express, and Sequelize, SQL, mySQL. Proficient in RESTful API design and microservice architecture. Skilled in optimizing code for readability, reusability, and scalability. Passionate about continuously learning and contributing to a dynamic, professional environment.
            </p>
            <div className="flex flex-col justify-center items-center gap-4 mt-6">
              <a
                href={pdf}
                download
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                📄 Download CV
              </a>
              <a ref={qrCodeRef} href={dataQR} target="_blank" className="mt-4 rounded-lg cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
