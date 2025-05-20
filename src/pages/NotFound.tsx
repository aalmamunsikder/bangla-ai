import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 flex items-center justify-center agricultural-light-green py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="text-3xl font-bold mb-4">পৃষ্ঠাটি পাওয়া যায়নি</h2>
            <p className="text-lg mb-8">আপনি যে পৃষ্ঠাটি খুঁজছেন তা বর্তমানে উপলব্ধ নয়। পরীক্ষা করুন আপনি সঠিক ঠিকানা লিখেছেন কিনা।</p>
            
            <Link to="/">
              <Button className="agricultural-green font-bold px-8 py-6 text-lg">
                হোম পেজে ফিরে যান
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">আমাদের চ্যাট ইন্টারফেস ব্যবহার করুন</h3>
              <p className="text-gray-700 mb-4">কৃষি বিষয়ে যেকোনো প্রশ্ন করতে আমাদের AI চ্যাটবট ব্যবহার করুন</p>
              <Link to="/">
                <Button variant="outline" className="w-full font-bold">চ্যাট করুন</Button>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">কৃষি তথ্য দেখুন</h3>
              <p className="text-gray-700 mb-4">বিভিন্ন ফসল ও আধুনিক কৃষি প্রযুক্তি সম্পর্কে জানুন</p>
              <Link to="/info">
                <Button variant="outline" className="w-full font-bold">তথ্য দেখুন</Button>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">যোগাযোগ করুন</h3>
              <p className="text-gray-700 mb-4">কোনো সাহায্য বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন</p>
              <Link to="/contact">
                <Button variant="outline" className="w-full font-bold">যোগাযোগ করুন</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;