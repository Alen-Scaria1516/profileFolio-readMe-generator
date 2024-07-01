import { useEffect, useState } from "react";
import { useStore } from "../zustand/store";
import { techData } from "../../data/tech"
import { searchFilter } from "@/app/utils/searchFilter";
import { TechBadges } from "../techStack/TechBadges";

const TechStack = ({ back }: { back: () => void }) => {
  const { data, editData } = useStore();
  const [searchStr, setSearchStr] = useState("");
  const [BadgeStyle, setBadgeStyle] = useState(data.badge_theme);
  const [technoData, setTechnoData] = useState(techData);
  const [isVisible,setIsVisible] = useState(false);


  useEffect(() => {
    editData("badge_theme", BadgeStyle);
  }, [BadgeStyle]);

  // Seaching whenever searchStr is changed
  useEffect(() => {
    setTechnoData(searchFilter(searchStr));
  }, [searchStr]);

    // It is just a message that will appear under a category if no matching tech is found
    const nothingFound = () => {
        return (
          <p className="text-red-300 opacity-60 my-10">
            Oops! no result found for your search.
          </p>
        );
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
        <p className="w-full text-center text-2xl sm:text-3xl my-8 sm:my-10 mt-20">
          Add Tech that you use
        </p>
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            name=""
            id=""
            value={searchStr}
            className="bg-transparent outline-none ring-2 p-4 px-8 ring-black rounded-full text-black pr-16 max-w-[92vw] sm:max-w-full"
            placeholder="Search tech"
            onChange={(e) => setSearchStr(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
          <div
            className={`flex flex-col w-full ${
              searchStr ? "md:w-full" : "md:w-6/12"
            }`}
          >
            {/* NOT USING ANY DATA FILE TO POPULATE BADGES */}
            <div className="flex flex-col h-full items-center">
              {/* If nothing found in all searches - can be minified */}
              {techData.lang.length === 0 &&
                nothingFound()}

              {/* Languages */}
              <TechBadges label="LANGUAGES" techData={techData.lang} />
            </div>
          </div>
        </div>
        {/* Select Badge Type (with preview) */}

        <button
            type="button"
            onClick={() => setIsVisible(true)}
            className="p-3 pt-2 pb-2 m-5 bg-black text-white text-xl rounded-md"
          >
            next
          </button>
        <Pagination val={4} />
        <FeedbackButton /> */}
      </div>
    </>
  );
};
export default TechStack;
