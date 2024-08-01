import React from 'react';
import Image from 'next/image';

// In a real application, this data would be fetched from an API or database
const weeklyDeals = [
  { name: 'Organic Bananas', price: '$0.69/lb', originalPrice: '$0.99/lb', discount: '30% OFF', image: '/placeholder.png', category: 'Produce' },
  { name: 'Whole Grain Pasta', price: '$1.50', originalPrice: '$2.50', discount: '$1 OFF', image: '/placeholder.png', category: 'Pantry' },
  { name: 'Fresh Atlantic Salmon', price: '$9.99/lb', originalPrice: '$14.99/lb', discount: '$5 OFF/lb', image: '/placeholder.png', category: 'Seafood' },
  { name: 'Organic Milk', price: '$3.49', originalPrice: '$4.99', discount: '30% OFF', image: '/placeholder.png', category: 'Dairy' },
  { name: 'Grass-Fed Ground Beef', price: '$4.99/lb', originalPrice: '$6.99/lb', discount: '$2 OFF/lb', image: '/placeholder.png', category: 'Meat' },
  { name: 'Avocados', price: '$1.25 each', originalPrice: '$1.99 each', discount: '37% OFF', image: '/placeholder.png', category: 'Produce' },
  { name: 'Artisan Sourdough Bread', price: '$3.99', originalPrice: '$5.99', discount: '$2 OFF', image: '/placeholder.png', category: 'Bakery' },
  { name: 'Organic Free-Range Eggs', price: '$3.99/dozen', originalPrice: '$5.99/dozen', discount: '$2 OFF', image: '/placeholder.png', category: 'Dairy' },
];

export default function WeeklyDealsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">This Week's Deals</h2>
          <p className="mt-2 text-sm text-gray-500">Deals valid from [Start Date] to [End Date]</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {weeklyDeals.map((product) => (
            <div key={product.name} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-xs font-bold">
                  {product.discount}
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  <p className="text-sm font-medium text-gray-500 line-through">{product.originalPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Meal Deal Section */}
        <div className="mt-16 bg-green-50 rounded-lg overflow-hidden">
          <div className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Weekly Meal Deal</h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Get all ingredients for a family dinner at a special price. This week's meal: Grilled Salmon with Roasted Vegetables
                </p>
                <div className="mt-8 text-base font-semibold text-green-700 sm:mt-10">
                  <a href="#">View Recipe &rarr;</a>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="flex-shrink-0">
                    <Image
                      src="/placeholder.png"
                      alt="Meal Deal"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">All ingredients</p>
                    <p className="text-xl font-bold text-green-600">$24.99</p>
                    <p className="text-sm text-gray-500">Regular price: $35.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Stay Updated on Weekly Deals</h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-500">
            Subscribe to our newsletter and never miss out on our amazing weekly deals and promotions.
          </p>
          <form className="mt-4 sm:flex sm:max-w-md">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:placeholder-gray-400"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full bg-green-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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