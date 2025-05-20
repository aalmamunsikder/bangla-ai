import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface CropCategory {
  name: string;
  icon: string;
  description: string;
}

const CropsPage = () => {
  const cropCategories: CropCategory[] = [
    {
      name: 'ধান',
      icon: '🌾',
      description: 'বাংলাদেশের প্রধান খাদ্য ফসল। বিভিন্ন প্রকারের ধান চাষ, রোগ প্রতিরোধ ও ফলন বাড়ানোর উপায়।'
    },
    {
      name: 'গম',
      icon: '🌿',
      description: 'শীতকালীন প্রধান ফসল। গম চাষের পদ্ধতি, রোগ দমন ও অধিক ফলন পাওয়ার কৌশল।'
    },
    {
      name: 'ভুট্টা',
      icon: '🌽',
      description: 'উচ্চ পুষ্টিমানের ফসল। ভুট্টা চাষের আধুনিক প্রযুক্তি, ভাল বীজ নির্বাচন এবং সার প্রয়োগের তথ্য।'
    },
    {
      name: 'সবজি',
      icon: '🥬',
      description: 'বিভিন্ন প্রকার সবজি চাষ, জৈবিক পদ্ধতিতে রোগ দমন এবং উন্নত বীজ উৎপাদন।'
    },
    {
      name: 'ফল',
      icon: '🍎',
      description: 'মৌসুমি ও বারোমাসী ফল চাষ, কলম তৈরি, রোগ দমন ও বাজারজাতকরণ।'
    },
    {
      name: 'তেল বীজ',
      icon: '🌱',
      description: 'সরিষা, তিল, সূর্যমুখী ইত্যাদি চাষ, সার প্রয়োগ ও রোগ দমন।'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-8 agricultural-light-green">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">ফসল চাষের তথ্য</h1>
          <p className="text-lg text-center mb-8">বাংলাদেশে চাষ করা বিভিন্ন ফসলের পূর্ণাঙ্গ তথ্য, আধুনিক প্রযুক্তি ও উন্নত বীজ সম্পর্কে জানুন</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cropCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <Button className="agricultural-green w-full font-bold">বিস্তারিত দেখুন</Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CropsPage; 