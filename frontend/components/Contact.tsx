'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/EliteSec', name: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/elitesec', name: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/elitesec', name: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com/elitesec', name: 'Instagram' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', { email, message });
  };

  return (
    <section className="py-16 px-4" id="contact">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Email Contact */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Us</h3>
              <p className="text-gray-400 mb-8">
                Have a question or want to collaborate? Feel free to reach out to us directly.
              </p>
              <motion.a
                href="mailto:contact@elites3c.club"
                className="inline-flex items-center px-6 py-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-6 h-6 text-red-500" />
                <span className="ml-3 text-white">contact@elites3c.club</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Us</h3>
              <p className="text-gray-400 mb-8">
                Follow us on social media to stay updated with our latest events, workshops, and cybersecurity insights.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6 text-red-500" />
                    <span className="ml-3 text-white">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}