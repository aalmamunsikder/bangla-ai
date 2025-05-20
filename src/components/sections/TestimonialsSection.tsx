import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  text: string;
  textBn: string;
  rating: number;
  profession: string;
  professionBn: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Abdul Karim',
    location: 'Dhaka',
    avatar: 'A',
    text: 'I\'ve been using Bangla AI for the past five months. When I needed help with a complex document translation, the AI provided accurate results that preserved the original meaning perfectly.',
    textBn: 'আমি গত পাঁচ মাস ধরে বাংলা এআই ব্যবহার করছি। যখন আমার একটি জটিল ডকুমেন্ট অনুবাদে সাহায্য প্রয়োজন ছিল, এআই সঠিক ফলাফল দিয়েছে যা মূল অর্থ পুরোপুরি সংরক্ষণ করেছে।',
    rating: 5,
    profession: 'Translator',
    professionBn: 'অনুবাদক',
    date: 'May 12, 2023'
  },
  {
    id: 2,
    name: 'Salma Akter',
    location: 'Mymensingh',
    avatar: 'S',
    text: 'As a content creator, Bangla AI has helped me generate ideas and create engaging social media posts. It understands cultural context and helps me craft content that resonates with my audience.',
    textBn: 'একজন কন্টেন্ট ক্রিয়েটর হিসাবে, বাংলা এআই আমাকে আইডিয়া তৈরি করতে এবং আকর্ষণীয় সোশ্যাল মিডিয়া পোস্ট তৈরি করতে সাহায্য করেছে। এটি সাংস্কৃতিক প্রসঙ্গ বোঝে এবং আমাকে এমন কন্টেন্ট তৈরি করতে সাহায্য করে যা আমার দর্শকদের সাথে সংযোগ স্থাপন করে।',
    rating: 5,
    profession: 'Content Creator',
    professionBn: 'কন্টেন্ট ক্রিয়েটর',
    date: 'June 23, 2023'
  },
  {
    id: 3,
    name: 'Rafiqul Islam',
    location: 'Khulna',
    avatar: 'R',
    text: 'After trying several AI solutions, I found Bangla AI to be uniquely adapted to understanding local dialects and expressions. This has been invaluable for my customer service team.',
    textBn: 'বেশ কয়েকটি এআই সমাধান চেষ্টা করার পর, আমি বাংলা এআই স্থানীয় উপভাষা এবং অভিব্যক্তি বোঝার জন্য অনন্যভাবে অভিযোজিত পেয়েছি। এটি আমার কাস্টমার সার্ভিস টিমের জন্য অমূল্য হয়েছে।',
    rating: 4,
    profession: 'Business Owner',
    professionBn: 'ব্যবসা মালিক',
    date: 'July 5, 2023'
  },
  {
    id: 4,
    name: 'Jahangir Alam',
    location: 'Sylhet',
    avatar: 'J',
    text: 'The educational support features have helped my students tremendously. Bangla AI explains complex concepts in simple terms and generates practice materials that are culturally relevant.',
    textBn: 'শিক্ষামূলক সহায়তা বৈশিষ্ট্যগুলি আমার ছাত্রদের প্রচুর সাহায্য করেছে। বাংলা এআই জটিল ধারণাগুলিকে সহজ ভাষায় ব্যাখ্যা করে এবং এমন অনুশীলন উপকরণ তৈরি করে যা সাংস্কৃতিকভাবে প্রাসঙ্গিক।',
    rating: 5,
    profession: 'Teacher',
    professionBn: 'শিক্ষক',
    date: 'August 18, 2023'
  },
  {
    id: 5,
    name: 'Nazma Begum',
    location: 'Barishal',
    avatar: 'N',
    text: 'For women professionals in our community, this has been a blessing. The AI helps us draft professional emails and documents in both Bangla and English, saving us time and improving communication.',
    textBn: 'আমাদের সম্প্রদায়ের নারী পেশাদারদের জন্য, এটি আশীর্বাদ হয়েছে। এআই আমাদের বাংলা এবং ইংরেজি উভয় ভাষায় পেশাদার ইমেল এবং নথি তৈরি করতে সাহায্য করে, যা আমাদের সময় বাঁচায় এবং যোগাযোগ উন্নত করে।',
    rating: 5,
    profession: 'NGO Director',
    professionBn: 'এনজিও পরিচালক',
    date: 'September 30, 2023'
  },
  {
    id: 6,
    name: 'Mohammad Hossain',
    location: 'Dinajpur',
    avatar: 'M',
    text: 'I\'ve received excellent assistance with research paper analysis and summarization from Bangla AI. It understands academic content and provides thoughtful insights that have improved my work.',
    textBn: 'আমি বাংলা এআই থেকে গবেষণা পত্র বিশ্লেষণ এবং সারসংক্ষেপে চমৎকার সহায়তা পেয়েছি। এটি একাডেমিক বিষয়বস্তু বোঝে এবং চিন্তাশীল অন্তর্দৃষ্টি প্রদান করে যা আমার কাজ উন্নত করেছে।',
    rating: 5,
    profession: 'Researcher',
    professionBn: 'গবেষক',
    date: 'October 10, 2023'
  }
];

