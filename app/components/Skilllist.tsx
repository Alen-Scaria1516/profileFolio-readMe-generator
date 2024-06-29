import Image from 'next/image';
import React from 'react';

interface Skill {
    label: string;
    value: string;
    iconUrl: string;
    companyUrl: string;
}

interface SkillsListProps {
    skills?: Skill[]; // Make skills optional
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
    console.log(skills)
    

    return (
        <div>
            <h2>Skills:</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <div>
                            <Image src={skill.iconUrl} alt={skill.label} width={24} height={24} />
                            <span>{skill.label}</span>
                        </div>
                        <div>
                            <a href={skill.companyUrl} target="_blank" rel="noopener noreferrer">
                                {skill.value}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsList;
