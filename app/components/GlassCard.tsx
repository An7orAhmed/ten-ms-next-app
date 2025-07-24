import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const baseColors = [
  '#A78BFA', // Violet
  '#67E8F9', // Cyan
  '#FDE047', // Yellow
  '#FB7185', // Rose
  '#BEF264', // Lime
  '#F472B6', // Pink
  '#818CF8', // Indigo
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const GlassCard = ({ children, className = '', delay = 0 }: GlassCardProps) => {
  const randomColorIndex = Math.floor(Math.random() * baseColors.length);
  const selectedBaseColor = baseColors[randomColorIndex];

  const adjustColor = (hex: string, percent: number) => {
    const f = parseInt(hex.slice(1), 16),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = f >> 16,
      G = (f >> 8) & 0x00ff,
      B = f & 0x0000ff;
    return (
      '#' +
      (
        0x1000000 +
        (Math.round((t - R) * p) + R) * 0x10000 +
        (Math.round((t - G) * p) + G) * 0x100 +
        (Math.round((t - B) * p) + B)
      )
        .toString(16)
        .slice(1)
    );
  };

  const lightColor = adjustColor(selectedBaseColor, 0.2); 
  const darkColor = adjustColor(selectedBaseColor, -0.2); 

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={`relative overflow-hidden rounded-2xl border shadow-xl ${className}`}
      style={{
        background: `linear-gradient(to bottom, ${lightColor}20, ${darkColor}71)`, 
        borderColor: `${selectedBaseColor}50`,
        backdropFilter: 'blur(5px)', 
        WebkitBackdropFilter: 'blur(5px)', 
      }}
    >
      <div 
        className="absolute inset-0 transition-colors duration-300 group-hover:border-white/20" 
        style={{ borderColor: `${selectedBaseColor}80` }} 
      /> 
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};