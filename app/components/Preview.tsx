// Preview.tsx
import React from 'react';
import { useReadMeContext } from '../../contexts/ReadMeContextProvider'

const Preview = () => {
    const { sections } = useReadMeContext();

    return (
        <div>
            <h2>Preview</h2>
            <div>
                <h3>🔭 I am currently working on</h3>
                <p>{sections.currentWork}</p>

                <h3>🌱 I am currently learning</h3>
                <p>{sections.currentLearning}</p>

                <h3>⚡ Fun facts</h3>
                <p>{sections.funFacts}</p>
            </div>
        </div>
    );
};

export default Preview;
