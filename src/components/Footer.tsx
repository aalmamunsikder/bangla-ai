import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Home, Phone, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="Krishi Sahayok Logo" className="h-8 w-8 mr-2" />
              <h3 className="text-xl font-bold text-primary">কৃষি সহায়ক</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              বাংলাদেশের কৃষকদের জন্য একটি AI ভিত্তিক সহায়তা প্ল্যাটফর্ম, যেখানে তারা তাদের ফসল, পশুপাখি, এবং অন্যান্য কৃষি সম্পর্কিত সমস্যার সমাধান পেতে পারে।
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
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">প্রয়োজনীয় লিংক</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  হোম পেজ
                </Link>
              </li>
              <li>
                <Link to="/crops" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  ফসল সম্পর্কিত তথ্য
                </Link>
              </li>
              <li>
                <Link to="/info" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  কৃষি তথ্য
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">কৃষি বিভাগ</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/crops/rice" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  ধান চাষ
                </Link>
              </li>
              <li>
                <Link to="/crops/vegetables" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  সবজি চাষ
                </Link>
              </li>
              <li>
                <Link to="/crops/fruits" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  ফল চাষ
                </Link>
              </li>
              <li>
                <Link to="/crops/fish" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  মৎস চাষ
                </Link>
              </li>
              <li>
                <Link to="/crops/poultry" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                  পোল্ট্রি
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">যোগাযোগ</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Home className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">কৃষি ভবন, ৪৯-৫১ দিলকুশা বা/এ, ঢাকা-১০০০</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">+৮৮০ ২ ৯৫৬৭৮৯১</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">info@krishishahayok.bd</span>
              </li>
              <li className="flex items-start">
                <Info className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">সোম - শুক্র: সকাল ৯টা - বিকাল ৫টা</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} কৃষি সহায়ক। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                    গোপনীয়তা নীতি
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                    ব্যবহারের শর্তাবলী
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
                    কুকি নীতি
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