'use client'
import React, { useState } from 'react';
import AboutSection from '../components/AboutSection';
import MarkdownPreview from '../components/markdownPreview.tsx'
import { generateMarkdown, downloadMarkdown, copyMarkdown } from '@/utils/markdownUtils';
import Skills from '../components/Skills';
import SocialLinks, { SocialLinksData } from '../components/SocialLinks';
import GitHubStats from '../components/githubacc';
import Image from 'next/image';
interface AboutData {
    working: string;
    learning: string;
    funFact: string;
}

export default function Home() {
    const [aboutData, setAboutData] = useState<AboutData>({
        working: '',
        learning: '',
        funFact: '',
    });

    const [skills, setSkills] = useState<string[]>([]);

    const [socialLinks, setSocialLinks] = useState<SocialLinksData>({
        youtube: '',
        linkedin: '',
        stackoverflow: '',
        facebook: '',
        instagram: '',
    });
    const [selectedTemplate, setSelectedTemplate] = useState('template1');

    const handleAboutUpdate = (data: AboutData) => {
        setAboutData(data);
    };

    const handleSkillsChange = (newSkills: string[]) => {
        setSkills(newSkills);
    };

    const handleSocialLinksChange = (newLinks: SocialLinksData) => {
        setSocialLinks(newLinks);
    };

    const markdown = generateMarkdown(aboutData, skills, socialLinks,selectedTemplate);

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
                    <SocialLinks onSocialLinksChange={handleSocialLinksChange} />
                </div>

                {/* Section 2: Display MD File */}
                <div className="col-span-6 bg-white shadow-md rounded-lg p-4 overflow-auto">
                    <h2 className="text-lg font-semibold mb-4">Markdown Preview</h2>
                    <div className="w-full shadow-xl mt-2 p-4 bg-white border border-gray-200 rounded-lg">
                        <MarkdownPreview markdown={markdown} />
                       
                    </div>
                    <div className="flex justify-end mt-4 gap-4">
                        <button onClick={handleCopyMarkdown} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
                            Copy ReadMe
                        </button>
                        <button
                            onClick={handleDownloadMarkdown}
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
                        >
                            Download ReadMe
                        </button>
                    </div>
                </div>

                {/* Section 3: Select Templates */}
                <div className="col-span-3 bg-white shadow-md rounded-lg p-4 overflow-auto">
                    <h2 className="text-lg font-semibold mb-4">Select Template</h2>
                    <div className="space-y-2">
                        <div className=' display-flex p-2  space-y-3 rounded-xl  '>
                        <div className='  border-gray-300  bg-gray-900 relative overflow-hidden'>
                       <h1 className=' border border-gray-500 w-full bg-white py-2 px-4  text-black text-center   '>Template 1</h1>
                        <Image src="/Preview1.png" alt="PREVIEW_IMAGE" width={300} height={300} onClick={() => setSelectedTemplate('template1')} className='block w-full transition duration-300 ease-in-out filter blur-3 cursor-pointer '/>
                        </div>
                        <div className=' bg-slate-400'>
                        <button   onClick={() => setSelectedTemplate('template2')} className="w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition duration-200">
                            Template 2
                        </button>
                        <Image src="/Preview2.png" alt="PREVIEW_IMAGE" width={300} height={300} onClick={() => setSelectedTemplate('template2')} className='cursor-pointer rounded-lg'/>
                        </div>
                        <div className=' bg-slate-400'>
                        <button onClick={() => setSelectedTemplate('template3')} className="w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition duration-200">
                            Template 3
                        </button>
                        <Image src="/Preview3.png" alt="PREVIEW_IMAGE" width={300} height={300} onClick={() => setSelectedTemplate('template3')} className='cursor-pointer rounded-lg'/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 *  <button onClick={() => setSelectedTemplate('template1')} className="  w-full py-2 px-4 border rounded hover:bg-gray-100  transition duration-200">
                            Template 1
                        </button>
 */