import imgSubpageSectionImgNoMoney2 from "figma:asset/b1bd6cd559976920bf1ebad1a66caa4ac4c4d580.png";

export default function Section() {
  return (
    <div className="overflow-clip relative rounded-[16px] size-full" data-name="Section 6">
      <div className="absolute left-[57px] size-[300px] top-0" data-name="Subpage_Section_Img_No_Money 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubpageSectionImgNoMoney2} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[375/375] left-[-23.91%] right-[-23.67%] top-[calc(50%+169.5px)]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 611 611">
          <circle cx="305.5" cy="305.5" fill="var(--fill-0, #FFDD00)" id="Ellipse 9" r="305.5" />
        </svg>
      </div>
      <p className="absolute font-['Gibson:Bold',sans-serif] leading-[normal] left-[55.5px] not-italic text-[40px] text-black top-[320.5px] uppercase w-[247.069px]">{`There's no money`}</p>
      <p className="absolute font-['Gibson:Book',sans-serif] leading-[31px] left-[55px] not-italic text-[21px] text-black top-[424.27px] w-[316px]">Despite the lives lost, the money that colon cancer raises is often in the single digit fraction of what we spend to research other top cancers. Because of the stigma, lack of awareness and embarrassment supporting a poop-related disease.</p>
    </div>
  );
}