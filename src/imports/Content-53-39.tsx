import svgPaths from "./svg-bsxkmkagnk";

export default function Content() {
  return (
    <div className="bg-[#28324b] content-stretch flex flex-col gap-[32px] items-center p-[80px] relative rounded-[25px] size-full" data-name="Content">
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
  );
}