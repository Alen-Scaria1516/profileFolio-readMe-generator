import { SocialLinksData } from '@/app/components/SocialLinks';
import toast from "react-hot-toast";

export const generateMarkdown = (aboutData: {
    working: string;
    learning: string;
    funFact: string;
},
    skills: string[],
    socialLinks: SocialLinksData): string => {
    const generateSocialLinksHTML = (links: SocialLinksData): string => {
        const iconMap: { [key: string]: string } = {
            youtube: "https://static-00.iconduck.com/assets.00/youtube-icon-2048x2048-gedp2icy.png",
            linkedin: "https://user-images.githubusercontent.com/88904952/234979284-68c11d7f-1acc-4f0c-ac78-044e1037d7b0.png",
            stackoverflow: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg",
            facebook: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg",
            instagram: "https://user-images.githubusercontent.com/88904952/234981169-2dd1e58f-4b7e-468c-8213-034ba62156c3.png"
        };

        return Object.entries(links)
            .filter(([_, url]) => url)
            .map(([platform, url]) => `<a href="${url}" target="blank">
                <img align="center" src="${iconMap[platform]}" alt="${platform}" height="50" width="50" />
            </a>
        `).join('');
    };

    return `<h1 align="center"> Hello Folks 👋</h1>

## 🙂 About Me
<table align="center"  width="100%">
<tr border="none">
<td width="60%" align="left">


- 🔭 I'm currently working on ${aboutData.working}
- 🌱 I'm currently learning ${aboutData.learning}
- ⚡ Fun fact: ${aboutData.funFact}

</td>
<td width="40%" align="center">
  <img align="center" alt="Coding" height="250" width="300" src="https://raw.githubusercontent.com/SubhadeepZilong/SubhadeepZilong/main/icons/animation_500_kxa883sd.gif">
</td>
</tr>
</table>

## 👨‍💻 Technologies I Know 
${skills.length > 0 ? `
<p align="center">
    <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=${skills.join(',')}&perline=14" />
    </a>
</p>
    ` : ''}

## 📊 GitHub Statistics  

## 🤝Connect with me:
${Object.values(socialLinks).some(link => link) ? `
<p align="center" style="display: flex; justify-content: center; gap: 10px;>${generateSocialLinksHTML(socialLinks)}
</p>
` : ''}

`;
};

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
    toast.success("Downloading!")
};