import React from "react";

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <header className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Discover the Best Clubs & Cafes in Your City</h1>
        <p className="text-lg mb-6">Explore top venues, share reviews, and connect with like-minded people.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 max-w-4xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">🔍 Explore Venues</h2>
          <p>Find the best clubs and cafes with detailed information, reviews, and ratings.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">✍️ Share Your Experience</h2>
          <p>Write reviews and post your own experiences to help others make informed decisions.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">💬 Connect with Others</h2>
          <p>Comment on posts, interact with other users, and join discussions about your favorite places.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 mt-8 bg-gray-800 w-full">
        <p>© 2025 City Explorer | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

