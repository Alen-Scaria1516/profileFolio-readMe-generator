
"use client";
import React, { useState } from "react";
import AboutSection from "../components/AboutSection";
import MarkdownPreview from "../components/markdownPreview";
import { generateMarkdown, downloadMarkdown, copyMarkdown } from "@/utils/markdownUtils";
import Skills from "../components/Skills";

interface AboutData {
  working: string;
  learning: string;
  funFact: string;
}

export default function Home() {
  const [aboutData, setAboutData] = useState<AboutData>({
    working: "",
    learning: "",
    funFact: "",
  });
  const [skills, setSkills] = useState<string[]>([]);
  const handleAboutUpdate = (data: AboutData) => {
    setAboutData(data);
  };

  const handleSkillsChange = (newSkills: string[]) => {
    setSkills(newSkills);
  };

  const markdown = generateMarkdown(aboutData, skills);


  const handleDownloadMarkdown = () => {
    downloadMarkdown(markdown);
  };

  const handleCopyMarkdown = () => {
     copyMarkdown(markdown);
  }


  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="grid grid-cols-12 gap-4 h-full">
        {/* Section 1: Input Forms */}
        <div className="col-span-3 bg-white shadow-md rounded-lg p-4 overflow-auto">
          <AboutSection onUpdate={handleAboutUpdate} />
          <Skills onSkillsChange={handleSkillsChange} />
        </div>

        {/* Section 2: Display MD File */}
        <div className="col-span-6 bg-white shadow-md rounded-lg p-4 overflow-auto">
          <h2 className="text-lg font-semibold mb-4">Markdown Preview</h2>
          <div className="w-full shadow-xl mt-2 p-4 bg-white border border-gray-200 rounded-lg">
            <MarkdownPreview markdown={markdown} />
          </div>
          <div className="flex justify-end mt-4 gap-4">
            <button onClick={handleCopyMarkdown} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
              Copy
            </button>
            <button
              onClick={handleDownloadMarkdown}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
            >
              Generate ReadMe
            </button>
          </div>
        </div>

        {/* Section 3: Select Templates */}
        <div className="col-span-3 bg-white shadow-md rounded-lg p-4 overflow-auto">
          <h2 className="text-lg font-semibold mb-4">Select Template</h2>
          <div className="space-y-2">
            <button className="w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition duration-200">
              Template 1
            </button>
            <button className="w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition duration-200">
              Template 2
            </button>
            <button className="w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition duration-200">
              Template 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




