import imgSubpageSectionImgMillennial1 from "figma:asset/1791b4da7216ae7afd5bb80ef7260b8fde502b68.png";

export default function NumberedContent3() {
  return (
    <div className="w-full flex justify-center px-4 md:px-6">
      <div className="w-full max-w-[1198px] flex flex-col gap-[40px] md:gap-[64px] items-center">
        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[588px]">
          <img 
            alt="Person with curly hair wearing orange sunglasses" 
            className="absolute inset-0 w-full h-full object-cover rounded-[20px]" 
            src={imgSubpageSectionImgMillennial1} 
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[32px] md:gap-[40px] items-center w-full">
          {/* Numbered Circle */}
          <div className="bg-[#fd0] rounded-full size-[80px] md:size-[112px] flex items-center justify-center shrink-0">
            <p className="font-['Montserrat',sans-serif] font-black text-[40px] md:text-[61px] leading-[1] text-[#28324b] text-center uppercase">
              3
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-['Montserrat',sans-serif] font-extrabold text-[28px] md:text-[39px] leading-[1.1] md:leading-[43px] text-[#28324b] text-center max-w-[591px]">
            It's a problem for you people, too
          </h2>

          {/* Body Text */}
          <div className="flex flex-col text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#28324b] text-center max-w-[836px]" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 400 }}>
            <p className="mb-0">
              <span>Colon cancer is </span>
              <span style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 900 }}>predicted to be the top cancer killer for people under 50 by 2030.</span>
              <span> It's also going up by 90% in people under 35 by 2030.</span>
            </p>
            <p className="mb-0">&nbsp;</p>
            <p>Unfortunately, even though risks are rising quickly, most people under 45 aren't eligible for screening unless they already have cancer symptoms or family history. If you see blood in your poop, call your doc ASAP – no matter your age.</p>
          </div>
        </div>
      </div>
    </div>
  );
}