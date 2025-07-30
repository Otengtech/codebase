import React from "react";
import {
  FaLaptopCode,
  FaCertificate,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { useInViewAnimation } from "../Animation/useInViewAnimation";

const features = [
  {
    title: "Hands-On Projects",
    icon: <FaLaptopCode className="text-4xl" />,
    description:
      "Gain real-world experience by building practical web and backend projects that you can showcase in your portfolio or during job interviews.",
    color: "bg-blue-50",
  },
  {
    title: "Certified Courses",
    icon: <FaCertificate className="text-4xl" />,
    description:
      "Earn a professionally recognized certificate upon completion of each course, validating your skills and enhancing your resume.",
    color: "bg-green-50",
  },
  {
    title: "1000+ Learners",
    icon: <PiStudentFill className="text-4xl" />,
    description:
      "Join thousands of students who have successfully transformed their skills and careers through our structured, hands-on learning path.",
    color: "bg-red-50",
  },
];

const WhyChooseUs = () => {
  const [leftRef, isLeftVisible] = useInViewAnimation();
  return (
    <section className="w-full bg-gradient-to-r from-gray-900 to-violet-900 px-4 md:px-20 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-300 mb-2">Why Choose Us?</h2>
        <p className="text-gray-200 text-lg">
          Creative learning, expert guidance, and real-world experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          
            <div
              key={idx}
              className={`rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer hover:shadow-xl transition duration-300 flex flex-col items-center text-center`}
            >
              <div className="mb-4 text-gray-300">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-sky-300 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-300">{feature.description}</p>
              <div className="sm:flex md:flex lg:flex flex items-center justify-center space-x-2">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 mt-6 rounded-full text-white ${
                      index % 2 === 0 ? "bg-sky-400" : "bg-gray-300"
                    } animate-bounce-custom`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
