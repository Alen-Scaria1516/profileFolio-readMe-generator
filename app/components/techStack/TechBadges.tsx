import { BadgeSelect } from "./BadgeSelect";

export const TechBadges = ({label,techData}:{label:string,techData:any}) => {
    return (
        <>
          {techData.length !== 0 && (
            <div className="my-6">
              <p className="flex justify-center text-lg md:text-xl">{label}</p>
              <div className="flex flex-row flex-wrap text-gray-700 md:justify-center md:max-w-[80vw]">
                {techData.map((data:any, key:any) => (
                  <BadgeSelect key={key} label={data.label} url={data.url} />
                ))}
              </div>
            </div>
          )}
        </>
      );
}