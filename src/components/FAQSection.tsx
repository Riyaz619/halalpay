import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "Is cryptocurrency halal?",
    answer: (
      <>
        <p className="mb-4">
          Cryptocurrency can be halal when used as a medium of exchange and not for speculative purposes. Our platform ensures:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>We only use stable coins (USDT) to avoid speculation</li>
          <li>All transactions are backed by real assets</li>
          <li>No interest-based (riba) transactions</li>
          <li>Full transparency in all operations</li>
        </ul>
      </>
    )
  },
  {
    question: "How do you generate halal returns?",
    answer: (
      <>
        <p className="mb-4">
          Our 4% APR returns are generated through:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Real asset-backed trading operations</li>
          <li>Shariah-compliant liquidity provision</li>
          <li>Actual trading fees from legitimate transactions</li>
          <li>Profit-sharing model (Mudarabah) instead of interest</li>
        </ul>
      </>
    )
  },
  {
    question: "What are the fees?",
    answer: (
      <>
        <p className="mb-4">We maintain a transparent fee structure:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>No monthly account fees</li>
          <li>No hidden charges</li>
          <li>Currency conversion: 0.5% per transaction</li>
          <li>International transfers: 1% (significantly lower than traditional banks)</li>
          <li>Card transactions: Free within spending limits</li>
        </ul>
      </>
    )
  },
  {
    question: "Is my money safe?",
    answer: (
      <>
        <p className="mb-4">
          Your funds are protected through multiple security measures:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Bank-grade encryption and security protocols</li>
          <li>Regular security audits by leading firms</li>
          <li>Cold storage for digital assets</li>
          <li>Regulated financial institutions as partners</li>
          <li>Insurance coverage for digital assets</li>
        </ul>
      </>
    )
  },
  {
    question: "How does the card work?",
    answer: (
      <p>
        Your card is linked to your USDT balance. When you make a purchase, we instantly convert the required amount to the local currency at market rates. You can use it anywhere Visa/Mastercard is accepted, with no foreign transaction fees. The card also comes with built-in spending controls and real-time notifications.
      </p>
    )
  },
  {
    question: "Which countries do you support?",
    answer: (
      <>
        <p className="mb-4">
          We support 160+ countries, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Major Markets: UK, US, EU countries</li>
          <li>GCC Region: Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman</li>
          <li>South Asia: India, Pakistan, Bangladesh</li>
          <li>Southeast Asia: Malaysia, Indonesia</li>
        </ul>
      </>
    )
  }
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:text-gray-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold pr-8">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 text-lg leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold tracking-tight text-center mb-16">
            Frequently Asked
            <br />
            Questions
          </h2>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} item={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;