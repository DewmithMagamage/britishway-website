import React from 'react';
import Reveal from './Reveal';

const Timeline = () => {
  const timelineData = [
    {
      year: '2004',
      content: 'The first British Way branch opened in Nittambuwa. The first class only had 7 students. As they say, from small acorns, mighty oak trees grow.'
    },
    {
      year: '2007',
      content: 'Kiribathgoda branch opened.'
    },
    {
      year: '2009',
      content: 'Negombo branch was established.'
    },
    {
      year: '2011',
      content: 'A busy year! Two branches were opened: Kandy and Nugegoda.'
    },
    {
      year: '2012',
      content: 'British way went from strength to strength. 3 branches were established: Matara, Galle and Anuradhapura.'
    },
    {
      year: '2013',
      content: 'Gampaha branch was established.'
    },
    {
      year: '2015',
      content: 'Rathnapura branch opened.'
    },
    {
      year: '2016',
      content: "Our first Tamil branch in Jaffna opened its doors. Also, NR'S Campus was established in Gampaha."
    },
    {
      year: '2016',
      content: "BWEA won the award for the Best English Academy in the world at UNESCO's 7th World Scientific Congress in Geneva. Our first MASSCO Award for Best English Academy came this year."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500" />
          
          {timelineData.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className={`flex items-center justify-between mb-8 relative ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">{item.year}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                
                {/* Empty space for alignment */}
                <div className="w-5/12" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;