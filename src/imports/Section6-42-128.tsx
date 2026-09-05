import imgSubpageSectionImgNoMoney2 from "figma:asset/b1bd6cd559976920bf1ebad1a66caa4ac4c4d580.png";

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[90px] relative rounded-[16px] size-full" data-name="Section 6">
      <div className="content-stretch flex items-center mb-[-90px] relative shrink-0" data-name="Img">
        <div className="relative shrink-0 size-[300px]" data-name="Subpage_Section_Img_No_Money 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubpageSectionImgNoMoney2} />
        </div>
      </div>
      <div className="bg-[#fd0] content-stretch flex flex-col items-center justify-center mb-[-90px] p-[80px] relative rounded-[500px] shrink-0 size-[504px]" data-name="Circle">
        <div className="relative shrink-0 w-full" data-name="Content">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic p-[40px] relative text-black w-full">
              <p className="font-['Montserrat:Bold',sans-serif] leading-[35px] relative shrink-0 text-[31px] uppercase w-full">{`There's no money`}</p>
              <p className="font-['Avenir:Roman',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">Despite the lives lost, the money that colon cancer raises is often in the single digit fraction of what we spend to research other top cancers. Because of the stigma, lack of awareness and embarrassment supporting a poop-related disease.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}