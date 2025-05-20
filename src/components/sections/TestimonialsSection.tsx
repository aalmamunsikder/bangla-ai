import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  text: string;
  rating: number;
  profession: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'আব্দুল করিম',
    location: 'রংপুর',
    avatar: 'আ',
    text: 'আমি পাঁচ বছর ধরে কৃষি সহায়ক ব্যবহার করছি। আমার বাদাম ফসলে রোগ দেখা দিলে অ্যাপের মাধ্যমে ছবি তুলে পাঠিয়েছিলাম। সঠিক পরামর্শ পেয়ে আমি ফসল বাঁচাতে সক্ষম হয়েছিলাম।',
    rating: 5,
    profession: 'বাদাম চাষি',
    date: '১২ মে, ২০২৩'
  },
  {
    id: 2,
    name: 'সালমা আক্তার',
    location: 'ময়মনসিংহ',
    avatar: 'স',
    text: 'আমি একজন নতুন কৃষক। কৃষি সহায়ক আমাকে ধাপে ধাপে শাকসবজি চাষের সঠিক পদ্ধতি শিখিয়েছে। এখন আমি নিজের বাড়ির পাশের জমিতে ভালো ফলন পাচ্ছি।',
    rating: 5,
    profession: 'শাকসবজি চাষি',
    date: '২৩ জুন, ২০২৩'
  },
  {
    id: 3,
    name: 'রফিকুল ইসলাম',
    location: 'খুলনা',
    avatar: 'র',
    text: 'আমার এলাকায় বন্যা হওয়ার পর কোন ফসল চাষ করা যাবে, সেই বিষয়ে কৃষি সহায়ক থেকে মূল্যবান পরামর্শ পেয়েছি। আমি এখন আবার ফসল চাষ শুরু করতে পেরেছি।',
    rating: 4,
    profession: 'মিশ্র চাষি',
    date: '৫ জুলাই, ২০২৩'
  },
  {
    id: 4,
    name: 'জাহাঙ্গীর আলম',
    location: 'সিলেট',
    avatar: 'জ',
    text: 'ধান চাষের জন্য উপযুক্ত সময় এবং সঠিক পরিচর্যা সম্পর্কে পরামর্শ পেয়ে আমি এবার রেকর্ড পরিমাণ ফলন পেয়েছি। কৃষি সহায়ক আমার জীবনে পরিবর্তন এনেছে।',
    rating: 5,
    profession: 'ধান চাষি',
    date: '১৮ আগস্ট, ২০২৩'
  },
  {
    id: 5,
    name: 'নাজমা বেগম',
    location: 'বরিশাল',
    avatar: 'ন',
    text: 'আমাদের গ্রামের মহিলা কৃষকদের জন্য এটি একটি আশীর্বাদ। এর মাধ্যমে আমরা সবজি চাষ করে স্বাবলম্বী হতে পেরেছি। সহজে ফসলের যত্ন নেওয়া এখন অনেক সহজ হয়েছে।',
    rating: 5,
    profession: 'সবজি চাষি',
    date: '৩০ সেপ্টেম্বর, ২০২৩'
  },
  {
    id: 6,
    name: 'মোঃ হোসেন আলী',
    location: 'দিনাজপুর',
    avatar: 'মোঃ',
    text: 'আমার ফসলে কীটনাশক ব্যবহার কমিয়ে জৈব পদ্ধতিতে চাষাবাদের জন্য কৃষি সহায়ক থেকে অনেক ভালো পরামর্শ পেয়েছি। এখন আমি স্বাস্থ্যকর ফসল উৎপাদন করছি।',
    rating: 5,
    profession: 'আম চাষি',
    date: '১০ অক্টোবর, ২০২৩'
  }
];

const TestimonialsSection = () => {
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
                আমাদের ব্যবহারকারীদের
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">মতামত</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              সারা দেশের হাজারো কৃষক ইতিমধ্যে কৃষি সহায়ক ব্যবহার করে উপকৃত হয়েছেন। আসুন জেনে নিই তাদের অভিজ্ঞতা।
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
                <p className="text-sm text-gray-500 dark:text-gray-400">গড় রেটিং</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{testimonials.length}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">ব্যবহারকারীর মতামত</p>
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
                      <p className="text-sm text-primary dark:text-primary-light">{testimonial.profession}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-4 font-medium">"{testimonial.text}"</p>
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
                  বিস্তারিত দেখুন
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
              আপনিও কৃষি সহায়ক ব্যবহার করে উপকৃত হয়েছেন?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              আমাদের সাথে আপনার অভিজ্ঞতা শেয়ার করুন এবং অন্যান্য কৃষকদের সাহায্য করুন
            </p>
            <a 
              href="#contact" 
              className="inline-block py-4 px-8 rounded-full bg-gradient-to-r from-primary to-green-600 text-white font-bold transform transition-transform hover:scale-105 shadow-lg"
            >
              মতামত দিন
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Testimonial detail modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
          >
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => setSelectedTestimonial(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-green-500 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-md">
                {selectedTestimonial.avatar.substring(0, 1)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedTestimonial.name}</h3>
                <div className="flex items-center flex-wrap gap-2">
                  <p className="text-gray-500 dark:text-gray-400">{selectedTestimonial.location}</p>
                  <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                  <p className="text-primary dark:text-primary-light">{selectedTestimonial.profession}</p>
                  <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                  <p className="text-gray-500 dark:text-gray-400">{selectedTestimonial.date}</p>
                </div>
              </div>
            </div>
            
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${i < selectedTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 relative">
              <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20 dark:text-primary/30" />
              <span className="block pl-6">{selectedTestimonial.text}</span>
            </p>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">কিভাবে কৃষি সহায়ক আপনাকে সাহায্য করেছে?</h4>
              <p className="text-gray-700 dark:text-gray-300">
                "{selectedTestimonial.name} এর মতে, কৃষি সহায়ক তাদের ফসলের উৎপাদন বাড়াতে এবং সমস্যার সমাধানে দ্রুত সাহায্য করেছে। আমরা কৃতজ্ঞ যে আমাদের পণ্য আমাদের কৃষকদের সাহায্য করছে।"
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection; 