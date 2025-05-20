import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  CloudSun, 
  Microscope, 
  Shield, 
  Calculator, 
  Users, 
  BadgeDollarSign,
  Droplets,
  ScanText,
  ChevronRight
} from 'lucide-react';

interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  primaryColor: string;
  secondaryColor: string;
}

const useCases: UseCase[] = [
  {
    title: 'ফসল রোগ নির্ণয়',
    description: 'ফসলের ছবি আপলোড করে দ্রুত রোগ সনাক্তকরণ এবং প্রতিকারের পরামর্শ পান।',
    icon: <Sprout className="h-8 w-8" />,
    features: [
      'ছবি বিশ্লেষণ করে রোগ সনাক্তকরণ',
      'রোগের কারণ ও লক্ষণ সম্পর্কে বিস্তারিত তথ্য',
      'সঠিক বালাইনাশক ও প্রতিকারের পদ্ধতি',
      'পরবর্তী সময়ে প্রতিরোধের উপায়'
    ],
    primaryColor: 'from-green-600',
    secondaryColor: 'to-green-400'
  },
  {
    title: 'আবহাওয়া ভিত্তিক পরামর্শ',
    description: 'আপনার এলাকার আবহাওয়ার পূর্বাভাস অনুযায়ী ফসল রোপণ এবং পরিচর্যার পরামর্শ।',
    icon: <CloudSun className="h-8 w-8" />,
    features: [
      'স্থানীয় আবহাওয়া তথ্য ও পূর্বাভাস',
      'আবহাওয়া অনুযায়ী ফসল নির্বাচন',
      'বৃষ্টিপাত ও তাপমাত্রা বিশ্লেষণ',
      'প্রাকৃতিক দুর্যোগ থেকে সুরক্ষার কৌশল'
    ],
    primaryColor: 'from-blue-600',
    secondaryColor: 'to-blue-400'
  },
  {
    title: 'মাটি পরীক্ষা ও সার সুপারিশ',
    description: 'মাটির ধরন অনুযায়ী সঠিক সার এবং পুষ্টি ব্যবস্থাপনা সংক্রান্ত পরামর্শ।',
    icon: <Microscope className="h-8 w-8" />,
    features: [
      'মাটির pH মাত্রা ও উপযুক্ত ফসল',
      'সারের প্রকার ও পরিমাণ নির্ধারণ',
      'জৈব সার ব্যবহারের পদ্ধতি',
      'মাটির উর্বরতা বৃদ্ধির উপায়'
    ],
    primaryColor: 'from-amber-600',
    secondaryColor: 'to-amber-400'
  },
  {
    title: 'কীটপতঙ্গ নিয়ন্ত্রণ',
    description: 'বিভিন্ন প্রকার কীটপতঙ্গ সনাক্তকরণ এবং পরিবেশ বান্ধব উপায়ে তাদের নিয়ন্ত্রণের কৌশল।',
    icon: <Shield className="h-8 w-8" />,
    features: [
      'কীটপতঙ্গ সনাক্তকরণ ও বিশ্লেষণ',
      'ইন্টিগ্রেটেড পেস্ট ম্যানেজমেন্ট (IPM)',
      'জৈবিক কীটনাশক ব্যবহার',
      'ফসলের প্রাকৃতিক শত্রু সংরক্ষণ'
    ],
    primaryColor: 'from-red-600',
    secondaryColor: 'to-red-400'
  },
  {
    title: 'ফসল উৎপাদন হিসাব',
    description: 'ফসল উৎপাদন থেকে বাজারজাতকরণ পর্যন্ত সম্পূর্ণ আর্থিক হিসাব ও পরিকল্পনা।',
    icon: <Calculator className="h-8 w-8" />,
    features: [
      'উৎপাদন খরচ হিসাব ও বিশ্লেষণ',
      'মুনাফা সর্বোচ্চকরণের কৌশল',
      'বিভিন্ন ফসলের আর্থিক তুলনা',
      'সময়ভিত্তিক উৎপাদন পরিকল্পনা'
    ],
    primaryColor: 'from-purple-600',
    secondaryColor: 'to-purple-400'
  },
  {
    title: 'কৃষি সম্প্রদায়',
    description: 'অন্যান্য কৃষকদের সাথে যোগাযোগ, অভিজ্ঞতা বিনিময় এবং নতুন কৃষি জ্ঞান আদান-প্রদান।',
    icon: <Users className="h-8 w-8" />,
    features: [
      'কৃষক-টু-কৃষক তথ্য বিনিময়',
      'স্থানীয় কৃষক গোষ্ঠীর সাথে সংযোগ',
      'সফল কৃষকদের গল্প ও টিপস',
      'প্রশ্নোত্তর ও সমস্যা সমাধান'
    ],
    primaryColor: 'from-primary',
    secondaryColor: 'to-green-500'
  }
];

// Additional use cases for smaller cards
const additionalUseCases = [
  {
    title: 'ফসলের দাম',
    description: 'বাজারের হালনাগাদ দাম ও ভবিষ্যৎ মূল্য পূর্বাভাস',
    icon: <BadgeDollarSign className="h-6 w-6" />,
  },
  {
    title: 'পানি ব্যবস্থাপনা',
    description: 'সেচ পদ্ধতি ও পানি সংরক্ষণের কৌশল',
    icon: <Droplets className="h-6 w-6" />,
  },
  {
    title: 'ফসলের বৈচিত্র্য',
    description: 'নতুন ও লাভজনক ফসল চাষের পরামর্শ',
    icon: <ScanText className="h-6 w-6" />,
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-primary">
              ব্যবহার ক্ষেত্র
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            কৃষি সহায়ক বিভিন্ন ক্ষেত্রে কৃষকদের সাহায্য করে থাকে। নিচে কৃষি সহায়কের কিছু প্রধান ব্যবহার ক্ষেত্র দেখানো হল।
          </p>
        </motion.div>
        
        {/* Main use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 h-full flex flex-col"
            >
              <div className={`bg-gradient-to-r ${useCase.primaryColor} ${useCase.secondaryColor} p-6 text-white`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                  <div className="bg-white/20 p-2 rounded-full">
                    {useCase.icon}
                  </div>
                </div>
                <p className="mt-2 text-white/90">{useCase.description}</p>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-gray-700 dark:text-gray-300 font-semibold mb-4">বৈশিষ্ট্য সমূহ:</h4>
                <div className="space-y-3 mb-6 flex-1">
                  {useCase.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className={`rounded-full p-1 bg-gradient-to-r ${useCase.primaryColor} ${useCase.secondaryColor} text-white mr-3 mt-0.5 flex-shrink-0`}>
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`mt-auto self-start py-1.5`}>
                  <div className={`flex items-center font-medium bg-gradient-to-r ${useCase.primaryColor} ${useCase.secondaryColor} bg-clip-text text-transparent hover:underline`}>
                    <span>আরও জানুন</span>
                    <ChevronRight className={`ml-1 h-4 w-4 bg-gradient-to-r ${useCase.primaryColor} ${useCase.secondaryColor} bg-clip-text text-transparent`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional use cases in smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalUseCases.map((useCase, index) => (
            <motion.div
              key={`additional-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 flex items-center group"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                {useCase.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">{useCase.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{useCase.description}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection; 