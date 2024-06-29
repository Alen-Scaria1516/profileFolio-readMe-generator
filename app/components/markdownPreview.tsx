import React from 'react';
import { useReadMeContext } from '@/context/ReadMeContextProvider';

export const TitlePreview = () => {
    return <h1 className="text-center">Hello, &lt;coders/&gt;!</h1>;
};

const MarkdownPreview: React.FC = () => {
    const { sections } = useReadMeContext();

    return (
        <div id="markdown-content">
            <TitlePreview />
            <br />
            <div>
                <p>🔭 I'm currently working on {sections.currentWork}</p>
            </div>
            <div>
                <p>🌱 I'm currently learning {sections.currentLearning}</p>
            </div>
            <div>
                <p> ⚡ Fun facts {sections.funFacts}</p>
            </div>
        </div>
    );
};

export default MarkdownPreview;