'use client';

import { motion } from 'framer-motion';
import ImprovedImage from '../../../components/ImprovedImage';

// Animation variants for stagger effects
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">About Luxoria</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A cutting-edge e-commerce platform designed for luxury products and futuristic shopping experiences.
          </p>
        </motion.div>
        
        {/* Our Story */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2023, Luxoria emerged from a vision to transform online shopping into an immersive, interactive experience. We believe that digital commerce should be as engaging and tactile as shopping in a physical store.
            </p>
            <p className="text-gray-300">
              Our team of designers, developers, and retail experts have combined cutting-edge web technologies with luxury retail principles to create a platform that showcases products in their best light through 3D visualization, augmented reality, and interactive elements.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <ImprovedImage 
              src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=800&h=600&fit=crop" 
              alt="Luxoria team" 
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
        
        {/* Our Mission */}
        <motion.div 
          className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-8 md:p-12 rounded-2xl mb-24 border border-indigo-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Our Mission</h2>
          <p className="text-xl text-center text-blue-100 max-w-4xl mx-auto">
            To revolutionize e-commerce by creating digital shopping experiences that are more immersive, interactive, and enjoyable than traditional online retail, while maintaining the premium feel of luxury shopping.
          </p>
        </motion.div>
        
        {/* Contact Info */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Get In Touch</h2>
          <p className="text-gray-300 mb-4">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </div>
        </motion.div>
      </div>
    </div>
  );
} 