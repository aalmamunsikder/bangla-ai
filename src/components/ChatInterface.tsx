import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Send, Copy, Trash, Paperclip, Mic, MicOff, File, Image, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  initialMessages = [
    {
      role: 'assistant',
      content: 'কোন ফসলে থোকার আক্রমণ হয়েছে? (ফসলের নাম বা আক্রমণের ধরণ জানালে নির্দিষ্ট পরামর্শ দেওয়া যাবে। যেমন: বেগুনের ডাটা ও ফল ছিদ্রকারী পোকা দমন।',
      timestamp: new Date()
    }
  ],
  onMessagesChange
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
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
            content: 'কৃষি সহায়ক:',
            timestamp: new Date()
          }]);
        } catch (error) {
          setIsLoading(false);
          setMessages((prev) => [...prev, {
            role: 'assistant',
            content: 'দুঃখিত, একটি ত্রুটি হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
            timestamp: new Date(),
            error: true
          }]);
        }
      }, 1000);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Simple toast notification (you can implement a more robust solution)
    const toastElement = document.createElement('div');
    toastElement.innerText = 'বার্তা কপি করা হয়েছে';
    toastElement.className = 'fixed bottom-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md';
    document.body.appendChild(toastElement);
    setTimeout(() => {
      document.body.removeChild(toastElement);
    }, 2000);
  };

  const clearConversation = () => {
    const initialMessage = {
      role: 'assistant' as const,
      content: 'কোন ফসলে থোকার আক্রমণ হয়েছে? (ফসলের নাম বা আক্রমণের ধরণ জানালে নির্দিষ্ট পরামর্শ দেওয়া যাবে। যেমন: বেগুনের ডাটা ও ফল ছিদ্রকারী পোকা দমন।',
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' });
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
          content: '🎤 ভয়েস মেসেজ',
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
            content: 'আপনার ভয়েস মেসেজ প্রসেস করা হচ্ছে।',
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
      
      // In a real app, you would request microphone permission and start recording here
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
                <div className="font-bold mb-1">কৃষি সহায়ক:</div>
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
                        <div className="w-10 h-10 mr-2 overflow-hidden rounded">
                          <img src={attachment.url} alt={attachment.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <File size={24} className="mr-2" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">{attachment.name}</p>
                        <p className="text-xs text-gray-300 dark:text-gray-400">{formatFileSize(attachment.size)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="text-xs opacity-70 mt-1 flex justify-between items-center">
                <span>{formatTime(message.timestamp)}</span>
                
                {message.role === 'assistant' && !message.error && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
                          onClick={() => copyToClipboard(message.content)}
                        >
                          <Copy size={16} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>কপি করুন</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="py-3 px-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-gray-800 dark:text-gray-200 shadow-sm">
              <div className="font-bold mb-1 flex items-center">
                কৃষি সহায়ক: <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              </div>
              <p className="font-medium text-gray-500 dark:text-gray-400">উত্তর লিখছে...</p>
            </div>
          )}
          
          <div ref={endOfMessagesRef} />
        </div>
      </div>
      
      {/* Attachment preview */}
      {attachments.length > 0 && (
        <div className="px-4 mb-2">
          <div className="flex flex-wrap gap-2">
            {attachments.map(attachment => (
              <div 
                key={attachment.id} 
                className="relative p-2 border rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700 flex items-center gap-2"
              >
                {attachment.type.startsWith('image/') ? (
                  <Image size={16} />
                ) : (
                  <File size={16} />
                )}
                <span className="text-xs max-w-[100px] truncate">{attachment.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0"
                  onClick={() => handleRemoveAttachment(attachment.id)}
                >
                  <X size={12} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-auto p-4 border-t dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
            onClick={clearConversation}
          >
            <Trash size={16} className="mr-1" /> কথোপকথন মুছুন
          </Button>
          <span className="text-xs text-gray-500 dark:text-gray-400">{messages.length - 1} বার্তা</span>
        </div>
        
        {isRecording ? (
          <div className="flex gap-2 items-center bg-red-50 dark:bg-red-900/20 p-2 rounded-md mb-2">
            <div className="animate-pulse w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-red-600 dark:text-red-400 font-medium">রেকর্ডিং... {formatRecordingTime(recordingTime)}</span>
            <Button
              variant="ghost"
              size="sm"
              className="ml-auto text-red-500 dark:text-red-400"
              onClick={toggleRecording}
            >
              <MicOff size={18} />
            </Button>
          </div>
        ) : null}
        
        <div className="flex gap-2">
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 dark:border-gray-700 dark:bg-gray-800"
              onClick={() => setShowAttachOptions(!showAttachOptions)}
            >
              <Paperclip size={18} />
            </Button>
            
            {showAttachOptions && (
              <div className="absolute bottom-full mb-2 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 border dark:border-gray-700 flex flex-col gap-2 w-48 z-10">
                <button 
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-sm w-full text-left"
                  onClick={() => {
                    fileInputRef.current?.click();
                    setShowAttachOptions(false);
                  }}
                >
                  <File size={16} /> ফাইল সংযুক্ত করুন
                </button>
                <button 
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-sm w-full text-left"
                  onClick={() => {
                    imageInputRef.current?.click();
                    setShowAttachOptions(false);
                  }}
                >
                  <Image size={16} /> ছবি সংযুক্ত করুন
                </button>
              </div>
            )}
            
            <input 
              type="file" 
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              multiple
            />
            <input 
              type="file" 
              ref={imageInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
              multiple
            />
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className={`h-10 w-10 dark:border-gray-700 dark:bg-gray-800 ${isRecording ? 'text-red-500' : ''}`}
            onClick={toggleRecording}
          >
            <Mic size={18} />
          </Button>
          
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="আপনার প্রশ্ন লিখুন..."
            className="flex-1 font-medium dark:bg-gray-800 dark:border-gray-700"
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} 
            disabled={isLoading || isRecording}
          />

          <Button
            onClick={handleSendMessage}
            className="agricultural-green font-bold"
            disabled={isLoading || isRecording || (!input.trim() && attachments.length === 0)}
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 mr-1" />}
            পাঠান
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;