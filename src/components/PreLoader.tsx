"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const PreLoader = () => {
  return (
    <motion.div
      key="splash"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/StockifyPOS_Logo.png"
          alt="Stockify POS Logo"
          width={200}
          height={53}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default PreLoader;
