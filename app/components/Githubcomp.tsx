import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';

interface GitHubStatsInputProps {
    onGitHubStatsChange: (data: GitHubStatsData) => void;
}

export interface GitHubStatsData {
    githubId: string;
    theme: string;
}

const themes = [
    "default", "transparent", "shadow_red", "shadow_green", "shadow_blue",
    "dark", "radical", "merko", "gruvbox", "gruvbox_light", "tokyonight", "onedark",
    "cobalt", "synthwave", "highcontrast", "dracula", "prussian", "monokai",
    "vue", "vue-dark", "shades-of-purple", "nightowl", "buefy", "blue-green",
    "algolia", "great-gatsby", "darcula", "bear", "solarized-dark", "solarized-light",
    "chartreuse-dark", "nord", "gotham", "material-palenight", "graywhite", "vision-friendly-dark",
    "ayu-mirage", "midnight-purple", "calm", "flag-india", "omni", "react",
    "jolly", "maroongold", "yeblu", "blueberry", "slateorange", "kacho_ga",
    "outrun", "ocean_dark", "city_lights", "github_dark", "github_dark_dimmed", "discord_old_blurple",
    "aura_dark", "panda", "noctis_minimus", "cobalt2", "swift", "aura",
    "apprentice", "moltack", "codeSTACKr", "rose_pine", "catppuccin_latte", "catppuccin_mocha",
    "date_night", "one_dark_pro", "rose", "holi", "neon", "blue_navy",
    "calm_pink", "ambient_gradient"
];

const GitHubStatsInput: React.FC<GitHubStatsInputProps> = ({ onGitHubStatsChange }) => {
    const [statsData, setStatsData] = useState<GitHubStatsData>({
        githubId: '',
        theme: 'default'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const updatedData = { ...statsData, [name]: value };
        setStatsData(updatedData);
        onGitHubStatsChange(updatedData);
    };

    return (
        <div className="mt-4">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>GitHub Stats</span>
                            <svg
                                className={`w-5 h-5 text-blue-500 transform ${open ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    GitHub ID
                                </label>
                                <input
                                    type="text"
                                    name="githubId"
                                    value={statsData.githubId}
                                    onChange={handleInputChange}
                                    placeholder="Enter your GitHub ID"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Theme
                                </label>
                                <select
                                    name="theme"
                                    value={statsData.theme}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {themes.map((theme) => (
                                        <option key={theme} value={theme}>
                                            {theme}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default GitHubStatsInput;
