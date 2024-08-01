import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import ProductGrid from '../../components/products/ProductGrid';
import FeaturedProduct from '../../components/products/FeaturedProduct';
import Newsletter from '../../components/products/Newsletter';
import Link from 'next/link';
const products = [
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  // Add more products here...
];

const featuredProduct = {
  name: 'Limited Edition Watch',
  description: 'Elevate your style with our premium, limited edition timepiece.',
  price: '$299',
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
  imageAlt: 'Limited Edition Watch on a marble surface.',
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pt-24 pb-8 border-b border-gray-200">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Our Products</h1>
          <div className="flex items-center">
            <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Home
            </Link>
            <ChevronRightIcon className="h-5 w-5 text-gray-400 mx-2" />
            <span className="text-sm font-medium text-gray-500">Products</span>
          </div>
        </div>

        <FeaturedProduct product={featuredProduct} />
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">All Products</h2>
          <ProductGrid products={products} />
        </div>

        <Newsletter />
      </div>
    </div>
  );
}