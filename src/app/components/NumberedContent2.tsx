import imgSubpageSectionImgBlk1 from "figma:asset/2b1de1e1b745409eca40fe1d40c25314a8f670ee.png";

export default function NumberedContent2() {
  return (
    <div className="w-full flex justify-center px-4 md:px-6">
      <div className="w-full max-w-[1136px]">
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[64px] items-center justify-center">
          {/* Content */}
          <div className="flex flex-col gap-[32px] md:gap-[40px] items-start w-full md:w-[536px] shrink-0">
            {/* Numbered Circle */}
            <div className="bg-[#fd0] rounded-full size-[80px] md:size-[112px] flex items-center justify-center shrink-0">
              <p className="font-['Montserrat',sans-serif] font-black text-[40px] md:text-[61px] leading-[1] text-[#28324b] text-center uppercase">
                2
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-['Montserrat',sans-serif] font-extrabold text-[28px] md:text-[39px] leading-[1.1] md:leading-[43px] text-[#28324b]">
              Health disparities are systemic and real
            </h2>

            {/* Body Text */}
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#28324b]" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 400 }}>
              People of color tend to receive later-stage diagnoses and lower quality of care. Black Americans get colon cancer about 15% more often than White Americans, and are 35% more likely to die from it. The American Indian and Alaska Native communities experience the highest mortality and incidence rates in the nation.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-[510px] h-[340px] md:h-[536px] shrink-0">
            <img 
              alt="Smiling person wearing glasses in blue sweater" 
              className="absolute inset-0 w-full h-full object-cover rounded-[20px]" 
              src={imgSubpageSectionImgBlk1} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}