import React from 'react'
import { IExperienceProps } from '../type/IExperiencieProps';
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";


const Experience: React.FC<IExperienceProps> = ({ experiences}) => {
  return (
    
 
    <div className="max-w-4xl mx-auto px-4 90">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Experiencias</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:scale-95 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-lg text-gray-600">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="flex items-center text-gray-600 mb-1">
                  <FaRegCalendarAlt className="w-4 h-4 mr-2" />
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="flex items-center text-gray-600">
                  <GrLocation className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Experience;