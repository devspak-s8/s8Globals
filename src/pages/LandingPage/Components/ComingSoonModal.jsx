import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
const ComingSoonModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  // Show modal after 1 sec and lock scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
      document.body.style.overflow = "hidden"; // lock scroll
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Restore scroll when modal closes
  useEffect(() => {
    if (!showModal) {
      document.body.style.overflow = "auto"; // unlock scroll
    }
  }, [showModal]);

  // Set launch date (10 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 10);
 // Restore scroll when modal closes
  useEffect(() => {
    if (!showModal) {
      document.body.style.overflow = "auto"; // unlock scroll
    }
  }, [showModal]);

  // Countdown timer logic
  useEffect(() => {
    if (!showModal) return; // only run when modal is visible

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(countdown);
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-6 md:p-8 text-center relative animate-in slide-in-from-bottom-10 fade-in duration-500">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={() => setShowModal(false)}
        >
          &times;
        </button>


        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          🚀 S8Globals Is Launching Soon!
        </h2>

        <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed">
          Welcome to the future of digital innovation.  
          <br />
          🎯 First product launch: <span className="font-semibold text-purple-800">S8Builder</span>
        </p>

        {/* ⏳ Countdown Timer */}
        <div className="bg-slate-100 border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 mb-5">
          ⏳ Launching in:
          <div className="mt-2 flex justify-center space-x-4 text-gray-900 text-lg font-bold">
            <div>{timeLeft.days}d</div>
            <div>{timeLeft.hours}h</div>
            <div>{timeLeft.minutes}m</div>
            <div>{timeLeft.seconds}s</div>
          </div>
        </div>

        {/* 📣 Share S8Globals */}
        <div className="bg-slate-100 p-4 rounded-xl mb-4 text-sm text-left">
          <p className="text-gray-800 font-semibold mb-2">📣 Share S8Globals With Friends</p>
          <p className="text-gray-600 mb-3">
            Help us grow the movement. Spread the word on your socials — it only takes a click.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/?text=🚀%20Check%20out%20S8Globals%20before%20everyone%20else%20%F0%9F%94%A5%20https://yourapp.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600"
            >
              Share on WhatsApp
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=S8Globals%20is%20coming!%20Be%20an%20early%20user%20%F0%9F%93%B1%20https://yourapp.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
            >
              Share on Twitter
            </a>
            <a
              href={`https://t.me/share/url?url=https://yourapp.com&text=Join%20S8Builder%20early%20access%20%F0%9F%94%A5`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-600"
            >
              Share on Telegram
            </a>
          </div>
        </div>
<Link
          to="/waitlist" >
        <button
          onClick={() => setShowModal(false)}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 w-full md:w-auto"
        >
          Got it. Let’s Go!
        </button>
        </Link>
        <p className="text-xs text-slate-400 mt-4">Built with 💡 by the S8Globals Team</p>
      </div>
    </div>
  );
};

export default ComingSoonModal;
