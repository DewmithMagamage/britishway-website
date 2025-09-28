import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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
      address: "123/5, High Level Road, Nugegoda",
      phone: "011 2 123 456",
      email: "nugegoda@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Nugegoda,Sri+Lanka&output=embed"
    },
    {
      id: 2,
      name: "Kalutara Branch",
      address: "456/2, Colombo Road, Kalutara",
      phone: "034 2 234 567",
      email: "kalutara@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Kalutara,Sri+Lanka&output=embed"
    },
    {
      id: 3,
      name: "Matara Branch",
      address: "789/1, Galle Road, Matara",
      phone: "041 2 345 678",
      email: "matara@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Matara,Sri+Lanka&output=embed"
    },
    {
      id: 4,
      name: "Galle Branch",
      address: "321/4, Main Street, Galle",
      phone: "091 2 456 789",
      email: "galle@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Galle,Sri+Lanka&output=embed"
    },
    {
      id: 5,
      name: "Kiribathgoda Branch",
      address: "654/3, Negombo Road, Kiribathgoda",
      phone: "011 2 567 890",
      email: "kiribathgoda@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Kiribathgoda,Sri+Lanka&output=embed"
    },
    {
      id: 6,
      name: "Kurunegala Branch",
      address: "987/6, Kandy Road, Kurunegala",
      phone: "037 2 678 901",
      email: "kurunegala@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Kurunegala,Sri+Lanka&output=embed"
    },
    {
      id: 7,
      name: "Gampaha Branch",
      address: "147/8, Colombo Road, Gampaha",
      phone: "033 2 789 012",
      email: "gampaha@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Gampaha,Sri+Lanka&output=embed"
    },
    {
      id: 8,
      name: "Negombo Branch",
      address: "258/9, Main Street, Negombo",
      phone: "031 2 890 123",
      email: "negombo@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Negombo,Sri+Lanka&output=embed"
    },
    {
      id: 9,
      name: "Rathnapura Branch",
      address: "369/1, Colombo Road, Rathnapura",
      phone: "045 2 901 234",
      email: "rathnapura@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Rathnapura,Sri+Lanka&output=embed"
    },
    {
      id: 10,
      name: "Anuradhapura Branch",
      address: "741/2, Kandy Road, Anuradhapura",
      phone: "025 2 012 345",
      email: "anuradhapura@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Anuradhapura,Sri+Lanka&output=embed"
    },
    {
      id: 11,
      name: "Polonnaruwa Branch",
      address: "852/3, Main Street, Polonnaruwa",
      phone: "027 2 123 456",
      email: "polonnaruwa@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Polonnaruwa,Sri+Lanka&output=embed"
    },
    {
      id: 12,
      name: "Bandarawela Branch",
      address: "963/4, Badulla Road, Bandarawela",
      phone: "057 2 234 567",
      email: "bandarawela@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Bandarawela,Sri+Lanka&output=embed"
    },
    {
      id: 13,
      name: "Kandy Branch",
      address: "159/5, Peradeniya Road, Kandy",
      phone: "081 2 345 678",
      email: "kandy@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Kandy,Sri+Lanka&output=embed"
    },
    {
      id: 14,
      name: "Jaffna Branch",
      address: "357/6, Main Street, Jaffna",
      phone: "021 2 456 789",
      email: "jaffna@britishway.lk",
      mapUrl: "https://maps.google.com/maps?q=Jaffna,Sri+Lanka&output=embed"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-8">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to us for inquiries, 
            support, or collaboration opportunities—we'd love to hear from you.
          </p>
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUsPage;
