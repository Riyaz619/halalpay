import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface WaitlistFormProps {
  onClose: () => void;
}

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Encode form data for Netlify
    const formData = new FormData();
    formData.append('form-name', 'waitlist');
    formData.append('email', email);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
      .then(() => {
        // Track conversion
        if (window.gtag_report_conversion) {
          window.gtag_report_conversion();
        }
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        alert('There was an error submitting the form. Please try again.');
      });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <>
            <h3 className="text-3xl font-bold mb-4">Get Early Access</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Leave your email and we'll send you an exclusive link to be among the first to experience Halal banking powered by crypto.
            </p>

            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
              name="waitlist"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="waitlist" />
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg inline-flex items-center justify-center group"
              >
                <span>Send me the link</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-3xl font-bold mb-4">Check your inbox!</h3>
            <p className="text-gray-600 text-lg">
              We'll send you an exclusive access link as soon as we launch. Welcome to the future of Halal banking!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistForm;