import imgSubpageSectionImgMillennial1 from "figma:asset/1791b4da7216ae7afd5bb80ef7260b8fde502b68.png";

export default function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative size-full" data-name="Content">
      <div className="h-[588px] relative shrink-0 w-[1202px]" data-name="Subpage_Section_Img_Millennial 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubpageSectionImgMillennial1} />
      </div>
      <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Content">
        <div className="bg-[#fd0] relative rounded-[200px] shrink-0 size-[112px]" data-name="Numeric Circle">
          <p className="-translate-x-1/2 absolute font-['Montserrat:Black',sans-serif] leading-[60px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[61px] text-center top-[calc(50%-21.95px)] uppercase whitespace-nowrap">{"3"}</p>
        </div>
        <p className="font-['Montserrat:ExtraBold',sans-serif] leading-[43px] not-italic relative shrink-0 text-[#28324b] text-[39px] text-center w-[591px]">{`It's a problem for you people, too`}</p>
        <div className="flex flex-col font-['Avenir:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[20px] text-black text-center w-[836px] whitespace-pre-wrap">
          <p className="mb-0">
            <span className="leading-[32px]">{`Colon cancer is `}</span>
            <span className="font-['Avenir:Heavy',sans-serif] leading-[32px] not-italic">predicted to be the top cancer killer for people under 50 by 2030.</span>
            <span className="leading-[32px]">{` It’s also going up by 90% in people under 35 by 2030.`}</span>
          </p>
          <p className="leading-[32px] mb-0">&nbsp;</p>
          <p className="leading-[32px]">Unfortunately, even though risks are rising quickly, most people under 45 aren’t eligible for screening unless they already have cancer symptoms or family history. If you see blood in your poop, call your doc ASAP – no matter your age.</p>
        </div>
      </div>
    </div>
  );
}