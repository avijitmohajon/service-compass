import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Service Campas?",
      answer:
        "Service Campas is a platform where users can explore, share, and manage various services — all in one place. Whether you're offering a service or searching for one, we make it simple and reliable.",
    },
    {
      question: "How do I create an account?",
      answer:
        "Click the 'Sign Up' button on the top right corner and follow the registration steps. You'll need a valid email address to get started.",
    },
    {
      question: "Is it free to use Service Campas?",
      answer:
        "Yes! Browsing and posting basic service listings on Service Campas is completely free. We may offer premium features later for advanced visibility and tools.",
    },
    {
      question: "How can I add my own service?",
      answer:
        "Once logged in, go to the 'Add Service' page, fill out the required details (title, category, price, description, etc.), and submit. Your service will be visible after approval if applicable.",
    },
    {
      question: "Can I update or delete a service I posted?",
      answer:
        "Absolutely. Go to your Dashboard or My Services page. From there, you can edit or delete any of your listed services at any time.",
    },
    {
      question: "How do reviews work?",
      answer:
        "Users can leave reviews and ratings on services they've used. Reviews help others make informed decisions and help build trust across the platform.",
    },
    {
      question: "Is my data safe with Service Campas?",
      answer:
        "We prioritize your privacy and data security. Please refer to our Privacy Policy for more details on how we protect and use your information.",
    },
    {
      question: "Who do I contact for support?",
      answer: (
        <>
          You can reach out to us via email at{" "}
          <a
            href="mailto:support@servicecampas.com"
            className="text-indigo-600 hover:underline font-medium"
          >
            support@servicecampas.com
          </a>{" "}
          or use our Contact Page for assistance.
        </>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" mx-auto px-4 py-12 md:py-20 bg-[#D9EAFD] shadow-xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
      >
        Frequently Asked Questions (FAQ)
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[#BCCCDC] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-500"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-base-300 flex items-center">
                  
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="text-base-300 text-xl"
                >
                  ▼
                </motion.span>
              </div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-base-300">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
