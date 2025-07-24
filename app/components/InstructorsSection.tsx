import { GlassCard } from './GlassCard';
import { Instructor } from '../lib/types';
import Image from 'next/image';
import { HtmlRenderer } from './HtmlRenderer';

export const InstructorsSection = ({ title, instructors, delay = 0 }: { title: string; instructors: Instructor[]; delay?: number }) => (
  <GlassCard className="group p-6 md:p-8" delay={delay}>
    <h3 className="mb-6 text-2xl font-bold">{title}</h3>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {instructors.map((instructor) => (
        <div key={instructor.name} className="flex flex-col items-center text-center">
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={120}
            height={120}
            className="rounded-full border-4 border-white/20 object-cover shadow-lg"
          />
          <h4 className="mt-4 text-xl font-bold text-black">{instructor.name}</h4>
          <p className="text-md font-medium text-black">{instructor.short_description}</p>
          <HtmlRenderer htmlString={instructor.description} className="mt-2 text-sm" />
        </div>
      ))}
    </div>
  </GlassCard>
);