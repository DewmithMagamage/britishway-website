import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Users, Award, ArrowRight, Search } from "lucide-react";

const BranchPage = () => {
  const { branchId } = useParams();
  const navigate = useNavigate();
  
  // Branch data - you can expand this with more details
  const branchData = {
    matara: {
      name: "Matara Branch",
      address: "123 Main Street, Matara, Sri Lanka",
      phone: "070 827 7929",
      phone2: "033 305 53 12",
      email: "bweamatara@gmail.com",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2012",
      manager: "Ms. Anjali Silva",
      description: "The Matara branch, opened in 2012, is a cornerstone for English education in the deep south. With passionate educators and a supportive learning space, it continues to transform futures through language."
    },
    galle: {
      name: "Galle Branch",
      address: "456 Beach Road, Galle, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "galle@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2008",
      manager: "Mr. Ramesh Fernando",
      description: "The Galle branch is committed to delivering world-class English education to the historic city and surrounding areas. Our modern facilities and experienced staff ensure the best learning experience."
    },
    nugegoda: {
      name: "Nugegoda Branch",
      address: "789 High Level Road, Nugegoda, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "nugegoda@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2005",
      manager: "Mrs. Priya Perera",
      description: "Serving the Nugegoda community since 2005, our branch offers comprehensive English language programs designed to meet the diverse needs of our students."
    },
    kalutara: {
      name: "Kalutara Branch",
      address: "321 Colombo Road, Kalutara, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "kalutara@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2012",
      manager: "Mr. Sunil Jayasuriya",
      description: "The Kalutara branch brings quality English education to the western coastal region, offering flexible schedules and personalized learning approaches."
    },
    kiribathgoda: {
      name: "Kiribathgoda Branch",
      address: "654 Kandy Road, Kiribathgoda, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "kiribathgoda@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2004",
      manager: "Ms. Dilini Wijesinghe",
      description: "As one of our earliest branches, Kiribathgoda has been instrumental in establishing British Way's reputation for excellence in English language education."
    },
    kurunegala: {
      name: "Kurunegala Branch",
      address: "987 Dambulla Road, Kurunegala, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "kurunegala@bishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2009",
      manager: "Mr. Ajith Bandara",
      description: "Our Kurunegala branch serves the North Western Province with dedication, providing comprehensive English language training and career development support."
    },
    gampaha: {
      name: "Gampaha Branch",
      address: "147 Negombo Road, Gampaha, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "gampaha@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2011",
      manager: "Mrs. Nimali Gunasekara",
      description: "The Gampaha branch offers a welcoming environment for English language learners, with modern classrooms and experienced teaching staff."
    },
    nittambuwa: {
      name: "Nittambuwa Branch",
      address: "258 Kandy Road, Nittambuwa, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "nittambuwa@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2006",
      manager: "Mr. Chaminda Rathnayake",
      description: "Located in the heart of Nittambuwa, our branch provides accessible English education with flexible scheduling options for busy professionals and students."
    },
    negombo: {
      name: "Negombo Branch",
      address: "369 Beach Road, Negombo, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "negombo@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2007",
      manager: "Ms. Shanthi Mendis",
      description: "Our Negombo branch serves the coastal community with dedication, offering English courses that prepare students for global opportunities."
    },
    ratnapura: {
      name: "Ratnapura Branch",
      address: "741 Colombo Road, Ratnapura, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "ratnapura@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2013",
      manager: "Mr. Lasantha Karunaratne",
      description: "The Ratnapura branch brings quality English education to the Sabaragamuwa Province, helping students achieve their language learning goals."
    },
    polonnaruwa: {
      name: "Polonnaruwa Branch",
      address: "852 Anuradhapura Road, Polonnaruwa, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "polonnaruwa@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2014",
      manager: "Mrs. Sandya Weerasinghe",
      description: "Our Polonnaruwa branch serves the North Central Province with commitment to excellence in English language education and student success."
    },
    anura: {
      name: "Anuradhapura Branch",
      address: "963 Kandy Road, Anuradhapura, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "anura@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2012",
      manager: "Mr. Ranjith Dissanayake",
      description: "The Anuradhapura branch provides comprehensive English language training to the North Central Province, helping students build confidence and skills."
    },
    bandarawela: {
      name: "Bandarawela Branch",
      address: "159 Badulla Road, Bandarawela, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "bandarawela@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2015",
      manager: "Ms. Kumari Herath",
      description: "Our Bandarawela branch serves the Uva Province with dedication, offering English courses that prepare students for academic and professional success."
    },
    kandy: {
      name: "Kandy Branch",
      address: "357 Peradeniya Road, Kandy, Sri Lanka",
      phone: "071 10 100 10",
      phone2: "033 202 41 41",
      email: "kandy@britishway.lk",
      workingHours: "8:00 AM - 5:00 PM (Daily)",
      established: "2009",
      manager: "Mr. Mahinda Rajapaksa",
      description: "The Kandy branch serves the Central Province with excellence, providing quality English education in a supportive and professional environment."
    }
  };

  const branch = branchData[branchId] || branchData.matara;

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="relative rounded-2xl overflow-hidden min-h-[400px] bg-gray-900">
            <img src={`/images/branches/${branchId}-hero.jpg`} alt={branch.name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
                {branch.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Introduction */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{branch.name}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {branch.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src={`/images/branches/${branchId}-gallery-1.jpg`} alt="Gallery 1" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src={`/images/branches/${branchId}-gallery-2.jpg`} alt="Gallery 2" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src={`/images/branches/${branchId}-gallery-3.jpg`} alt="Gallery 3" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src={`/images/branches/${branchId}-gallery-4.jpg`} alt="Gallery 4" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src={`/images/branches/${branchId}-gallery-5.jpg`} alt="Gallery 5" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src={`/images/branches/${branchId}-gallery-6.jpg`} alt="Gallery 6" className="rounded-xl shadow-md object-cover h-48 w-full" />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Phone className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">PHONE</h3>
            <p className="text-gray-600">{branch.phone}</p>
          </div>
          
          <div className="text-center">
            <Phone className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">HOT LINE</h3>
            <p className="text-gray-600">{branch.phone2}</p>
          </div>
          
          <div className="text-center">
            <Mail className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">EMAIL</h3>
            <p className="text-gray-600">{branch.email}</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Courses In {branch.name}</h3>
          <p className="text-gray-600 text-lg">Discover courses that inspire growth and success.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/courses/weekend-diploma.jpg" alt="Weekend Diploma" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Weekend Diploma</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/courses/weekday-2months.jpg" alt="Weekday Diploma 2 Months" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Weekday Diploma - 2 Months</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/courses/weekday-3months.jpg" alt="Weekday Diploma 3 Months" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Weekday Diploma - 3 Months</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/courses/online-diploma.jpg" alt="Online English Diploma" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Online English Diploma</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h3>
          <p className="text-gray-600 text-lg">A glimpse into our journey, achievements, and moments that define us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/images/gallery/graduation-1.jpg" alt="Graduation ceremony" className="rounded-xl shadow-lg object-cover h-80 w-full" />
          <img src="/images/gallery/ceremony-1.jpg" alt="Ceremony event" className="rounded-xl shadow-lg object-cover h-80 w-full" />
          <img src="/images/gallery/audience-1.jpg" alt="Audience" className="rounded-xl shadow-lg object-cover h-80 w-full" />
        </div>
      </section>

      {/* Join Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-gray-50 rounded-2xl">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Join With {branch.name}</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            For over 20 years, British Way English Academy has been Sri Lanka's largest English training institute, 
            with 16 branches and over 21,000 graduates annually. Guided by a passionate, qualified team, 
            we believe every student has unlimited potential and we're here to unlock it.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg font-semibold flex items-center mx-auto">
            REGISTER NOW <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Connected</h3>
        <p className="text-gray-600 mb-8">Stay connected with us through your favorite social platforms.</p>
        
        <div className="flex justify-center space-x-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">Y</span>
          </div>
          <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">I</span>
          </div>
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">W</span>
          </div>
          <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold">T</span>
          </div>
        </div>
      </section>

      {/* Back to Branches */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <button 
          onClick={() => navigate('/branches')}
          className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          ← Back to All Branches
        </button>
      </section>
    </main>
  );
};

export default BranchPage;
