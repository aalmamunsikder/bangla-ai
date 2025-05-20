import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ContactSection from '@/components/sections/ContactSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const { translate } = useLanguage();

  const features = [
    {
      title: translate('Modern AI Technology', 'আধুনিক এআই প্রযুক্তি'),
      description: translate(
        'Bangla AI uses cutting-edge technology to provide answers to Bengali language processing questions.',
        'বাংলা এআই উন্নত প্রযুক্তি ব্যবহার করে বাংলা ভাষা প্রসেসিং প্রশ্নের উত্তর দেয়।'
      ),
      icon: '🤖'
    },
    {
      title: translate('Bengali Language Support', 'বাংলা ভাষা সাপোর্ট'),
      description: translate(
        'We offer comprehensive support for Bengali language, making AI accessible to Bengali speakers worldwide.',
        'আমরা বাংলা ভাষার জন্য ব্যাপক সমর্থন প্রদান করি, যা বিশ্বব্যাপী বাংলাভাষী মানুষের জন্য এআই প্রযুক্তি সুলভ করে।'
      ),
      icon: '🗣️'
    },
    {
      title: translate('Local Language Expertise', 'স্থানীয় ভাষা বিশেষজ্ঞতা'),
      description: translate(
        'Our models are specifically trained on Bengali language patterns, context, and cultural nuances.',
        'আমাদের মডেলগুলি বিশেষভাবে বাংলা ভাষার প্যাটার্ন, প্রসঙ্গ এবং সাংস্কৃতিক বৈশিষ্ট্যসমূহে প্রশিক্ষিত।'
      ),
      icon: '🌐'
    },
    {
      title: translate('24/7 Assistance', '২৪/৭ সহায়তা'),
      description: translate(
        'Get help with Bengali language processing anytime, day or night, whenever you need it.',
        'যখনই প্রয়োজন, দিন বা রাতে যেকোনো সময় বাংলা ভাষা প্রসেসিং এর সাহায্য পান।'
      ),
      icon: '⏱️'
    },
    {
      title: translate('Advanced Language Processing', 'উন্নত ভাষা প্রসেসিং'),
      description: translate(
        'State-of-the-art natural language processing techniques optimized for Bengali language.',
        'বাংলা ভাষার জন্য অপটিমাইজ করা অত্যাধুনিক ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং টেকনিক।'
      ),
      icon: '💡'
    },
    {
      title: translate('Educational Resources', 'শিক্ষামূলক সংস্থান'),
      description: translate(
        'Extensive collection of educational materials about Bengali language, grammar, and translation.',
        'বাংলা ভাষা, ব্যাকরণ এবং অনুবাদ সম্পর্কে শিক্ষামূলক উপকরণের বিস্তৃত সংগ্রহ।'
      ),
      icon: '📚'
    }
  ];

  const team = [
    {
      name: translate('Dr. Mahmud Hassan', 'ড. মাহমুদ হাসান'),
      position: translate('Chief AI Researcher', 'প্রধান এআই গবেষক'),
      bio: translate(
        'Expert in natural language processing with 15 years of experience. Former professor at Bangladesh University of Engineering and Technology.',
        'ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং এ বিশেষজ্ঞ, ১৫ বছরের অভিজ্ঞতা রয়েছে। বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়ের প্রাক্তন অধ্যাপক।'
      ),
      imageUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: translate('Sumaiya Akter', 'সুমাইয়া আক্তার'),
      position: translate('AI Specialist', 'এআই বিশেষজ্ঞ'),
      bio: translate(
        'Artificial intelligence expert with experience in applying AI to language processing. Former student of CSE department, University of Dhaka.',
        'ভাষা প্রসেসিং এ এআই প্রয়োগের অভিজ্ঞতা সহ কৃত্রিম বুদ্ধিমত্তার বিশেষজ্ঞ। ঢাকা বিশ্ববিদ্যালয়ের সিএসই বিভাগের প্রাক্তন ছাত্র।'
      ),
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: translate('Tanvir Ahmed', 'তানভীর আহমেদ'),
      position: translate('Senior Developer', 'সিনিয়র ডেভেলপার'),
      bio: translate(
        '10 years of experience in web and mobile app development. Contributing to technology development in Bangladesh.',
        'ওয়েব এবং মোবাইল অ্যাপ ডেভেলপমেন্টে ১০ বছরের অভিজ্ঞতা। বাংলাদেশে প্রযুক্তি উন্নয়নে অবদান রাখছেন।'
      ),
      imageUrl: 'https://images.unsplash.com/photo-1618568949779-895d81686151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                {translate('About Us', 'আমাদের সম্পর্কে')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white/90"
              >
                {translate(
                  'A modern artificial intelligence platform for Bengali language processing',
                  'বাংলা ভাষা প্রসেসিং এর জন্য একটি আধুনিক কৃত্রিম বুদ্ধিমত্তা প্ল্যাটফর্ম'
                )}
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* About us section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto"
            >
              <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
                <span className="font-bold text-primary dark:text-primary-light">Bangla AI</span> {translate(
                  'is a modern artificial intelligence (AI) platform designed specifically for Bengali language processing.',
                  'হল বাংলা ভাষা প্রসেসিং এর জন্য বিশেষভাবে ডিজাইন করা একটি আধুনিক কৃত্রিম বুদ্ধিমত্তা (এআই) প্ল্যাটফর্ম।'
                )}
              </p>
              <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
                {translate(
                  'Our mission is to bridge the technological gap for Bengali speakers by providing accessible AI services in their native language. Our AI system responds to queries in Bengali, making information and technology accessible to millions.',
                  'আমাদের লক্ষ্য হল বাংলা ভাষাভাষীদের জন্য তাদের মাতৃভাষায় সহজলভ্য এআই সেবা প্রদান করে প্রযুক্তিগত ব্যবধান দূর করা। আমাদের এআই সিস্টেম বাংলায় প্রশ্নের উত্তর দেয়, যা লক্ষ লক্ষ মানুষের জন্য তথ্য ও প্রযুক্তি সহজলভ্য করে তোলে।'
                )}
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                {translate(
                  'Bangla AI offers translation services, text generation, summarization, sentiment analysis, and conversational AI to help users with all their Bengali language processing needs.',
                  'বাংলা এআই অনুবাদ সেবা, টেক্সট জেনারেশন, সারসংক্ষেপ, অনুভূতি বিশ্লেষণ এবং কথোপকথন এআই প্রদান করে ব্যবহারকারীদের সমস্ত বাংলা ভাষা প্রসেসিং চাহিদা পূরণে সাহায্য করে।'
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white"
            >
              {translate('Our Features', 'আমাদের বৈশিষ্ট্যসমূহ')}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white"
            >
              {translate('Our Team', 'আমাদের টিম')}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={index} 
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-primary dark:text-primary-light font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-700 dark:text-gray-300">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Newsletter Section */}
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage; 