import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Fingerprint, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="relative bg-gradient-to-br from-primary via-green-600 to-green-700 py-24 md:py-32 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 opacity-10 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 left-[10%]"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Fingerprint className="h-12 w-12 text-white opacity-10" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-[15%]"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Cpu className="h-16 w-16 text-white opacity-10" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center mb-8"
          >
            <div className="bg-white/20 p-5 rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center">
              <Fingerprint className="h-16 w-16" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            Bangla AI
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl font-medium mb-10 text-white/90 max-w-2xl mx-auto"
          >
            {translate(
              "Modern AI solutions for all your Bengali language needs - anytime, anywhere",
              "আপনার সমস্ত বাংলা ভাষার প্রয়োজনের জন্য আধুনিক এআই সমাধান - যেকোনো সময়, যেকোনো জায়গায়"
            )}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              className="bg-white hover:bg-gray-100 text-primary font-bold text-lg px-8 py-7 rounded-full transition-all hover:scale-105 shadow-xl w-full sm:w-auto"
              onClick={() => {
                const chatSection = document.querySelector('#chat-section');
                if (chatSection) {
                  chatSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {translate("Get Started", "শুরু করুন")} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              className="bg-transparent border-2 border-white text-white hover:bg-white/20 font-bold text-lg px-8 py-7 rounded-full transition-all hover:scale-105 shadow-lg w-full sm:w-auto"
              onClick={() => {
                const featuresSection = document.querySelector('#features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {translate("View Features", "বৈশিষ্ট্য দেখুন")}
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-x-12 gap-y-3"
          >
            <div className="flex items-center">
              <span className="bg-white/20 p-1 rounded-full mr-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-sm">{translate("100,000+ Users", "১০০,০০০+ ব্যবহারকারী")}</span>
            </div>
            <div className="flex items-center">
              <span className="bg-white/20 p-1 rounded-full mr-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-sm">{translate("24/7 Support", "২৪/৭ সাপোর্ট")}</span>
            </div>
            <div className="flex items-center">
              <span className="bg-white/20 p-1 rounded-full mr-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-sm">{translate("100% Secure", "১০০% নিরাপদ")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;