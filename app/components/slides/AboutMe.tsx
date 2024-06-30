import { useState } from "react";
import { useStore } from "../zustand/store";
import GitHubStats from "./GitHubStats";

const AboutMe = ({ back }: { back: () => void }) => {
  const textareaPlaceholder = `🔭 I’m currently working on
👯 I’m looking to collaborate on
🤝 I’m looking for help with
🌱 I’m currently learning
💬 Ask me about
⚡ Fun fact`;
  const { data, editData } = useStore();
  const [aboutme, setAboutme] = useState(data.aboutme);
  const [isVisible, setIsVisible] = useState(false);

  const onNext = (event:React.FormEvent<HTMLFormElement>) =>  {
    event.preventDefault();
    if (aboutme != ``) {
      editData("aboutme", aboutme);
      setIsVisible(true);
    }
  }
  return (
    <>
      {isVisible ? (
        <GitHubStats back={() => setIsVisible(false)} />
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <button
            className="left-0 absolute m-10 opacity-80 hover:opacity-100 transition-all ease-in-out outline-none"
            onClick={back}
          >
            ◄ Go Back
          </button>
          <p className="w-full text-center text-3xl my-6 md:my-10 mt-20">
            Add a small introduction
          </p>
          <div className="flex flex-col md:flex-row w-full items-center justify-center">
            <div className="flex flex-col w-full md:w-6/12 items-center">
              <p className="text-4xl md:text-5xl font-semibold text-black">
                About Me :
              </p>
              <textarea
                name=""
                id="aboutme"
                className="w-full bg-transparent h-72 md:h-96 text-base sm:text-lg md:text-xl p-4 outline-none ring-2 ring-black focus:ring-black rounded-md my-6 md:my-10 resize-none whitespace-pre"
                placeholder={textareaPlaceholder}
                value={aboutme}
                onChange={(e) => setAboutme(e.target.value)}
                autoFocus={true}
              ></textarea>
              <div className="flex ">
                <button
                  className="mr-4 opacity-60 hover:opacity-80"
                  title="Load Template"
                  onClick={() => setAboutme(textareaPlaceholder)}
                >
                  show template
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="p-3 pt-2 pb-2 m-5 bg-black text-white text-xl rounded-md"
                >
                  next
                </button>
                {/* <NextButton onClick={() => onNext()} /> */}
              </div>
            </div>
          </div>
          {/* <Pagination val={1} />
          <FeedbackButton /> */}
        </div>
      )}
    </>
  );
};
export default AboutMe;
