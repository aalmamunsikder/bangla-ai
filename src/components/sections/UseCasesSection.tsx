import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  MessageSquare, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Newspaper,
  Mail,
  BookOpenCheck,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface UseCase {
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  icon: React.ReactNode;
  features: string[];
  featuresBn: string[];
  primaryColor: string;
  secondaryColor: string;
}

const UseCasesSection = () => {
  const { translate } = useLanguage();
  
  const useCases: UseCase[] = [
    {
      title: 'Content Creation',
      titleBn: 'কন্টেন্ট তৈরি',
      description: 'Generate high-quality content in Bangla for various purposes with AI assistance.',
      descriptionBn: 'এআই সহায়তায় বিভিন্ন উদ্দেশ্যে বাংলায় উচ্চ-মানের কন্টেন্ট তৈরি করুন।',
      icon: <FileText className="h-8 w-8" />,
      features: [
        'Blog and article writing',
        'Social media content generation',
        'Product descriptions and marketing copy',
        'Creative writing and storytelling'
      ],
      featuresBn: [
        'ব্লগ এবং আর্টিকেল লেখা',
        'সোশ্যাল মিডিয়া কন্টেন্ট তৈরি',
        'প্রোডাক্ট বর্ণনা এবং মার্কেটিং কপি',
        'ক্রিয়েটিভ লেখা এবং গল্প বলা'
      ],
      primaryColor: 'from-green-600',
      secondaryColor: 'to-green-400'
    },
    {
      title: 'Conversational Assistant',
      titleBn: 'কথোপকথন সহকারী',
      description: 'Interact with an AI that understands and responds in fluent Bangla for daily assistance.',
      descriptionBn: 'দৈনন্দিন সহায়তার জন্য সাবলীল বাংলায় বোঝে এবং উত্তর দেয় এমন একটি এআই-এর সাথে ইন্টারঅ্যাক্ট করুন।',
      icon: <MessageSquare className="h-8 w-8" />,
      features: [
        'Everyday questions and answers',
        'Task management and reminders',
        'Information retrieval in Bangla',
        'Personalized recommendations'
      ],
      featuresBn: [
        'প্রতিদিনের প্রশ্ন এবং উত্তর',
        'টাস্ক ম্যানেজমেন্ট এবং রিমাইন্ডার',
        'বাংলায় তথ্য সংগ্রহ',
        'ব্যক্তিগতকৃত সুপারিশসমূহ'
      ],
      primaryColor: 'from-blue-600',
      secondaryColor: 'to-blue-400'
    },
    {
      title: 'Educational Support',
      titleBn: 'শিক্ষামূলক সহায়তা',
      description: 'Learn and study more effectively with AI-powered educational tools in Bangla.',
      descriptionBn: 'বাংলায় এআই-চালিত শিক্ষামূলক টুল দিয়ে আরও কার্যকরভাবে শিখুন এবং অধ্যয়ন করুন।',
      icon: <GraduationCap className="h-8 w-8" />,
      features: [
        'Homework help and explanations',
        'Concept simplification',
        'Study material generation',
        'Exam preparation assistance'
      ],
      featuresBn: [
        'হোমওয়ার্কে সাহায্য এবং ব্যাখ্যা',
        'ধারণা সরলীকরণ',
        'অধ্যয়ন উপকরণ তৈরি',
        'পরীক্ষার প্রস্তুতিতে সহায়তা'
      ],
      primaryColor: 'from-amber-600',
      secondaryColor: 'to-amber-400'
    },
    {
      title: 'Business Applications',
      titleBn: 'ব্যবসায়িক অ্যাপ্লিকেশন',
      description: 'Enhance business operations with AI tools designed for Bengali-speaking professionals.',
      descriptionBn: 'বাংলা-ভাষী পেশাদারদের জন্য ডিজাইন করা এআই টুল দিয়ে ব্যবসায়িক পরিচালনা উন্নত করুন।',
      icon: <Briefcase className="h-8 w-8" />,
      features: [
        'Email and communication drafting',
        'Document analysis and summarization',
        'Customer service automation',
        'Business intelligence in local context'
      ],
      featuresBn: [
        'ইমেইল এবং যোগাযোগ খসড়া তৈরি',
        'ডকুমেন্ট বিশ্লেষণ এবং সারসংক্ষেপ',
        'কাস্টমার সার্ভিস অটোমেশন',
        'স্থানীয় প্রসঙ্গে বিজনেস ইন্টেলিজেন্স'
      ],
      primaryColor: 'from-red-600',
      secondaryColor: 'to-red-400'
    },
    {
      title: 'Translation & Localization',
      titleBn: 'অনুবাদ এবং স্থানীয়করণ',
      description: 'Bridge language gaps with advanced translation and cultural context adaptation.',
      descriptionBn: 'উন্নত অনুবাদ এবং সাংস্কৃতিক প্রসঙ্গ অভিযোজনের মাধ্যমে ভাষাগত ব্যবধান দূর করুন।',
      icon: <Globe className="h-8 w-8" />,
      features: [
        'Bangla to English translation',
        'English to Bangla translation',
        'Cultural context preservation',
        'Technical terminology translation'
      ],
      featuresBn: [
        'বাংলা থেকে ইংরেজি অনুবাদ',
        'ইংরেজি থেকে বাংলা অনুবাদ',
        'সাংস্কৃতিক প্রসঙ্গ সংরক্ষণ',
        'টেকনিকাল পরিভাষা অনুবাদ'
      ],
      primaryColor: 'from-purple-600',
      secondaryColor: 'to-purple-400'
    },
    {
      title: 'Research & Analysis',
      titleBn: 'গবেষণা এবং বিশ্লেষণ',
      description: 'Access information and analyze data with AI tools that understand Bangla context.',
      descriptionBn: 'বাংলা প্রসঙ্গ বোঝে এমন এআই টুল দিয়ে তথ্য অ্যাক্সেস করুন এবং ডেটা বিশ্লেষণ করুন।',
      icon: <BookOpen className="h-8 w-8" />,
      features: [
        'Research paper summaries',
        'Data analysis with Bangla output',
        'Information aggregation and filtering',
        'Trend identification and reporting'
      ],
      featuresBn: [
        'গবেষণা পত্রের সারসংক্ষেপ',
        'বাংলা আউটপুটে ডেটা বিশ্লেষণ',
        'তথ্য একত্রীকরণ এবং ফিল্টারিং',
        'ট্রেন্ড শনাক্তকরণ এবং রিপোর্টিং'
      ],
      primaryColor: 'from-primary',
      secondaryColor: 'to-green-500'
    }
  ];

  // Additional use cases for smaller cards
  const additionalUseCases = [
    {
      title: 'Media Monitoring',
      titleBn: 'মিডিয়া মনিটরিং',
      description: 'Track news and social media in Bangla',
      descriptionBn: 'বাংলায় খবর এবং সোশ্যাল মিডিয়া ট্র্যাক করুন',
      icon: <Newspaper className="h-6 w-6" />,
    },
    {
      title: 'Email Assistance',
      titleBn: 'ইমেইল সহায়তা',
      description: 'Compose and respond to emails efficiently',
      descriptionBn: 'দক্ষতার সাথে ইমেইল লিখুন এবং উত্তর দিন',
      icon: <Mail className="h-6 w-6" />,
    },
    {
      title: 'Literature Analysis',
      titleBn: 'সাহিত্য বিশ্লেষণ',
      description: 'Analyze and generate insights on Bangla texts',
      descriptionBn: 'বাংলা টেক্সট বিশ্লেষণ করুন এবং অন্তর্দৃষ্টি তৈরি করুন',
      icon: <BookOpenCheck className="h-6 w-6" />,
    }
  ];

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
              {translate("Use Cases", "ব্যবহারের ক্ষেত্রসমূহ")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translate(
              "Bangla AI assists users in various domains. Below are some key applications where our AI excels.",
              "বাংলা এআই বিভিন্ন ডোমেইনে ব্যবহারকারীদের সহায়তা করে। নিচে কিছু প্রধান ক্ষেত্র দেওয়া আছে যেখানে আমাদের এআই উৎকর্ষ প্রদর্শন করে।"
            )}
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
                  <h3 className="text-xl font-bold">{translate(useCase.title, useCase.titleBn)}</h3>
                  <div className="bg-white/20 p-2 rounded-full">
                    {useCase.icon}
                  </div>
                </div>
                <p className="mt-2 text-white/90">{translate(useCase.description, useCase.descriptionBn)}</p>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-gray-700 dark:text-gray-300 font-semibold mb-4">
                  {translate("Features:", "বৈশিষ্ট্যসমূহ:")}
                </h4>
                <div className="space-y-3 mb-6 flex-1">
                  {useCase.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className={`rounded-full p-1 bg-gradient-to-r ${useCase.primaryColor} ${useCase.secondaryColor} text-white mr-3 mt-0.5 flex-shrink-0`}>
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {translate(feature, useCase.featuresBn[i])}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className={`mt-auto self-start py-1.5`}>
                  <div className={`flex items-center font-medium bg-gradient-to-r ${useCase.primaryColor} ${useCase.secondaryColor} bg-clip-text text-transparent hover:underline`}>
                    <span>{translate("Learn More", "আরও জানুন")}</span>
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
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {translate(useCase.title, useCase.titleBn)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {translate(useCase.description, useCase.descriptionBn)}
                </p>
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