import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AwardsSection from "./components/AwardsSection";
import Partners from "./components/Partners";
import Programmes from "./components/Programmes";
import About from "./components/About";
import JoinCourses from "./components/JoinCourses";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import Events from "./components/Events";
import Contact from "./components/Contact";


import RegistrationPopup from "./components/RegistrationPopup";
import { branches } from "./data/branches";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [selectedBranch, setSelectedBranch] = React.useState(null);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedBranch(null);
  };

  return (
    <Layout noTopPadding>
      <div className="w-full overflow-hidden bg-white text-gray-900">
        <Hero onApplyNow={handleOpenPopup} />
        <AwardsSection />
        <Partners />
        <Programmes />
        <About />
        <JoinCourses />
        <Testimonials />
        <News />
        <Events />
        <Contact />
        <RegistrationPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          branchName={selectedBranch?.name || ""}
          branchId={selectedBranch?.id || ""}
          branches={branches}
          onBranchSelect={setSelectedBranch}
        />
      </div>
    </Layout>
  );
};

export default Home;
