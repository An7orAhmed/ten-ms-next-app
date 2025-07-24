import { GlassCard } from './GlassCard';
import { HtmlRenderer } from './HtmlRenderer';
import { InstructorsSection } from './InstructorsSection';
import { InfoSection } from './InfoSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FaqSection } from './FaqSection';
import Image from 'next/image';

interface LeftContentProps {
  description: string;
  sections: any[];
}

function getSection<T>(sections: any[], type: string): { name: string; values: T[] } | undefined {
  const section = sections.find(s => s.type === type);
  return section ? { name: section.name, values: section.values } : undefined;
}

export const LeftContent = ({ description, sections }: LeftContentProps) => {
  const instructorsSection = getSection<any>(sections, 'instructors');
  const layoutSection = getSection<any>(sections, 'features');
  const learningsSection = getSection<any>(sections, 'pointers');
  const detailsSection = getSection<any>(sections, 'about');
  const testimonialsSection = getSection<any>(sections, 'testimonials');
  const faqSection = getSection<any>(sections, 'faq');

  return (
    <div className="space-y-8">
      <GlassCard className="group p-6 md:p-8" delay={0.2}>
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Course Overview</h2>
        <HtmlRenderer htmlString={description} />
      </GlassCard>

      {instructorsSection && (
        <InstructorsSection title={instructorsSection.name} instructors={instructorsSection.values} delay={0.3} />
      )}
      
      {layoutSection && (
         <GlassCard className="group p-6 md:p-8" delay={0.4}>
            <h3 className="mb-6 text-2xl font-bold">{layoutSection.name}</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {layoutSection.values.map((item: any) => (
                <div key={item.id} className="flex items-start space-x-4">
                  {item.icon && <Image src={item.icon} alt={item.title} width={40} height={40} className="h-10 w-10 flex-shrink-0" />}
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
         </GlassCard>
      )}
      
      {learningsSection && (
         <InfoSection title={learningsSection.name} items={learningsSection.values.map((v: any) => v.text)} delay={0.5} />
      )}

      {detailsSection && (
        <GlassCard className="group p-6 md:p-8" delay={0.6}>
          <h3 className="mb-6 text-2xl font-bold">{detailsSection.name}</h3>
          <div className="space-y-6">
            {detailsSection.values.map((item: any) =>(
              <div key={item.id}>
                  <HtmlRenderer htmlString={item.title} className="text-xl font-semibold" />
                  <HtmlRenderer htmlString={item.description} className="mt-2" />
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {testimonialsSection && (
        <TestimonialsSection title={testimonialsSection.name} testimonials={testimonialsSection.values} delay={0.7} />
      )}

      {faqSection && (
        <FaqSection title={faqSection.name} faqs={faqSection.values} delay={0.8} />
      )}
    </div>
  );
};