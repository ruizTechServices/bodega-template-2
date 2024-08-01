import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Fruits', href: '#fruits', image: '/api/placeholder/400/300' },
  { name: 'Vegetables', href: '#vegetables', image: '/api/placeholder/400/300' },
  { name: 'Herbs', href: '#herbs', image: '/api/placeholder/400/300' },
  { name: 'Organic', href: '#organic', image: '/api/placeholder/400/300' },
];

const featuredProducts = [
  { name: 'Fresh Strawberries', price: '$4.99', image: '/api/placeholder/200/200' },
  { name: 'Organic Spinach', price: '$3.49', image: '/api/placeholder/200/200' },
  { name: 'Ripe Avocados', price: '$2.99', image: '/api/placeholder/200/200' },
  { name: 'Crisp Apples', price: '$1.99', image: '/api/placeholder/200/200' },
];

export default function FreshProducePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Fresh Produce</span>{' '}
                <span className="block text-indigo-600 xl:inline">Straight from the Farm</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Discover the freshest fruits and vegetables, handpicked for quality and flavor. From crisp apples to juicy tomatoes, we've got nature's best.
              </p>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 hidden h-full w-1/2 sm:block">
            <Image
              src="/api/placeholder/1000/1000"
              alt="Fresh produce display"
              layout="fill"
              objectFit="cover"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
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
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-indigo-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block text-indigo-200">Start shopping our fresh produce today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}