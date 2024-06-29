// components/ProfilePreview/ProfilePreviewComponent.jsx

import React from 'react';
import PropTypes from 'prop-types';

const ProfilePreviewComponent = ({ userData }) => {
    return (
        <div>
            <h2>GitHub Profile Preview</h2>
            <div>
                <img src={userData.avatar_url} alt="GitHub Avatar" style={{ width: 100, borderRadius: '50%' }} />
                <h3>{userData.name}</h3>
                <p>{userData.bio}</p>
                <p>Followers: {userData.followers}</p>
                <p>Following: {userData.following}</p>
                <p>Public Repositories: {userData.public_repos}</p>
                {/* Add more fields as needed */}
            </div>
        </div>
    );
};

ProfilePreviewComponent.propTypes = {
    userData: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        public_repos: PropTypes.number.isRequired,
        // Add more fields as needed
    }).isRequired,
};

export default ProfilePreviewComponent;
