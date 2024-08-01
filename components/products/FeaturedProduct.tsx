import Link from 'next/link';
import React from 'react';

export default function FeaturedProduct({ product }: { product: {
  name: string;
  description: string;
  price: string | number;
  href: string;
  imageSrc: string;
  imageAlt: string;
} }) {
  return (
    <div className="mt-16 bg-gray-100 rounded-lg overflow-hidden">
      <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 xl:flex xl:items-center">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {product.name}
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-500">
            {product.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center">
              <p className="text-5xl font-extrabold text-gray-900">{product.price}</p>
              <p className="ml-4 text-base font-medium text-gray-500">Limited time offer</p>
            </div>
            <Link
              href={product.href}
              className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="mt-12 xl:mt-0 xl:ml-8">
          <img
            className="h-full w-full object-cover xl:h-96 xl:w-96 rounded-lg"
            src={product.imageSrc}
            alt={product.imageAlt}
          />
        </div>
      </div>
    </div>
  );
}