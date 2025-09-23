import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  "/images/abe.png",
  "/images/AEU.png",
  "/images/BC.png",
  "/images/CTH.png",
  "/images/TVEC.png",
  "/images/Lincoln.png",
  "/images/Cambridge copy.png",
  "/images/Thames.png",
];

const Partners = () => {
  return (
    <section className="w-full py-12 bg-white text-center">
      <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
      <p className="text-gray-500 mb-8">Working together to empower learning and growth.</p>
      <Marquee gradient={false} speed={50}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="partner" className="h-20 mx-12 object-contain" />
        ))}
      </Marquee>
    </section>
  );
};

export default Partners;