const TestimonialsSection = () => {
  const { translate } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1));
  };
  
  const getVisibleTestimonials = () => {
    const itemsPerPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const start = activeIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  // Calculate average rating
  const averageRating = (testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-600">
                {translate("Our Users'", "আমাদের ব্যবহারকারীদের")}
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">{translate("Feedback", "মতামত")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {translate(
                "Thousands of users across the country have already benefited from using Bangla AI. Let's see their experiences.",
                "দেশজুড়ে হাজার হাজার ব্যবহারকারী ইতিমধ্যে বাংলা এআই ব্যবহার করে উপকৃত হয়েছেন। চলুন তাদের অভিজ্ঞতা দেখি।"
              )}
            </p>
            
            {/* Rating summary */}
            <div className="bg-white dark:bg-gray-800 py-6 px-10 rounded-2xl inline-flex items-center gap-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-center border-r border-gray-200 dark:border-gray-600 pr-6">
                <div className="text-5xl font-bold text-primary dark:text-primary-light mb-1">{averageRating}</div>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.round(Number(averageRating)) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{translate("Average Rating", "গড় রেটিং")}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{testimonials.length}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{translate("User Reviews", "ব্যবহারকারী রিভিউ")}</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Testimonials grid/carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 cursor-pointer"
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <div className="absolute top-6 right-6 text-primary/10 dark:text-primary/20">
                  <Quote className="h-12 w-12" />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                      {testimonial.avatar.substring(0, 1)}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow">
                      <Star className="h-4 w-4 text-white fill-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                      <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                      <p className="text-sm text-primary dark:text-primary-light">
                        {translate(testimonial.profession, testimonial.professionBn)}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-4 font-medium">
                    "{translate(testimonial.text, testimonial.textBn)}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{testimonial.date}</span>
                </div>
                
                <button 
                  className="mt-4 text-sm text-primary dark:text-primary-light font-medium flex items-center hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTestimonial(testimonial);
                  }}
                >
                  {translate("See Details", "বিস্তারিত দেখুন")}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-12 gap-3">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition-colors duration-300 border border-gray-100 dark:border-gray-700"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition-colors duration-300 border border-gray-100 dark:border-gray-700"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-green-500/10 dark:from-primary/20 dark:to-green-500/20 p-10 rounded-3xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md">
                <MessageSquare className="h-8 w-8 text-primary dark:text-primary-light" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {translate(
                "Have you also benefited from using Bangla AI?",
                "আপনিও কি বাংলা এআই ব্যবহার করে উপকৃত হয়েছেন?"
              )}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {translate(
                "Share your experience and help us improve our service for everyone.",
                "আপনার অভিজ্ঞতা শেয়ার করুন এবং সবার জন্য আমাদের সেবা উন্নত করতে সাহায্য করুন।"
              )}
            </p>
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-bold transition-colors shadow-lg">
              {translate("Submit Your Feedback", "আপনার মতামত জমা দিন")}
            </button>
          </div>
        </motion.div>
        
        {/* Testimonial Detail Modal */}
        {selectedTestimonial && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button 
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
                onClick={() => setSelectedTestimonial(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-green-500 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-md">
                  {selectedTestimonial.avatar.substring(0, 1)}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedTestimonial.name}</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-500 dark:text-gray-400">{selectedTestimonial.location}</p>
                    <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                    <p className="text-primary dark:text-primary-light">{translate(selectedTestimonial.profession, selectedTestimonial.professionBn)}</p>
                  </div>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < selectedTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">{translate("Review", "সমীক্ষা")}:</p>
                <div className="relative p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="absolute top-3 left-3 text-primary/10 dark:text-primary/20">
                    <Quote className="h-8 w-8" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg pl-6">
                    "{translate(selectedTestimonial.text, selectedTestimonial.textBn)}"
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-4">
                <span className="text-gray-500 dark:text-gray-400">{selectedTestimonial.date}</span>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary-light rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 font-medium">
                    {translate("Like", "পছন্দ")}
                  </button>
                  <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium">
                    {translate("Share", "শেয়ার")}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection; 