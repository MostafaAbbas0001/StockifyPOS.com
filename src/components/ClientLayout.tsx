"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PreLoader from './PreLoader';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [minElapsed, setMinElapsed] = useState(false);

  // Wait for all images on the page to finish loading
  useEffect(() => {
    const images = Array.from(document.images);
    if (images.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const handleImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === images.length) {
        setImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad, { once: true });
        img.addEventListener('error', handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, []);

  // Handle initial loading and resources
  useEffect(() => {
    // Minimum display time to let entrance animation play
    const minTimer = setTimeout(() => setMinElapsed(true), 1500);

    // Track full window load
    if (document.readyState === 'complete') {
      setWindowLoaded(true);
    } else {
      const handleWindowLoad = () => setWindowLoaded(true);
      window.addEventListener('load', handleWindowLoad, { once: true });
      return () => {
        clearTimeout(minTimer);
        window.removeEventListener('load', handleWindowLoad);
      };
    }

    return () => clearTimeout(minTimer);
  }, []);

  // When all conditions met, hide loader
  useEffect(() => {
    if (imagesLoaded && windowLoaded && minElapsed) {
      setLoading(false);
    }
  }, [imagesLoaded, windowLoaded, minElapsed]);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => setContentReady(true)}
    >
      {loading ? (
        <PreLoader key="preloader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          {contentReady && children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ClientLayout;
