import svgPaths from "./svg-1gpswdo1h5";

function NavItemsVector() {
  return (
    <div className="relative shrink-0 size-[8.3px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.30005 8.3">
        <path d={svgPaths.p267acdf2} fill="var(--fill-0, black)" id="Vector" />
      </svg>
    </div>
  );
}
type NavItemsMenuItemTextProps = {
  text: string;
};

function NavItemsMenuItemText({ text }: NavItemsMenuItemTextProps) {
  return (
    <div className="h-[30px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-0 border-[#28324b] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center relative">
          <div className="flex flex-col font-['Avenir:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#28324b] text-[0px] whitespace-nowrap">
            <p className="font-['Avenir:Heavy',sans-serif] leading-[32px] text-[20px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NavItems() {
  return (
    <div className="relative size-full" data-name="Nav Items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[19px] items-center relative size-full">
          <NavItemsMenuItemText text="How to Prevent" />
          <NavItemsVector />
          <NavItemsMenuItemText text="Act" />
          <NavItemsVector />
          <NavItemsMenuItemText text="About" />
        </div>
      </div>
    </div>
  );
}