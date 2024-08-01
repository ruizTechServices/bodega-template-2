'use client';

import Link from "next/link";
import { useState, useRef, useEffect, SetStateAction } from "react";
// import Image from "next/image";

const menuItems = [
  {
    title: "Products",
    items: [
      { name: "Fresh Produce", href: "/products/fresh-produce" },
      { name: "Dairy", href: "/products/dairy" },
      { name: "Bakery", href: "/products/bakery" },
      { name: "Meat & Seafood", href: "/products/meat-seafood" },
    ],
  },
  {
    title: "Specials",
    items: [
      { name: "Weekly Deals", href: "/specials/weekly-deals" },
      { name: "Seasonal Offers", href: "/specials/seasonal-offers" },
      { name: "Bulk Discounts", href: "/specials/bulk-discounts" },
    ],
  },
  {
    title: "About Us",
    items: [
      { name: "Our Story", href: "/about/our-story" },
      { name: "Location", href: "#" },///about/location
      { name: "Contact Us", href: "#" },///about/contact
    ],
  },
  {
    title: "Services",
    items: [
      { name: "Delivery", href: "#" },///services/delivery
      { name: "Catering", href: "#" },///services/catering
      { name: "Gift Baskets", href: "#" },///services/gift-baskets
    ],
  },
];

export function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMenu(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 300) as NodeJS.Timeout | null; // 300ms delay before closing the dropdown
  };

  return (
    <header className="bg-white shadow-md z-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Uncomment and adjust the Image component when you have the logo */}
            {/* <Image
              src="/logo.svg"
              alt="Manhattan Grocer Logo"
              width={150}
              height={50}
              priority
            /> */}
            <span className="text-xl font-bold text-gray-800 z-50"><Link href={"/"}>Grocery Store</Link></span>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center z-100">
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="relative ml-8"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {menu.title}
                </button>
                {hoveredMenu === index && (
                  <div 
                    ref={dropdownRef}
                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {menu.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{item.name}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((menu, index) => (
              <div key={index}>
                <button className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                  {menu.title}
                </button>
                <div className="ml-4">
                  {menu.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}