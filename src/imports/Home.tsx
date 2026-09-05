import svgPaths from "./svg-vyr2n14jpo";
import imgVideo from "figma:asset/d3a95253a4c22adb57cdff6cec3e25483dc67bc8.png";
import imgSubpageSectionImgKilling1 from "figma:asset/9226e970431d9e5a0de1fd39615e6dd0e1d6c787.png";
import imgSubpageSectionImgBlk1 from "figma:asset/2b1de1e1b745409eca40fe1d40c25314a8f670ee.png";
import imgSubpageSectionImgMillennial1 from "figma:asset/1791b4da7216ae7afd5bb80ef7260b8fde502b68.png";
import imgSubpageSectionImgGoodNews from "figma:asset/18eb4a200329abbafab5d39be301b660e0c18bee.png";
import imgImg from "figma:asset/c43702e20b98578db1a1f975c7e86755f2160492.png";
import imgRectangle33 from "figma:asset/69b62d5306965b8b5f4ffb6d816911ebd9a47ca1.png";
import imgRectangle34 from "figma:asset/eaf79e6c53d87005634d688f9190188c9fa5e2ed.png";
import imgRectangle35 from "figma:asset/123e8703dc64b10d99c77bab606578f45f9152f1.png";
import imgRectangle36 from "figma:asset/bd9128ae83ec126f704f699379c87257eadf940c.png";
import imgRectangle37 from "figma:asset/eb819d91967db67518d88a6b577f7b9d08fa2f6f.png";

function InputField1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[450px]">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">{children}</div>
    </div>
  );
}

