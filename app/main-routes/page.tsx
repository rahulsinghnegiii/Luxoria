'use client';

import { useState, useEffect } from 'react';
import { getProducts } from '../../lib/firebaseUtils';
import { Product } from '../../lib/types';
import Link from 'next/link';
import ImprovedImage from '../../components/ImprovedImage';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import HeroSection3D from '../../components/HeroSection3D';
import AnimatedProductCard from '../../components/AnimatedProductCard';

// Categories with their icons
const categories = [
  { name: 'Electronics', icon: '🖥️', color: 'from-blue-500 to-cyan-500' },
  { name: 'Fashion', icon: '👕', color: 'from-pink-500 to-purple-500' },
  { name: 'Home', icon: '🏠', color: 'from-green-500 to-teal-500' },
  { name: 'Beauty', icon: '💄', color: 'from-red-500 to-pink-500' },
  { name: 'Sports', icon: '⚽', color: 'from-yellow-500 to-orange-500' },
  { name: 'Books', icon: '📚', color: 'from-indigo-500 to-blue-500' },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    content: "The 3D product viewing experience is mind-blowing! It's like having the product right in front of me.",
    author: "Alex Johnson",
    role: "Tech Enthusiast",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=250&h=250&fit=crop&crop=faces"
  },
  {
    id: 2,
    content: "The checkout process was seamless and the AR try-on feature helped me make the perfect choice.",
    author: "Samantha Lee",
    role: "Fashion Blogger",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=250&h=250&fit=crop&crop=faces"
  },
  {
    id: 3,
    content: "The product animations and interactive elements make online shopping actually fun for once!",
    author: "Marcus Rivera",
    role: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=250&h=250&fit=crop&crop=faces"
  }
];

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

// Fade-in section component for scroll animations
const FadeInSection = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        // Get first 6 products for featured section
        setFeaturedProducts(products.slice(0, 6));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSubscribe = () => {
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail('');
      toast.success('Thank you for subscribing!');
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection3D />
      
      {/* Categories */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
              Explore Our Categories
            </h2>
          </FadeInSection>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {categories.map((category, index) => (
              <motion.div key={category.name} variants={itemVariants} custom={index}>
                <Link href={`/products/category/${category.name.toLowerCase()}`}>
                  <div className="group h-40 bg-gray-800 rounded-lg overflow-hidden relative cyber-border transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                      <span className="text-4xl mb-2 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">{category.icon}</span>
                      <h3 className="text-lg font-semibold text-center">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Featured Products
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Discover our handpicked selection of premium products, featuring immersive 3D previews and futuristic designs.
            </p>
          </motion.div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="h-64 bg-gray-700"></div>
                    <div className="p-4">
                      <div className="h-5 bg-gray-700 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <AnimatedProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>
          )}
          
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              href="/products" 
              className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              What Our Customers Say
            </h2>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInSection key={testimonial.id} delay={index * 0.2}>
                <div className="bg-gray-800 p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-indigo-500">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-500 mr-4">
                      <ImprovedImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 sm:p-12 shadow-2xl border border-indigo-800">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">
                Stay Updated with Latest Releases
              </h2>
              <p className="text-center text-blue-200 mb-8">
                Subscribe to our newsletter for exclusive deals and early access to new products.
              </p>
              
              {subscribed ? (
                <div className="text-center p-4 bg-green-800 bg-opacity-50 rounded-lg">
                  <p className="text-green-200 font-medium">
                    Thank you for subscribing! We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              )}
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
} 