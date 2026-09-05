import svgPaths from "./svg-r5ei5amcld";
import imgVideo from "figma:asset/d3a95253a4c22adb57cdff6cec3e25483dc67bc8.png";

function ButtonArrow({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        {children}
      </svg>
    </div>
  );
}

function SectionVector() {
  return (
    <div className="relative shrink-0 size-[8.3px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.30005 8.3">
        <path d={svgPaths.p267acdf2} fill="var(--fill-0, black)" id="Vector" />
      </svg>
    </div>
  );
}
type SectionMenuItemTextProps = {
  text: string;
};

function SectionMenuItemText({ text }: SectionMenuItemTextProps) {
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
type ButtonProps = {
  className?: string;
  label?: string;
  state?: "Default" | "Hover" | "Press";
};

function Button({ className, label = "label", state = "Default" }: ButtonProps) {
  const isDefault = state === "Default";
  const isHover = state === "Hover";
  const isPressOrHover = ["Press", "Hover"].includes(state);
  return (
    <div className={className || `h-[60px] relative rounded-[40px] ${isDefault ? "bg-[#0072ca]" : isHover ? "bg-[#147bca] cursor-pointer" : "bg-[#fd0]"}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center justify-center px-[30px] py-[19px] relative">
          {isPressOrHover && (
            <>
              <p className={`font-["Avenir:Heavy",sans-serif] leading-[32px] not-italic relative shrink-0 text-[20px] whitespace-nowrap ${isHover ? "text-[#fd0]" : "text-black"}`}>label</p>
              <ButtonArrow>
                <path d={svgPaths.p204a5900} fill={isHover ? "var(--fill-0, #FFDD00)" : "var(--fill-0, #28324B)"} id="Arrow" />
              </ButtonArrow>
            </>
          )}
          {isDefault && (
            <>
              <p className="font-['Avenir:Heavy',sans-serif] leading-[32px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">{label}</p>
              <ButtonArrow>
                <path d={svgPaths.p204a5900} fill="var(--fill-0, #FFDD00)" id="Arrow" />
              </ButtonArrow>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#cccbcb] content-stretch flex flex-col items-center relative size-full" data-name="Section">
      <div className="bg-[#fd0] h-[96px] relative shrink-0 w-[1920px]" data-name="Menu">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
                  <SectionMenuItemText text="How to Prevent" />
                  <SectionVector />
                  <SectionMenuItemText text="Act" />
                  <SectionVector />
                  <SectionMenuItemText text="About" />
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
      <div className="h-[822px] relative shrink-0 w-full" data-name="Video">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVideo} />
        <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex isolate items-end px-[120px] py-[80px] relative size-full">
            <div className="content-end flex flex-[1_0_0] flex-wrap gap-y-[80px] items-end justify-between max-w-[1280px] min-h-px min-w-px relative z-[1]" data-name="Header Content">
              <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Messaging">
                <div className="content-stretch flex flex-col gap-[33px] items-start pr-[24px] relative w-full">
                  <p className="font-['Montserrat:Black',sans-serif] leading-[60px] min-w-full not-italic relative shrink-0 text-[61px] text-white uppercase w-[min-content]">WE’RE ON A MISSION TO MAKE COLON CANCER FAMOUS.</p>
                  <Button className="bg-[#147bca] cursor-pointer h-[60px] relative rounded-[40px] shrink-0" label="learn why" state="Hover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}