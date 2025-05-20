import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bell, CheckCircle, Sparkles, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsletterSection = () => {
  const { translate } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError(translate('Email address is required', 'ইমেইল ঠিকানা আবশ্যক'));
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(translate('Please provide a valid email address', 'অনুগ্রহ করে একটি বৈধ ইমেইল ঠিকানা প্রদান করুন'));
      return;
    }
    
    setError('');
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1500);
  };
  
  const benefits = [
    translate("AI industry updates", "এআই ইন্ডাস্ট্রি আপডেট"),
    translate("New feature announcements", "নতুন ফিচার ঘোষণা"),
    translate("Bangla language tips", "বাংলা ভাষার টিপস"),
    translate("Case studies & success stories", "কেস স্টাডি এবং সাফল্যের গল্প")
  ];
  
  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-primary/95 via-primary to-green-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <motion.div 
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.4, 0.2, 0.4],
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-white opacity-5 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Floating particles */}
        <motion.div
          initial={{ y: 0, x: 0, opacity: 0.3 }}
          animate={{ 
            y: [0, -15, 0], 
            x: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute top-20 right-[20%] w-4 h-4 bg-white rounded-full opacity-30"
        ></motion.div>
        
        <motion.div
          initial={{ y: 0, x: 0, opacity: 0.3 }}
          animate={{ 
            y: [0, 20, 0], 
            x: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute bottom-32 left-[15%] w-6 h-6 bg-white rounded-full opacity-30"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{translate('Our Newsletter', 'আমাদের নিউজলেটার')}</h2>
                </div>
                
                <p className="text-lg text-white/90 mb-6">
                  {translate(
                    'Subscribe to our newsletter to receive the latest AI updates, tips, and news. We send weekly updates about new features, Bangla language processing improvements, and case studies showcasing how AI is transforming communication.',
                    'সর্বশেষ এআই আপডেট, টিপস এবং খবর পেতে আমাদের নিউজলেটারে সাবস্ক্রাইব করুন। আমরা নতুন ফিচার, বাংলা ভাষা প্রসেসিং উন্নতি এবং এআই কিভাবে যোগাযোগকে রূপান্তরিত করছে তা প্রদর্শনকারী কেস স্টাডি সম্পর্কে সাপ্তাহিক আপডেট পাঠাই।'
                  )}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-300" />
                      <span className="text-white/90 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-white/70">
                  {translate(
                    '* We keep your personal information secure and never share it with third parties.',
                    '* আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখি এবং কখনই তৃতীয় পক্ষের সাথে শেয়ার করি না।'
                  )}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                {isSubscribed ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white text-green-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{translate('Subscription Successful!', 'সাবস্ক্রিপশন সফল!')}</h4>
                    <p className="text-green-700">{translate('You will start receiving our newsletter. Thank you!', 'আপনি আমাদের নিউজলেটার পেতে শুরু করবেন। ধন্যবাদ!')}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
                    <h3 className="text-xl font-bold mb-4">{translate('Subscribe Today', 'আজই সাবস্ক্রাইব করুন')}</h3>
                    
                    <div className="mb-4">
                      <Input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={translate('Your email address', 'আপনার ইমেইল ঠিকানা')} 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/50 h-12"
                      />
                      {error && <p className="text-red-200 text-sm mt-1">{error}</p>}
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-white hover:bg-gray-100 text-primary font-bold py-3 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                      disabled={isSubscribing}
                    >
                      {isSubscribing ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {translate('Subscribing...', 'সাবস্ক্রাইব করা হচ্ছে...')}
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="h-4 w-4 mr-2" />
                          {translate('Subscribe', 'সাবস্ক্রাইব')}
                        </span>
                      )}
                    </Button>
                    
                    <div className="mt-4 text-center text-white/80">
                      <p className="text-sm">
                        {translate(
                          'One newsletter per week, you can unsubscribe at any time.',
                          'প্রতি সপ্তাহে একটি নিউজলেটার, আপনি যেকোনো সময় আনসাবস্ক্রাইব করতে পারেন।'
                        )}
                      </p>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection; 