import React from 'react';

const skills = [
  "React.js", "Next.js", "Vue.js", "Tailwind CSS", "HTML5",
  "Redux", "React Hooks", "Rest API", "JavaScript", "TypeScript", "CSS", "Node.js", "UI/UX",
  "GitHub","Responsive Web Design", "Problem Solving", "Figma (Software)", "Code Review"
];

const Marquee = () => {
  return (
    <div className="absolute bottom-0 right-0 bg-slate-200 w-full bg-opacity-50 h-7 flex items-center font-mono overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex">
          {skills.map((skill, index) => (
            <span key={index} className="mx-2 flex items-center">
              <span className="text-xl mr-0">•</span>{skill}
            </span>
          ))}
        </div>
        <div className="flex">
          {skills.map((skill, index) => (
            <span key={index + skills.length} className="mx-2 flex items-center">
              <span className="text-xl mr-2">•</span>{skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
