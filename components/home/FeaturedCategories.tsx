import { FC } from 'react';
import { ShoppingBagIcon, CakeIcon, HeartIcon } from '@heroicons/react/24/outline';
const categories = [
  {
    name: 'Fresh Produce',
    description: 'Locally sourced fruits and vegetables, delivered daily.',
    icon: HeartIcon,
  },
  {
    name: 'Artisan Bakery',
    description: 'Freshly baked bread, pastries, and cakes made in-house.',
    icon: CakeIcon,
  },
  {
    name: 'Gourmet Deli',
    description: 'Premium meats, cheeses, and prepared foods for any occasion.',
    icon: HeartIcon,
  },
  {
    name: 'Organic Pantry',
    description: 'A wide selection of organic and natural grocery items.',
    icon: ShoppingBagIcon,
  },
];

export const FeaturedCategories: FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Offerings</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for your kitchen
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our wide range of high-quality products, from farm-fresh produce to artisanal delights.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {categories.map((category) => (
              <div key={category.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <category.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {category.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{category.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};