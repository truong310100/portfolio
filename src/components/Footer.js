import React, { useState, useEffect } from "react";

const Footer = () => {

  return (
    <footer className="bg-blue-600 text-white p-2 w-full bottom-0 left-0">
      <div className="text-center">
        Nguyen Lam Truong &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
