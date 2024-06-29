import React, { useState, createContext, useContext } from "react";

interface ReadMeContextType {
    activeSectionIndex: number;
    sections: {
        currentWork: string;
        currentLearning: string;
        funFacts: string;
    };
    changeActiveSection: React.Dispatch<React.SetStateAction<number>>;
    updateSection: (field: string, value: string) => void;
}

const defaultContext: ReadMeContextType = {
    activeSectionIndex: 0,
    sections: {
        currentWork: "",
        currentLearning: "",
        funFacts: "",
    },
    changeActiveSection: () => { },
    updateSection: () => { },
};

export const ReadMeContext = createContext<ReadMeContextType>(defaultContext);

export const useReadMeContext = () => useContext(ReadMeContext);

export const ReadMeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [sections, setSections] = useState(defaultContext.sections);

    const updateSection = (field: string, value: string) => {
        setSections(prev => ({ ...prev, [field]: value }));
    };

    const contextValue: ReadMeContextType = {
        activeSectionIndex,
        sections,
        changeActiveSection: setActiveSectionIndex,
        updateSection,
    };

    return <ReadMeContext.Provider value={contextValue}>{children}</ReadMeContext.Provider>;
};