import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ContactSection from '@/components/sections/ContactSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Languages, Keyboard, FileText, MessageSquare, 
  Pencil, Copy, Search, BookOpen, FileQuestion, 
  Mail, Code, Newspaper, Mic, Volume2, AlignLeft, 
  Upload, Download, CheckCircle, Clock
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ToolsPage = () => {
  const { translate } = useLanguage();
  
  const categories = [
    {
      id: "translation",
      name: translate("Translation Tools", "অনুবাদ টুলস")
    },
    {
      id: "generation",
      name: translate("Text Generation", "টেক্সট জেনারেশন")
    },
    {
      id: "analysis",
      name: translate("Text Analysis", "টেক্সট বিশ্লেষণ")
    },
    {
      id: "speech",
      name: translate("Speech & Audio", "স্পিচ এবং অডিও")
    }
  ];

  const tools = {
    translation: [
      {
        name: translate("Bengali Translator", "বাংলা অনুবাদক"),
        description: translate(
          "Translate text between Bengali and over 50 languages with high accuracy and natural-sounding results.",
          "বাংলা এবং ৫০টিরও বেশি ভাষার মধ্যে উচ্চ নির্ভুলতা এবং প্রাকৃতিক-শব্দময় ফলাফল সহ টেক্সট অনুবাদ করুন।"
        ),
        icon: <Languages className="h-12 w-12 text-primary" />,
        features: [
          translate(
            "Bidirectional translation (Bengali to other languages and vice versa)",
            "দ্বি-মুখী অনুবাদ (বাংলা থেকে অন্যান্য ভাষায় এবং বিপরীতভাবে)"
          ),
          translate(
            "Maintains cultural context and idioms",
            "সাংস্কৃতিক প্রসঙ্গ এবং বাগধারা বজায় রাখে"
          ),
          translate(
            "Specialized terminology support for various fields",
            "বিভিন্ন ক্ষেত্রের জন্য বিশেষায়িত পরিভাষা সমর্থন"
          ),
          translate(
            "Bulk translation capabilities",
            "বাল্ক অনুবাদ ক্ষমতা"
          )
        ]
      },
      {
        name: translate("Document Translator", "ডকুমেন্ট অনুবাদক"),
        description: translate(
          "Upload documents in various formats and get them translated to or from Bengali while preserving the formatting.",
          "বিভিন্ন ফরম্যাটে ডকুমেন্ট আপলোড করুন এবং ফরম্যাটিং বজায় রেখে সেগুলিকে বাংলায় বা বাংলা থেকে অনুবাদ করুন।"
        ),
        icon: <FileText className="h-12 w-12 text-primary" />,
        features: [
          translate(
            "Supports DOC, DOCX, PDF, PPT, XLSX formats",
            "DOC, DOCX, PDF, PPT, XLSX ফরম্যাট সমর্থন করে"
          ),
          translate(
            "Preserves original document formatting",
            "মূল ডকুমেন্ট ফরম্যাটিং সংরক্ষণ করে"
          ),
          translate(
            "Translation memory for consistent terminology",
            "সামঞ্জস্যপূর্ণ পরিভাষার জন্য অনুবাদ মেমরি"
          ),
          translate(
            "Batch processing for multiple documents",
            "একাধিক ডকুমেন্টের জন্য ব্যাচ প্রসেসিং"
          )
        ]
      },
      {
        name: "Bengali Keyboard",
        description: "Type in Bengali online without installing any software. Compatible with all major operating systems and browsers.",
        icon: <Keyboard className="h-12 w-12 text-primary" />,
        features: [
          "Phonetic typing (type in English, get Bengali text)",
          "Traditional Bengali keyboard layout option",
          "Autocorrect and suggestions for Bengali",
          "Copy-paste functionality for easy transfer"
        ]
      },
      {
        name: "Website Translator",
        description: "Translate entire websites to or from Bengali with a simple URL input. Ideal for making content accessible.",
        icon: <Search className="h-12 w-12 text-primary" />,
        features: [
          "Full website translation via URL",
          "Customizable translation depth options",
          "Preserves website functionality and links",
          "Translation preview before publishing"
        ]
      }
    ],
    generation: [
      {
        name: translate("Bengali Content Writer", "বাংলা কন্টেন্ট রাইটার"),
        description: translate(
          "Generate high-quality Bengali content for various purposes including blogs, articles, product descriptions, and more.",
          "ব্লগ, আর্টিকেল, প্রোডাক্ট বর্ণনা, এবং আরও অনেক কিছুসহ বিভিন্ন উদ্দেশ্যে উচ্চ-মানের বাংলা কন্টেন্ট তৈরি করুন।"
        ),
        icon: <Pencil className="h-12 w-12 text-primary" />,
        features: [
          translate(
            "Topic-specific content generation",
            "টপিক-নির্দিষ্ট কন্টেন্ট জেনারেশন"
          ),
          translate(
            "Adjustable tone and style settings",
            "সমন্বয়যোগ্য টোন এবং স্টাইল সেটিংস"
          ),
          translate(
            "SEO-optimized content options",
            "SEO-অপটিমাইজড কন্টেন্ট অপশন"
          ),
          translate(
            "Various content lengths from snippets to full articles",
            "স্নিপেট থেকে পূর্ণ আর্টিকেল পর্যন্ত বিভিন্ন কন্টেন্ট দৈর্ঘ্য"
          )
        ]
      },
      {
        name: "Email Composer",
        description: "Create professional emails in Bengali for various business and personal contexts with appropriate formality and tone.",
        icon: <Mail className="h-12 w-12 text-primary" />,
        features: [
          "Multiple email templates (formal, informal, business)",
          "Customizable greeting and closing options",
          "Tone adjustment (polite, assertive, friendly)",
          "Grammar and spelling verification"
        ]
      },
      {
        name: "Chat Assistant",
        description: "Engage with our AI assistant in natural Bengali conversation for information, entertainment, or practice.",
        icon: <MessageSquare className="h-12 w-12 text-primary" />,
        features: [
          "Natural conversation in Bengali",
          "Knowledge about Bengali culture and customs",
          "Ability to explain Bengali idioms and expressions",
          "Educational interactions for language learning"
        ]
      },
      {
        name: "Code Documentation",
        description: "Generate Bengali documentation for code with explanations tailored to different technical knowledge levels.",
        icon: <Code className="h-12 w-12 text-primary" />,
        features: [
          "Code explanation in simple Bengali",
          "Technical documentation generation",
          "Support for major programming languages",
          "Customizable complexity level of explanations"
        ]
      }
    ],
    analysis: [
      {
        name: translate("Bengali Text Summarizer", "বাংলা টেক্সট সামারাইজার"),
        description: translate(
          "Create concise summaries of long Bengali texts while preserving the key information and meaning.",
          "মূল তথ্য এবং অর্থ বজায় রেখে দীর্ঘ বাংলা টেক্সটের সংক্ষিপ্ত সারসংক্ষেপ তৈরি করুন।"
        ),
        icon: <AlignLeft className="h-12 w-12 text-primary" />,
        features: [
          translate(
            "Adjustable summary length",
            "সমন্বয়যোগ্য সারসংক্ষেপ দৈর্ঘ্য"
          ),
          translate(
            "Extraction or abstraction-based summarization",
            "এক্সট্রাকশন বা অ্যাবস্ট্রাকশন-ভিত্তিক সারসংক্ষেপ"
          ),
          translate(
            "Support for various text types (news, academic, literary)",
            "বিভিন্ন টেক্সট টাইপের জন্য সমর্থন (নিউজ, একাডেমিক, লিটারারি)"
          ),
          translate(
            "Key points highlighting option",
            "মূল পয়েন্ট হাইলাইট করার অপশন"
          )
        ]
      },
      {
        name: "Sentiment Analyzer",
        description: "Analyze the sentiment and emotional tone of Bengali text to understand public opinion and feedback.",
        icon: <CheckCircle className="h-12 w-12 text-primary" />,
        features: [
          "Positive/negative/neutral classification",
          "Emotion detection (joy, anger, sadness, etc.)",
          "Intensity scoring for sentiments",
          "Batch analysis for multiple texts"
        ]
      },
      {
        name: "Grammar Checker",
        description: "Verify and correct grammar, spelling, and style issues in Bengali texts with detailed explanations.",
        icon: <FileQuestion className="h-12 w-12 text-primary" />,
        features: [
          "Grammar error detection and correction",
          "Spelling verification for Bengali",
          "Style improvement suggestions",
          "Learning explanations for common errors"
        ]
      },
      {
        name: "Content Classifier",
        description: "Automatically categorize Bengali content into topics, domains, or complexity levels for content management.",
        icon: <Newspaper className="h-12 w-12 text-primary" />,
        features: [
          "Topic classification",
          "Reading level assessment",
          "Genre identification for literary texts",
          "Custom taxonomy support"
        ]
      }
    ],
    speech: [
      {
        name: translate("Bengali Speech to Text", "বাংলা স্পিচ টু টেক্সট"),
        description: translate(
          "Convert spoken Bengali into written text with high accuracy, supporting various dialects and accents.",
          "উচ্চ নির্ভুলতার সাথে বাংলা কথা লিখিত টেক্সটে রূপান্তর করুন, বিভিন্ন উপভাষা এবং উচ্চারণ সমর্থন করে।"
        ),
        icon: <Mic className="h-12 w-12 text-primary" />,
        features: [
          translate(
            "Support for major Bengali dialects",
            "প্রধান বাংলা উপভাষার জন্য সমর্থন"
          ),
          translate(
            "Real-time transcription option",
            "রিয়েল-টাইম ট্রান্সক্রিপশন অপশন"
          ),
          translate(
            "Audio file upload capability",
            "অডিও ফাইল আপলোড ক্ষমতা"
          ),
          translate(
            "Speaker identification for multi-person audio",
            "মাল্টি-পারসন অডিওর জন্য স্পিকার আইডেন্টিফিকেশন"
          )
        ]
      },
      {
        name: "Text to Speech",
        description: "Transform written Bengali text into natural-sounding speech with options for different voices and speeds.",
        icon: <Volume2 className="h-12 w-12 text-primary" />,
        features: [
          "Multiple voice options (male/female)",
          "Adjustable speech rate and pitch",
          "Regional accent selection",
          "Audio file export in various formats"
        ]
      },
      {
        name: "Audio Translator",
        description: "Translate spoken content between Bengali and other languages in real-time or from recorded audio.",
        icon: <Upload className="h-12 w-12 text-primary" />,
        features: [
          "Speech-to-speech translation",
          "Support for 30+ languages to/from Bengali",
          "Real-time conversation mode",
          "Audio file processing"
        ]
      },
      {
        name: "Pronunciation Coach",
        description: "Improve your Bengali pronunciation with real-time feedback and guided practice exercises.",
        icon: <BookOpen className="h-12 w-12 text-primary" />,
        features: [
          "Pronunciation assessment and scoring",
          "Targeted practice exercises",
          "Word-by-word breakdown",
          "Dialect-specific training options"
        ]
      }
    ]
  };

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
                {translate("Bengali Language Tools", "বাংলা ভাষা টুলস")}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white/90"
              >
                {translate(
                  "Powerful tools to help you work with Bengali language",
                  "বাংলা ভাষার সাথে কাজ করতে সাহায্য করার জন্য শক্তিশালী টুলস"
                )}
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Tools Introduction */}
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
                  "provides a suite of specialized tools designed to help you work with Bengali language content. Our tools leverage advanced AI to make Bengali language processing more accessible and efficient.",
                  "বাংলা ভাষার কন্টেন্টের সাথে কাজ করতে সাহায্য করার জন্য বিশেষায়িত টুলসের একটি সুইট প্রদান করে। আমাদের টুলস উন্নত এআই ব্যবহার করে বাংলা ভাষা প্রসেসিং আরও সহজলভ্য এবং দক্ষ করে তোলে।"
                )}
              </p>
              <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
                {translate(
                  "Whether you need to translate between languages, generate Bengali content, analyze existing text, or work with speech, our tools offer state-of-the-art capabilities with a focus on the Bengali language.",
                  "আপনার ভাষার মধ্যে অনুবাদ করা, বাংলা কন্টেন্ট তৈরি করা, বিদ্যমান টেক্সট বিশ্লেষণ করা, বা স্পিচের সাথে কাজ করার প্রয়োজন হোক না কেন, আমাদের টুলস বাংলা ভাষার উপর ফোকাস করে অত্যাধুনিক ক্ষমতা প্রদান করে।"
                )}
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                {translate(
                  "All our tools are regularly improved based on user feedback and the latest advances in natural language processing technology.",
                  "আমাদের সমস্ত টুলস নিয়মিতভাবে ব্যবহারকারীর প্রতিক্রিয়া এবং ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং প্রযুক্তিতে সর্বশেষ অগ্রগতির উপর ভিত্তি করে উন্নত করা হয়।"
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Tabs */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white"
            >
              {translate("Our Tools", "আমাদের টুলস")}
            </motion.h2>
            
            <Tabs defaultValue="translation" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>{category.name}</TabsTrigger>
                ))}
              </TabsList>
              
              {Object.keys(tools).map(categoryId => (
                <TabsContent key={categoryId} value={categoryId}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tools[categoryId].map((tool, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="p-6">
                          <div className="flex items-start">
                            <div className="mr-4">
                              {tool.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{tool.name}</h3>
                              <p className="text-gray-700 dark:text-gray-300 mb-4">{tool.description}</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                            <h4 className="font-semibold text-md mb-2 text-gray-900 dark:text-white">
                              {translate("Key Features:", "মূল বৈশিষ্ট্যসমূহ:")}
                            </h4>
                            <ul className="space-y-1">
                              {tool.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                                  <span className="text-primary mr-2">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-6 flex justify-between">
                            <Button className="bg-primary hover:bg-primary/90 text-white">
                              {translate("Try Now", "এখনই ব্যবহার করুন")}
                            </Button>
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                              {translate("Learn More", "আরও জানুন")}
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Integration Section */}
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
                {translate("API Integration", "এপিআই ইন্টিগ্রেশন")}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg mb-8 text-center text-gray-700 dark:text-gray-300"
              >
                {translate(
                  "Integrate our powerful Bengali language tools directly into your applications",
                  "আমাদের শক্তিশালী বাংলা ভাষা টুলস সরাসরি আপনার অ্যাপ্লিকেশনে ইন্টিগ্রেট করুন"
                )}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {translate("For Developers", "ডেভেলপারদের জন্য")}
                    </h3>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex-grow">
                      <div className="flex items-center mb-4">
                        <Code className="h-6 w-6 mr-2 text-primary" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {translate("RESTful API", "RESTful এপিআই")}
                        </h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {translate(
                          "Access all our tools through a simple and well-documented API. Integrate Bengali language capabilities into your applications with minimal effort.",
                          "একটি সহজ এবং সুস্পষ্টভাবে ডকুমেন্টেড এপিআইয়ের মাধ্যমে আমাদের সমস্ত টুলস অ্যাক্সেস করুন। সর্বনিম্ন প্রচেষ্টায় আপনার অ্যাপ্লিকেশনে বাংলা ভাষার ক্ষমতা ইন্টিগ্রেট করুন।"
                        )}
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>{translate("Comprehensive API documentation", "ব্যাপক এপিআই ডকুমেন্টেশন")}</span>
                        </li>
                        <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>{translate("SDK for popular programming languages", "জনপ্রিয় প্রোগ্রামিং ভাষার জন্য SDK")}</span>
                        </li>
                        <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>{translate("Webhook support for asynchronous operations", "অ্যাসিঙ্ক্রোনাস অপারেশনের জন্য ওয়েবহুক সাপোর্ট")}</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        {translate("View Documentation", "ডকুমেন্টেশন দেখুন")}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {translate("For Businesses", "ব্যবসাগুলির জন্য")}
                    </h3>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex-grow">
                      <div className="flex items-center mb-4">
                        <Download className="h-6 w-6 mr-2 text-primary" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {translate("Plug & Play Solutions", "প্লাগ এন্ড প্লে সলিউশন")}
                        </h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {translate(
                          "Ready-to-use integrations for popular platforms and content management systems. Add Bengali language capabilities to your existing workflow.",
                          "জনপ্রিয় প্ল্যাটফর্ম এবং কন্টেন্ট ম্যানেজমেন্ট সিস্টেমের জন্য ব্যবহারের জন্য প্রস্তুত ইন্টিগ্রেশন। আপনার বিদ্যমান ওয়ার্কফ্লোতে বাংলা ভাষার ক্ষমতা যোগ করুন।"
                        )}
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>{translate("WordPress, Shopify, and Webflow plugins", "ওয়ার্ডপ্রেস, শপিফাই এবং ওয়েবফ্লো প্লাগইন")}</span>
                        </li>
                        <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>{translate("Custom integration services available", "কাস্টম ইন্টিগ্রেশন সেবা উপলব্ধ")}</span>
                        </li>
                        <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>{translate("Priority support for enterprise clients", "এন্টারপ্রাইজ ক্লায়েন্টদের জন্য অগ্রাধিকার সমর্থন")}</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        {translate("See Integrations", "ইন্টিগ্রেশন দেখুন")}
                      </Button>
                    </div>
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

export default ToolsPage; 