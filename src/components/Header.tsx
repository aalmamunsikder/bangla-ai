import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Krishi Sahayok Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-primary">কৃষি সহায়ক</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition">
              হোম
            </Link>
            <Link to="/crops" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition">
              ফসল
            </Link>
            <Link to="/info" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition">
              কৃষি তথ্য
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition">
              আমাদের সম্পর্কে
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition">
              যোগাযোগ
            </Link>
            
            <div className="flex items-center ml-4 space-x-2">
              <ThemeToggle />
              <Button className="agricultural-green" size="sm">
                লগইন
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
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
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  to="/crops"
                  className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ফসল
                </Link>
              </li>
              <li>
                <Link
                  to="/info"
                  className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  কৃষি তথ্য
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Button className="agricultural-green w-full" size="sm">
                  লগইন
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