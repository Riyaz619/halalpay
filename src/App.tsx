import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import CurrencyScroll from './components/CurrencyScroll';
import CoverageList from './components/CoverageList';
import ActionSection from './components/ActionSection';
import CardSection from './components/CardSection';
import TransferSection from './components/TransferSection';
import ValuePropSection from './components/ValuePropSection';
import WaitlistForm from './components/WaitlistForm';
import ReadyToStart from './components/ReadyToStart';
import FAQSection from './components/FAQSection';

const App: React.FC = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-barlow">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/resumegptnew.appspot.com/o/HalalPay.png?alt=media&token=558dd082-cbf3-435c-98e4-07e4b5caff0c"
                alt="HalalPay Logo"
                className="h-8 w-auto mr-3"
              />
              <span className="text-2xl font-bold tracking-tight"></span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center cursor-pointer hover:text-gray-600 transition-colors">
                <Globe className="h-4 w-4 mr-1" />
                <span>EN</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
              <button 
                onClick={() => setShowWaitlist(true)}
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
            ISLAMIC BANKING
            <br />
            MEETS CRYPTO
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
            Experience the future of Halal banking. Convert, spend, and earn returns on your money while staying true to Islamic principles.
          </p>
          <button 
            onClick={() => setShowWaitlist(true)}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Join Now
          </button>
        </div>
      </section>

      {/* Currency Scroll */}
      <CurrencyScroll />

      {/* Coverage List */}
      <CoverageList />

      {/* Action Section */}
      <ActionSection />

      {/* Value Prop Section */}
      <ValuePropSection />

      {/* Transfer Section */}
      <TransferSection />

      {/* Card Section */}
      <CardSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Ready To Start Section */}
      <ReadyToStart onJoinClick={() => setShowWaitlist(true)} />

      {/* Waitlist Modal */}
      {showWaitlist && <WaitlistForm onClose={() => setShowWaitlist(false)} />}
    </div>
  );
};

export default App;