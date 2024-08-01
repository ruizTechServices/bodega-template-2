import React from 'react';
import Image from 'next/image';

const timelineEvents = [
  {
    year: 1952,
    title: "The Seed is Planted",
    description: "Italian immigrant Giovanni Rossi and his Greek wife Athena open a small produce stand in Manhattan's Lower East Side, selling fresh vegetables from local farms.",
    image: "/placeholder-1950s.png"
  },
  {
    year: 1968,
    title: "Growing Roots",
    description: "The Rossi family expands their business into a full-fledged grocery store, focusing on quality produce and imported Mediterranean goods.",
    image: "/placeholder-1960s.png"
  },
  {
    year: 1985,
    title: "A New Generation",
    description: "Giovanni and Athena's children, Anthony and Sophia, take over the business, introducing a wider range of international products.",
    image: "/placeholder-1980s.png"
  },
  {
    year: 2001,
    title: "Embracing the Community",
    description: "Manhattan Grocer launches its community outreach program, supporting local food banks and nutrition education initiatives.",
    image: "/placeholder-2000s.png"
  },
  {
    year: 2015,
    title: "Farm to Table Partnership",
    description: "We establish direct partnerships with local farms, ensuring the freshest produce and supporting sustainable agriculture.",
    image: "/placeholder-2010s.png"
  },
  {
    year: 2024,
    title: "Looking to the Future",
    description: "Today, Manhattan Grocer continues to evolve, blending tradition with innovation to meet the changing needs of our diverse community.",
    image: "/placeholder-current.png"
  }
];

export default function OurStoryPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Our Story</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            From humble beginnings to becoming Manhattan's beloved neighborhood grocer, our journey has been one of passion, quality, and community.
          </p>
        </div>

        {/* Founders' Quote */}
        <div className="mt-16 bg-green-50 rounded-xl shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">A Family Tradition</span>
                <span className="block text-green-700">of Quality and Care</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500 italic">
                "We didn't just want to sell groceries; we wanted to nourish our community and bring a taste of the Mediterranean to every kitchen in Manhattan."
              </p>
              <p className="mt-2 text-base leading-6 text-gray-900 font-semibold">
                - Giovanni and Athena Rossi, Founders
              </p>
            </div>
          </div>
          <div className="relative -mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <Image
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="/placeholder-founders.png"
              alt="Manhattan Grocer founders"
              layout="fill"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Journey Through the Years</h2>
          <div className="flow-root">
            <ul className="-mb-8">
              {timelineEvents.map((event, eventIdx) => (
                <li key={event.year}>
                  <div className="relative pb-8">
                    {eventIdx !== timelineEvents.length - 1 ? (
                      <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            {event.year} <span className="font-medium text-gray-900">{event.title}</span>
                          </p>
                          <p className="mt-2 text-sm text-gray-500">{event.description}</p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          <div className="relative w-24 h-24 rounded-md overflow-hidden">
                            <Image
                              src={event.image}
                              alt={event.title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Quality", description: "We handpick every product to ensure the highest quality for our customers." },
              { title: "Community", description: "Supporting local producers and giving back to our neighborhood is at the heart of what we do." },
              { title: "Sustainability", description: "We're committed to environmentally friendly practices in every aspect of our business." },
              { title: "Diversity", description: "Our shelves reflect the rich cultural tapestry of Manhattan and beyond." },
              { title: "Innovation", description: "We constantly seek new ways to improve our offerings and customer experience." },
              { title: "Tradition", description: "While embracing the new, we honor the culinary traditions that bring us together." },
            ].map((value) => (
              <div key={value.title} className="bg-gray-50 rounded-lg px-6 py-8 shadow-md">
                <h3 className="text-lg font-medium text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-green-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Be Part of Our Story</span>
              <span className="block text-green-200">Visit Manhattan Grocer Today</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-green-200">
              Experience the passion, quality, and community spirit that have defined us for over 70 years.
            </p>
            <a
              href="#"
              className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-green-700 hover:bg-green-50"
            >
              Find a Store Near You
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}