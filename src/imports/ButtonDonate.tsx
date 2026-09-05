import svgPaths from "./svg-v4a702cyph";

export default function ButtonDonate() {
  return (
    <div className="bg-[#0072ca] relative rounded-[6px] size-full" data-name="Button Donate">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[16px] relative size-full">
          <div className="h-[16.981px] relative shrink-0 w-[18.915px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9147 16.9808">
              <path clipRule="evenodd" d={svgPaths.p280b7d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
          <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Donate</p>
        </div>
      </div>
    </div>
  );
}