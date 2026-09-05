import svgPaths from "./svg-9tnwgy8zyi";
import imgImg from "figma:asset/c43702e20b98578db1a1f975c7e86755f2160492.png";
import imgRectangle33 from "figma:asset/69b62d5306965b8b5f4ffb6d816911ebd9a47ca1.png";
import imgRectangle34 from "figma:asset/eaf79e6c53d87005634d688f9190188c9fa5e2ed.png";
import imgRectangle35 from "figma:asset/123e8703dc64b10d99c77bab606578f45f9152f1.png";
import imgRectangle36 from "figma:asset/bd9128ae83ec126f704f699379c87257eadf940c.png";
import imgRectangle37 from "figma:asset/eb819d91967db67518d88a6b577f7b9d08fa2f6f.png";

function ButtonArrow({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center not-italic pb-[4px] pt-[24px] px-[40px] relative text-[#28324b] w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type HeaderTextProps = {
  text: string;
};

function HeaderText({ text }: HeaderTextProps) {
  return (
    <Wrapper>
      <Text text="LEADFROMBEHIND" />
      <p className="font-['Gibson:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#b6b6b6] text-[18px] text-right whitespace-nowrap">{text}</p>
    </Wrapper>
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
type ContentProps = {
  text: string;
  text1: string;
};

function Content({ text, text1 }: ContentProps) {
  return (
    <Wrapper1>
      <p className="font-['Avenir:Book',sans-serif] leading-[32px] relative shrink-0 text-[20px] w-full">{text}</p>
      <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">{text1}</p>
    </Wrapper1>
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

export default function SocialWall() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center pt-[40px] px-[80px] relative size-full" data-name="Social Wall">
      <p className="font-['Montserrat:Black',sans-serif] leading-[60px] max-w-[960px] min-w-full not-italic relative shrink-0 text-[#28324b] text-[61px] text-center uppercase w-[min-content]">People are talking sh*t about LFB</p>
      <div className="content-start flex flex-wrap gap-[16px] isolate items-start justify-center relative shrink-0" data-name="Horizontal Stack">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[470px] z-[3]" data-name="Vertical Stack">
          <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pb-[20px] pt-[18px] relative rounded-[16px] shrink-0 w-[470px]" data-name="Post">
            <Wrapper>
              <Text text="LEADFROMBEHIND" />
              <p className="font-['Avenir:Book',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#b6b6b6] text-[20px] text-right whitespace-nowrap">2d</p>
            </Wrapper>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Img">
              <div className="flex-[1_0_0] h-[431px] min-h-px min-w-px relative" data-name="Img">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[114.84%] left-[-2.68%] max-w-none top-[-4.56%] w-[105.37%]" src={imgImg} />
                </div>
              </div>
            </div>
            <Content text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." text1="#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness" />
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
            <Wrapper1>
              <div className="font-['Avenir:Book',sans-serif] leading-[32px] relative shrink-0 text-[20px] w-full">
                <p className="mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                <p>&nbsp;</p>
              </div>
              <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness</p>
            </Wrapper1>
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
  );
}