'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Sample bulk discount products
const bulkProducts = [
  {
    name: 'Organic Apples',
    image: '/placeholder.png',
    basePrice: 0.99,
    unit: 'lb',
    discounts: [
      { quantity: 10, price: 0.89 },
      { quantity: 25, price: 0.79 },
      { quantity: 50, price: 0.69 },
    ],
  },
  {
    name: 'Whole Grain Pasta',
    image: '/placeholder.png',
    basePrice: 2.49,
    unit: 'pack',
    discounts: [
      { quantity: 5, price: 2.29 },
      { quantity: 10, price: 2.09 },
      { quantity: 20, price: 1.89 },
    ],
  },
  {
    name: 'Greek Yogurt',
    image: '/placeholder.png',
    basePrice: 3.99,
    unit: 'tub',
    discounts: [
      { quantity: 5, price: 3.79 },
      { quantity: 10, price: 3.59 },
      { quantity: 15, price: 3.39 },
    ],
  },
  {
    name: 'Chicken Breast',
    image: '/placeholder.png',
    basePrice: 5.99,
    unit: 'lb',
    discounts: [
      { quantity: 5, price: 5.49 },
      { quantity: 10, price: 4.99 },
      { quantity: 20, price: 4.49 },
    ],
  },
];

const BulkProductCard = ({ product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const getCurrentPrice = () => {
    const discount = product.discounts.find(d => selectedQuantity >= d.quantity);
    return discount ? discount.price : product.basePrice;
  };

  const calculateSavings = () => {
    const currentPrice = getCurrentPrice();
    return ((product.basePrice - currentPrice) * selectedQuantity).toFixed(2);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">Base price: ${product.basePrice.toFixed(2)} per {product.unit}</p>
        <div className="mt-4">
          <label htmlFor={`quantity-${product.name}`} className="block text-sm font-medium text-gray-700">
            Quantity:
          </label>
          <select
            id={`quantity-${product.name}`}
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(Number(e.target.value))}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {[1, ...product.discounts.map(d => d.quantity)].map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold text-green-600">
            Price: ${(getCurrentPrice() * selectedQuantity).toFixed(2)}
          </p>
          {selectedQuantity > 1 && (
            <p className="text-sm text-green-600">
              You save: ${calculateSavings()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default function BulkDiscountsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Bulk Discounts</h1>
        <p className="text-xl text-gray-600 mb-8">
          Save more when you buy in bulk! Perfect for families, small businesses, or anyone looking to stock up.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bulkProducts.map((product) => (
            <BulkProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* Bulk Buying Guide */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bulk Buying Guide</h2>
          <p className="text-gray-600 mb-4">
            Buying in bulk can lead to significant savings, but it's important to consider a few things:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Storage space: Ensure you have enough room to store bulk items properly.</li>
            <li>Shelf life: Check expiration dates and consider how quickly you'll use the product.</li>
            <li>Usage: Only buy in bulk if you're sure you'll use the product before it expires.</li>
            <li>Cost comparison: Calculate the per-unit price to ensure you're getting a good deal.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to save big?</span>
              <span className="block text-indigo-200">Start your bulk order today!</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Contact our bulk orders team for custom quotes on larger quantities or special requests.
            </p>
            <a
              href="#"
              className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Contact Bulk Orders Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}