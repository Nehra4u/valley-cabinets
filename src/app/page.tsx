'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronRight, Menu, X } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImages = [
    {
      src: '/images/brad-chapman-8fd0resdtBk-unsplash.jpg',
      alt: 'Modern White Kitchen Cabinets',
      title: 'Your Dream Kitchen, Delivered.',
      subtitle: 'Premium solid wood cabinets and countertops at factory-direct prices.'
    },
    {
      src: '/images/lotus-design-n-print-iUjIiP0sMTs-unsplash.jpg',
      alt: 'Elegant Dark Kitchen Cabinets',
      title: 'Crafted for Life, Designed for You.',
      subtitle: 'Experience the perfect blend of style, durability, and affordability.'
    },
    {
      src: '/images/point3d-commercial-imaging-ltd-eEkAqh5L4h0-unsplash.jpg',
      alt: 'Spacious Kitchen with Island',
      title: 'Transform Your Home with Valley Cabinet Supply.',
      subtitle: 'From design to installation, we make your vision a reality.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                Valley Cabinet Supply
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#consultation" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">
                Free Consultation
              </a>
              <a href="#samples" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">
                Samples
              </a>
              <a href="#kitchen" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">
                Shop Kitchen
              </a>
              <a href="#bath" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300">
                Shop Bath
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#consultation" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                Free Consultation
              </a>
              <a href="#samples" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                Samples
              </a>
              <a href="#kitchen" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                Shop Kitchen
              </a>
              <a href="#bath" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                Shop Bath
              </a>
              <a href="tel:613-917-0497" className="bg-white text-black block px-3 py-2 text-base font-medium hover:bg-gray-200 transition-all duration-300 rounded-lg mx-3 mt-4">
                613-917-0497
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-gray-800 to-gray-900">
        {/* Always Visible Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white max-w-5xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Your Dream Kitchen, Delivered.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Premium solid wood cabinets and countertops at factory-direct prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-black to-gray-700 hover:from-gray-800 hover:to-black text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-gray-500/25">
                Book Free Consultation
                <ChevronRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-white/80 text-white hover:bg-white hover:text-black px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Order Samples
              </button>
            </div>
          </div>
        </div>

        {/* Background Images */}
        <div className="absolute inset-0 z-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    onError={(e) => {
                      console.log('Image failed to load:', image.src);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-gray-800/50" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Solid Wood Cabinets Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Solid Wood Cabinets at Great Prices
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              No MDF or Thermofoil here. Just modern kitchen cabinets with premium features to fit any budget.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-xl hover:shadow-2xl">
              SHOP KITCHEN & BATHROOM CABINETS
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'White Shaker',
                sampleImage: '/images/brad-chapman-8fd0resdtBk-unsplash.jpg',
                kitchenImage: '/images/lotus-design-n-print-iUjIiP0sMTs-unsplash.jpg',
                description: 'Classic and versatile'
              },
              {
                name: 'Modern Grey',
                sampleImage: '/images/point3d-commercial-imaging-ltd-eEkAqh5L4h0-unsplash.jpg',
                kitchenImage: '/images/tile-merchant-ireland-DPUf9G_3Iyo-unsplash.jpg',
                description: 'Sleek and contemporary'
              },
              {
                name: 'Espresso Shaker',
                sampleImage: '/images/zac-gudakov-K5JI_wRQqY0-unsplash.jpg',
                kitchenImage: '/images/brad-chapman-8fd0resdtBk-unsplash.jpg',
                description: 'Rich and elegant finish'
              },
              {
                name: 'Stone Harbour',
                sampleImage: '/images/lotus-design-n-print-iUjIiP0sMTs-unsplash.jpg',
                kitchenImage: '/images/point3d-commercial-imaging-ltd-eEkAqh5L4h0-unsplash.jpg',
                description: 'Sophisticated dark finish'
              }
            ].map((cabinet, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative mb-4">
                  {/* Cabinet Sample Overlay */}
                  <div className="absolute top-4 left-4 z-10 w-24 h-32 rounded-lg overflow-hidden shadow-2xl border-2 border-white">
                    <Image
                      src={cabinet.sampleImage}
                      alt={`${cabinet.name} sample`}
                      width={96}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Kitchen Scene */}
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={cabinet.kitchenImage}
                      alt={`${cabinet.name} kitchen`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                      <div className="absolute bottom-4 right-4 text-white">
                        <p className="text-sm text-gray-200">{cabinet.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{cabinet.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Kitchen Design Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-8">
              Free Kitchen Design
            </h2>
          </div>

          {/* 3-Step Process */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  description: 'Book an in-home or virtual consultation to discuss your vision and requirements.',
                  image: '/images/brad-chapman-8fd0resdtBk-unsplash.jpg'
                },
                {
                  step: '2',
                  title: 'Design Development',
                  description: 'Our experts create detailed 3D renderings and layouts tailored to your space.',
                  image: '/images/lotus-design-n-print-iUjIiP0sMTs-unsplash.jpg'
                },
                {
                  step: '3',
                  title: 'Final Approval',
                  description: 'Review and approve your custom design within 48 hours of consultation.',
                  image: '/images/point3d-commercial-imaging-ltd-eEkAqh5L4h0-unsplash.jpg'
                }
              ].map((step, index) => (
                <div key={index} className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={step.image}
                      alt={`Step ${step.step}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-black">{step.step}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Ottawa Valley kitchen cabinets: book an in-home or virtual consultation and within 48 hours we will have a <strong className="text-white">free design ready for your approval.</strong>
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-xl hover:shadow-2xl">
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* How it Works & Wood vs MDF Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* How it Works */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 mb-8">
                <Image
                  src="/images/brad-chapman-8fd0resdtBk-unsplash.jpg"
                  alt="Modern kitchen with white shaker cabinets"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm text-gray-200">Professional installation or DIY options available</p>
                  </div>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">
                How it Works
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Save time by having us install the cabinets or save money by installing them yourself.
              </p>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                LEARN WHAT'S BEST FOR YOU
              </button>
            </div>

            {/* Wood vs MDF */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 mb-8">
                <Image
                  src="/images/lotus-design-n-print-iUjIiP0sMTs-unsplash.jpg"
                  alt="Dark gray cabinets with marble countertops"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm text-gray-200">Premium solid wood construction</p>
                  </div>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">
                Wood vs MDF
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                There are several reasons high-end homes are outfitted with solid wood cabinets, from a premium appearance and better resale value to durability and repairability.
              </p>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                READ ABOUT OUR CABINETS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="consultation" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Premium Features for Daily Enjoyment
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every cabinet comes with premium features that ensure durability, functionality, and beauty.
              Built to last a lifetime with professional-grade materials and craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Solid Wood Construction',
                description: 'Durable and long-lasting solid wood frames and doors.',
                icon: '🌳'
              },
              {
                title: 'Soft-Close Hinges',
                description: 'Prevent slamming and ensure quiet operation.',
                icon: '🔇'
              },
              {
                title: 'Full Extension Drawers',
                description: 'Maximize storage and easy access to contents.',
                icon: '📦'
              },
              {
                title: 'Dovetail Drawer Boxes',
                description: 'Superior strength and craftsmanship for heavy loads.',
                icon: '🔨'
              },
              {
                title: 'Water-Resistant Finish',
                description: 'Protects against moisture and everyday spills.',
                icon: '💧'
              },
              {
                title: '6-Way Adjustable Hinges',
                description: 'Hidden hinges with 6-way adjustment for perfect door alignment',
                icon: '🎯'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-gray-600 group"
              >
                <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Style Section */}
      <section id="kitchen" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Choose Your Style
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Select from our wide range of cabinet styles to match your home's aesthetic.
              Each style is crafted with attention to detail and premium materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 'shaker',
                name: 'Shaker White',
                image: '/images/brad-chapman-8fd0resdtBk-unsplash.jpg',
                description: 'Timeless design with clean lines.',
                price: '$1200/linear ft'
              },
              {
                id: 'modern',
                name: 'Modern Grey',
                image: '/images/lotus-design-n-print-iUjIiP0sMTs-unsplash.jpg',
                description: 'Sleek and contemporary look.',
                price: '$1350/linear ft'
              },
              {
                id: 'classic',
                name: 'Classic Wood',
                image: '/images/point3d-commercial-imaging-ltd-eEkAqh5L4h0-unsplash.jpg',
                description: 'Warm and traditional feel.',
                price: '$1100/linear ft'
              },
              {
                id: 'farmhouse',
                name: 'Farmhouse Blue',
                image: '/images/tile-merchant-ireland-DPUf9G_3Iyo-unsplash.jpg',
                description: 'Rustic charm with a modern twist.',
                price: '$1250/linear ft'
              }
            ].map((style, index) => (
              <div key={style.id} className="cursor-pointer transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={style.image}
                    alt={style.name}
                    width={300}
                    height={200}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-slate-900">{style.price}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {style.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {style.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIY Assembly Videos Section */}
      <section id="samples" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Do It Yourself with Assembly Videos!
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Learn how to assemble our cabinets with instructional videos. These videos cover everything from what tools you need to get started, to each step of putting your cabinet together.
              Save money and gain satisfaction by doing it yourself!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Base Cabinet Assembly',
                description: 'Step-by-step guide to assembling your base cabinets.',
                thumbnail: '/images/zac-gudakov-K5JI_wRQqY0-unsplash.jpg',
                duration: '10:30',
                views: '8.5K'
              },
              {
                title: 'Wall Cabinet Installation',
                description: 'Learn how to securely install wall cabinets.',
                thumbnail: '/images/brad-chapman-8fd0resdtBk-unsplash.jpg',
                duration: '12:45',
                views: '6.2K'
              },
              {
                title: 'Drawer Box Construction',
                description: 'Detailed instructions for building sturdy drawer boxes.',
                thumbnail: '/images/lotus-design-n-print-iUjIiP0sMTs-unsplash.jpg',
                duration: '15:20',
                views: '12.1K'
              }
            ].map((video, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                    <button className="bg-gradient-to-r from-black to-gray-700 hover:from-gray-800 hover:to-black text-white p-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-gray-500/25">
                      ▶️
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {video.duration}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                    {video.views} views
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{video.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our Premium Cabinet Gallery
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our stunning collection of kitchen and bathroom cabinets. Each piece is crafted with precision and designed to transform your space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: '/images/brad-chapman-8fd0resdtBk-unsplash.jpg',
                alt: 'Modern Kitchen',
                title: 'Modern Kitchen',
                description: 'Sleek and functional design'
              },
              {
                src: '/images/lotus-design-n-print-iUjIiP0sMTs-unsplash.jpg',
                alt: 'Classic Bathroom Vanity',
                title: 'Classic Bathroom Vanity',
                description: 'Elegant and spacious'
              },
              {
                src: '/images/point3d-commercial-imaging-ltd-eEkAqh5L4h0-unsplash.jpg',
                alt: 'Shaker Style Cabinets',
                title: 'Shaker Style Cabinets',
                description: 'Timeless appeal'
              },
              {
                src: '/images/tile-merchant-ireland-DPUf9G_3Iyo-unsplash.jpg',
                alt: 'Contemporary Kitchen',
                title: 'Contemporary Kitchen',
                description: 'Innovative and stylish'
              },
              {
                src: '/images/zac-gudakov-K5JI_wRQqY0-unsplash.jpg',
                alt: 'Luxury Vanity',
                title: 'Luxury Vanity',
                description: 'Premium materials and finish'
              },
              {
                src: '/images/brad-chapman-8fd0resdtBk-unsplash.jpg',
                alt: 'Custom Design',
                title: 'Custom Design',
                description: 'Tailored to your specifications'
              }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied customers have to say about their Valley Cabinet experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                location: 'Ottawa, ON',
                rating: 5,
                text: 'Absolutely love my new kitchen! The cabinets are high quality and the design service was exceptional. Highly recommend Valley Cabinet Supply!'
              },
              {
                name: 'David Lee',
                location: 'Toronto, ON',
                rating: 5,
                text: 'Fantastic experience from start to finish. The solid wood cabinets are beautiful and the prices were unbeatable. Will definitely be a returning customer.'
              },
              {
                name: 'Emily Rodriguez',
                location: 'Montreal, QC',
                rating: 5,
                text: 'The DIY videos were incredibly helpful. I was able to install everything myself and save thousands on installation costs.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black to-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-5xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get a free consultation and design within 48 hours. Our experts will help you create the kitchen of your dreams with premium cabinets at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black hover:bg-gray-100 px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-white/25">
              Book Free Consultation
            </button>
            <button className="border-2 border-white/80 text-white hover:bg-white hover:text-black px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              Call 613-917-0497
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Valley Cabinet Supply
              </h3>
              <p className="text-gray-300 mb-8 max-w-lg leading-relaxed text-lg">
                Solid Wood Cabinets at Amazing Prices, Shipped to Your Door. Serving the Ottawa Valley, Ottawa, Toronto, Montreal and most Canadian provinces with premium quality and exceptional service.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-gray-300">
                Quick Links
              </h4>
              <ul className="space-y-3 text-gray-300">
                {['About Us', 'Assembly and Shipping', 'Solid Wood', 'Kitchen Planning', 'Returns & Exchanges', 'Warranty'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors duration-300 text-lg">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">
                Contact Info
              </h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <span className="text-lg">613-917-0497</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg">info@valleycabinets.ca</span>
                </div>
                <div className="flex items-start">
                  <span className="text-lg">640 Barnett Blvd, Renfrew, ON, K7V 0A8</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p className="text-lg">
              &copy; 2025 Valley Cabinet Supply. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}