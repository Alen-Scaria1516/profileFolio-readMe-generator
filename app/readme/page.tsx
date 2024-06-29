'use client'
import MarkdownPreview from "../components/markdownPreview";

const ReadMePage = () => {
    const handleDownloadMarkdown = (): void => {
        const markdownContent = document.getElementById('markdown-content') as HTMLElement;
        
        if (markdownContent) {
            const tempElement = document.createElement('a');
            tempElement.setAttribute(
                'href',
                `data:text/markdown;charset=utf-8,${encodeURIComponent(markdownContent.innerText)}`,
            );
            tempElement.setAttribute('download', 'README.md');
            tempElement.style.display = 'none';
            document.body.appendChild(tempElement);
            tempElement.click();
            document.body.removeChild(tempElement);
        } else {
            console.error('Markdown content element not found');
        }
    };
    
    return (
        <div className="container mx-auto p-4 h-screen">
            <div className="grid grid-cols-12 gap-4 h-full">
                {/* Section 1: Input Forms */}
                <div className="col-span-3 bg-white shadow-md rounded-lg p-4 overflow-auto">
                    <h2 className="text-lg font-semibold mb-4">Input Forms</h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="🔭 I am currently working on"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="🌱 I am currently learning"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="⚡ Fun facts"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button onClick={handleDownloadMarkdown} className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-300 transition duration-200">
                            Generate ReadMe
                        </button>
                    </div>
                </div>

                {/* Section 2: Display MD File */}
                <div className="col-span-6 bg-white shadow-md rounded-lg p-4 overflow-auto">
                    <h2 className="text-lg font-semibold mb-4">Markdown Preview</h2>
                    <div className="w-full text-sm text-gray-900 shadow-xl mt-2 p-4 bg-gray-100 border-2 border-solid border-gray-800" id="markdown-box">
                        <MarkdownPreview />
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

export default ReadMePage;