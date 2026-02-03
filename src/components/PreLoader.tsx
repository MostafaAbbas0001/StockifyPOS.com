"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const PreLoader = () => {
  return (
    <motion.div
      key="splash"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeInOut" }}
      >
        <Image
          src="/StockifyPOS_Logo.png"
          alt="Stockify POS Logo"
          width={200}
          height={53}
          priority
        />
      </motion.div>
      <motion.div
        className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default PreLoader;
