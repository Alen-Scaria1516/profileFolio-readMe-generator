import toast from "react-hot-toast";

export const generateMarkdown = (aboutData: {
    working: string;
    learning: string;
    funFact: string;
}, skills: string[]): string => {
    return `# Hello Folks 👋

# Little About Me
- 🔭 I'm currently working on ${aboutData.working}
- 🌱 I'm currently learning ${aboutData.learning}
- ⚡ Fun fact: ${aboutData.funFact}

# 👨‍💻 Technologies I Know 
${skills.length > 0 ? `
<p align="center">
    <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=${skills.join(',')}&perline=14" />
    </a>
</p>
    ` : ''}

# 📊 GitHub Statistics  

`;};

export const copyMarkdown = (markdown: string) => {
    navigator.clipboard.writeText(markdown);
    toast.success("Copied!")
}

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

    // alert for download
    toast.success("Downloaded")
};