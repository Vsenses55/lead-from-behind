import svgPaths from "../../imports/svg-0fgve89dfr";
import svgPathsContent from "../../imports/svg-bsxkmkagnk";
import imgVideo from "figma:asset/a67a43242304d62b0f1feba77454bff282ff98e6.png";
import SignupForm from "../components/SignupForm";
import NumberedContent from "../components/NumberedContent";
import NumberedContent2 from "../components/NumberedContent2";
import NumberedContent3 from "../components/NumberedContent3";
import NumberedContent4 from "../components/NumberedContent4";
import InstagramPosts from "../components/InstagramPosts";
import Footer from "../components/Footer";

export default function PrototypePage() {
  return (
    <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] bg-[#ECECEC]">
      {/* Yellow Navigation Bar - Full Width */}
      <div className="bg-[#ffdd00] w-full h-[60px] md:h-[96px] shrink-0">
        <div className="h-full flex items-center justify-between px-4 md:px-9">
          {/* Logo - Always visible */}
          <div className="h-[30px] md:h-[40px] w-[112px] md:w-[150px] shrink-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 40">
              <g clipPath="url(#clip0_1_1702)">
                <path d={svgPaths.p12daa380} fill="black" />
                <path d={svgPaths.p3b54a100} fill="black" />
                <path d={svgPaths.p3283e546} fill="black" />
                <path d={svgPaths.p2f01fe00} fill="black" />
                <path d={svgPaths.p23b58800} fill="black" />
                <path d={svgPaths.p397e1a00} fill="black" />
                <path d={svgPaths.p2569c900} fill="black" />
                <path d={svgPaths.p1a78b900} fill="black" />
                <path d={svgPaths.p22fbb080} fill="black" />
                <path d={svgPaths.p10c12148} fill="black" />
                <path d={svgPaths.p3f5e2600} fill="black" />
                <path d={svgPaths.p4567d00} fill="black" />
                <path d={svgPaths.p3503f300} fill="black" />
                <path d={svgPaths.p34bd3060} fill="black" />
                <path d={svgPaths.p10705f00} fill="black" />
                <path d={svgPaths.p1da84500} fill="black" />
                <path d={svgPaths.p24f32900} fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_1_1702">
                  <rect fill="white" height="40" width="150" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Hamburger Menu - Mobile Only */}
          <button className="md:hidden flex flex-col gap-[5px] w-[24px] h-[18px] justify-center items-center">
            <div className="w-full h-[2px] bg-black"></div>
            <div className="w-full h-[2px] bg-black"></div>
            <div className="w-full h-[2px] bg-black"></div>
          </button>

          {/* Navigation Items - Desktop Only */}
          <div className="hidden md:flex items-center gap-[19px] h-[30px]">
            <div className="flex items-center justify-center h-full">
              <p className="text-[20px] leading-[32px] text-[#28324b] whitespace-nowrap" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 500 }}>
                How to Prevent
              </p>
            </div>
            <div className="size-[8.3px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.30005 8.3">
                <path d={svgPaths.p267acdf2} fill="black" />
              </svg>
            </div>
            <div className="flex items-center justify-center h-full">
              <p className="text-[20px] leading-[32px] text-[#28324b] whitespace-nowrap" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 500 }}>
                Act
              </p>
            </div>
            <div className="size-[8.3px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.30005 8.3">
                <path d={svgPaths.p267acdf2} fill="black" />
              </svg>
            </div>
            <div className="flex items-center justify-center h-full">
              <p className="text-[20px] leading-[32px] text-[#28324b] whitespace-nowrap" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 500 }}>
                About
              </p>
            </div>
          </div>

          {/* Donate Button - Always visible */}
          <div className="h-[40px] md:h-[54px] relative shrink-0">
            <div className="bg-[#0072ca] rounded-[6px] h-full px-4 md:px-[40px] py-2 md:py-[16px]">
              <div className="flex items-center justify-center h-full gap-2 md:gap-[10px]">
                <div className="h-[14px] md:h-[16.981px] w-[15.6px] md:w-[18.915px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9147 16.9808">
                    <path 
                      clipRule="evenodd" 
                      d={svgPaths.p280b7d80} 
                      fill="white" 
                      fillRule="evenodd" 
                    />
                  </svg>
                </div>
                <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-white text-center whitespace-nowrap" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 900 }}>
                  Donate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[900px] xl:h-[1000px]">
        <img 
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-cover" 
          src={imgVideo} 
        />
        <div className="absolute inset-0 flex items-end px-6 py-10 md:px-[120px] md:py-[80px]">
          <div className="max-w-[1280px] w-full flex items-end">
            <div className="flex flex-col gap-6 md:gap-[33px] items-start pr-0 md:pr-[24px]">
              <h1 className="font-['Montserrat',sans-serif] font-black text-[32px] md:text-[61px] lg:text-[90px] leading-[1.1] md:leading-[60px] lg:leading-[84px] text-white uppercase">
                WE'RE ON A MISSION TO MAKE COLON CANCER FAMOUS.
              </h1>
              <button className="bg-[#147bca] h-[50px] md:h-[60px] rounded-[40px] px-6 md:px-[30px] py-3 md:py-[19px] flex gap-2 md:gap-[10px] items-center justify-center cursor-pointer hover:bg-[#fd0] transition-colors group">
                <span className="text-[18px] md:text-[20px] leading-[24px] md:leading-[32px] text-[#fd0] group-hover:text-black whitespace-nowrap transition-colors" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 900 }}>
                  learn why
                </span>
                <div className="h-[14px] md:h-[16px] w-[18px] md:w-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                    <path d={svgPaths.p204a5900} fill="#FFDD00" className="group-hover:fill-[#28324B]" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections Container with 120px vertical spacing */}
      <div className="w-full flex flex-col gap-[64px] md:gap-[120px] pt-[48px] md:pt-[120px] pb-[64px] md:pb-[120px]">
        {/* 4 Shocking Facts Section */}
        <div className="w-full flex justify-center px-4 md:px-6">
          <div className="w-full max-w-[1440px]">
            <div className="bg-[#28324b] flex flex-col gap-[24px] md:gap-[32px] items-center p-[40px] md:p-[60px] lg:p-[80px] rounded-[20px] md:rounded-[25px]">
              {/* Title Section */}
              <div className="flex flex-col gap-[4px] items-start text-center text-white uppercase w-full">
                <p className="font-['Montserrat',sans-serif] font-black text-[40px] md:text-[60px] lg:text-[76px] leading-[1.1] md:leading-[70px] w-full">
                  4 SHOCKING FACTS
                </p>
                <p className="font-['Montserrat',sans-serif] font-black text-[28px] md:text-[40px] lg:text-[51px] leading-[1.1] md:leading-[54px] w-full">
                  ABOUT COLON CANCER
                </p>
              </div>

              {/* Spoiler Section */}
              <div className="flex flex-col items-center justify-center w-full">
                <p className="font-['Montserrat',sans-serif] font-bold text-[18px] md:text-[24px] lg:text-[31px] leading-[1.2] md:leading-[35px] text-center text-white uppercase max-w-[572px]">
                  <span className="text-[#fd0]">spoiler:</span>
                  <span> colon cancer is the PREVENTABLE cancer</span>
                </p>
              </div>

              {/* Arrow */}
              <div className="h-[50px] md:h-[65.45px] w-[11px] md:w-[14.64px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.64 65.45">
                  <g clipPath="url(#clip0_50_975)">
                    <path d={svgPathsContent.p3bc29400} fill="#FFDD00" />
                    <path d={svgPathsContent.p139c1440} fill="#FFDD00" />
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

        {/* Signup Form Section */}
        <SignupForm />

        {/* Numbered Content Section */}
        <NumberedContent />
        <NumberedContent2 />
        <NumberedContent3 />
        <NumberedContent4 />

        {/* Instagram Posts Section */}
        <InstagramPosts />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}