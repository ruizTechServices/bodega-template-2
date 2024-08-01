import React, { useMemo } from 'react';
import Image from 'next/image';

// Seasonal color themes
const seasonalThemes = {
  spring: {
    primary: 'bg-green-100',
    secondary: 'bg-pink-100',
    text: 'text-green-800',
    accent: 'bg-yellow-400',
  },
  summer: {
    primary: 'bg-yellow-100',
    secondary: 'bg-blue-100',
    text: 'text-yellow-800',
    accent: 'bg-red-400',
  },
  fall: {
    primary: 'bg-orange-100',
    secondary: 'bg-yellow-100',
    text: 'text-orange-800',
    accent: 'bg-red-500',
  },
  winter: {
    primary: 'bg-blue-100',
    secondary: 'bg-gray-100',
    text: 'text-blue-800',
    accent: 'bg-red-500',
  },
  holiday: {
    primary: 'bg-red-100',
    secondary: 'bg-green-100',
    text: 'text-red-800',
    accent: 'bg-yellow-400',
  },
};

// Function to determine current season
const getCurrentSeason = () => {
  const now = new Date();
  const month = now.getMonth();

  if (month >= 11 || month <= 1) return 'holiday'; // Nov, Dec, Jan
  if (month >= 2 && month <= 4) return 'spring';   // Mar, Apr, May
  if (month >= 5 && month <= 7) return 'summer';   // Jun, Jul, Aug
  if (month >= 8 && month <= 10) return 'fall';    // Sep, Oct, Nov
  return 'winter';                                 // Default to winter
};

// Sample seasonal offers data
const seasonalOffers = [
  { name: 'Fresh Strawberries', price: '$2.99/lb', image: '/placeholder.png', season: 'spring' },
  { name: 'Watermelon', price: '$4.99 each', image: '/placeholder.png', season: 'summer' },
  { name: 'Pumpkin Pie', price: '$8.99', image: '/placeholder.png', season: 'fall' },
  { name: 'Hot Cocoa Mix', price: '$3.99', image: '/placeholder.png', season: 'winter' },
  { name: 'Grilling Set', price: '$24.99', image: '/placeholder.png', season: 'summer' },
  { name: 'Apple Cider', price: '$5.99', image: '/placeholder.png', season: 'fall' },
  { name: 'Easter Egg Decorating Kit', price: '$12.99', image: '/placeholder.png', season: 'spring' },
  { name: 'Holiday Cookie Platter', price: '$15.99', image: '/placeholder.png', season: 'holiday' },
];

export default function SeasonalOffersPage() {
  const currentSeason = useMemo(() => getCurrentSeason(), []);
  const theme = seasonalThemes[currentSeason];

  return (
    <div className={`min-h-screen ${theme.primary}`}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className={`text-4xl font-bold ${theme.text} mb-6`}>Seasonal Offers</h1>
        
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {seasonalOffers.map((offer) => (
            <div key={offer.name} className={`group ${theme.secondary} rounded-lg p-6`}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                {/* <Image
                  src={offer.image}
                  alt={offer.name}
                  layout="fill"
                  objectFit="cover"
                  className="h-full z-0 w-full object-cover object-center group-hover:opacity-75"
                /> */}
              </div>
              <h3 className={`mt-4 text-sm ${theme.text}`}>{offer.name}</h3>
              <p className={`mt-1 text-lg font-medium ${theme.text}`}>{offer.price}</p>
              <div className={`mt-2 ${theme.accent} text-white text-xs font-bold px-2 py-1 rounded-full inline-block`}>
                {offer.season.charAt(0).toUpperCase() + offer.season.slice(1)}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Seasonal Recipe */}
        <div className={`mt-16 ${theme.secondary} rounded-lg overflow-hidden`}>
          <div className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h2 className={`text-3xl font-extrabold ${theme.text}`}>Featured Seasonal Recipe</h2>
                <p className={`mt-3 max-w-3xl text-lg ${theme.text}`}>
                  Try our delicious recipe perfect for this season!
                </p>
                <div className="mt-8 text-base font-semibold">
                  <a href="#" className={`${theme.text} hover:underline`}>View Recipe &rarr;</a>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden">
                  {/* <Image
                    src="/placeholder.png"
                    alt="Seasonal Recipe"
                    layout="fill"
                    objectFit="cover"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`mt-16 ${theme.secondary} rounded-lg p-8`}>
          <h2 className={`text-3xl font-extrabold ${theme.text}`}>Stay Updated on Seasonal Offers</h2>
          <p className={`mt-4 text-lg ${theme.text}`}>
            Subscribe to our newsletter for exclusive seasonal deals and recipes.
          </p>
          <form className="mt-8 sm:flex">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white ${theme.accent} hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}