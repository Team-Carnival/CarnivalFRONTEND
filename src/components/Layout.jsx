// Layout.jsx
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />                {/* Always visible */}
      <main className="flex-grow pt-20">{children}</main> {/* offset for fixed navbar */}
      <Footer />                {/* Always at bottom */}
    </div>
  );
};

export default Layout;
