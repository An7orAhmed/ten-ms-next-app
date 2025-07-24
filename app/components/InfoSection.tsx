import { GlassCard } from './GlassCard';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { CourseChecklistItem } from '../lib/types';

type InfoItem = string | CourseChecklistItem;

interface InfoSectionProps {
  title: string;
  items: InfoItem[];
  delay?: number; 
}

export const InfoSection = ({ title, items, delay = 0 }: InfoSectionProps) => (
  <GlassCard className="group p-6 md:p-8" delay={delay}>
    <h3 className="mb-6 text-2xl font-bold">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, index) => {
        const text = typeof item === 'string' ? item : item.text;
        const icon = typeof item !== 'string' && item.icon ? item.icon : null;

        return (
          <li key={index} className="flex items-start">
            {icon ? (
              <Image src={icon} alt="" width={24} height={24} className="mr-3 mt-1 h-6 w-6 flex-shrink-0"/>
            ) : (
              <CheckCircleIcon className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
            )}
            <span className="text-slate-800">{text}</span>
          </li>
        );
      })}
    </ul>
  </GlassCard>
);