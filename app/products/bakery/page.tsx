import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Breads', href: '#breads', image: '/placeholder.png' },
  { name: 'Pastries', href: '#pastries', image: '/placeholder.png' },
  { name: 'Cakes', href: '#cakes', image: '/placeholder.png' },
  { name: 'Cookies', href: '#cookies', image: '/placeholder.png' },
];

const featuredProducts = [
  { name: 'Artisan Sourdough', price: '$5.99', image: '/placeholder.png' },
  { name: 'Chocolate Croissant', price: '$2.49', image: '/placeholder.png' },
  { name: 'Red Velvet Cupcake', price: '$3.29', image: '/placeholder.png' },
  { name: 'Oatmeal Raisin Cookies', price: '$4.99', image: '/placeholder.png' },
];

export default function BakeryPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Freshly Baked</span>{' '}
                <span className="block text-amber-600 xl:inline">Every Day</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Indulge in our selection of freshly baked goods. From crusty artisan breads to decadent pastries, we offer the finest baked delights.
              </p>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 hidden h-full w-1/2 sm:block">
            <Image
              src="/placeholder.png"
              alt="Bakery display"
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
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Explore Our Bakery</h2>
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
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Today's Specials</h2>
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


        {/* Baking Process Section */}
        <div className="mt-16 bg-amber-50 rounded-lg overflow-hidden">
          <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-extrabold text-amber-900 sm:text-4xl">Our Baking Process</h2>
              <p className="mt-4 text-lg text-amber-700">
                We take pride in our artisanal baking process. Every loaf, pastry, and cake is crafted with care using traditional methods and the finest ingredients.
              </p>
              <dl className="mt-10 space-y-10">
                {[
                  { name: 'Quality Ingredients', description: 'We source only the best, locally-sourced ingredients.' },
                  { name: 'Artisanal Techniques', description: 'Our bakers use time-honored techniques for the perfect texture and flavor.' },
                  { name: 'Freshly Baked Daily', description: 'We bake throughout the day to ensure maximum freshness.' },
                ].map((step) => (
                  <div key={step.name} className="relative">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-amber-900">{step.name}</p>
                    </dt>
                    <dd className="mt-2 text-base text-amber-700">{step.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-amber-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Craving something sweet?</span>
              <span className="block text-amber-200">Order now for same-day pickup.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-amber-50"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}