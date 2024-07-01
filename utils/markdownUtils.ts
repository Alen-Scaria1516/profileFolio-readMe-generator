export const generateMarkdown = (aboutData: {
    working: string;
    learning: string;
    funFact: string;
}): string => {
    return `# Hello Folks 👋

- 🔭 I'm currently working on ${aboutData.working}
- 🌱 I'm currently learning ${aboutData.learning}
- ⚡ Fun fact: ${aboutData.funFact}
`;};

export const downloadMarkdown = (markdown: string) => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};