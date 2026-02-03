import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loadingScreen, loadingProgress } from '../utils/animations';
import { LogoIcon } from './Logo';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={loadingScreen}
          initial="visible"
          exit="hidden"
          className="fixed inset-0 z-[100] bg-luxury-charcoal
                     flex flex-col items-center justify-center"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[600px] h-[600px] bg-gold-500/3 blur-[200px] rounded-full" />

          {/* Centered Logo & Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Logo Icon - Large & Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <LogoIcon className="w-24 h-24 md:w-32 md:h-32" />
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <h1 className="font-serif text-4xl md:text-5xl tracking-wide">
                <span className="text-cream-100">Fliesen</span>
                <span className="text-cream-100 font-bold ml-2">Kny</span>
              </h1>
            </motion.div>

            {/* Progress bar - minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 w-24"
            >
              <motion.div
                variants={loadingProgress}
                initial="hidden"
                animate="visible"
                className="h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent origin-center"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