function ButtonArrow({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-[25px] py-[19px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3>
      <p className="font-['Avenir:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap">{children}</p>
    </Wrapper3>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center leading-[24px] not-italic pb-[4px] pt-[24px] px-[40px] relative text-[#28324b] text-[16px] w-full">{children}</div>
      </div>
    </div>
  );
}
type ContentProps = {
  text: string;
  text1: string;
};

function Content({ text, text1 }: ContentProps) {
  return (
    <Wrapper>
      <p className="font-['Avenir:Regular',sans-serif] relative shrink-0 w-full">{text}</p>
      <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0 w-full">{text1}</p>
    </Wrapper>
  );
}
type HeaderTextProps = {
  text: string;
};

function HeaderText({ text }: HeaderTextProps) {
  return (
    <Wrapper1>
      <Text text="LEADFROMBEHIND" />
      <p className="font-['Gibson:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#b6b6b6] text-[18px] text-right whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}

function SocialInstagram() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[20px] relative w-full">
          <div className="relative shrink-0 size-[23.048px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0479 23.0479">
              <path d={svgPaths.p2bfe9300} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[45px]">
        <div className="absolute inset-[-0.3%_0_0_-0.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.1113 45.1338">
            <g id="Mark">
              <circle cx="22.5" cy="22.5" fill="var(--fill-0, #FFDD00)" id="Ellipse 7" r="22.5" />
              <path d={svgPaths.p34ad5e00} fill="var(--fill-0, black)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Montserrat:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#28324b] text-[20px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}
type InputFieldTextProps = {
  text: string;
};

function InputFieldText({ text }: InputFieldTextProps) {
  return (
    <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#28324b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Wrapper2>{text}</Wrapper2>
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
          <div className="flex flex-col font-['Avenir:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#28324b] text-[0px] whitespace-nowrap">
            <p className="font-['Avenir:Heavy',sans-serif] leading-[32px] text-[20px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type HelperbuttonHelperProps = {
  hintText: string;
};

function HelperbuttonHelper({ hintText }: HelperbuttonHelperProps) {
  return (
    <Wrapper3>
      <p className="font-['Avenir:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[16px] text-left whitespace-nowrap">{hintText}</p>
    </Wrapper3>
  );
}
type InputFieldHelperProps = {
  hintText: string;
};

function InputFieldHelper({ hintText }: InputFieldHelperProps) {
  return <Wrapper2>{hintText}</Wrapper2>;
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
type NumericCircleProps = {
  className?: string;
  number?: string;
};

function NumericCircle({ className, number = "1" }: NumericCircleProps) {
  return (
    <div className={className || "bg-[#fd0] relative rounded-[200px] size-[112px]"} data-name="Numeric Circle">
      <p className="-translate-x-1/2 absolute font-['Montserrat:Black',sans-serif] leading-[60px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[61px] text-center top-[calc(50%-21.95px)] uppercase whitespace-nowrap">{number}</p>
    </div>
  );
}
type OptButtonProps = {
  className?: string;
  state?: boolean;
};

function OptButton({ className, state = true }: OptButtonProps) {
  const isNotState = !state;
  return (
    <button className={className || `relative rounded-[5px] size-[20px] ${isNotState ? "bg-black" : "bg-[#0072ca]"}`}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-1/2 top-1/2 w-[10px]" data-name="Checkmark">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isNotState ? "0 0 32 32" : "0 0 10 8"}>
            {state && <path d={svgPaths.p1a043300} fill="var(--fill-0, #FFDD00)" id="Checkmark" />}
            {isNotState && <g id="Checkmark" />}
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#28324b] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </button>
  );
}
type InputFieldProps = {
  className?: string;
  hintText?: string;
  label?: string;
  state?: "Default" | "Hover" | "Entry" | "Error";
};

function InputField({ className, hintText = "Label Name", label = "LABEL NAME", state = "Default" }: InputFieldProps) {
  if (state === "Error") {
    return (
      <div className={className || "relative w-[450px]"} data-name="State=Error">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <p className="font-['Montserrat:Black',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#ff3c00] text-[15px] w-full">{label}</p>
          <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
            <div aria-hidden="true" className="absolute border border-[#ff3c00] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <InputFieldHelper hintText={hintText} />
          </div>
          <p className="font-['Avenir:Heavy',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#ff3c00] text-[14px] w-full">*ERROR MESSAGE GOES HERE</p>
        </div>
      </div>
    );
  }
  if (state === "Entry") {
    return (
      <button className={className || "cursor-pointer relative w-[450px]"} data-name="State=Entry">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <p className="font-['Montserrat:Black',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#0072ca] text-[15px] text-left w-full">{label}</p>
          <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
            <div aria-hidden="true" className="absolute border-2 border-[#0072ca] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <HelperbuttonHelper hintText={hintText} />
          </div>
        </div>
      </button>
    );
  }
  if (state === "Hover") {
    return (
      <button className={className || "cursor-pointer relative w-[450px]"} data-name="State=Hover">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <p className="font-['Montserrat:Black',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#28324b] text-[15px] text-left w-full">{label}</p>
          <div className="bg-[#ececec] h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
            <div aria-hidden="true" className="absolute border border-[#28324b] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <HelperbuttonHelper hintText={hintText} />
          </div>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "relative w-[450px]"} data-name="State=Default">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <p className="font-['Montserrat:Black',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#28324b] text-[15px] w-full">{label}</p>
        <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
          <div aria-hidden="true" className="absolute border border-[#28324b] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <InputFieldHelper hintText={hintText} />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#ececec] content-stretch flex flex-col gap-[120px] items-center relative size-full" data-name="HOME">
      <div className="bg-[#cccbcb] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Section">
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
                    <p className="font-['Montserrat:Black',sans-serif] leading-[84px] min-w-full not-italic relative shrink-0 text-[90px] text-white uppercase w-[min-content]">WE’RE ON A MISSION TO MAKE COLON CANCER FAMOUS.</p>
                    <Button className="bg-[#147bca] cursor-pointer h-[60px] relative rounded-[40px] shrink-0" label="learn why" state="Hover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Section">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[120px] items-center px-[40px] relative w-full">
            <div className="bg-[#28324b] max-w-[1440px] relative rounded-[25px] shrink-0 w-full" data-name="Content">
              <div className="flex flex-col items-center max-w-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[inherit] p-[80px] relative w-full">
                  <div className="content-stretch flex flex-col font-['Montserrat:Black',sans-serif] gap-[16px] items-start not-italic relative shrink-0 text-center text-white uppercase w-full">
                    <p className="leading-[70px] relative shrink-0 text-[76px] w-full">4 SHOCKING FACTS</p>
                    <p className="leading-[54px] relative shrink-0 text-[51px] w-full">ABOUT COLON CANCER</p>
                  </div>
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                    <p className="font-['Montserrat:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[31px] text-center text-white uppercase w-[572px]">
                      <span className="leading-[35px] text-[#fd0]">spoiler:</span>
                      <span className="leading-[35px]">{` colon cancer is the PREVENTABLE cancer`}</span>
                    </p>
                  </div>
                  <div className="h-[65.45px] relative shrink-0 w-[14.64px]" data-name="Arrow">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.64 65.45">
                      <g clipPath="url(#clip0_50_975)" id="Arrow">
                        <path d={svgPaths.p3bc29400} fill="var(--fill-0, #FFDD00)" id="Vector" />
                        <path d={svgPaths.p139c1440} fill="var(--fill-0, #FFDD00)" id="Vector_2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_50_975">
                          <rect fill="white" height="65.45" width="14.64" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[1440px] relative rounded-[25px] shrink-0 w-full" data-name="Form">
              <div className="flex flex-col items-center max-w-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[inherit] px-[80px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[32px] items-center not-italic pb-[48px] relative shrink-0 text-[#28324b] text-[0px] text-center w-full" data-name="Copy">
                    <div className="font-['Montserrat:Black',sans-serif] leading-[60px] relative shrink-0 text-[61px] uppercase w-full">
                      <p className="mb-0">JOIN US AND BE A LEADER</p>
                      <p className="text-[#0072ca]">WHO PROUDLY CHECKS THEIR A**</p>
                    </div>
                    <p className="font-['Avenir:Book',sans-serif] leading-[0] max-w-[800px] relative shrink-0 text-[20px] w-full">
                      <span className="leading-[32px]">{`Join `}</span>
                      <span className="font-['Avenir:Heavy',sans-serif] leading-[32px]">LEAD FROM BEHIND</span>
                      <span className="leading-[32px]">{` and help prevent colon cancer in yourself and others. Plus, please give us your birthday so that we can occasionally surprise you with “gifts” that you never knew you wanted!`}</span>
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[916px] relative shrink-0 w-full" data-name="Form Fields">
                    <div className="content-center flex flex-wrap gap-[16px] items-center justify-center max-w-[916px] relative shrink-0 w-full" data-name="Form Fields">
                      <InputField className="relative shrink-0 w-[450px]" hintText="First Name" label="First Name" />
                      <InputField1>
                        <p className="font-['Avenir:Black',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#28324b] text-[14px] uppercase w-full">LAST NAME</p>
                        <InputFieldText text="Last Name" />
                      </InputField1>
                    </div>
                    <div className="content-center flex flex-wrap gap-[16px] items-center justify-center max-w-[916px] relative shrink-0 w-full" data-name="Form Fields">
                      <InputField1>
                        <p className="font-['Avenir:Black',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#28324b] text-[14px] uppercase w-full">EMAIL</p>
                        <InputFieldText text="Enter Email Address" />
                      </InputField1>
                      <InputField1>
                        <p className="font-['Avenir:Black',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#28324b] text-[14px] uppercase w-full">DATE OF BIRTH</p>
                        <InputFieldText text="00/00/0000" />
                      </InputField1>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Opt In">
                    <OptButton className="bg-[#0072ca] cursor-pointer relative rounded-[5px] shrink-0 size-[20px]" />
                    <p className="font-['Avenir:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#28324b] text-[13px] whitespace-nowrap">By providing information, I agree to receive email updates from the Colorectal Cancer Alliance.</p>
                  </div>
                  <Button className="bg-[#0072ca] h-[60px] relative rounded-[40px] shrink-0" label="submit" />
                </div>
              </div>
            </div>
            <div className="content-center flex flex-wrap gap-[64px] items-center justify-center relative shrink-0 w-full" data-name="Content">
              <div className="h-[548px] relative shrink-0 w-[536px]" data-name="Subpage_Section_Img_Killing 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[102.92%] left-[-2.8%] max-w-none top-0 w-[105.22%]" src={imgSubpageSectionImgKilling1} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[536px]" data-name="Content">
                <NumericCircle className="bg-[#fd0] relative rounded-[200px] shrink-0 size-[112px]" />
                <p className="font-['Montserrat:ExtraBold',sans-serif] leading-[43px] not-italic relative shrink-0 text-[#28324b] text-[39px] w-[536px]">{`It's killing a lot of people, no matter your gender or age`}</p>
                <div className="flex flex-col font-['Avenir:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-[539px]">
                  <p className="leading-[32px]">Colon cancer kills more people each year than every other type of cancer except lung cancer. If you are between 45 and 65 right now, cancer is the most likely thing that would kill you. And colon cancer is super common. One in 24 Americans will get colon cancer. And one in 250 of us will get it before we turn 49.</p>
                </div>
              </div>
            </div>
            <div className="content-center flex flex-wrap gap-[64px] items-center justify-center relative shrink-0 w-full" data-name="Content">
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[536px]" data-name="Content">
                <NumericCircle className="bg-[#fd0] relative rounded-[200px] shrink-0 size-[112px]" number="2" />
                <p className="font-['Montserrat:ExtraBold',sans-serif] leading-[43px] not-italic relative shrink-0 text-[#28324b] text-[39px] w-[591px]">Health disparities are systemic and real</p>
                <div className="flex flex-col font-['Avenir:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-[564px]">
                  <p className="leading-[32px]">People of color tend to receive later-stage diagnoses and lower quality of care. Black Americans get colon cancer about 15% more often than White Americans, and are 35% more likely to die from it. The American Indian and Alaska Native communities experience the highest mortality and incidence rates in the nation.</p>
                </div>
              </div>
              <div className="h-[536px] relative shrink-0 w-[510.25px]" data-name="Subpage_Section_Img_BLK 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubpageSectionImgBlk1} />
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Content">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[64px] items-center px-[120px] relative w-full">
                  <div className="h-[588px] relative shrink-0 w-[1202px]" data-name="Subpage_Section_Img_Millennial 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubpageSectionImgMillennial1} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Content">
                    <NumericCircle className="bg-[#fd0] relative rounded-[200px] shrink-0 size-[112px]" number="3" />
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
              </div>
            </div>
            <div className="content-center flex flex-wrap gap-[64px] items-center justify-center relative shrink-0 w-full" data-name="Content">
              <div className="h-[566px] relative shrink-0 w-[536px]" data-name="Subpage_Section_Img_Good_News">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[99.73%] left-[-2.75%] max-w-none top-[0.12%] w-[105.31%]" src={imgSubpageSectionImgGoodNews} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[536px]" data-name="Content">
                <NumericCircle className="bg-[#fd0] relative rounded-[200px] shrink-0 size-[112px]" number="4" />
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
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Social Wall">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[64px] items-center pt-[40px] px-[80px] relative w-full">
            <p className="font-['Montserrat:Black',sans-serif] leading-[60px] max-w-[960px] min-w-full not-italic relative shrink-0 text-[#28324b] text-[61px] text-center uppercase w-[min-content]">People are talking sh*t about LFB</p>
            <div className="content-start flex flex-wrap gap-[16px] isolate items-start justify-center relative shrink-0 w-full" data-name="Horizontal Stack">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[470px] z-[3]" data-name="Vertical Stack">
                <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pb-[20px] pt-[18px] relative rounded-[16px] shrink-0 w-[470px]" data-name="Post">
                  <Wrapper1>
                    <Text text="LEADFROMBEHIND" />
                    <p className="font-['Avenir:Book',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#b6b6b6] text-[20px] text-right whitespace-nowrap">2d</p>
                  </Wrapper1>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Img">
                    <div className="flex-[1_0_0] h-[431px] min-h-px min-w-px relative" data-name="Img">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[114.84%] left-[-2.68%] max-w-none top-[-4.56%] w-[105.37%]" src={imgImg} />
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Content">
                    <div className="flex flex-col items-center size-full">
                      <div className="content-stretch flex flex-col gap-[64px] items-center not-italic pb-[4px] pt-[24px] px-[40px] relative text-[#28324b] w-full">
                        <p className="font-['Avenir:Book',sans-serif] leading-[32px] relative shrink-0 text-[20px] w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness</p>
                      </div>
                    </div>
                  </div>
                  <SocialInstagram />
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pb-[20px] pt-[18px] relative rounded-[16px] shrink-0 w-[470px]" data-name="Post">
                  <HeaderText text="2d" />
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[470px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle33} />
                    </div>
                  </div>
                  <Content text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." text1="#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness" />
                  <SocialInstagram />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[470px] z-[2]" data-name="Vertical Stack">
                <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pb-[20px] pt-[18px] relative rounded-[16px] shrink-0 w-[470px]" data-name="Post">
                  <HeaderText text="2d" />
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="flex-[1_0_0] h-[470px] min-h-px min-w-px relative">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[108.04%] left-0 max-w-none top-[-1.16%] w-full" src={imgRectangle34} />
                      </div>
                    </div>
                  </div>
                  <Content text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." text1="#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness" />
                  <SocialInstagram />
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pb-[20px] pt-[18px] relative rounded-[16px] shrink-0 w-[470px]" data-name="Post">
                  <HeaderText text="2d" />
                  <div className="relative shrink-0 size-[471px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle35} />
                  </div>
                  <Wrapper>
                    <div className="font-['Avenir:Regular',sans-serif] relative shrink-0 w-full">
                      <p className="mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                      <p>&nbsp;</p>
                    </div>
                    <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0 w-full">#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness</p>
                  </Wrapper>
                  <SocialInstagram />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[470px] z-[1]" data-name="Vertical Stack">
                <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pb-[20px] pt-[18px] relative rounded-[16px] shrink-0 w-[470px]" data-name="Post">
                  <HeaderText text="2d" />
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="h-[381px] relative shrink-0 w-[470px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[123.36%] left-[-0.08%] max-w-none top-[-11.69%] w-[100.16%]" src={imgRectangle36} />
                      </div>
                    </div>
                  </div>
                  <Content text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." text1="#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness" />
                  <SocialInstagram />
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pb-[20px] pt-[18px] relative rounded-[16px] shrink-0 w-[470px]" data-name="Post">
                  <HeaderText text="2d" />
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[470px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle37} />
                    </div>
                  </div>
                  <Content text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. olore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." text1="#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness" />
                  <SocialInstagram />
                </div>
              </div>
            </div>
            <Button className="bg-[#0072ca] h-[60px] relative rounded-[40px] shrink-0" label="view more" />
          </div>
        </div>
      </div>
      <div className="bg-[#28324b] relative shrink-0 w-full" data-name="Footer">
        <div className="content-start flex flex-wrap gap-y-[132px] items-start justify-between px-[240px] py-[60px] relative w-full">
          <div className="content-start flex flex-wrap gap-[40px] items-start relative shrink-0 w-[838px]" data-name="Left Side Content">
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[75px] items-start max-w-[134px] min-h-px min-w-[134px] relative" data-name="Logo">
              <div className="h-[75px] max-w-[134px] overflow-clip relative shrink-0 w-full" data-name="Logo LFB">
                <div className="absolute inset-[85.43%_94.43%_0.2%_0]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.46769 10.7725">
                    <path d={svgPaths.p2e69c900} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.43%_87.74%_0.18%_6.52%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.68848 10.7923">
                    <path d={svgPaths.p2db12880} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.44%_79.55%_0.2%_12.83%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2046 10.7701">
                    <path d={svgPaths.p23c33700} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.43%_72.14%_0.2%_21.33%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75432 10.7768">
                    <path d={svgPaths.p906c800} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.42%_65.71%_0.21%_29.33%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.65031 10.7818">
                    <path d={svgPaths.p11f02d80} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.42%_58.55%_0.21%_35.71%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.69171 10.7814">
                    <path d={svgPaths.p8cbe600} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.24%_51.34%_0_42.57%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16307 11.0752">
                    <path d={svgPaths.p65ea800} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.4%_42.97%_0.21%_50.24%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.09782 10.793">
                    <path d={svgPaths.p1099f7c0} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.42%_34.78%_0.21%_58.74%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.6809 10.7782">
                    <path d={svgPaths.p122a6500} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.43%_27.82%_0.18%_66.44%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.68582 10.7923">
                    <path d={svgPaths.p309da680} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.43%_19.98%_0.2%_73.41%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.85782 10.7755">
                    <path d={svgPaths.p1e861a80} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.43%_16.44%_0.2%_81.55%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.6955 10.7756">
                    <path d={svgPaths.p31c56600} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.43%_8.59%_0.2%_85.09%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.47648 10.7729">
                    <path d={svgPaths.p2d5d19f0} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[85.43%_0.53%_0.2%_92.94%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74272 10.7768">
                    <path d={svgPaths.p32169280} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[0_70.8%_21.69%_0.04%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0811 58.7349">
                    <path d={svgPaths.p7e98b00} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[0_37.55%_21.69%_33.29%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0702 58.735">
                    <path d={svgPaths.p191bef80} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[0.2%_0_21.95%_66.53%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.8467 58.3918">
                    <path d={svgPaths.p263abe70} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-start flex flex-wrap gap-[48px_80px] items-start relative shrink-0 w-[509px]" data-name="Copy Block">
              <div className="content-stretch flex flex-col font-['Avenir:Regular',sans-serif] gap-[24px] items-start justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-name="Menu Items">
                <p className="relative shrink-0">COLON CANCER</p>
                <p className="relative shrink-0">HOW TO PREVENT</p>
                <p className="relative shrink-0">ABOUT</p>
                <p className="relative shrink-0">ACT</p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Email">
                <div className="font-['Avenir:Black',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#dadada] text-[0px] text-[14px] uppercase whitespace-nowrap whitespace-pre">
                  <p className="mb-0 text-white">Email:</p>
                  <p className="font-['Avenir:Roman',sans-serif] mb-0">hello@leadfrombehind.org</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0 text-white">Press email:</p>
                  <p className="font-['Avenir:Roman',sans-serif]">press@leadfrombehind.org</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[34px] items-start not-italic relative shrink-0 text-white w-[509px]" data-name="Bottom">
                <div className="flex flex-col font-['Avenir:Regular',sans-serif] justify-center leading-[16px] relative shrink-0 text-[13px] w-full">
                  <p className="mb-0">1025 Vermont Ave NW, Suite 1066, Washington, DC 20005</p>
                  <p className="mb-0">(202) 628-0123 Toll-free Helpline: (877) 422-2030</p>
                  <p>© 2021 Colorectal Cancer Alliance, a 501(c)(3) non-profit.</p>
                </div>
                <div className="flex flex-col font-['Avenir:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] uppercase w-full">
                  <p className="leading-[16px] whitespace-pre-wrap">{`Disclaimer   •   Privacy Policy   •   Non-discrimination Statement`}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[115px]" data-name="Social">
              <div className="relative shrink-0 size-[21px]" data-name="social-fb">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                  <g clipPath="url(#clip0_48_153)" id="social-fb">
                    <g id="Vector" />
                    <path d={svgPaths.p361ccc00} fill="var(--fill-0, white)" id="Vector_2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_48_153">
                      <rect fill="white" height="21" width="21" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="relative shrink-0 size-[23px]" data-name="social-instagram">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
                  <g clipPath="url(#clip0_48_161)" id="social-instagram">
                    <path d={svgPaths.p39a2d100} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_48_161">
                      <rect fill="white" height="23" width="23" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="h-[20px] relative shrink-0 w-[23px]" data-name="social-twitter">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 20">
                  <g id="social-twitter">
                    <path d={svgPaths.p1451a800} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="h-[139px] relative shrink-0 w-[179.091px]" data-name="Logo and Hotline">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Rubik:Bold',sans-serif] font-bold justify-center leading-[19px] left-[61.09px] not-italic text-[#dadada] text-[0px] text-[15px] top-[120px] tracking-[0.2px] whitespace-nowrap">
              <p className="font-['Gibson:SemiBold',sans-serif] mb-0 text-white">Call our Helpline</p>
              <p className="font-['Gibson:Regular',sans-serif]">877-422-2030</p>
            </div>
            <div className="absolute h-[73px] left-0 top-0 w-[161px]" data-name="Logo CCA">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 73">
                <g clipPath="url(#clip0_48_164)" id="Logo CCA">
                  <path d={svgPaths.p38e0f700} fill="var(--fill-0, white)" id="Vector" />
                  <path d={svgPaths.p16170e80} fill="var(--fill-0, white)" id="Vector_2" />
                  <path d={svgPaths.p12c08e80} fill="var(--fill-0, white)" id="Vector_3" />
                  <path d={svgPaths.p39c9dd00} fill="var(--fill-0, white)" id="Vector_4" />
                  <path d={svgPaths.p117ec100} fill="var(--fill-0, white)" id="Vector_5" />
                  <path d={svgPaths.p1abe8100} fill="var(--fill-0, white)" id="Vector_6" />
                  <path d={svgPaths.p5cb1180} fill="var(--fill-0, white)" id="Vector_7" />
                  <path d={svgPaths.p9eab800} fill="var(--fill-0, white)" id="Vector_8" />
                  <path d={svgPaths.p3b933700} fill="var(--fill-0, white)" id="Vector_9" />
                  <path d={svgPaths.p34ad8400} fill="var(--fill-0, white)" id="Vector_10" />
                  <path d={svgPaths.p1584f00} fill="var(--fill-0, white)" id="Vector_11" />
                  <path d={svgPaths.p24e8c200} fill="var(--fill-0, white)" id="Vector_12" />
                  <path d={svgPaths.p2667f300} fill="var(--fill-0, white)" id="Vector_13" />
                  <path d={svgPaths.pc969900} fill="var(--fill-0, white)" id="Vector_14" />
                  <path d={svgPaths.p1f419300} fill="var(--fill-0, white)" id="Vector_15" />
                  <path d={svgPaths.pcbdc700} fill="var(--fill-0, white)" id="Vector_16" />
                  <path d={svgPaths.p7becc90} fill="var(--fill-0, white)" id="Vector_17" />
                  <path d={svgPaths.p2e094380} fill="var(--fill-0, white)" id="Vector_18" />
                  <path d={svgPaths.p3ad77700} fill="var(--fill-0, white)" id="Vector_19" />
                  <path d={svgPaths.p2550f880} fill="var(--fill-0, white)" id="Vector_20" />
                  <path d={svgPaths.p2da16100} fill="var(--fill-0, white)" id="Vector_21" />
                  <path d={svgPaths.p30b288f2} fill="var(--fill-0, white)" id="Vector_22" />
                  <path d={svgPaths.pf265cf0} fill="var(--fill-0, white)" id="Vector_23" />
                  <path d={svgPaths.p27af3900} fill="var(--fill-0, white)" id="Vector_24" />
                  <path d={svgPaths.p1ae1b800} fill="var(--fill-0, white)" id="Vector_25" />
                  <path d={svgPaths.pc5a2700} fill="var(--fill-0, white)" id="Vector_26" />
                  <path d={svgPaths.p28b0e00} fill="var(--fill-0, white)" id="Vector_27" />
                </g>
                <defs>
                  <clipPath id="clip0_48_164">
                    <rect fill="white" height="73" width="161" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <button className="absolute block bottom-[19.35px] cursor-pointer h-[45.1px] right-[20px] w-[45px]" data-name="Button Back to Top">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45.1002">
              <g clipPath="url(#clip0_50_958)" id="Button Back to Top">
                <path d={svgPaths.p187b3600} id="Vector" stroke="var(--stroke-0, #FFDD00)" strokeMiterlimit="10" strokeWidth="3" />
                <path d={svgPaths.p2400ed00} fill="var(--fill-0, #FFDD00)" id="Vector_2" />
              </g>
              <defs>
                <clipPath id="clip0_50_958">
                  <rect fill="white" height="45.1002" width="45" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}