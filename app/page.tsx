'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Loader } from './components/Loader';
import { ApiResponse, CourseData } from './lib/types';
import { LeftContent } from './components/LeftContent';
import { RightContent } from './components/RightContent';

const API_URL = 'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course';

async function fetchCourse(lang: 'en' | 'bn'): Promise<ApiResponse> {
  const response = await fetch(`${API_URL}?lang=${lang}`, {
    headers: {
      'X-TENMS-SOURCE-PLATFORM': 'web',
      'accept': 'application/json',
    },
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default function Home() {
  const [lang, setLang] = useState<'en' | 'bn'>('en');
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetchCourse(lang);
        setCourseData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [lang]); 

  return (
    <>
      <Header currentLang={lang} onLangChange={setLang} />
      <main className="min-h-screen pt-34 pb-12">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div key="loader"><Loader /></motion.div>
          ) : error ? (
            <motion.div key="error" className="flex h-full items-center justify-center text-red-400">
              <p>Error: {error}</p>
            </motion.div>
          ) : courseData && (
            <motion.div
              key={lang} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="container mx-auto max-w-7xl px-4"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <section className="md:col-span-2">
                  <LeftContent description={courseData.description} sections={courseData.sections} />
                </section>

                <section className="md:col-span-1">
                  <RightContent data={courseData} />
                </section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}