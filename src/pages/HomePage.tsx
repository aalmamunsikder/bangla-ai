import React, { useState, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ChatInterface from '@/components/ChatInterface';
import ConversationHistory from '@/components/ConversationHistory';
import FeaturesSection from '@/components/sections/FeaturesSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import { MessageSquare, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isLoading?: boolean;
  error?: boolean;
}

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messages: Message[];
}

const HomePage = () => {
  // Sample conversations
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      title: 'আলুর জন্য সারের পরিমাণ',
      lastMessage: 'আলুর জন্য সারের পরিমাণ কত হবে?',
      timestamp: new Date(),
      messages: [
        {
          role: 'assistant',
          content: 'কোন ফসলে থোকার আক্রমণ হয়েছে? (ফসলের নাম বা আক্রমণের ধরণ জানালে নির্দিষ্ট পরামর্শ দেওয়া যাবে। যেমন: বেগুনের ডাটা ও ফল ছিদ্রকারী পোকা দমন।',
          timestamp: new Date()
        }
      ]
    },
    {
      id: '2',
      title: 'লোকালাইজড ফসল',
      lastMessage: 'আমাদের এলাকায় কি ফসল হবে?',
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
      messages: [
        {
          role: 'assistant',
          content: 'কোন ফসলে থোকার আক্রমণ হয়েছে? (ফসলের নাম বা আক্রমণের ধরণ জানালে নির্দিষ্ট পরামর্শ দেওয়া যাবে। যেমন: বেগুনের ডাটা ও ফল ছিদ্রকারী পোকা দমন।',
          timestamp: new Date(Date.now() - 86400000)
        }
      ]
    }
  ]);
  
  const [activeConversationId, setActiveConversationId] = useState<string>('1'); // Default to first conversation
  
  // Get the active conversation
  const activeConversation = conversations.find(conv => conv.id === activeConversationId) || conversations[0];
  
  // Handler for creating a new conversation
  const handleCreateNewConversation = () => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: 'নতুন কথোপকথন',
      lastMessage: '',
      timestamp: new Date(),
      messages: [
        {
          role: 'assistant',
          content: 'কোন ফসলে থোকার আক্রমণ হয়েছে? (ফসলের নাম বা আক্রমণের ধরণ জানালে নির্দিষ্ট পরামর্শ দেওয়া যাবে। যেমন: বেগুনের ডাটা ও ফল ছিদ্রকারী পোকা দমন।',
          timestamp: new Date()
        }
      ]
    };
    
    setConversations([newConversation, ...conversations]);
    setActiveConversationId(newConversation.id);
  };
  
  // Handler for deleting a conversation
  const handleDeleteConversation = (id: string) => {
    setConversations(conversations.filter(conv => conv.id !== id));
    
    // If the active conversation is deleted, set active to the first available one
    if (activeConversationId === id) {
      const remainingConversations = conversations.filter(conv => conv.id !== id);
      if (remainingConversations.length > 0) {
        setActiveConversationId(remainingConversations[0].id);
      } else {
        // If no conversations left, create a new one
        handleCreateNewConversation();
      }
    }
  };
  
  // Function to update messages in a conversation
  const updateConversationMessages = useCallback((messages: Message[]) => {
    if (!activeConversationId) return;
    
    setConversations(prevConversations => {
      return prevConversations.map(conv => {
        if (conv.id === activeConversationId) {
          // Update the conversation with new messages
          const lastUserMessage = messages.filter(msg => msg.role === 'user').pop();
          return {
            ...conv,
            messages,
            lastMessage: lastUserMessage?.content || conv.lastMessage,
            title: lastUserMessage?.content?.slice(0, 30) || conv.title,
            timestamp: new Date()
          };
        }
        return conv;
      });
    });
  }, [activeConversationId]);

  const scrollToChat = () => {
    document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header />
      <HeroSection />
      
      {/* Scroll to chat button */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-7 z-10">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button 
              onClick={scrollToChat}
              className="rounded-full shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-primary dark:text-primary-light p-4 h-14 w-14"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Main Chat Section */}
      <section id="chat-section" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-full">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-600">
                  কৃষি সহায়ক চ্যাট
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              আপনার কৃষি সম্পর্কিত প্রশ্ন জিজ্ঞাসা করুন এবং বিশেষজ্ঞ পরামর্শ পান।
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-6"
          >
            <div className="lg:col-span-1 order-2 lg:order-1">
              <ConversationHistory 
                conversations={conversations}
                activeConversationId={activeConversationId}
                onSelectConversation={setActiveConversationId}
                onCreateNewConversation={handleCreateNewConversation}
                onDeleteConversation={handleDeleteConversation}
              />
            </div>
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="p-4 border-b bg-gradient-to-r from-primary to-green-600 text-white font-bold rounded-t-lg">
                  {activeConversation?.title || 'নতুন কথোপকথন'}
                </div>
                {activeConversation && (
                  <ChatInterface 
                    initialMessages={activeConversation.messages}
                    onMessagesChange={updateConversationMessages} 
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section - আমাদের বিশেষত্ব */}
      <FeaturesSection />
      
      {/* Use Cases Section - ব্যাবহার ক্ষেত্র */}
      <UseCasesSection />
      
      {/* Testimonials Section - আমাদের ব্যবহারকারীদের মতামত */}
      <TestimonialsSection />
      
      {/* Contact Section - যোগাযোগ করুন */}
      <ContactSection />
      
      {/* Newsletter Section - আমাদের নিউজলেটার */}
      <NewsletterSection />
      
      <Footer />
    </div>
  );
};

export default HomePage;