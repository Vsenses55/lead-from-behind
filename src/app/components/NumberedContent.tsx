import imgSubpageSectionImgKilling1 from "figma:asset/9226e970431d9e5a0de1fd39615e6dd0e1d6c787.png";

export default function NumberedContent() {
  return (
    <div className="w-full flex justify-center px-4 md:px-6">
      <div className="w-full max-w-[1136px]">
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[64px] items-center justify-center">
          {/* Image */}
          <div className="relative w-full md:w-[536px] h-[340px] md:h-[548px] shrink-0">
            <div className="absolute inset-0 overflow-hidden rounded-[20px]">
              <img 
                alt="Person with gray hair in blue sweater" 
                className="absolute h-[102.92%] left-[-2.8%] max-w-none top-0 w-[105.22%] object-cover" 
                src={imgSubpageSectionImgKilling1} 
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[32px] md:gap-[40px] items-start w-full md:w-[536px] shrink-0">
            {/* Numbered Circle */}
            <div className="bg-[#fd0] rounded-full size-[80px] md:size-[112px] flex items-center justify-center shrink-0">
              <p className="font-['Montserrat',sans-serif] font-black text-[40px] md:text-[61px] leading-[1] text-[#28324b] text-center uppercase">
                1
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-['Montserrat',sans-serif] font-extrabold text-[28px] md:text-[39px] leading-[1.1] md:leading-[43px] text-[#28324b]">
              It's killing a lot of people, no matter your gender or age
            </h2>

            {/* Body Text */}
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#28324b]" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 400 }}>
              Colon cancer kills more people each year than every other type of cancer except lung cancer. If you are between 45 and 65 right now, cancer is the most likely thing that would kill you. And colon cancer is super common. One in 24 Americans will get colon cancer. And one in 250 of us will get it before we turn 49.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}