import { GlassCard } from './GlassCard';
import { CourseData } from '../lib/types';
import { motion } from 'framer-motion';
import { InfoSection } from './InfoSection'; 

interface RightContentProps {
  data: CourseData; 
}

export const RightContent = ({ data }: RightContentProps) => {
  const trailer = data.media.find(m => m.resource_type === 'video');
  const trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer.resource_value}` : '';

  return (
    <div className="sticky top-28 space-y-8"> 
      <GlassCard className="group p-4 md:p-6" delay={0.2}>
        <h3 className="mb-4 text-xl font-bold">Course Trailer</h3>
        <div className="aspect-video overflow-hidden rounded-lg border border-white/10">
          {trailerUrl ? (
            <iframe
              className="h-full w-full"
              src={trailerUrl}
              title="Course Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex h-full items-center justify-center bg-black/30 text-slate-900">
              Video not available
            </div>
          )}
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          {data.cta_text.value.charAt(0).toUpperCase() + data.cta_text.value.slice(1)}
        </motion.button>
      </GlassCard>

      <InfoSection title="Course Highlights" items={data.checklist} delay={0.3} />
    </div>
  );
};