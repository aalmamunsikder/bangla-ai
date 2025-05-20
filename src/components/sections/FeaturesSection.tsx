import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Zap, Sprout, ChevronRight, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Feature {
  icon: React.ReactNode;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  color: string;
  details: string[];
  detailsBn: string[];
}

const FeaturesSection = () => {
  const { translate } = useLanguage();

  const features: Feature[] = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Bangla Language Focus',
      titleBn: 'বাংলা ভাষায় ফোকাস',
      description: 'Specialized AI tailored for the Bangla language and cultural context.',
      descriptionBn: 'বাংলা ভাষা এবং সাংস্কৃতিক প্রসঙ্গের জন্য বিশেষভাবে তৈরি করা এআই।',
      color: 'from-blue-500 to-blue-600',
      details: [
        'Native Bangla language processing',
        'Cultural context awareness',
        'Regional dialect understanding',
        'Specialized Bangla vocabulary'
      ],
      detailsBn: [
        'নেটিভ বাংলা ভাষা প্রসেসিং',
        'সাংস্কৃতিক প্রসঙ্গ সচেতনতা',
        'আঞ্চলিক উপভাষা বোঝার ক্ষমতা',
        'বিশেষায়িত বাংলা শব্দভাণ্ডার'
      ]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Expert AI System',
      titleBn: 'বিশেষজ্ঞ এআই সিস্টেম',
      description: 'AI trained by language experts to provide accurate and helpful responses.',
      descriptionBn: 'সঠিক এবং সহায়ক প্রতিক্রিয়া প্রদানের জন্য ভাষা বিশেষজ্ঞদের দ্বারা প্রশিক্ষিত এআই।',
      color: 'from-amber-500 to-amber-600',
      details: [
        'Linguist-trained AI model',
        'Content verification systems',
        'Academic knowledge integration',
        'Continuous learning capabilities'
      ],
      detailsBn: [
        'ভাষাবিদদের দ্বারা প্রশিক্ষিত এআই মডেল',
        'কন্টেন্ট যাচাইকরণ সিস্টেম',
        'একাডেমিক জ্ঞান সংযোজন',
        'নিরন্তর শিক্ষণ ক্ষমতা'
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Real-Time Solutions',
      titleBn: 'রিয়েল-টাইম সমাধান',
      description: 'Fast responses and problem-solving, anytime and anywhere.',
      descriptionBn: 'দ্রুত প্রতিক্রিয়া এবং সমস্যা সমাধান, যেকোনো সময় এবং যেকোনো জায়গায়।',
      color: 'from-red-500 to-red-600',
      details: [
        'Instant query responses',
        'Contextual conversations',
        'Quick problem resolution',
        'Updated information access'
      ],
      detailsBn: [
        'তাৎক্ষণিক কোয়েরি প্রতিক্রিয়া',
        'প্রাসঙ্গিক কথোপকথন',
        'দ্রুত সমস্যা সমাধান',
        'আপডেটেড তথ্য অ্যাক্সেস'
      ]
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      title: 'Continuous Development',
      titleBn: 'নিরন্তর উন্নয়ন',
      description: 'Constantly evolving AI with regular updates to enhance performance.',
      descriptionBn: 'পারফরম্যান্স বাড়াতে নিয়মিত আপডেটের সাথে ক্রমাগত বিকশিত হচ্ছে এআই।',
      color: 'from-green-500 to-green-600',
      details: [
        'Regular model improvements',
        'New feature additions',
        'Community-driven enhancements',
        'Adaptive learning systems'
      ],
      detailsBn: [
        'নিয়মিত মডেল উন্নতিকরণ',
        'নতুন ফিচার সংযোজন',
        'কমিউনিটি-চালিত উন্নতিকরণ',
        'অভিযোজনশীল শিক্ষণ সিস্টেম'
      ]
    }
  ];

  // Additional features for the bottom section
  const additionalFeatures = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      titleBn: "২৪/৭ সাপোর্ট",
      description: "Get assistance anytime, day or night",
      descriptionBn: "যেকোনো সময়, দিন বা রাতে সহায়তা পান"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Multilingual Support",
      titleBn: "বহুভাষিক সমর্থন",
      description: "Seamless transitions between Bangla and English",
      descriptionBn: "বাংলা এবং ইংরেজির মধ্যে নিরবচ্ছিন্ন পরিবর্তন"
    }
  ];

  const FeatureCard = ({ feature, index }: { feature: Feature, index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className="relative overflow-hidden rounded-2xl shadow-lg h-full"
      >
        <div className={`bg-gradient-to-r ${feature.color} px-6 pt-6 pb-4 text-white`}>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">{translate(feature.title, feature.titleBn)}</h3>
            <div className="bg-white/20 p-2 rounded-full">
              {feature.icon}
            </div>
          </div>
          <p className="mt-2 text-white/90">{translate(feature.description, feature.descriptionBn)}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6">
          <ul className="space-y-3">
            {feature.details.map((detail, idx) => (
              <li key={idx} className="flex items-start">
                <div className={`rounded-full p-1 bg-gradient-to-r ${feature.color} text-white mr-3 mt-0.5 flex-shrink-0`}>
                  <ChevronRight className="h-3 w-3" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {translate(detail, feature.detailsBn[idx])}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-600">
              {translate("Our Features", "আমাদের বৈশিষ্ট্যসমূহ")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translate(
              "Bangla AI platform combines cutting-edge AI technology to make communication and content creation easier and more productive.",
              "বাংলা এআই প্ল্যাটফর্ম যোগাযোগ এবং কন্টেন্ট তৈরি সহজ এবং আরও উৎপাদনশীল করতে অত্যাধুনিক এআই প্রযুক্তি একত্রিত করে।"
            )}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        
        {/* Additional features in a row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {translate(feature.title, feature.titleBn)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {translate(feature.description, feature.descriptionBn)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 