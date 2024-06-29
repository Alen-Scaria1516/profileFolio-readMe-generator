import React from 'react';
import { useReadMeContext } from '@/context/ReadMeContextProvider';

const Section: React.FC = () => {
    const { sections, updateSection } = useReadMeContext();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateSection(name, value);
    };

    return (
        <div className="col-span-3 bg-white shadow-md rounded-lg p-4 overflow-auto">
            <h2 className="text-lg font-semibold mb-4">Input Forms</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    name="currentWork"
                    value={sections.currentWork}
                    onChange={handleInputChange}
                    placeholder="🔭 I am currently working on"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="currentLearning"
                    value={sections.currentLearning}
                    onChange={handleInputChange}
                    placeholder="🌱 I am currently learning"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="funFacts"
                    value={sections.funFacts}
                    onChange={handleInputChange}
                    placeholder="⚡ Fun facts"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default Section;