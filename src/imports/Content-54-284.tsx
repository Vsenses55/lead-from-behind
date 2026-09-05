import imgSubpageSectionImgGoodNews from "figma:asset/18eb4a200329abbafab5d39be301b660e0c18bee.png";

export default function Content() {
  return (
    <div className="content-center flex flex-wrap gap-[64px] items-center justify-center relative size-full" data-name="Content">
      <div className="h-[566px] relative shrink-0 w-[536px]" data-name="Subpage_Section_Img_Good_News">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.73%] left-[-2.75%] max-w-none top-[0.12%] w-[105.31%]" src={imgSubpageSectionImgGoodNews} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[536px]" data-name="Content">
        <div className="bg-[#fd0] relative rounded-[200px] shrink-0 size-[112px]" data-name="Numeric Circle">
          <p className="-translate-x-1/2 absolute font-['Montserrat:Black',sans-serif] leading-[60px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[61px] text-center top-[calc(50%-21.95px)] uppercase whitespace-nowrap">{"4"}</p>
        </div>
        <div className="content-stretch flex flex-col font-['Montserrat:ExtraBold',sans-serif] gap-[20px] items-start not-italic relative shrink-0 text-[#28324b]">
          <p className="leading-[43px] relative shrink-0 text-[39px] w-[471px]">{`THE GOOD NEWS: `}</p>
          <p className="font-['Avenir:Heavy',sans-serif] leading-[0] relative shrink-0 text-[0px] text-[25px] w-[471px]">
            <span className="leading-[25px]">{`Colon Cancer is `}</span>
            <span className="leading-[25px] text-[#0072ca]">The Preventable Cancer</span>
          </p>
        </div>
        <div className="flex flex-col font-['Avenir:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-[536px]">
          <p className="leading-[35px]">You can prevent colon cancer by finding and removing precancerous polyps before they become cancer. Colonoscopy can prevent cancer or stop it early, and among the at-home options, Cologuard is able to detect precancer and cancer that may be present in the colon.</p>
        </div>
      </div>
    </div>
  );
}