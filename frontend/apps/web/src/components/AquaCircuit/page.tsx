'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSectionAqua from './HeroSectionAqua';
import KeySection from './KeySection';
import MediaSection from './MediaSection';
import ConclusionVertientes from './ConclusionVertientes';

export default function AquaCircuit() {
  return (
    <div>
      <HeroSectionAqua />
      <KeySection />
      <MediaSection />
      <ConclusionVertientes />
    </div>
  );
}