import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send, CheckCircle, MessageSquare, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { translate } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-16 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-16 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
        <div className="absolute -top-24 left-1/2 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-primary">
              {translate('Get in Touch', 'যোগাযোগ করুন')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translate(
              'Have questions about our AI services? Send us a message and we\'ll get back to you as soon as possible.',
              'আমাদের এআই সেবা সম্পর্কে প্রশ্ন আছে? আমাদের একটি বার্তা পাঠান এবং আমরা যত তাড়াতাড়ি সম্ভব আপনার কাছে ফিরে আসব।'
            )}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-full">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {translate('Get in Touch', 'যোগাযোগ করুন')}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {translate(
                  'Don\'t hesitate to contact us for any questions, feedback, or collaboration. Our team is always ready to assist you.',
                  'যেকোনো প্রশ্ন, মতামত বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না। আমাদের টিম সর্বদা আপনাকে সহায়তা করতে প্রস্তুত।'
                )}
              </p>
              
              <div className="space-y-6 mb-8">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{translate('Address', 'ঠিকানা')}</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {translate(
                        'Bangla AI Tower, 49-51 Dilkusha C/A, Dhaka-1000',
                        'বাংলা এআই টাওয়ার, ৪৯-৫১ দিলকুশা বা/এ, ঢাকা-১০০০'
                      )}
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{translate('Phone', 'ফোন')}</h4>
                    <p className="text-gray-600 dark:text-gray-300">+880 2 9567891</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{translate('Email', 'ইমেইল')}</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@banglaai.com</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="p-5 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-lg">{translate('Office Hours', 'অফিস সময়')}</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">{translate('Sunday - Thursday:', 'রবিবার - বৃহস্পতিবার:')}</span>
                    <span>{translate('9:00 AM - 5:00 PM', 'সকাল ৯:০০ - বিকাল ৫:০০')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{translate('Friday:', 'শুক্রবার:')}</span>
                    <span>{translate('Closed', 'বন্ধ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{translate('Saturday:', 'শনিবার:')}</span>
                    <span>{translate('10:00 AM - 2:00 PM', 'সকাল ১০:০০ - দুপুর ২:০০')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 lg:col-span-3"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-full">
                <Send className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {translate('Send Us a Message', 'আমাদের একটি বার্তা পাঠান')}
              </h3>
            </div>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-8 rounded-xl flex items-center justify-center flex-col text-center gap-4"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{translate('Message Sent Successfully!', 'বার্তা সফলভাবে পাঠানো হয়েছে!')}</h4>
                  <p className="text-green-700 dark:text-green-300">{translate('We\'ll get back to you soon. Thank you.', 'আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। ধন্যবাদ।')}</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{translate('Name', 'নাম')}</label>
                    <Input 
                      id="name" 
                      value={formState.name}
                      onChange={handleChange}
                      placeholder={translate('Your name', 'আপনার নাম')}
                      className="w-full" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{translate('Email', 'ইমেইল')}</label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={translate('Your email', 'আপনার ইমেইল')}
                      className="w-full" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{translate('Subject', 'বিষয়')}</label>
                  <Input 
                    id="subject" 
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder={translate('Message subject', 'বার্তার বিষয়')}
                    className="w-full" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{translate('Message', 'বার্তা')}</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                    placeholder={translate('Write your message...', 'আপনার বার্তা লিখুন...')}
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-500 text-white font-bold py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>{translate('Sending...', 'পাঠানো হচ্ছে...')}</span>
                  ) : (
                    <span>{translate('Send Message', 'বার্তা পাঠান')}</span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 