import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is EliteSec?",
      answer: "EliteSec is Morocco's leading student-run cybersecurity club at UM6P-1337, focused on training students in ethical hacking, digital security, and cybersecurity awareness."
    },
    {
      question: "How can I join EliteSec?",
      answer: "Students at UM6P-1337 can join EliteSec by attending our meetings, participating in our workshops, or contacting us through our website."
    },
    {
      question: "What activities does EliteSec organize?",
      answer: "EliteSec organizes workshops, CTF competitions, training sessions, speaker events, and hands-on labs focused on various aspects of cybersecurity."
    },
    {
      question: "Do I need prior cybersecurity knowledge to join?",
      answer: "No, EliteSec welcomes members of all skill levels. We provide resources and mentorship for beginners while offering challenges for advanced members."
    },
    {
      question: "Does EliteSec offer certifications?",
      answer: "While EliteSec doesn't directly issue certifications, our training and workshops help prepare members for industry-recognized certifications."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-12 bg-zinc-900/80 backdrop-blur-md">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-zinc-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-white">{faq.question}</h3>
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;