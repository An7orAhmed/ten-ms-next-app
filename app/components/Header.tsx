'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeaderProps {
  currentLang: 'en' | 'bn';
  onLangChange: (lang: 'en' | 'bn') => void;
}

export const Header = ({ currentLang, onLangChange }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="container mx-auto flex items-center justify-between rounded-2xl border border-white/20 bg-white/40 p-4 backdrop-blur-xl shadow-xl">
        <div className='flex items-center space-x-4'>
          <Image
            src="/10mslogo-svg.svg"
            alt="10 Minute School Logo"
            width={100}
            height={27}
          />
          <h1 className="text-xl font-bold text-black md:text-2xl">IELTS Course</h1>
        </div>
        <div className="flex items-center space-x-2 rounded-full border border-white/20 bg-black/20 p-1">
          <button
            onClick={() => onLangChange('en')}
            className={`rounded-full px-3 py-1 text-sm transition-colors md:px-4 md:py-2 ${
              currentLang === 'en' ? 'bg-white text-black font-semibold' : 'text-black/80 hover:text-black'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => onLangChange('bn')}
            className={`rounded-full px-3 py-1 text-sm transition-colors md:px-4 md:py-2 ${
              currentLang === 'bn' ? 'bg-white text-black font-semibold' : 'text-black/80 hover:text-black'
            }`}
          >
            BN
          </button>
        </div>
      </div>
    </motion.header>
  );
};