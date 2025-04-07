import SEO from "../../SEO";

const Home = () => {
  const title = "Home | Nguyen Lam Truong";
  const description = "This is the homepage of my portfolio.";
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <SEO title={title} description={description} />
      <h1 className="text-4xl font-bold text-blue-600">Hello, I’m [Nguyen Lam Truong]</h1>
      <p className="mt-4 text-lg">I’m a Fullstack Developer specialized in React & Node.js</p>
    </div>
  );
};

export default Home;
