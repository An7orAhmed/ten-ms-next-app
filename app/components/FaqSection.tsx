'use client';

import { useState } from 'react';
import { GlassCard } from './GlassCard';
import { FaqItem } from '../lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { HtmlRenderer } from './HtmlRenderer';

const FaqEntry = ({ item }: { item: FaqItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20 py-4 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left transition-colors hover:text-blue-900"
      >
        <span className="font-semibold">{item.question}</span>
        {isOpen ? (
          <MinusIcon className="h-5 w-5 flex-shrink-0" />
        ) : (
          <PlusIcon className="h-5 w-5 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <HtmlRenderer htmlString={item.answer} className="pt-3" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FaqSection = ({ title, faqs, delay = 0 }: { title: string; faqs: FaqItem[]; delay?: number }) => (
  <GlassCard className="group p-6 md:p-8" delay={delay}>
    <h3 className="mb-4 text-2xl font-bold">{title}</h3>
    <div>
      {faqs.map((faq) => (
        <FaqEntry key={faq.id} item={faq} />
      ))}
    </div>
  </GlassCard>
);