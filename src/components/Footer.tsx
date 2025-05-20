import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Home, Phone, Info, Fingerprint } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { translate } = useLanguage();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/40 border border-primary/20 dark:border-primary/30 flex items-center justify-center mr-2 shadow-sm">
                <Fingerprint className="h-5 w-5 text-primary dark:text-primary-light" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-green-600 dark:from-primary-light dark:to-green-400 bg-clip-text text-transparent">Bangla AI</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {translate(
                'An AI-based platform for Bengali language solutions, where users can access advanced AI tools tailored specifically for Bengali language processing and content generation.',
                'এটি বাংলা ভাষার সমাধানের জন্য একটি AI-ভিত্তিক প্ল্যাটফর্ম, যেখানে ব্যবহারকারীরা বাংলা ভাষা প্রসেসিং এবং কন্টেন্ট জেনারেশনের জন্য বিশেষভাবে তৈরি উন্নত AI টুল অ্যাক্সেস করতে পারেন।'
              )}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {translate('Important Links', 'গুরুত্বপূর্ণ লিঙ্ক')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  {translate('Home', 'হোম')}
                </Link>
              </li>
              <li>
                <Link to="/models" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  {translate('AI Models', 'এআই মডেল')}
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  {translate('Tools', 'টুলস')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  {translate('About Us', 'আমাদের সম্পর্কে')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  {translate('Contact', 'যোগাযোগ')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {translate('AI Services', 'এআই সেবাসমূহ')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/translation" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  {translate('Translation', 'অনুবাদ')}
                </Link>
              </li>
              <li>
                <Link to="/services/text-generation" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  {translate('Text Generation', 'টেক্সট জেনারেশন')}
                </Link>
              </li>
              <li>
                <Link to="/services/summarization" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  {translate('Summarization', 'সারসংক্ষেপ')}
                </Link>
              </li>
              <li>
                <Link to="/services/sentiment-analysis" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  {translate('Sentiment Analysis', 'অনুভূতি বিশ্লেষণ')}
                </Link>
              </li>
              <li>
                <Link to="/services/chatbot" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  {translate('Chatbot', 'চ্যাটবট')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {translate('Contact', 'যোগাযোগ')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Home className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">
                  {translate(
                    'Tech Tower, 49-51 Dilkusha C/A, Dhaka-1000',
                    'টেক টাওয়ার, ৪৯-৫১ দিলকুশা বা/এ, ঢাকা-১০০০'
                  )}
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">+880 2 9567891</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">info@bangla-ai.com</span>
              </li>
              <li className="flex items-start">
                <Info className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">
                  {translate(
                    'Mon - Fri: 9 AM - 5 PM',
                    'সোম - শুক্র: সকাল ৯ টা - বিকাল ৫ টা'
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {translate('Bangla AI. All rights reserved.', 'বাংলা এআই। সর্বস্বত্ব সংরক্ষিত।')}
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                    {translate('Privacy Policy', 'গোপনীয়তা নীতি')}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                    {translate('Terms of Service', 'সেবার শর্তাবলী')}
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                    {translate('Cookie Policy', 'কুকি নীতি')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 