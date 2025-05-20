import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
  const officeLocations = [
    {
      name: 'প্রধান কার্যালয়',
      address: 'কৃষি ভবন, ৪৯-৫১ দিলকুশা বা/এ, ঢাকা-১০০০',
      phone: '+৮৮০ ২ ৯৫৬৭৮৯১',
      email: 'info@krishishahayok.bd',
      hours: 'রবিবার - বৃহস্পতিবার: সকাল ৯টা - বিকাল ৫টা'
    },
    {
      name: 'রংপুর শাখা',
      address: 'কৃষি সড়ক, বদরগঞ্জ, রংপুর-৫৪৪০',
      phone: '+৮৮০ ১৭১ ৫৬৭৮৯৪৫',
      email: 'rangpur@krishishahayok.bd',
      hours: 'রবিবার - বৃহস্পতিবার: সকাল ৯টা - বিকাল ৫টা'
    },
    {
      name: 'খুলনা শাখা',
      address: 'কৃষি কমপ্লেক্স, খুলনা সদর, খুলনা-৯১০০',
      phone: '+৮৮০ ১৯১ ৭৮৯৪৫৬৭',
      email: 'khulna@krishishahayok.bd',
      hours: 'রবিবার - বৃহস্পতিবার: সকাল ৯টা - বিকাল ৫টা'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করব।');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-8 agricultural-light-green">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">আমাদের সাথে যোগাযোগ করুন</h1>
          <p className="text-lg text-center mb-8">কৃষি বিষয়ক যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">বার্তা পাঠান</h2>
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">আপনার নাম</label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="পূর্ণ নাম লিখুন"
                      className="font-bold" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">মোবাইল নম্বর</label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="০১৭XXXXXXXX"
                      className="font-bold" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">ইমেইল</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="আপনার ইমেইল"
                    className="font-bold" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">বিষয়</label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="বিষয় লিখুন"
                    className="font-bold" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">বার্তা</label>
                  <Textarea 
                    id="message" 
                    placeholder="আপনার প্রশ্ন বা মন্তব্য লিখুন..."
                    className="h-32 font-bold" 
                    required 
                  />
                </div>
                
                <Button type="submit" className="agricultural-green w-full font-bold">পাঠান</Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">আমাদের অফিসসমূহ</h2>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                {officeLocations.map((office, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">{office.name}</h3>
                    <div className="space-y-2">
                      <p className="flex">
                        <span className="mr-2">📍</span>
                        <span>{office.address}</span>
                      </p>
                      <p className="flex">
                        <span className="mr-2">📞</span>
                        <span>{office.phone}</span>
                      </p>
                      <p className="flex">
                        <span className="mr-2">✉️</span>
                        <span>{office.email}</span>
                      </p>
                      <p className="flex">
                        <span className="mr-2">🕒</span>
                        <span>{office.hours}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">সামাজিক যোগাযোগ</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                    <span className="sr-only">WhatsApp</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35M12.053 19.146h-.003a7.46 7.46 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.434 7.434 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage; 