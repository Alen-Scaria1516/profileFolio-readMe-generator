import React from 'react';

interface Template1Props {
    workingOn: string;
    learning: string;
    funFacts: string;
}

const Template1: React.FC<Template1Props> = ({ workingOn, learning, funFacts }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Template 1</h3>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">🔭 I am currently working on</h3>
                <p className="text-gray-800">{workingOn}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">🌱 I am currently learning</h3>
                <p className="text-gray-800">{learning}</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">⚡ Fun facts</h3>
                <p className="text-gray-800">{funFacts}</p>
            </div>
        </div>
    );
};

export default Template1;