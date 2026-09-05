import svgPaths from "./svg-p4ng6lrfde";

export default function Button() {
  return (
    <div className="bg-[#0072ca] relative rounded-[40px] size-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center justify-center px-[30px] py-[19px] relative">
          <p className="font-['Avenir:Heavy',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#28324b] text-[20px] whitespace-nowrap">{"submit"}</p>
          <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Arrow">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p204a5900} fill={["Hover", "Default"].includes("Default") ? "var(--fill-0, #FFDD00)" : "var(--fill-0, #28324B)"} id="Arrow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}