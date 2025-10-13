"use client";
import React, { useState } from "react";

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState("loan");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Project Demos
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore interactive demos of my projects. These are simplified versions to showcase key features and user experiences.
        </p>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: "loan", name: "Loan App Demo" },
            { id: "shop", name: "Elite Shop Demo" },
            { id: "garage", name: "Speedy Spanners Demo" },
            { id: "travel", name: "RoaringL Demo" },
          ].map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeDemo === demo.id
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {demo.name}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {activeDemo === "loan" && <LoanAppDemo />}
          {activeDemo === "shop" && <EliteShopDemo />}
          {activeDemo === "garage" && <SpeedySpannersDemo />}
          {activeDemo === "travel" && <RoaringLDemo />}
        </div>
      </div>
    </div>
  );
}

// Loan App Demo Component
function LoanAppDemo() {
  const [form, setForm] = useState({
    amount: "",
    duration: "",
    type: "individual",
  });
  const [result, setResult] = useState<string | null>(null);

  const calculateLoan = () => {
    const amount = parseFloat(form.amount);
    const duration = parseInt(form.duration);
    if (amount && duration) {
      const interestRate = form.type === "individual" ? 0.1 : 0.08; // 10% or 8%
      const totalInterest = amount * interestRate * (duration / 12);
      const totalAmount = amount + totalInterest;
      const monthlyPayment = totalAmount / duration;
      setResult(
        `Loan Amount: $${amount.toFixed(2)}\nInterest: $${totalInterest.toFixed(2)}\nTotal: $${totalAmount.toFixed(2)}\nMonthly Payment: $${monthlyPayment.toFixed(2)}`
      );
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Loan App Demo</h2>
      <p className="text-gray-600 mb-6">
        Simulate applying for a loan. Enter details to see estimated payments.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2">Loan Amount ($)</label>
          <input
            type="number"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="e.g., 5000"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Duration (months)</label>
          <input
            type="number"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="e.g., 12"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Loan Type</label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="individual">Individual</option>
            <option value="group">Group</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={calculateLoan}
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
          >
            Calculate Loan
          </button>
        </div>
      </div>
      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Loan Summary:</h3>
          <pre className="text-sm whitespace-pre-line">{result}</pre>
        </div>
      )}
    </div>
  );
}

// Elite Shop Demo Component
function EliteShopDemo() {
  const [cart, setCart] = useState<{ name: string; price: number }[]>([]);
  const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 150 },
  ];

  const addToCart = (product: { name: string; price: number }) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Elite Shop Demo</h2>
      <p className="text-gray-600 mb-6">
        Browse products and add them to your cart. (Admin-only uploads in full app)
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 text-center">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-gray-800 text-white py-1 px-3 rounded hover:bg-gray-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="border-t pt-4">
        <h3 className="font-semibold mb-2">Cart ({cart.length} items)</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between py-1">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
            <div className="border-t mt-2 pt-2 font-semibold">
              Total: ${total}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Speedy Spanners Demo Component
function SpeedySpannersDemo() {
  const [booking, setBooking] = useState({
    service: "",
    date: "",
    time: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const services = ["Oil Change", "Brake Repair", "Tire Replacement"];

  const bookService = () => {
    if (booking.service && booking.date && booking.time) {
      setConfirmed(true);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Speedy Spanners Demo</h2>
      <p className="text-gray-600 mb-6">
        Book a garage service. Select your service and preferred time.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2">Service</label>
          <select
            value={booking.service}
            onChange={(e) => setBooking({ ...booking, service: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select Service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            value={booking.date}
            onChange={(e) => setBooking({ ...booking, date: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Time</label>
          <input
            type="time"
            value={booking.time}
            onChange={(e) => setBooking({ ...booking, time: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={bookService}
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
          >
            Book Service
          </button>
        </div>
      </div>
      {confirmed && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg">
          <h3 className="font-semibold text-green-800">Booking Confirmed!</h3>
          <p className="text-green-700">
            {booking.service} on {booking.date} at {booking.time}
          </p>
        </div>
      )}
    </div>
  );
}

// RoaringL Demo Component
function RoaringLDemo() {
  const [search, setSearch] = useState("");
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const destinations = [
    { name: "Kenya Safari", description: "Explore the wild with guided tours." },
    { name: "Beach Holiday", description: "Relax on pristine beaches." },
    { name: "Mountain Trek", description: "Adventure in the highlands." },
  ];

  const filteredDestinations = destinations.filter((dest) =>
    dest.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">RoaringL Travel Demo</h2>
      <p className="text-gray-600 mb-6">
        Search and explore travel destinations. Book your next adventure.
      </p>
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search destinations..."
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filteredDestinations.map((dest, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="font-semibold">{dest.name}</h3>
            <p className="text-gray-600 mb-3">{dest.description}</p>
            <button
              onClick={() => setSelectedDestination(dest.name)}
              className="bg-gray-800 text-white py-1 px-3 rounded hover:bg-gray-700"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
      {selectedDestination && (
        <div className="mt-6 p-4 bg-blue-100 rounded-lg">
          <h3 className="font-semibold text-blue-800">Booking Started!</h3>
          <p className="text-blue-700">
            You've selected {selectedDestination}. (Full booking flow in app)
          </p>
        </div>
      )}
    </div>
  );
}
