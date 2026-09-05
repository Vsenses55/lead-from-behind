import svgPaths from "./svg-ibd1ltnvkz";

function MenuVector() {
  return (
    <div className="relative shrink-0 size-[8.3px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.30005 8.3">
        <path d={svgPaths.p267acdf2} fill="var(--fill-0, black)" id="Vector" />
      </svg>
    </div>
  );
}
type MenuMenuItemTextProps = {
  text: string;
};

function MenuMenuItemText({ text }: MenuMenuItemTextProps) {
  return (
    <div className="h-[30px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-0 border-[#28324b] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center relative">
          <div className="flex flex-col font-['Avenir:Roman',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#28324b] text-[20px] whitespace-nowrap">
            <p className="leading-[32px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="bg-[#fd0] relative size-full" data-name="Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[36px] py-[20px] relative size-full">
          <div className="h-[40px] relative shrink-0 w-[150px]" data-name="LFB-Logo">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 40">
              <g clipPath="url(#clip0_1_1702)" id="LFB-Logo">
                <path d={svgPaths.p12daa380} fill="var(--fill-0, black)" id="Vector" />
                <path d={svgPaths.p3b54a100} fill="var(--fill-0, black)" id="Vector_2" />
                <path d={svgPaths.p3283e546} fill="var(--fill-0, black)" id="Vector_3" />
                <path d={svgPaths.p2f01fe00} fill="var(--fill-0, black)" id="Vector_4" />
                <path d={svgPaths.p23b58800} fill="var(--fill-0, black)" id="Vector_5" />
                <path d={svgPaths.p397e1a00} fill="var(--fill-0, black)" id="Vector_6" />
                <path d={svgPaths.p2569c900} fill="var(--fill-0, black)" id="Vector_7" />
                <path d={svgPaths.p1a78b900} fill="var(--fill-0, black)" id="Vector_8" />
                <path d={svgPaths.p22fbb080} fill="var(--fill-0, black)" id="Vector_9" />
                <path d={svgPaths.p10c12148} fill="var(--fill-0, black)" id="Vector_10" />
                <path d={svgPaths.p3f5e2600} fill="var(--fill-0, black)" id="Vector_11" />
                <path d={svgPaths.p4567d00} fill="var(--fill-0, black)" id="Vector_12" />
                <path d={svgPaths.p3503f300} fill="var(--fill-0, black)" id="Vector_13" />
                <path d={svgPaths.p34bd3060} fill="var(--fill-0, black)" id="Vector_14" />
                <path d={svgPaths.p10705f00} fill="var(--fill-0, black)" id="Vector_15" />
                <path d={svgPaths.p1da84500} fill="var(--fill-0, black)" id="Vector_16" />
                <path d={svgPaths.p24f32900} fill="var(--fill-0, black)" id="Vector_17" />
              </g>
              <defs>
                <clipPath id="clip0_1_1702">
                  <rect fill="white" height="40" width="150" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="h-[30px] relative shrink-0" data-name="Nav Items">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[19px] h-full items-center relative">
                <MenuMenuItemText text="How to Prevent" />
                <MenuVector />
                <MenuMenuItemText text="Act" />
                <MenuVector />
                <MenuMenuItemText text="About" />
              </div>
            </div>
          </div>
          <div className="h-[54px] relative shrink-0 w-[200px]" data-name="Container Button">
            <div className="absolute bg-[#0072ca] right-0 rounded-[6px] top-0 w-[164px]" data-name="Button Donate">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[16px] relative w-full">
                  <div className="h-[16.981px] relative shrink-0 w-[18.915px]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9147 16.9808">
                      <path clipRule="evenodd" d={svgPaths.p280b7d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                    </svg>
                  </div>
                  <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Donate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}