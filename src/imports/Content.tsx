import imgSubpageSectionImgKilling1 from "figma:asset/9226e970431d9e5a0de1fd39615e6dd0e1d6c787.png";

export default function Content() {
  return (
    <div className="content-center flex flex-wrap gap-[64px] items-center justify-center relative size-full" data-name="Content">
      <div className="h-[548px] relative shrink-0 w-[536px]" data-name="Subpage_Section_Img_Killing 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.92%] left-[-2.8%] max-w-none top-0 w-[105.22%]" src={imgSubpageSectionImgKilling1} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[536px]" data-name="Content">
        <div className="bg-[#fd0] relative rounded-[200px] shrink-0 size-[112px]" data-name="Numeric Circle">
          <p className="-translate-x-1/2 absolute font-['Montserrat:Black',sans-serif] leading-[60px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[61px] text-center top-[calc(50%-21.95px)] uppercase whitespace-nowrap">{"1"}</p>
        </div>
        <p className="font-['Montserrat:ExtraBold',sans-serif] leading-[43px] not-italic relative shrink-0 text-[#28324b] text-[39px] w-[536px]">{`It's killing a lot of people, no matter your gender or age`}</p>
        <div className="flex flex-col font-['Avenir:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-[539px]">
          <p className="leading-[32px]">Colon cancer kills more people each year than every other type of cancer except lung cancer. If you are between 45 and 65 right now, cancer is the most likely thing that would kill you. And colon cancer is super common. One in 24 Americans will get colon cancer. And one in 250 of us will get it before we turn 49.</p>
        </div>
      </div>
    </div>
  );
}