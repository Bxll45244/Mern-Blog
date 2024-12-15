import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-700 via-gray-500 to-gray-300">
      <header className="shadow-md">
        <Header />
      </header>
      <main className="flex-grow flex items-center justify-center container mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-8 shadow-lg">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
