import React from "react";
import Layout from "./Layout";
import Contact from "./Contact";
import MapSection from "./MapSection";
import BranchCard from "./BranchCard";
import StayConnected from "./StayConnected";
import Reveal from "./Reveal";

const ContactUsPage = () => {
  const branches = [
    {
      id: 1,
      name: "Nugegoda Branch",
      address: "No.05, Stanley Thilakarathna Mawatha, Nugegoda.",
      phone: "011 281 8683",
      email: "nugegodabwea@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6362273189075!2d79.88245097474753!3d6.871695219019638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a66fffffff9%3A0xd1a7ca5e56687602!2sBritish%20Way%20English%20Academy%20-%20Nugegoda!5e1!3m2!1sen!2slk!4v1762448064435!5m2!1sen!2slk"
    },
    {
      id: 2,
      name: "Kalutara Branch",
      address: "47/A, Sri Sarananda Mawatha, Kalutara South",
      phone: "034 2222 910",
      email: "kalutarabwea@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.873365104459!2d79.95718167742785!3d6.584384005483774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae23794e5069387%3A0x5fd0b86115e8e144!2sBritish%20Way%20English%20Academy%20Kalutara!5e1!3m2!1sen!2slk!4v1762448010485!5m2!1sen!2slk"
    },
    {
      id: 3,
      name: "Matara Branch",
      address: "8/B, Jayasooriya mawatha,Nupe, Matara",
      phone: "0333 555 312",
      email: "matharabwea@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1676.6475345964136!2d80.537612573055!3d5.9481412752829765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f28c523f3c1%3A0xb05090abfc7f2806!2sBritishway%20English%20Academy%20-%20Matara!5e1!3m2!1sen!2slk!4v1762447602902!5m2!1sen!2slk"
    },  
    {
      id: 4,
      name: "Galle Branch",
      address: "33/1, Wakwella Road, Galle",
      phone: "0333 555 311",
      email: "gallebwea@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.7897138306776!2d80.20787947474354!3d6.0487974284981565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bca4320173%3A0x655271c2b44db9c7!2sBritish%20Way%20English%20Academy%20-%20Galle!5e1!3m2!1sen!2slk!4v1762447841522!5m2!1sen!2slk"
    },
    {
      id: 5,
      name: "Kiribathgoda Branch",
      address: "79, Kandy Road, Kiribathgoda",
      phone: "011 290 7508",
      email: "bweakiribathgoda@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.7576449024336!2d79.92500267745017!3d6.9813117997001735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257fc834a915b%3A0x1d591bfc4761b4b0!2sBritish%20Way%20English%20Academy%20-%20Kiribathgoda!5e1!3m2!1sen!2slk!4v1762448808528!5m2!1sen!2slk"
    },
    {
      id: 6,
      name: "Kurunegala Branch",
      address: "987/6, Kandy Road, Kurunegala",
      phone: "0333 555 306",
      email: "kurunegalabwea@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120835.75589703672!2d80.2150679!3d7.4183366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3397ff4ed9ebf%3A0xe7cc9eae19177596!2sBritish%20Way%20English%20Academy%20-%20Kurunegala!5e1!3m2!1sen!2slk!4v1762448941125!5m2!1sen!2slk"
    },
    {
      id: 7,
      name: "Gampaha Branch",
      address: "67/ Marybiso Mawatha, Gampaha",
      phone: "0333 555 310",
      email: "gampahabwea@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.8450084221417!2d79.99570407474882!3d7.093392416279044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fb8ccd08be15%3A0x1c3bc03fb930a1a!2sBritish%20Way%20English%20Academy!5e1!3m2!1sen!2slk!4v1762449065574!5m2!1sen!2slk"
    },
    {
      id: 8,
      name: "Negombo Branch",
      address: "100, Nicholas Marcues Mawatha, Negombo",
      phone: "0333 555 307",
      email: "negombobwea@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120893.50962606393!2d79.6977425!3d7.2049615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2efd59df2a7cb%3A0x4c73cfb1c8ec7d2d!2sBritish%20Way%20English%20Academy%20Negombo!5e1!3m2!1sen!2slk!4v1762487016592!5m2!1sen!2slk"
    },
    {
      id: 9,
      name: "Rathnapura Branch",
      address: "Kudugalwaththa, Ratnapura",
      phone: "045 728 4794",
      email: "bwearathnapura@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d419802.4646955926!2d79.95574796533758!3d6.8922210943312265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3bf0badad2f2b%3A0xd60beed8e915b5b!2sBritish%20Way%20English%20Academy!5e1!3m2!1sen!2slk!4v1762487140394!5m2!1sen!2slk"
    },
    {
      id: 10,
      name: "Anuradhapura Branch",
      address: "514A/2A, Maithreepala Senanayaka Mawatha, Anuradhapura",
      phone: "025 205 4285",
      email: "bwea.anuradhapura@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d965237.9459881175!2d79.6218216!3d8.0507425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf5aca2e2b0f7%3A0xf91258182ae6c43b!2sBritish%20Way%20English%20Academy-%20Anuradhapura!5e1!3m2!1sen!2slk!4v1762488211175!5m2!1sen!2slk"
    },
    {
      id: 11,
      name: "Polonnaruwa Branch",
      address: "PCC Bulding,2nd floor, Pola junction, Polonnaruwa",
      phone: "027 764 4588",
      email: "bwea.polonnaruwa1@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.480768178191!2d81.00171999999999!3d7.940403700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb437743f4e1cd%3A0x6980c5685c689be0!2sBritish%20Way%20English%20Academy%20-%20Polonnaruwa!5e1!3m2!1sen!2slk!4v1762486735625!5m2!1sen!2slk"
    },
    {
      id: 12,
      name: "Bandarawela Branch",
      address: "444, Badulla Road, Bandarawela",
      phone: "057 222 0116",
      email: "bandarawelabwea@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d483918.41580033157!2d80.1495911!3d6.8746629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46f3e70beacb5%3A0xaf15b8744afa5433!2sBritish%20Way%20English%20Academy!5e1!3m2!1sen!2slk!4v1762486860145!5m2!1sen!2slk"
    },
    {
      id: 13,
      name: "Kandy Branch",
      address: "497, Peradeniya road, Kandy",
      phone: "0333 555 309",
      email: "kandybwea@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1367.202828567434!2d80.62719334176442!3d7.286964351570535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3689afd833859%3A0x96060a6d12fedfe!2sBritishway%20English%20Academy%20-%20Kandy!5e1!3m2!1sen!2slk!4v1762486630591!5m2!1sen!2slk"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden -mt-24">
        <img 
          src="/images/banner04.jpg" 
          alt="Contact Us" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto">
            <div className="text-white max-w-2xl px-8 md:px-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-left">Get in Touch</h1>
              <p className="text-lg md:text-xl">
                Have questions or need assistance? We're here to help. Reach out to us for inquiries, 
                support, or collaboration opportunities—we'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Reveal>
        <Contact />
      </Reveal>

      {/* Head Office Map Section */}
      <Reveal>
        <MapSection />
      </Reveal>

      {/* Find Your Nearest Branch Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Your Nearest Branch</h2>
            <p className="text-gray-600 text-lg">
              Get in touch with us via the branch closest to you for personalized support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {branches.map((branch, i) => (
              <Reveal key={branch.id} delay={i*60}>
                <BranchCard branch={branch} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <StayConnected />

      </div>
    </Layout>
  );
};

export default ContactUsPage;
