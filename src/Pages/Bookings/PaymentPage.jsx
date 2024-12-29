import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

export default function PaymentPage() {
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [isPaymentOptionsOpen, setIsPaymentOptionsOpen] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState('CARD PAYMENT');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    month: '',
    year: '',
    cvv: ''
  });

  const paymentMethods = [
    'UPI',
    'CARD PAYMENT',
    'NET BANKING',
    'WALLET'
  ];

  const handleCardInput = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
        <Navbar/>
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto bg-[#111111] rounded-lg overflow-hidden">
        {/* Promo Code Section */}
        <div className="border-b border-gray-700">
          <button
            onClick={() => setIsPromoOpen(!isPromoOpen)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-800"
          >
            <span className="text-gray-400">unlock offer or apply promocode</span>
            {isPromoOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {isPromoOpen && (
            <div className="p-4 border-t border-gray-700">
              <input
                type="text"
                placeholder="Enter promocode"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
          )}
        </div>

        <div className="flex">
          {/* Payment Methods */}
          <div className="w-1/3 border-r border-gray-700">
            <button
              onClick={() => setIsPaymentOptionsOpen(!isPaymentOptionsOpen)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-800 border-b border-gray-700"
            >
              <span>payment options</span>
              {isPaymentOptionsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isPaymentOptionsOpen && (
              <div>
                {paymentMethods.map((method) => (
                  <button
                    key={method}
                    onClick={() => setSelectedPayment(method)}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-800 ${
                      selectedPayment === method ? 'bg-gray-800' : ''
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Payment Details */}
          <div className="w-2/5 p-6">
            <h2 className="text-lg mb-4">ENTER YOUR CARD DETAILS</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="number"
                placeholder="enter your card number"
                value={cardDetails.number}
                onChange={handleCardInput}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              />
              <input
                type="text"
                name="name"
                placeholder="name of the card"
                value={cardDetails.name}
                onChange={handleCardInput}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
              />
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="month"
                    placeholder="MM"
                    value={cardDetails.month}
                    onChange={handleCardInput}
                    className="w-16 p-2 bg-gray-800 border border-gray-700 rounded"
                  />
                  <input
                    type="text"
                    name="year"
                    placeholder="YY"
                    value={cardDetails.year}
                    onChange={handleCardInput}
                    className="w-16 p-2 bg-gray-800 border border-gray-700 rounded"
                  />
                </div>
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={handleCardInput}
                  className="w-20 p-2 bg-gray-800 border border-gray-700 rounded"
                />
              </div>
            </div>
            <button className="w-full mt-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              proceed
            </button>
          </div>

          {/* Payment Summary */}
          <div className="w-1/3 p-6 bg-gray-900">
            <h3 className="mb-4">You're paying</h3>
            <div className="text-2xl font-bold mb-6">RS 2360</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>PME-PM-03</span>
                <span>: 2000</span>
              </div>
              <div className="flex justify-between">
                <span>TAX</span>
                <span>: 360</span>
              </div>
              <div className="flex justify-between font-bold mt-4">
                <span>TOTAL</span>
                <span>: 2360</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

