import svgPaths from "./svg-08y6c51tzd";
import imgImg from "figma:asset/c43702e20b98578db1a1f975c7e86755f2160492.png";

export default function Post() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pb-[20px] pt-[18px] relative rounded-[16px] size-full" data-name="Post">
      <div className="relative shrink-0 w-full" data-name="Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[20px] relative w-full">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[45px]" data-name="Mark">
                <div className="absolute inset-[-0.3%_0_0_-0.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.1113 45.1338">
                    <g id="Mark">
                      <circle cx="22.5" cy="22.5" fill="var(--fill-0, #FFDD00)" id="Ellipse 7" r="22.5" />
                      <path d={svgPaths.p34ad5e00} fill="var(--fill-0, black)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Montserrat:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#28324b] text-[20px] uppercase whitespace-nowrap">LEADFROMBEHIND</p>
            </div>
            <p className="font-['Gibson:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#b6b6b6] text-[18px] text-right whitespace-nowrap">2d</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <div className="flex-[1_0_0] h-[431px] min-h-px min-w-px relative" data-name="Img">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[114.84%] left-[-2.68%] max-w-none top-[-4.56%] w-[105.37%]" src={imgImg} />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Content">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[64px] items-center leading-[24px] not-italic pb-[4px] pt-[24px] px-[40px] relative text-[#28324b] text-[16px] w-full">
            <p className="font-['Avenir:Regular',sans-serif] relative shrink-0 w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0 w-full">#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="social-instagram">
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
    </div>
  );
}