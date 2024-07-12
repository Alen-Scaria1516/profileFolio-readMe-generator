// components/GitHubStats.js
import Image from 'next/image';

const GitHubStats = ({ username }) => {
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent`;

  return (
    <div>
      <Image
        src={statsUrl}
        alt={`${username}'s GitHub Stats`}
        width={500}
        height={200}
      />
    </div>
  );
};

export default GitHubStats;
