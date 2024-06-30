import { useState } from "react";
import { useStore } from "../zustand/store";

const GitHubStats = ({ back }: { back: () => void }) => {
  const { data, editData } = useStore();
  const [theme, setTheme] = useState(data.stats.theme);
  const [border, setBorder] = useState(data.stats.border);
  const [includeAll, setIncludeAll] = useState(data.stats.lifetime);
  const [includePrivate, setIncludePrivate] = useState(data.stats.prv);
  const [isVisible,setIsVisible] = useState(false)

  const onNext = () => {
    const statsSrc = document.getElementById("stats")?.getAttribute("src");
    const streakSrc = document.getElementById("streak")?.getAttribute("src");
    const langsSrc = document.getElementById("langs")?.getAttribute("src");

    if (statsSrc && streakSrc && langsSrc) {
        githubstats = `# 📊 GitHub Stats:
  ![](${statsSrc})<br/>
  ![](${streakSrc})<br/>
  ![](${langsSrc})
  `;
    }
    setIsVisible(true);
  };

  return (
    <>
      <div className="flex flex-col items-center fade-on-appear">
        <button
          className="left-0 absolute m-10 opacity-80 hover:opacity-100 transition-all ease-in-out outline-none"
          onClick={back}
        >
          ◄ Go Back
        </button>
        <p className="w-full text-center text-3xl my-10 mt-20">
          Flex your GitHub Stats
        </p>
        {/* Options */}

        <p className="mt-4 text-black opacity-90">
          please wait for images to load after changing any values
        </p>
        <div className="w-full md:w-8/12 justify-center flex flex-col flex-wrap md:my-4">
          <img
            className="m-2 select-none pointer-events-none"
            draggable="false"
            id="stats"
            src={`https://github-readme-stats.vercel.app/api?username=${
              data.username
            }&theme=${theme}&hide_border=${!border}&include_all_commits=${includeAll}&count_private=${includePrivate}`}
            alt=""
          />
          <img
            className="m-2 select-none pointer-events-none"
            draggable="false"
            id="streak"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${
              data.username
            }&theme=${theme}&hide_border=${!border}`}
            alt=""
          />
          <img
            className="m-2 select-none pointer-events-none"
            draggable="false"
            id="langs"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
              data.username
            }&theme=${theme}&hide_border=${!border}&include_all_commits=${includeAll}&count_private=${includePrivate}&layout=compact`}
            alt=""
          />
        </div>
        <button
          type="button"
          onClick={onNext}
          className="p-3 pt-2 pb-2 m-5 bg-black text-white text-xl rounded-md"
        >
          next
        </button>
        {/* <NextButton onClick={() => onNext()} />
          <Pagination val={2} />
          <FeedbackButton /> */}
      </div>
    </>
  );
};
export default GitHubStats;

export let githubstats = ``;
