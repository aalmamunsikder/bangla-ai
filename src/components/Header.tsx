import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translate } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full shadow-md bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/40 border border-primary/20 dark:border-primary/30">
              <Fingerprint className="h-6 w-6 text-primary dark:text-primary-light" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-green-600 dark:from-primary-light dark:to-green-400 bg-clip-text text-transparent">Bangla AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition">
              {translate('Home', 'হোম')}
            </Link>
            <Link to="/models" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition">
              {translate('AI Models', 'এআই মডেল')}
            </Link>
            <Link to="/tools" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition">
              {translate('Tools', 'টুলস')}
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition">
              {translate('About Us', 'আমাদের সম্পর্কে')}
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition">
              {translate('Contact', 'যোগাযোগ')}
            </Link>
            
            <div className="flex items-center ml-4 space-x-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button className="agricultural-green" size="sm">
                {translate('Login', 'লগইন')}
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 py-4 border-t border-gray-100 dark:border-gray-800 md:hidden">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translate('Home', 'হোম')}
                </Link>
              </li>
              <li>
                <Link
                  to="/models"
                  className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translate('AI Models', 'এআই মডেল')}
                </Link>
              </li>
              <li>
                <Link
                  to="/tools"
                  className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translate('Tools', 'টুলস')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translate('About Us', 'আমাদের সম্পর্কে')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translate('Contact', 'যোগাযোগ')}
                </Link>
              </li>
              <li>
                <Button className="agricultural-green w-full" size="sm">
                  {translate('Login', 'লগইন')}
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;