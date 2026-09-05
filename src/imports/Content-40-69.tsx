import imgSubpageSectionImgRelax1 from "figma:asset/c7a8eef25e58846e262dd2994f55b482f35c0d24.png";

export default function Content() {
  return (
    <div className="content-center flex flex-wrap gap-y-0 items-center justify-center pr-[200px] relative size-full" data-name="Content">
      <div className="content-stretch flex items-center mr-[-200px] relative shrink-0" data-name="Img">
        <div className="relative shrink-0 size-[570px]" data-name="Subpage_Section_Img_Relax 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSubpageSectionImgRelax1} />
        </div>
      </div>
      <div className="bg-[#fd0] content-stretch flex flex-col h-[866.572px] items-center justify-center mr-[-200px] px-[146px] py-[192px] relative rounded-[500px] shrink-0 w-[883.921px]" data-name="Messaging">
        <div className="content-stretch flex flex-col gap-[30px] items-start not-italic relative shrink-0 text-black w-full" data-name="Text">
          <p className="font-['Montserrat:Black',sans-serif] leading-[67px] relative shrink-0 text-[61px] uppercase w-[582px]">Afraid of your colonoscopy? Relax.</p>
          <p className="font-['Avenir:Roman',sans-serif] leading-[43px] relative shrink-0 text-[26px] w-[591.921px]">Everything about a colonoscopy has gotten better in the last decade. The drugs are amazing. There are alternatives to the drink that comes in a jug. The safety is high .</p>
        </div>
      </div>
    </div>
  );
}