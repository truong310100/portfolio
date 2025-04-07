import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Workings from "./components/Workings";
import Additional from "./components/Additional";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Helmet>
        <title>Nguyen Lam Truong</title>
        <meta name="description" content="Nguyen Lam Truong's Portfolio" />
        <meta property="og:title" content="Nguyen Lam Truong" />
        <meta property="og:description" content="Nguyen Lam Truong's Portfolio" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nguyen Lam Truong" />
        <meta name="twitter:description" content="Nguyen Lam Truong's Portfolio" />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <meta name="twitter:url" content="https://example.com" />
        <link rel="canonical" href="https://example.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="author" content="Nguyen Lam Truong" />
        <meta name="keywords" content="Nguyen Lam Truong, Fullstack Developer, React, Node.js" />
        <meta name="language" content="English" />  
      </Helmet>
      <Header />
      <main>
        <Summary />
        <Skills />
        <Workings />
        <Education />
        <Additional />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
