import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, noTopPadding = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${noTopPadding ? 'pt-0' : 'pt-24'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

