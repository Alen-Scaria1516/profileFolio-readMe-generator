import { useEffect } from "react";
import { useStore } from "../zustand/store";
import toast from "react-hot-toast";

export const Preview = ({ back }: { back: () => void }) => {
  const { data } = useStore();
  const md = require("markdown-it")({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    quotes: "“”‘’",
    highlight: function (/*str, lang*/) {
      return "";
    },
  });

  useEffect(() => {
    const renderMarkdown = () => {
      // Render the Markdown content
      const renderedContent = md.render(data.finalData);
      const contentElement = document.getElementById("content");

      if (contentElement) {
        contentElement.innerHTML = renderedContent;

        // Add target="_blank" to all anchor tags inside the content div
        const links = contentElement.querySelectorAll("a");
        links.forEach((link) => {
          link.setAttribute("target", "_blank");
        });
      }
    };

    const timeoutId = setTimeout(renderMarkdown, 300);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [data.finalData]);

  function onCopy() {
    navigator.clipboard.writeText(data.finalData);
    // Alert for Copied
    toast.success("copied!")
  }

  function onDownload() {
    const element = document.createElement("a");
    const file = new Blob([data.finalData], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "ReadMe.md";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    // Alert for Downloaded
    toast.success("Downloaded")
  }

  function reloadTab() {
    location.reload();
  }

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <button
          className="left-0 absolute m-10 opacity-80 hover:opacity-100 transition-all ease-in-out outline-none"
          onClick={back}
        >
          ◄ Go Back
        </button>
        <p className="w-full text-center text-3xl my-8 mt-20">
          Your Awesome Profile is ready !
        </p>
        <div className="flex flex-col md:flex-row mb-10">
          <button className="p-3 pt-2 pb-2 m-5 bg-black text-white text-xl rounded-md" onClick={()=>onCopy()}>
            Copy Code
          </button>

          <button className="p-3 pt-2 pb-2 m-5 bg-black text-white text-xl rounded-md" onClick={()=>onDownload()}>
            Download markdown
          </button>
          <button className="p-3 pt-2 pb-2 m-5 bg-black text-white text-xl rounded-md" onClick={()=>reloadTab()}>
            Create New
          </button>
        </div>
        <div className="flex">
          <p className="bg-neutral-400 text-zinc-800 p-1 px-4 rounded-t-md brightness-75">
            PREVIEW
          </p>
        </div>
        <div
          id="content"
          className="w-full preview-container md:w-8/12 p-3 py-6 bg-black rounded-lg ring-1 ring-black shadow-xl shadow-white text-zinc-100"
        ></div>
        <p className="font-semibold text-gray-400 pt-12 flex flex-wrap">
          What to Do Next ? :&nbsp;
          <p className="font-medium">
            Copy this Code and Paste it into your GitHub ReadMe file.
          </p>{" "}
        </p>
        {/* {copiedAlertVisible && <ToastSuccess title="Copied Successfully !" />}
      {downloadAlertVisible && <ToastSuccess title="Download Started !" />}
      <FeedbackButton /> */}
      </div>
    </>
  );
};

