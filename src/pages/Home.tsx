import React from 'react';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import WhyWeb from '../components/WhyWeb';
import Metrics from '../components/Metrics';
import Solutions from '../components/Solutions';
import WhatWeOffer from '../components/WhatWeOffer';
import AdaptStrategy from '../components/AdaptStrategy';
import Process from '../components/Process';
import CallToAction from '../components/CallToAction';
import RelatedArticles from '../components/RelatedArticles';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <WhyWeb />
      <Metrics />
      <Solutions />
      <WhatWeOffer />
      <AdaptStrategy />
      <Process />
      <CallToAction />
      <RelatedArticles />
    </main>
  );
}
