import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const specialCategories = [
  { name: 'Weekly Deals', href: '#weekly-deals', image: '/placeholder.png' },
  { name: 'Clearance', href: '#clearance', image: '/placeholder.png' },
  { name: 'Buy One Get One', href: '#bogo', image: '/placeholder.png' },
  { name: 'Seasonal Offers', href: '#seasonal', image: '/placeholder.png' },
];

const featuredSpecials = [
  { name: 'Organic Apples', price: '$1.99/lb', originalPrice: '$3.99/lb', discount: '50% OFF', image: '/placeholder.png' },
  { name: 'Whole Grain Bread', price: '$2.50', originalPrice: '$4.00', discount: '$1.50 OFF', image: '/placeholder.png' },
  { name: 'Greek Yogurt', price: '$0.99', originalPrice: '$1.99', discount: 'BOGO FREE', image: '/placeholder.png' },
  { name: 'Atlantic Salmon', price: '$8.99/lb', originalPrice: '$12.99/lb', discount: '$4 OFF/lb', image: '/placeholder.png' },
];

export default function SpecialsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Save Big on</span>{' '}
                <span className="block text-green-600 xl:inline">This Week's Specials</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Discover amazing deals on your favorite groceries. From fresh produce to pantry staples, we've got savings for every shopper.
              </p>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 hidden h-full w-1/2 sm:block">
            <Image
              src="/placeholder.png"
              alt="Grocery specials display"
              layout="fill"
              objectFit="cover"
              className="h-full w-full object-cover object-center"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            />
          </div>
        </div>

        {/* Special Categories Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop Our Specials</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {specialCategories.map((category) => (
              <div key={category.name} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={category.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {category.name}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Specials Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Featured Deals</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredSpecials.map((product) => (
              <div key={product.name} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
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
                    <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 line-through">{product.originalPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-green-50 rounded-lg overflow-hidden">
          <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-green-900 sm:text-4xl">Never Miss a Deal</h2>
              <p className="mt-4 text-lg text-green-500">
                Sign up for our newsletter to receive weekly specials and exclusive offers directly in your inbox.
              </p>
              <form className="mt-8 sm:flex justify-center">
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
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-green-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to start saving?</span>
              <span className="block text-green-200">Check out all our current specials.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
                >
                  View All Specials
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}