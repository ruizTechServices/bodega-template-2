import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Beef', href: '#beef', image: '/placeholder.png' },
  { name: 'Poultry', href: '#poultry', image: '/placeholder.png' },
  { name: 'Fish', href: '#fish', image: '/placeholder.png' },
  { name: 'Shellfish', href: '#shellfish', image: '/placeholder.png' },
];

const featuredProducts = [
  { name: 'Prime Ribeye Steak', price: '$24.99/lb', image: '/placeholder.png' },
  { name: 'Organic Chicken Breast', price: '$8.99/lb', image: '/placeholder.png' },
  { name: 'Wild-Caught Salmon', price: '$19.99/lb', image: '/placeholder.png' },
  { name: 'Jumbo Shrimp', price: '$15.99/lb', image: '/placeholder.png' },
];

export default function MeatSeafoodPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Premium</span>{' '}
                <span className="block text-red-600 xl:inline">Meat & Seafood</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Discover our selection of high-quality meats and fresh seafood. From prime cuts to ocean delicacies, we offer the finest selection for your table.
              </p>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 hidden h-full w-1/2 sm:block">
            <Image
              src="/placeholder.png"
              alt="Meat and Seafood display"
              layout="fill"
              objectFit="cover"
              className="h-full w-full object-cover object-center"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            />
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Explore Our Selection</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {categories.map((category) => (
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

        {/* Featured Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
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
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="mt-16 bg-gray-50 rounded-lg overflow-hidden">
          <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Quality Assurance</h2>
              <p className="mt-4 text-lg text-gray-500">
                We take pride in offering the highest quality meat and seafood. Our products are sourced responsibly and handled with the utmost care to ensure freshness and flavor.
              </p>
              <dl className="mt-10 space-y-10">
                {[
                  { name: 'Responsibly Sourced', description: 'We partner with trusted farms and fisheries that prioritize sustainability.' },
                  { name: 'Expertly Handled', description: 'Our butchers and fishmongers are skilled professionals, ensuring the best cuts and preparations.' },
                  { name: 'Freshness Guaranteed', description: 'We maintain strict cold chain management to preserve quality from source to your table.' },
                ].map((point) => (
                  <div key={point.name} className="relative">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">{point.name}</p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">{point.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-red-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to elevate your meals?</span>
              <span className="block text-red-300">Shop our premium selection today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}