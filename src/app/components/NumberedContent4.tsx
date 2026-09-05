import imgSubpageSectionImgGoodNews from "figma:asset/18eb4a200329abbafab5d39be301b660e0c18bee.png";

export default function NumberedContent4() {
  return (
    <div className="w-full flex justify-center px-4 md:px-6">
      <div className="w-full max-w-[1136px]">
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[64px] items-center justify-center">
          {/* Image */}
          <div className="relative w-full md:w-[536px] h-[400px] md:h-[566px] shrink-0">
            <img 
              alt="Smiling woman in light blue tank top" 
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]" 
              src={imgSubpageSectionImgGoodNews} 
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[32px] md:gap-[40px] items-start w-full md:w-[536px] shrink-0">
            {/* Numbered Circle */}
            <div className="bg-[#fd0] rounded-full size-[80px] md:size-[112px] flex items-center justify-center shrink-0">
              <p className="font-['Montserrat',sans-serif] font-black text-[40px] md:text-[61px] leading-[1] text-[#28324b] text-center uppercase">
                4
              </p>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-[16px] md:gap-[20px]">
              <h2 className="font-['Montserrat',sans-serif] font-extrabold text-[28px] md:text-[39px] leading-[1.1] md:leading-[43px] text-[#28324b]">
                THE GOOD NEWS:
              </h2>
              <p className="text-[20px] md:text-[25px] leading-[1.2] md:leading-[25px] text-[#28324b]" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 900 }}>
                <span>Colon Cancer is </span>
                <span className="text-[#0072ca]">The Preventable Cancer</span>
              </p>
            </div>

            {/* Body Text */}
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[35px] text-[#28324b]" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 400 }}>
              You can prevent colon cancer by finding and removing precancerous polyps before they become cancer. Colonoscopy can prevent cancer or stop it early, and among the at-home options, Cologuard is able to detect precancer and cancer that may be present in the colon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}