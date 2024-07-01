import { useState } from "react";
import { useStore } from "../zustand/store";

export const BadgeSelect = ({label,url}:any) => {
    const {data,editData} = useStore();
    const[isAdded,setIsAdded] = useState(data.tech.toString().includes(url))

    const onClickBadge = () => {
        if (isAdded) {
            setIsAdded(false);
            //   for()
            let badgeIndex = data.tech.indexOf(url);
            data.tech.splice(badgeIndex, 1);
            //   console.log(data);
          } else {
            setIsAdded(true);
            data.tech.push(url);
            //   console.log(data);
          }
    }
  return (
    <>
     {isAdded ? (
        <div
          className="bg-gray-400 rounded-md flex items-center cursor-pointer hover:ring-1 ring-black active:scale-[0.98] transition-scale ease-in-out duration-200 select-none m-2 shadow-md text-white"
          onClick={onClickBadge}
        >
          <p className=" p-1 px-2">{label}</p>
          <div className="w-[1px] bg-gray-600 h-full opacity-20"></div>
          <p className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </p>
        </div>
      ) : (
        <div
          className="bg-gray-900 rounded-md flex items-center cursor-pointer hover:ring-1 ring-green-100/40 active:scale-[0.98im] transition-scale ease-in-out duration-200 select-none m-2 shadow-md text-white"
          onClick={onClickBadge}
        >
          <p className=" p-1 px-2">{label}</p>
          <div className="w-[1px] bg-gray-600 h-full opacity-20"></div>
          <p className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </p>
        </div>
      )}
    </>
  );
};
