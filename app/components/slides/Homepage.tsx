"use client";

import { useState } from "react";
import { useStore } from "../zustand/store";
import toast, { Toast } from "react-hot-toast";
import AboutMe from "./AboutMe";

const HomePage = () => {
  const { data, editData } = useStore();
  const [gitUsername, setGitUsername] = useState(data.username);
  const [isVisible, setIsVisible] = useState(false);

  function onNext(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (gitUsername != "" && gitUsername.replace(/ /g, "") != "") {
      // updating the store, zustand is using
      editData("username", gitUsername);
      setIsVisible(true);
    } else {
      toast.error("Invalid username", { duration: 4000 });
    }
  }

  return (
    <>
      {isVisible ? (
        <AboutMe  back={() => setIsVisible(false)}/>
      ) : (
        <div className="scroll-smooth">
          <div className="w-full flex flex-col md:flex-row py-16 md:py-28 min-h-[90vh] items-center relative">
            <div className="flex flex-col w-full md:w-6/12 relative">
              <p className="text-6xl md:text-7xl 2xl:text-8xl text-black">
                Best Profile Readme Generator
              </p>
              {/* Text Input */}
              <div className="flex flex-col sm:flex-row mt-8 md:my-16 2xl:my-20 items-center">
                <form className="w-full" onSubmit={onNext}>
                  <input
                    type="text"
                    value={gitUsername}
                    autoFocus={true}
                    onChange={(e) => setGitUsername(e.target.value)}
                    className="border-b-2 border-black bg-transparent w-full sm:w-11/12 md:w-10/12 lg:w-8/12 text-xl sm:text-3xl md:text-xl lg:text-2xl 2xl:text-3xl outline-none focus:border-black focus:border-b-4 inline"
                    placeholder="Enter Your GitHub Username"
                  />
                  <button type="submit" className="p-3 pt-2 pb-2 m-5 bg-black text-white text-xl rounded-md">
                    let's go
                  </button>
                </form>
              </div>
            </div>
            {/* <div className="flex w-full mt-16 md:mt-0 md:w-6/12 justify-center">
            <img
                src="/hpill.svg"
                alt=""
                className="w-full sm:w-8/12 aspect-square select-none pointer-events-none"
                draggable="false"
              />
          </div> */}
          </div>
        </div>
      )}
    </>
  );
}
export default HomePage;