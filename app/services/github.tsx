// services/github.ts

const GITHUB_API_BASE_URL = 'https://api.github.com';

export interface GitHubUser {
    login: string;
    name: string;
    bio: string;
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: number;
    // Add more fields as needed
}

export const fetchGitHubUserData = async (username: string): Promise<GitHubUser | null> => {
    try {
        const response = await fetch(`${GITHUB_API_BASE_URL}/users/${username}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }
        
        const userData = await response.json();
        
        // Extract relevant fields from userData
        const {
            login,
            name,
            bio,
            avatar_url,
            followers,
            following,
            public_repos,
            // Add more fields as needed
        } = userData;

        return {
            login,
            name,
            bio,
            avatar_url,
            followers,
            following,
            public_repos,
            // Add more fields as needed
        };
    } catch (error) {
        console.error('Error fetching GitHub user data:', error);
        return null;
    }
};
