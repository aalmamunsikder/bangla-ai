import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className={`
        flex items-center gap-1.5 px-3 py-1.5 h-9 rounded-full 
        transition-all duration-300 
        border border-primary/20 dark:border-primary/30 
        bg-primary/5 dark:bg-primary/10 
        hover:bg-primary/10 dark:hover:bg-primary/20 
        text-primary dark:text-primary-light 
        font-medium
      `}
    >
      <Globe className="h-3.5 w-3.5" />
      <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
    </Button>
  );
};

export default LanguageSwitcher; 