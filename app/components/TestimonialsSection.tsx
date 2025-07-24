import { GlassCard } from './GlassCard';
import { Testimonial } from '../lib/types';
import Image from 'next/image';

export const TestimonialsSection = ({ title, testimonials, delay = 0 }: { title: string; testimonials: Testimonial[]; delay?: number }) => (
  <GlassCard className="group p-6 md:p-8" delay={delay}>
    <h3 className="mb-6 text-2xl font-bold">{title}</h3>
    <div className="flex space-x-6 overflow-x-auto p-2 pb-4 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-black/10">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="w-80 flex-shrink-0 rounded-xl border border-white/10 bg-black/20 p-6 text-center">
          <Image
            src={testimonial.profile_image}
            alt={testimonial.name}
            width={80}
            height={80}
            className="mx-auto rounded-full border-2 border-white/20 object-cover"
          />
          <h4 className="text-xl mt-4 font-bold text-black">{testimonial.name}</h4>
          <p className="text-sm font-medium text-gray-500">{testimonial.description}</p>
          <p className="mt-3 text-sm text-black">{testimonial.testimonial}</p>
        </div>
      ))}
    </div>
  </GlassCard>
);