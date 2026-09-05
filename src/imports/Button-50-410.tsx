import svgPaths from "./svg-582zble7we";

function ButtonArrow({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        {children}
      </svg>
    </div>
  );
}
type ButtonProps = {
  className?: string;
  label?: string;
  state?: "Default" | "Hover" | "Press";
};

function Button({ className, label = "label", state = "Default" }: ButtonProps) {
  const isDefault = state === "Default";
  const isHover = state === "Hover";
  const isPressOrHover = ["Press", "Hover"].includes(state);
  return (
    <div className={className || `h-[60px] relative rounded-[40px] ${isDefault ? "bg-[#0072ca]" : isHover ? "bg-[#147bca] cursor-pointer" : "bg-[#fd0]"}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] h-full items-center justify-center px-[30px] py-[19px] relative">
          {isPressOrHover && (
            <>
              <p className={`font-["Avenir:Heavy",sans-serif] leading-[32px] not-italic relative shrink-0 text-[20px] whitespace-nowrap ${isHover ? "text-[#fd0]" : "text-black"}`}>label</p>
              <ButtonArrow>
                <path d={svgPaths.p204a5900} fill={isHover ? "var(--fill-0, #FFDD00)" : "var(--fill-0, #28324B)"} id="Arrow" />
              </ButtonArrow>
            </>
          )}
          {isDefault && (
            <>
              <p className="font-['Avenir:Heavy',sans-serif] leading-[32px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">{label}</p>
              <ButtonArrow>
                <path d={svgPaths.p204a5900} fill="var(--fill-0, #FFDD00)" id="Arrow" />
              </ButtonArrow>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Button1() {
  return <Button className="bg-[#0072ca] relative rounded-[40px] size-full" />;
}