import React from "react";

const StayConnected = () => {
  const socialPlatforms = [
    { name: "Telegram", image: "/images/Telegram.png", href: "#" },
    { name: "Messenger", image: "/images/Messenger.png", href: "#" },
    { name: "YouTube", image: "/images/Youtube.png", href: "#" },
    { name: "Instagram", image: "/images/Instergram.png", href: "#" },
    { name: "WhatsApp", image: "/images/Whatsapp.png", href: "#" },
    { name: "Facebook", image: "/images/Facebook.png", href: "#" },
    { name: "LinkedIn", image: "/images/Linkedin.png", href: "#" },
    { name: "TikTok", image: "/images/Tiktok.png", href: "#" },
    { name: "Twitter", image: "/images/Twitter.png", href: "#" }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Connected</h2>
        <p className="text-gray-600 text-lg mb-12">
          Stay connected with us through your favorite social platforms.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.href}
              className="group hover:scale-110 transition-transform duration-300"
              title={platform.name}
            >
              <img
                src={platform.image}
                alt={platform.name}
                className="w-10 h-10 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
