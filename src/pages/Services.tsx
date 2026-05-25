import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'startups' | 'business'>('startups');

  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA] min-h-screen text-vexa-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Toggle Controls */}
        <div className="flex w-full max-w-[600px] bg-gray-100 rounded-full p-1 mb-12 sm:mb-16">
          <button
            onClick={() => setActiveTab('startups')}
            className={`flex-1 py-3 px-6 rounded-full text-lg font-bold transition-all duration-300 ${
              activeTab === 'startups' 
                ? 'bg-[#7050FF] text-white shadow-md' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            For startups
          </button>
          <button
            onClick={() => setActiveTab('business')}
            className={`flex-1 py-3 px-6 rounded-full text-lg font-bold transition-all duration-300 ${
              activeTab === 'business' 
                ? 'bg-[#7050FF] text-white shadow-md' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            For business
          </button>
        </div>

        {/* Content Area */}
        {activeTab === 'startups' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-4">
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-12 lg:mb-20 font-medium max-w-2xl">
                We can assist in turning your idea into a workable solution on schedule and within your budget since we understand how difficult it is to be a startup entrepreneur and try to create innovative products to dominate the market while having limited resources like time and money.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
                {/* MVP Card */}
                <div className="bg-white rounded-[32px] p-8 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col group cursor-pointer transition-shadow hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)]">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">MVP development</h3>
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#7050FF] transition-colors" />
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Our team helps you get the MVP product ready for the actual launch within 3 months to test the market and get first users feedback.
                  </p>
                </div>

                {/* UX/UI Card */}
                <div className="bg-white rounded-[32px] p-8 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col group cursor-pointer transition-shadow hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)]">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">UX/UI design</h3>
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#7050FF] transition-colors" />
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    We guide you through all design paths including user research, wireframing and prototyping to get stunning designs your users will love.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Product Development Card */}
              <div className="bg-white rounded-[40px] p-10 sm:p-12 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] mb-2">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Product development</h2>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Since 2016 we have built web and mobile apps that meet your business goals, your users needs and help you get fast revenue.
                </p>
              </div>

              {/* Smaller Cards */}
              <div className="bg-white rounded-full px-8 py-5 sm:py-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] flex justify-between items-center group cursor-pointer hover:shadow-md transition-shadow">
                <span className="text-xl font-bold">Web development</span>
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#7050FF] transition-colors" />
              </div>

              <div className="bg-white rounded-full px-8 py-5 sm:py-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] flex justify-between items-center group cursor-pointer hover:shadow-md transition-shadow">
                <span className="text-xl font-bold">Mobile development</span>
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#7050FF] transition-colors" />
              </div>

              <div className="bg-white rounded-full px-8 py-5 sm:py-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] flex justify-between items-center group cursor-pointer hover:shadow-md transition-shadow">
                <span className="text-xl font-bold">Front-end development</span>
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#7050FF] transition-colors" />
              </div>

            </div>
          </div>
        )}

        {activeTab === 'business' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-4">
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-12 lg:mb-20 font-medium max-w-2xl">
                We partner with established companies to scale their digital presence. From crafting high-conversion websites to executing data-driven email campaigns, we provide the comprehensive marketing solutions you need to accelerate growth, capture market share, and maximize ROI.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
                {/* Email Campaigns Card */}
                <div className="bg-white rounded-[32px] p-8 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col group cursor-pointer transition-shadow hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)]">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">Email campaigns</h3>
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#7050FF] transition-colors" />
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Nurture leads and drive recurring revenue with targeted, automated email marketing strategies designed to engage and convert your specific audience.
                  </p>
                </div>

                {/* Digital Strategy Card */}
                <div className="bg-white rounded-[32px] p-8 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col group cursor-pointer transition-shadow hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)]">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">Digital strategy</h3>
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#7050FF] transition-colors" />
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    We audit your current digital footprint and develop a comprehensive, scalable roadmap to expand your reach and optimize your conversion funnels.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Marketing Solutions Card */}
              <div className="bg-white rounded-[40px] p-10 sm:p-12 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] mb-2">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Digital marketing</h2>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  We build scalable digital marketing ecosystems that elevate your brand awareness, generate high-quality leads, and systematically grow your business.
                </p>
              </div>

              {/* Smaller Cards */}
              <div className="bg-white rounded-full px-8 py-5 sm:py-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] flex justify-between items-center group cursor-pointer hover:shadow-md transition-shadow">
                <span className="text-xl font-bold">Website design & build</span>
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#7050FF] transition-colors" />
              </div>

              <div className="bg-white rounded-full px-8 py-5 sm:py-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] flex justify-between items-center group cursor-pointer hover:shadow-md transition-shadow">
                <span className="text-xl font-bold">SEO & Content marketing</span>
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#7050FF] transition-colors" />
              </div>

              <div className="bg-white rounded-full px-8 py-5 sm:py-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] flex justify-between items-center group cursor-pointer hover:shadow-md transition-shadow">
                <span className="text-xl font-bold">Conversion optimization (CRO)</span>
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#7050FF] transition-colors" />
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
