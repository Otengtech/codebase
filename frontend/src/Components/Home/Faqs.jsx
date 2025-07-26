import React, { useState } from "react";

const faqs = [
  {
    question: "What is LearnBase?",
    answer:
      "LearnBase is an online learning platform offering a wide range of courses from web development to personal development, taught by industry experts.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply browse the course catalog, select a course, and click the 'Enroll Now' button. You can start learning immediately after enrollment.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer:
      "Yes! Once you complete all course requirements, you will receive a downloadable certificate of completion to showcase your skills.",
  },
  {
    question: "Can I access courses on mobile?",
    answer:
      "Absolutely. LearnBase is mobile-friendly, and you can access your courses on any smartphone or tablet using a web browser.",
  },
  {
    question: "Are the courses lifetime accessible?",
    answer:
      "Yes, once you purchase a course, you’ll have lifetime access to the content, allowing you to revisit lessons whenever needed.",
  },
  {
    question: "What if I’m not satisfied with a course?",
    answer:
      "We offer a 7-day money-back guarantee. If you're not satisfied, you can request a full refund within 7 days of purchase.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between bg-gray-300 py-3 px-6 rounded-xl items-center">
              <h3 className="text-lg font-semibold text-gray-600">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="text-gray-600 bg-gray-300 py-2 px-6 mt-2 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
