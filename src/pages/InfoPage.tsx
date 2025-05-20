import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FarmingArticle {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const InfoPage = () => {
  const articles: FarmingArticle[] = [
    {
      title: 'বর্ষা মৌসুমে ধান চাষের আধুনিক কৌশল',
      description: 'বর্ষা মৌসুমে অধিক ফলন পেতে আধুনিক পদ্ধতি ও উন্নত বীজ ব্যবহারের গুরুত্ব সম্পর্কে জানুন।',
      imageUrl: 'https://images.unsplash.com/photo-1594407567888-ac547d50cbf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmljZSUyMGZhcm1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      category: 'techniques'
    },
    {
      title: 'সমন্বিত বালাই ব্যবস্থাপনা (আইপিএম)',
      description: 'রাসায়নিক কীটনাশক কম ব্যবহার করে প্রাকৃতিক উপায়ে ফসল রক্ষার আধুনিক পদ্ধতি।',
      imageUrl: 'https://images.unsplash.com/photo-1608894953478-f947ada45333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlc3QlMjBjb250cm9sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      category: 'techniques'
    },
    {
      title: 'মাটি পরীক্ষা ও সার ব্যবস্থাপনা',
      description: 'মাটির স্বাস্থ্য রক্ষা করে দীর্ঘমেয়াদি ফলন বাড়ানোর উপায় ও কৌশল।',
      imageUrl: 'https://images.unsplash.com/photo-1619561528468-8a4846bb7959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNvaWwlMjB0ZXN0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      category: 'techniques'
    },
    {
      title: 'কৃষি ঋণ সুবিধা',
      description: 'সরকারি ও বেসরকারি প্রতিষ্ঠান থেকে কৃষি ঋণ পাওয়ার নিয়ম ও প্রক্রিয়া।',
      imageUrl: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      category: 'support'
    },
    {
      title: 'কৃষি বিমা',
      description: 'প্রাকৃতিক দুর্যোগে ফসল ক্ষতির জন্য কৃষি বিমা ও ক্ষতিপূরণ পাওয়ার তথ্য।',
      imageUrl: 'https://images.unsplash.com/photo-1596442828814-b6826b86931a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb29kJTIwZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      category: 'support'
    },
    {
      title: 'সরকারি কৃষি সেবা',
      description: 'কৃষি সম্প্রসারণ অধিদপ্তর থেকে কৃষকদের জন্য উপলব্ধ সেবাসমূহ।',
      imageUrl: 'https://images.unsplash.com/photo-1592982537447-53ac83cbf0c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm1lciUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      category: 'support'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-8 agricultural-light-green">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">কৃষি তথ্য ও সেবা</h1>
          <p className="text-lg text-center mb-8">আধুনিক কৃষি প্রযুক্তি, সরকারি সেবা ও চাষাবাদের উন্নত পদ্ধতি সম্পর্কে জানুন</p>
          
          <Tabs defaultValue="techniques" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="techniques" className="font-bold">আধুনিক কৃষি কৌশল</TabsTrigger>
              <TabsTrigger value="support" className="font-bold">কৃষি সহায়তা সেবা</TabsTrigger>
            </TabsList>
            <TabsContent value="techniques">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {articles.filter(article => article.category === 'techniques').map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="support">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {articles.filter(article => article.category === 'support').map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const ArticleCard: React.FC<{ article: FarmingArticle }> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
        <p className="text-gray-700 mb-4">{article.description}</p>
        <Button className="agricultural-green w-full font-bold">বিস্তারিত পড়ুন</Button>
      </div>
    </div>
  );
};

export default InfoPage; 