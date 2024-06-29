// Example usage in a component

import React, { useState } from 'react';
import { fetchGitHubUserData, GitHubUser } from '../services/github';

interface UserFormProps {
    onSubmit: (userData: GitHubUser | null) => void;
}

const UserFormComponent: React.FC<UserFormProps> = ({ onSubmit }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const userData = await fetchGitHubUserData(username);
            onSubmit(userData);
        } catch (error) {
            console.error('Error fetching GitHub user data:', error);
            onSubmit(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    GitHub Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Preview Profile</button>
            </form>
        </div>
    );
};

export default UserFormComponent;
