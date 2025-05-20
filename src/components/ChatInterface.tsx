import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Send, Copy, Trash, Paperclip, Mic, MicOff, File, Image, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isLoading?: boolean;
  error?: boolean;
  attachments?: Attachment[];
  isVoiceMessage?: boolean;
}

interface Attachment {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
}

interface ChatInterfaceProps {
  initialMessages?: Message[];
  onMessagesChange?: (messages: Message[]) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  initialMessages,
  onMessagesChange
}) => {
  const { translate } = useLanguage();
  
  const defaultWelcomeMessage = {
    role: 'assistant' as const,
    content: translate(
      'Welcome! I am Bangla AI, your Bengali language processing assistant. I can help with translation, text generation, summarization, and other language-related tasks. How can I assist you today?',
      'স্বাগতম! আমি বাংলা এআই, আপনার বাংলা ভাষা প্রসেসিং সহকারী। আমি অনুবাদ, টেক্সট তৈরি, সারসংক্ষেপ এবং অন্যান্য ভাষা-সম্পর্কিত কাজে সাহায্য করতে পারি। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?'
    ),
    timestamp: new Date()
  };
  
  const [messages, setMessages] = useState<Message[]>(initialMessages || [defaultWelcomeMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [showAttachOptions, setShowAttachOptions] = useState(false);
  
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const recordingTimerRef = useRef<number | null>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Notify parent component when messages change
  useEffect(() => {
    if (onMessagesChange) {
      onMessagesChange(messages);
    }
  }, [messages]);
  
  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (recordingTimerRef.current) {
        window.clearInterval(recordingTimerRef.current);
      }
    };
  }, []);

  const handleSendMessage = () => {
    if ((input.trim() || attachments.length > 0) && !isLoading) {
      const userMessage: Message = { 
        role: 'user', 
        content: input,
        timestamp: new Date(),
        attachments: attachments.length > 0 ? [...attachments] : undefined
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setAttachments([]);
      setIsLoading(true);

      // Simulate AI response
      setTimeout(() => {
        try {
          setIsLoading(false);
          setMessages((prev) => [...prev, {
            role: 'assistant',
            content: translate(
              'Bangla AI can help you with that. I can translate, summarize, or generate Bengali text based on your needs.',
              'বাংলা এআই আপনাকে এই বিষয়ে সাহায্য করতে পারে। আমি আপনার প্রয়োজন অনুসারে বাংলা অনুবাদ, সারসংক্ষেপ বা টেক্সট তৈরি করতে পারি।'
            ),
            timestamp: new Date()
          }]);
        } catch (error) {
          setIsLoading(false);
          setMessages((prev) => [...prev, {
            role: 'assistant',
            content: translate(
              'Sorry, an error occurred. Please try again.',
              'দুঃখিত, একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।'
            ),
            timestamp: new Date(),
            error: true
          }]);
        }
      }, 1000);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Simple toast notification
    const toastElement = document.createElement('div');
    toastElement.innerText = translate('Message copied', 'মেসেজ কপি করা হয়েছে');
    toastElement.className = 'fixed bottom-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md';
    document.body.appendChild(toastElement);
    setTimeout(() => {
      document.body.removeChild(toastElement);
    }, 2000);
  };

  const clearConversation = () => {
    setMessages([defaultWelcomeMessage]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };
  
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };
  
  const formatRecordingTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newAttachments: Attachment[] = [];
      
      Array.from(files).forEach(file => {
        const attachment: Attachment = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: file.name,
          type: file.type,
          url: URL.createObjectURL(file),
          size: file.size
        };
        newAttachments.push(attachment);
      });
      
      setAttachments(prev => [...prev, ...newAttachments]);
      e.target.value = '';
    }
  };
  
  const handleRemoveAttachment = (id: string) => {
    setAttachments(prev => prev.filter(attachment => attachment.id !== id));
  };
  
  const toggleRecording = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      if (recordingTimerRef.current) {
        window.clearInterval(recordingTimerRef.current);
        recordingTimerRef.current = null;
      }
      
      // In a real app, you would save the recorded audio here
      // For now, we'll just simulate adding a voice message
      if (recordingTime > 1) { // Only add if recording was longer than 1 second
        const voiceMessage: Message = {
          role: 'user',
          content: translate('🎤 Voice Message', '🎤 ভয়েস মেসেজ'),
          timestamp: new Date(),
          isVoiceMessage: true
        };
        setMessages(prev => [...prev, voiceMessage]);
        
        // Simulate response to voice message
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: translate(
              'I received your voice message. I can transcribe and analyze Bengali speech.',
              'আমি আপনার ভয়েস মেসেজ পেয়েছি। আমি বাংলা স্পিচ ট্রান্সক্রাইব এবং বিশ্লেষণ করতে পারি।'
            ),
            timestamp: new Date()
          }]);
        }, 1500);
      }
      
      setRecordingTime(0);
    } else {
      // Start recording
      setIsRecording(true);
      recordingTimerRef.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col">
      <div className="p-4 mb-4 rounded-lg overflow-y-auto max-h-[500px]">
        <div className="flex flex-col gap-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`py-3 px-4 rounded-xl ${
                message.role === 'assistant' 
                  ? message.error 
                    ? 'bg-red-100 dark:bg-red-900/30 text-gray-800 dark:text-gray-200' 
                    : 'bg-green-50 dark:bg-green-900/20 text-gray-800 dark:text-gray-200' 
                  : 'bg-primary dark:bg-primary-light text-white'
              } relative group shadow-sm`}
            >
              {message.role === 'assistant' && (
                <div className="font-bold mb-1">{translate("Bangla AI:", "বাংলা এআই:")}</div>
              )}
              
              {message.isVoiceMessage ? (
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-white bg-opacity-20 rounded-full">
                    <Mic size={16} />
                  </div>
                  <span className="font-bold">{message.content}</span>
                </div>
              ) : (
                <p className="font-medium">{message.content}</p>
              )}
              
              {message.attachments && message.attachments.length > 0 && (
                <div className="mt-2 space-y-2">
                  {message.attachments.map(attachment => (
                    <div 
                      key={attachment.id} 
                      className="p-2 bg-white dark:bg-gray-700 bg-opacity-20 rounded flex items-center"
                    >
                      {attachment.type.startsWith('image/') ? (
                        <Image size={14} className="mr-2 flex-shrink-0" />
                      ) : (
                        <File size={14} className="mr-2 flex-shrink-0" />
                      )}
                      <span className="text-sm truncate flex-1">
                        {attachment.name}
                      </span>
                      <span className="text-xs ml-2 opacity-70">
                        {formatFileSize(attachment.size)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="text-xs mt-2 opacity-70 flex justify-between items-center">
                <span>{formatTime(message.timestamp)}</span>
                
                {message.role === 'assistant' && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-0 h-6 w-6 mr-1 text-current hover:bg-black/10"
                      onClick={() => copyToClipboard(message.content)}
                    >
                      <Copy size={14} />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="py-3 px-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-gray-800 dark:text-gray-200">
              <div className="font-bold mb-1">{translate("Bangla AI:", "বাংলা এআই:")}</div>
              <div className="flex items-center">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                <span>{translate("Thinking...", "চিন্তা করছি...")}</span>
              </div>
            </div>
          )}
          
          <div ref={endOfMessagesRef} />
        </div>
      </div>
      
      {attachments.length > 0 && (
        <div className="px-4 mb-2 flex flex-wrap gap-2">
          {attachments.map(attachment => (
            <div 
              key={attachment.id}
              className="px-3 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center text-primary"
            >
              {attachment.type.startsWith('image/') ? (
                <Image size={12} className="mr-1.5" />
              ) : (
                <File size={12} className="mr-1.5" />
              )}
              <span className="text-xs truncate max-w-[150px]">
                {attachment.name}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-5 w-5 ml-1 hover:bg-primary/20 rounded-full"
                onClick={() => handleRemoveAttachment(attachment.id)}
              >
                <X size={10} />
              </Button>
            </div>
          ))}
        </div>
      )}
      
      {isRecording && (
        <div className="px-4 mb-3">
          <div className="px-4 py-2 bg-red-500/10 text-red-600 dark:text-red-400 rounded-full flex items-center animate-pulse">
            <Mic className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">{translate("Recording", "রেকর্ডিং")} ({formatRecordingTime(recordingTime)})</span>
          </div>
        </div>
      )}

      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2 relative">
        <TooltipProvider>
          <div className="relative">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 rounded-full"
                  onClick={() => setShowAttachOptions(!showAttachOptions)}
                >
                  <Paperclip className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{translate("Attach files", "ফাইল সংযুক্ত করুন")}</p>
              </TooltipContent>
            </Tooltip>
            
            {showAttachOptions && (
              <div className="absolute bottom-full mb-2 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 border border-gray-200 dark:border-gray-700 flex flex-col gap-1">
                <button
                  className="flex items-center text-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  onClick={() => {
                    if (fileInputRef.current) fileInputRef.current.click();
                    setShowAttachOptions(false);
                  }}
                >
                  <File className="h-4 w-4 mr-2" />
                  {translate("Document", "ডকুমেন্ট")}
                </button>
                <button
                  className="flex items-center text-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  onClick={() => {
                    if (imageInputRef.current) imageInputRef.current.click();
                    setShowAttachOptions(false);
                  }}
                >
                  <Image className="h-4 w-4 mr-2" />
                  {translate("Image", "ছবি")}
                </button>
              </div>
            )}
          </div>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          
          <input
            type="file"
            ref={imageInputRef}
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`h-9 w-9 p-0 rounded-full ${
                  isRecording ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : ''
                }`}
                onClick={toggleRecording}
              >
                {isRecording ? (
                  <MicOff className="h-5 w-5" />
                ) : (
                  <Mic className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{isRecording ? translate("Stop recording", "রেকর্ডিং বন্ধ করুন") : translate("Voice message", "ভয়েস মেসেজ")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <Input
          type="text"
          placeholder={translate("Type your message...", "আপনার মেসেজ টাইপ করুন...")}
          className="flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          disabled={isLoading}
        />
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="h-9 w-9 p-0 rounded-full bg-primary hover:bg-primary/90 text-white"
                onClick={handleSendMessage}
                disabled={isLoading || (!input.trim() && attachments.length === 0)}
              >
                <Send className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{translate("Send message", "মেসেজ পাঠান")}</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-9 w-9 p-0 rounded-full text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 absolute right-4 top-[-40px]"
                onClick={clearConversation}
              >
                <Trash className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{translate("Clear conversation", "কথোপকথন মুছুন")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ChatInterface;