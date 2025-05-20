import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ContactSection from '@/components/sections/ContactSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

const AboutPage = () => {
  const features = [
    {
      title: 'আধুনিক AI প্রযুক্তি',
      description: 'কৃষি সহায়ক AI সর্বাধুনিক প্রযুক্তির মাধ্যমে কৃষি সংক্রান্ত প্রশ্নের উত্তর দেয়।',
      icon: '🤖'
    },
    {
      title: 'বাংলা ভাষায় সহায়তা',
      description: 'বাংলা ভাষায় কৃষকদের সহজবোধ্য উত্তর প্রদান করে সবাইকে কৃষি তথ্য অ্যাক্সেসের সুযোগ করে দেয়।',
      icon: '🗣️'
    },
    {
      title: 'স্থানীয় কৃষি জ্ঞান',
      description: 'বাংলাদেশের আবহাওয়া, মাটি ও স্থানীয় ফসল সম্পর্কে বিশেষ জ্ঞানের মাধ্যমে সঠিক তথ্য প্রদান করে।',
      icon: '🌱'
    },
    {
      title: '২৪/৭ সহায়তা',
      description: 'দিনে-রাতে যেকোনো সময় কৃষকদের প্রশ্নের উত্তর দিতে প্রস্তুত, যখনই প্রয়োজন হয়।',
      icon: '⏱️'
    },
    {
      title: 'উন্নত প্রযুক্তির তথ্য',
      description: 'আধুনিক কৃষি প্রযুক্তি, রোগ প্রতিরোধ ও ফলন বাড়ানোর কৌশল সম্পর্কে হালনাগাদ তথ্য।',
      icon: '💡'
    },
    {
      title: 'শিক্ষামূলক সামগ্রী',
      description: 'বিভিন্ন ফসল, চাষাবাদ পদ্ধতি ও কৃষি বিষয়ক শিক্ষামূলক তথ্যের বিশাল সংগ্রহ।',
      icon: '📚'
    }
  ];

  const team = [
    {
      name: 'ড. মাহমুদুল হাসান',
      position: 'প্রধান কৃষিবিদ',
      bio: 'কৃষি বিশেষজ্ঞ ও গবেষক, ২০ বছরের অভিজ্ঞতা। বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের সাবেক অধ্যাপক।',
      imageUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'সুমাইয়া আক্তার',
      position: 'AI বিশেষজ্ঞ',
      bio: 'কৃত্রিম বুদ্ধিমত্তা বিশেষজ্ঞ, কৃষি ক্ষেত্রে AI প্রয়োগের অভিজ্ঞতা। সিএসই বিভাগ, ঢাকা বিশ্ববিদ্যালয়ের সাবেক শিক্ষার্থী।',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'তানভীর আহমেদ',
      position: 'সিনিয়র ডেভেলপার',
      bio: 'ওয়েব ও মোবাইল অ্যাপ ডেভেলপমেন্টে ১০ বছরের অভিজ্ঞতা। বাংলাদেশে প্রযুক্তি উন্নয়নে অবদান রাখছেন।',
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
                আমাদের সম্পর্কে
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white/90"
              >
                একটি আধুনিক কৃত্রিম বুদ্ধিমত্তা ভিত্তিক কৃষি সহায়তা প্ল্যাটফর্ম
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
                <span className="font-bold text-primary dark:text-primary-light">কৃষি সহায়ক</span> হলো একটি আধুনিক কৃত্রিম বুদ্ধিমত্তা (AI) ভিত্তিক কৃষি সহায়তা প্ল্যাটফর্ম, যা বাংলাদেশের কৃষকদের জন্য বিশেষভাবে তৈরি করা হয়েছে।
              </p>
              <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
                আমাদের লক্ষ্য হলো বাংলাদেশের কৃষকদের আধুনিক তথ্য-প্রযুক্তির সাথে সংযুক্ত করা, যাতে তারা সহজেই কৃষি বিষয়ক সমস্যার সমাধান পেতে পারেন। আমাদের AI সিস্টেম বাংলা ভাষায় কৃষকদের প্রশ্নের উত্তর দিয়ে থাকে, যা তাদের কাছে সহজবোধ্য ও প্রয়োগযোগ্য।
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                কৃষি সহায়ক প্রচলিত চাষাবাদ পদ্ধতি, রোগ-বালাই নিয়ন্ত্রণ, সার ব্যবস্থাপনা, ফসল সংরক্ষণ, আবহাওয়া তথ্য, ও বাজার দর সম্পর্কে হালনাগাদ তথ্য প্রদান করে কৃষকদের সাহায্য করে থাকে।
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
              আমাদের বৈশিষ্ট্য
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
              আমাদের টিম
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
}

export default AboutPage; 