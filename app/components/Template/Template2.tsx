import React from 'react';

interface Template2Props {
    workingOn: string;
    learning: string;
    funFacts: string;
}

const Template2: React.FC<Template2Props> = ({ workingOn, learning, funFacts }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Template 2</h3>
            {/* Customize structure for Template 2 */}
        </div>
    );
};

export default Template2;
