'use client'

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { templates, TemplateName } from '../../utils/ProjectTemplate';

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
);

export default function EditorPage() {
  const [markdown, setMarkdown] = useState(templates.basic);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateName>('basic');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const templateName = e.target.value as TemplateName;
    setSelectedTemplate(templateName);
    setMarkdown(templates[templateName]);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([markdown], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'dark' : ''}`}>
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
        <div className="flex justify-between items-center">
          <select 
            onChange={handleTemplateChange}
            className="p-2 border rounded dark:bg-gray-700 dark:text-white"
            value={selectedTemplate}
          >
            <option value="basic">Basic Template</option>
            <option value="detailed">Detailed Template</option>
            <option value="openSource">Open Source Project Template</option>
            <option value="portfolio">Portfolio Project Template</option>
          </select>
          <div className="flex items-center">
            <button 
              onClick={handleDownload} 
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
            >
              Download README
            </button>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 dark:text-white rounded"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 mt-16 bg-white dark:bg-gray-900">
        <div className="flex h-full">
          <div className="w-1/2 p-4 border-r dark:border-gray-700">
            <MDEditor
              value={markdown}
              onChange={(value) => setMarkdown(value || '')}
              height="calc(100vh - 5rem)"
              preview="edit"
              className={`h-full ${isDarkMode ? 'dark-editor' : ''}`}
            />
          </div>
          <div className="w-1/2 p-4 overflow-auto dark:bg-gray-800 dark:text-gray-100">
            {MDEditor.Markdown && (
              <MDEditor.Markdown source={markdown} />
            )}
          </div>
        </div>
      </main>
    
    </div>
  );
}