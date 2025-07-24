import { motion } from 'framer-motion';

export const Loader = () => (
  <div className="flex h-screen items-center justify-center">
    <motion.div
      style={{
        width: 50,
        height: 50,
        border: '5px solid #ffffff40',
        borderTop: '5px solid #ffffff',
        borderRadius: '50%',
      }}
      animate={{ rotate: 360 }}
      transition={{ autoplay: true, ease: 'linear', duration: 1 }}
    />
  </div>
);