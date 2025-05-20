import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Zap, Sprout, ChevronRight, Clock, ShieldCheck } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  details: string[];
}

const features: Feature[] = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'স্থানীয় তথ্য ভিত্তিক',
    description: 'আপনার এলাকার জন্য নির্দিষ্ট কৃষি পরামর্শ এবং আবহাওয়া পূর্বাভাস।',
    color: 'from-blue-500 to-blue-600',
    details: [
      'স্থানীয় আবহাওয়া তথ্য ও পূর্বাভাস',
      'মাটি পরীক্ষা ভিত্তিক পরামর্শ',
      'এলাকাভিত্তিক ফসল নির্বাচন',
      'মৌসুম অনুযায়ী চাষাবাদ পদ্ধতি'
    ]
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'বিশেষজ্ঞ পরামর্শ',
    description: 'অভিজ্ঞ কৃষিবিদদের দ্বারা প্রশিক্ষিত AI সিস্টেম, যা দেয় নির্ভুল পরামর্শ।',
    color: 'from-amber-500 to-amber-600',
    details: [
      'কৃষিবিদ প্রশিক্ষিত AI মডেল',
      'রোগ ও পোকামাকড় সনাক্তকরণ',
      'উৎপাদন বৃদ্ধির কৌশল',
      'আধুনিক কৃষি প্রযুক্তির পরামর্শ'
    ]
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'রিয়েল-টাইম সমাধান',
    description: 'দ্রুত উত্তর এবং সমস্যা সমাধান, যেকোনো সময় যেকোনো স্থান থেকে।',
    color: 'from-red-500 to-red-600',
    details: [
      'তাৎক্ষণিক প্রশ্নোত্তর',
      'ছবি দিয়ে রোগ সনাক্তকরণ',
      'দ্রুত সমস্যা সমাধান',
      'আপডেটেড তথ্য ও পরামর্শ'
    ]
  },
  {
    icon: <Sprout className="h-8 w-8" />,
    title: 'টেকসই কৃষি',
    description: 'পরিবেশ বান্ধব এবং টেকসই কৃষি পদ্ধতির জন্য বিশেষ পরামর্শ।',
    color: 'from-green-500 to-green-600',
    details: [
      'জৈব চাষাবাদ পদ্ধতি',
      'পানি সংরক্ষণের কৌশল',
      'প্রাকৃতিক সার ব্যবহার',
      'ফসল বিন্যাস ও মিশ্র চাষ'
    ]
  }
];

// Additional features for the bottom section
const additionalFeatures = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "২৪/৭ সহায়তা",
    description: "দিনে-রাতে যেকোনো সময় সাহায্য পান",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "বাংলা ভাষা সমর্থন",
    description: "সম্পূর্ণ বাংলায় সহজবোধ্য পরামর্শ",
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
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <div className="bg-white/20 p-2 rounded-full">
            {feature.icon}
          </div>
        </div>
        <p className="mt-2 text-white/90">{feature.description}</p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6">
        <ul className="space-y-3">
          {feature.details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <div className={`rounded-full p-1 bg-gradient-to-r ${feature.color} text-white mr-3 mt-0.5 flex-shrink-0`}>
                <ChevronRight className="h-3 w-3" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
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
              আমাদের বিশেষত্ব
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            কৃষি সহায়ক প্ল্যাটফর্মে রয়েছে অত্যাধুনিক AI প্রযুক্তি যা আপনার কৃষিকাজকে আরও সহজ ও উৎপাদনশীল করবে।
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
                  <h3 className="font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
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