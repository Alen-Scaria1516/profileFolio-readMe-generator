const githubapi = () =>{
    const handleChange = () =>{

    }
    return (
        <div>
           <input
                        type="url"
                        name={userID}
                        value={links[platform as keyof SocialLinksData]}
                        onChange={handleInputChange}
                        placeholder={`Enter your ${platform} profile URL`}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
        </div>
    )
}

export default githubapi