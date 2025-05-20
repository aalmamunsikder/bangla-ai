import React from 'react';
import { Button } from "@/components/ui/button";
import { Trash, PlusCircle, MessageSquare, Clock } from "lucide-react";
import { motion } from 'framer-motion';

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

interface ConversationHistoryProps {
  conversations: Conversation[];
  activeConversationId?: string;
  onSelectConversation: (id: string) => void;
  onCreateNewConversation: () => void;
  onDeleteConversation: (id: string) => void;
}

const ConversationHistory: React.FC<ConversationHistoryProps> = ({
  conversations,
  activeConversationId,
  onSelectConversation,
  onCreateNewConversation,
  onDeleteConversation
}) => {
  const formatDate = (date: Date) => {
    const today = new Date();
    const conversationDate = new Date(date);
    
    // If date is today, show time
    if (conversationDate.toDateString() === today.toDateString()) {
      return conversationDate.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' });
    }
    
    // If date is within the last week, show day name
    const daysDiff = Math.floor((today.getTime() - conversationDate.getTime()) / (1000 * 60 * 60 * 24));
    if (daysDiff < 7) {
      return conversationDate.toLocaleDateString('bn-BD', { weekday: 'long' });
    }
    
    // Otherwise show date
    return conversationDate.toLocaleDateString('bn-BD', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden h-full flex flex-col border border-gray-100 dark:border-gray-700">
      <div className="p-4 bg-gradient-to-r from-primary to-green-600 text-white font-bold rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageSquare size={18} />
          <span>কথোপকথন ইতিহাস</span>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white hover:bg-white/20 rounded-full w-8 h-8 p-0 flex items-center justify-center"
          onClick={onCreateNewConversation}
        >
          <PlusCircle size={16} />
        </Button>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto">
        {conversations.length === 0 ? (
          <div className="text-center py-6 text-gray-500 dark:text-gray-400">
            <p>কোন কথোপকথন নেই</p>
          </div>
        ) : (
          <div className="space-y-3">
            {conversations.map((conversation, index) => (
              <motion.div 
                key={conversation.id} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-3 rounded-xl cursor-pointer transition-all relative group hover:shadow-md ${
                  activeConversationId === conversation.id 
                    ? 'bg-primary/10 dark:bg-primary/20 border-primary/20 dark:border-primary/30 border' 
                    : 'bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700 hover:border-primary/20 dark:hover:border-primary/30'
                }`}
                onClick={() => onSelectConversation(conversation.id)}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 truncate pr-8">{conversation.title}</h3>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Clock size={12} className="mr-1" />
                    <span>{formatDate(conversation.timestamp)}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{conversation.lastMessage}</p>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 p-1 h-auto rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteConversation(conversation.id);
                  }}
                >
                  <Trash size={14} />
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 border-t dark:border-gray-700">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-primary dark:text-primary-light border-primary/20 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 hover:bg-primary/10 dark:hover:bg-primary/20 font-medium"
          onClick={onCreateNewConversation}
        >
          <PlusCircle size={16} className="mr-2" /> নতুন কথোপকথন শুরু করুন
        </Button>
      </div>
    </div>
  );
};

export default ConversationHistory;