import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ContactSection from '@/components/sections/ContactSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Cpu, Zap, Code, Languages, MessageSquare, Brain, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ModelsPage = () => {
  const { translate } = useLanguage();

  const models = [
    {
      name: 'BanglaGPT',
      badge: translate('Flagship Model', 'প্রধান মডেল'),
      description: translate(
        'Our most advanced Bengali language model capable of understanding and generating natural Bengali text, translating between Bengali and other languages, and answering questions in Bengali.',
        'আমাদের সবচেয়ে উন্নত বাংলা ভাষা মডেল যা প্রাকৃতিক বাংলা টেক্সট বোঝা এবং তৈরি করতে, বাংলা এবং অন্যান্য ভাষার মধ্যে অনুবাদ করতে, এবং বাংলায় প্রশ্নের উত্তর দিতে সক্ষম।'
      ),
      capabilities: [
        translate('Natural Bengali text generation', 'প্রাকৃতিক বাংলা টেক্সট জেনারেশন'),
        translate('Bengali-English translation', 'বাংলা-ইংরেজি অনুবাদ'),
        translate('Question answering in Bengali', 'বাংলায় প্রশ্নের উত্তর'),
        translate('Content summarization', 'কন্টেন্ট সারসংক্ষেপ'),
        translate('Conversational abilities', 'কথোপকথন দক্ষতা')
      ],
      icon: <Sparkles className="h-8 w-8 text-yellow-500" />,
      color: 'from-yellow-500 to-amber-600'
    },
    {
      name: 'Bangla-BERT',
      badge: translate('Specialized', 'বিশেষায়িত'),
      description: translate(
        'A powerful BERT-based model fine-tuned specifically for Bengali language understanding. Excels at text classification, sentiment analysis, and named entity recognition.',
        'বাংলা ভাষা বোঝার জন্য বিশেষভাবে ফাইন-টিউন করা একটি শক্তিশালী BERT-ভিত্তিক মডেল। টেক্সট শ্রেণীবিভাগ, অনুভূতি বিশ্লেষণ এবং নেমড এন্টিটি রিকগনিশনে অত্যন্ত ভালো।'
      ),
      capabilities: [
        translate('Text classification', 'টেক্সট শ্রেণীবিভাগ'),
        translate('Sentiment analysis', 'অনুভূতি বিশ্লেষণ'),
        translate('Named entity recognition', 'নেমড এন্টিটি রিকগনিশন'),
        translate('Text similarity', 'টেক্সট সিমিলারিটি'),
        translate('Zero-shot learning', 'জিরো-শট লার্নিং')
      ],
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Bangla-T5',
      badge: translate('Versatile', 'বহুমুখী'),
      description: translate(
        'A sequence-to-sequence model for Bengali text transformation tasks like translation, summarization, and grammar correction.',
        'অনুবাদ, সারসংক্ষেপ এবং ব্যাকরণ সংশোধনের মতো বাংলা টেক্সট রূপান্তর কাজের জন্য একটি সিকোয়েন্স-টু-সিকোয়েন্স মডেল।'
      ),
      capabilities: [
        translate('Text summarization', 'টেক্সট সারসংক্ষেপ'),
        translate('Grammar correction', 'ব্যাকরণ সংশোধন'),
        translate('Text simplification', 'টেক্সট সরলীকরণ'),
        translate('Translation between Bengali dialects', 'বাংলা উপভাষাগুলির মধ্যে অনুবাদ'),
        translate('Content rewriting', 'কন্টেন্ট পুনর্লেখন')
      ],
      icon: <Languages className="h-8 w-8 text-green-500" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'BanglaCode',
      badge: translate('Technical', 'প্রযুক্তিগত'),
      description: translate(
        'Specialized model for programming assistance in Bengali. Helps convert Bengali programming instructions to code and explains code in Bengali.',
        'বাংলায় প্রোগ্রামিং সহায়তার জন্য বিশেষায়িত মডেল। বাংলা প্রোগ্রামিং নির্দেশনা কোডে রূপান্তর করতে এবং বাংলায় কোড ব্যাখ্যা করতে সাহায্য করে।'
      ),
      capabilities: [
        translate('Code generation from Bengali instructions', 'বাংলা নির্দেশনা থেকে কোড জেনারেশন'),
        translate('Code explanation in Bengali', 'বাংলায় কোড ব্যাখ্যা'),
        translate('Programming tutorials', 'প্রোগ্রামিং টিউটোরিয়াল'),
        translate('Debugging assistance', 'ডিবাগিং সহায়তা'),
        translate('Technical documentation help', 'টেকনিকাল ডকুমেন্টেশন সাহায্য')
      ],
      icon: <Code className="h-8 w-8 text-purple-500" />,
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Bangla-Fast',
      badge: translate('Lightweight', 'লাইটওয়েট'),
      description: translate(
        'A compact, efficient model designed for mobile devices and low-resource environments, offering basic Bengali language capabilities with minimal processing power.',
        'মোবাইল ডিভাইস এবং কম-রিসোর্স পরিবেশের জন্য ডিজাইন করা একটি কমপ্যাক্ট, দক্ষ মডেল, যা ন্যূনতম প্রসেসিং পাওয়ার দিয়ে বেসিক বাংলা ভাষার ক্ষমতা প্রদান করে।'
      ),
      capabilities: [
        translate('Basic text completion', 'বেসিক টেক্সট কমপ্লিশন'),
        translate('Simple translation', 'সাধারণ অনুবাদ'),
        translate('Voice command recognition', 'ভয়েস কমান্ড রিকগনিশন'),
        translate('Works offline', 'অফলাইনে কাজ করে'),
        translate('Low resource requirements', 'কম রিসোর্স প্রয়োজন')
      ],
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'BanglaChat',
      badge: translate('Conversational', 'কথোপকথনমূলক'),
      description: translate(
        'A model specifically designed for natural conversations in Bengali. Excels at casual dialogue, customer service, and virtual assistance.',
        'বাংলায় প্রাকৃতিক কথোপকথনের জন্য বিশেষভাবে ডিজাইন করা একটি মডেল। ক্যাজুয়াল ডায়ালগ, কাস্টমার সার্ভিস এবং ভার্চুয়াল সহায়তায় অত্যন্ত ভালো।'
      ),
      capabilities: [
        translate('Natural conversation', 'প্রাকৃতিক কথোপকথন'),
        translate('Customer service interactions', 'কাস্টমার সার্ভিস ইন্টারঅ্যাকশন'),
        translate('Virtual assistance', 'ভার্চুয়াল সহায়তা'),
        translate('Personality customization', 'ব্যক্তিত্ব কাস্টমাইজেশন'),
        translate('Multi-turn dialogues', 'মাল্টি-টার্ন ডায়ালগ')
      ],
      icon: <MessageSquare className="h-8 w-8 text-pink-500" />,
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'BanglaEdu',
      badge: translate('Educational', 'শিক্ষামূলক'),
      description: translate(
        'Specialized for educational purposes, this model helps with Bengali language learning, homework assistance, and educational content generation.',
        'শিক্ষামূলক উদ্দেশ্যে বিশেষায়িত, এই মডেলটি বাংলা ভাষা শেখা, হোমওয়ার্ক সহায়তা এবং শিক্ষামূলক কনটেন্ট তৈরিতে সাহায্য করে।'
      ),
      capabilities: [
        translate('Bengali language learning', 'বাংলা ভাষা শেখা'),
        translate('Homework assistance', 'হোমওয়ার্ক সহায়তা'),
        translate('Educational content generation', 'শিক্ষামূলক কনটেন্ট তৈরি'),
        translate('Quiz creation', 'কুইজ তৈরি'),
        translate('Simplified explanations', 'সরলীকৃত ব্যাখ্যা')
      ],
      icon: <BookOpen className="h-8 w-8 text-teal-500" />,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'Bangla-ML',
      badge: translate('Research', 'গবেষণা'),
      description: translate(
        'Advanced research model for Bengali language processing tasks, designed for researchers and developers building specialized applications.',
        'বাংলা ভাষা প্রসেসিং টাস্কের জন্য উন্নত গবেষণা মডেল, বিশেষায়িত অ্যাপ্লিকেশন তৈরি করা গবেষক এবং ডেভেলপারদের জন্য ডিজাইন করা।'
      ),
      capabilities: [
        translate('Advanced NLP tasks', 'উন্নত এনএলপি টাস্ক'),
        translate('Research experiments', 'গবেষণা এক্সপেরিমেন্ট'),
        translate('Custom fine-tuning', 'কাস্টম ফাইন-টিউনিং'),
        translate('Model optimization', 'মডেল অপটিমাইজেশন'),
        translate('API integration', 'এপিআই ইন্টিগ্রেশন')
      ],
      icon: <Cpu className="h-8 w-8 text-gray-500" />,
      color: 'from-gray-600 to-gray-800'
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
                {translate('AI Models', 'এআই মডেল')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white/90"
              >
                {translate(
                  'Our cutting-edge Bengali language processing models',
                  'আমাদের অত্যাধুনিক বাংলা ভাষা প্রসেসিং মডেল'
                )}
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Models Introduction */}
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
                  'offers a range of specialized AI models tailored for Bengali language processing. Our models are designed to address various aspects of Bengali language understanding and generation.',
                  'বাংলা ভাষা প্রসেসিং এর জন্য বিশেষায়িত এআই মডেলের একটি সিরিজ প্রদান করে। আমাদের মডেলগুলি বাংলা ভাষা বোঝা এবং জেনারেশনের বিভিন্ন দিক সম্বোধন করার জন্য ডিজাইন করা হয়েছে।'
                )}
              </p>
              <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
                {translate(
                  'From general-purpose language models to specialized tools for specific tasks like translation, education, and programming, we provide cutting-edge AI solutions designed specifically for Bengali language.',
                  'সাধারণ উদ্দেশ্যের ভাষা মডেল থেকে শুরু করে অনুবাদ, শিক্ষা এবং প্রোগ্রামিং এর মতো নির্দিষ্ট কাজের জন্য বিশেষায়িত টুল পর্যন্ত, আমরা বাংলা ভাষার জন্য বিশেষভাবে ডিজাইন করা অত্যাধুনিক এআই সমাধান প্রদান করি।'
                )}
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                {translate(
                  'All our models are regularly updated and improved based on the latest research in artificial intelligence and natural language processing, ensuring state-of-the-art performance for Bengali language tasks.',
                  'আমাদের সব মডেল নিয়মিতভাবে আপডেট এবং উন্নত করা হয় কৃত্রিম বুদ্ধিমত্তা এবং ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং এর সর্বাধুনিক গবেষণার ভিত্তিতে, যা বাংলা ভাষার কাজের জন্য অত্যাধুনিক পারফরম্যান্স নিশ্চিত করে।'
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Models Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white"
            >
              {translate('Our AI Models', 'আমাদের এআই মডেল')}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {models.map((model, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className={`bg-gradient-to-r ${model.color} p-6 text-white`}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">{model.name}</h3>
                      <Badge className="bg-white/20 hover:bg-white/30 text-white">{model.badge}</Badge>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="mr-4">
                        {model.icon}
                      </div>
                      <p>{model.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                      {translate('Capabilities:', 'ক্ষমতাসমূহ:')}
                    </h4>
                    <ul className="space-y-2">
                      {model.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="text-primary mr-2">•</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        {translate('Learn More', 'আরও জানুন')}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* API Access Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white"
              >
                {translate('API Access', 'এপিআই অ্যাক্সেস')}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg mb-8 text-center text-gray-700 dark:text-gray-300"
              >
                {translate(
                  'Integrate our powerful Bengali language models into your applications',
                  'আপনার অ্যাপ্লিকেশনে আমাদের শক্তিশালী বাংলা ভাষা মডেলগুলি ইন্টিগ্রেট করুন'
                )}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {translate('Basic', 'বেসিক')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {translate('For individuals and small projects', 'ব্যক্তি এবং ছোট প্রজেক্টের জন্য')}
                    </p>
                    <p className="text-3xl font-bold text-primary dark:text-primary-light mb-6">$29<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/{translate('month', 'মাস')}</span></p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      {translate('Get Started', 'শুরু করুন')}
                    </Button>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-b from-primary to-green-600 text-white rounded-lg shadow-md transform scale-105">
                    <h3 className="text-xl font-bold mb-3">
                      {translate('Professional', 'প্রফেশনাল')}
                    </h3>
                    <p className="text-white/80 mb-4">
                      {translate('For businesses and growing teams', 'ব্যবসা এবং বর্ধনশীল টিমের জন্য')}
                    </p>
                    <p className="text-3xl font-bold mb-6">$99<span className="text-sm font-normal text-white/80">/{translate('month', 'মাস')}</span></p>
                    <Button className="w-full bg-white hover:bg-white/90 text-primary">
                      {translate('Get Started', 'শুরু করুন')}
                    </Button>
                  </div>
                  
                  <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {translate('Enterprise', 'এন্টারপ্রাইজ')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {translate('For large organizations', 'বড় প্রতিষ্ঠানের জন্য')}
                    </p>
                    <p className="text-3xl font-bold text-primary dark:text-primary-light mb-6">
                      {translate('Custom', 'কাস্টম')}
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      {translate('Contact Us', 'যোগাযোগ করুন')}
                    </Button>
                  </div>
                </div>
              </motion.div>
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

export default ModelsPage; 