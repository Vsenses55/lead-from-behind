import imgSubpageSectionImgBlk1 from "figma:asset/2b1de1e1b745409eca40fe1d40c25314a8f670ee.png";

export default function Content() {
  return (
    <div className="content-center flex flex-wrap gap-[64px] items-center justify-center relative size-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[536px]" data-name="Content">
        <div className="bg-[#fd0] relative rounded-[200px] shrink-0 size-[112px]" data-name="Numeric Circle">
          <p className="-translate-x-1/2 absolute font-['Montserrat:Black',sans-serif] leading-[60px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[61px] text-center top-[calc(50%-21.95px)] uppercase whitespace-nowrap">{"2"}</p>
        </div>
        <p className="font-['Montserrat:ExtraBold',sans-serif] leading-[43px] not-italic relative shrink-0 text-[#28324b] text-[39px] w-[591px]">Health disparities are systemic and real</p>
        <div className="flex flex-col font-['Avenir:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-[564px]">
          <p className="leading-[32px]">People of color tend to receive later-stage diagnoses and lower quality of care. Black Americans get colon cancer about 15% more often than White Americans, and are 35% more likely to die from it. The American Indian and Alaska Native communities experience the highest mortality and incidence rates in the nation.</p>
        </div>
      </div>
      <div className="h-[536px] relative shrink-0 w-[510.25px]" data-name="Subpage_Section_Img_BLK 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubpageSectionImgBlk1} />
      </div>
    </div>
  );
}