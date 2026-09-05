function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-[25px] py-[19px] relative size-full">{children}</div>
    </div>
  );
}
type InputFieldHelperProps = {
  hintText: string;
};

function InputFieldHelper({ hintText }: InputFieldHelperProps) {
  return (
    <Wrapper>
      <p className="font-['Avenir:Roman',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap">{hintText}</p>
    </Wrapper>
  );
}
type InputFieldProps = {
  className?: string;
  hintText?: string;
  label?: string;
  state?: "Default" | "Hover" | "Entry" | "Error";
};

function InputField({ className, hintText = "Label Name", label = "LABEL NAME", state = "Default" }: InputFieldProps) {
  if (state === "Error") {
    return (
      <div className={className || "relative w-[450px]"} data-name="State=Error">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <p className="font-['Montserrat:Black',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#ff3c00] text-[15px] w-full">{label}</p>
          <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
            <div aria-hidden="true" className="absolute border border-[#ff3c00] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <InputFieldHelper hintText={hintText} />
          </div>
          <p className="font-['Avenir:Heavy',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#ff3c00] text-[14px] w-full">*ERROR MESSAGE GOES HERE</p>
        </div>
      </div>
    );
  }
  if (state === "Entry") {
    return (
      <div className={className || "relative w-[450px]"} data-name="State=Entry">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <p className="font-['Montserrat:Black',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#0072ca] text-[15px] w-full">{label}</p>
          <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
            <div aria-hidden="true" className="absolute border-2 border-[#0072ca] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <InputFieldHelper hintText={hintText} />
          </div>
        </div>
      </div>
    );
  }
  if (state === "Hover") {
    return (
      <button className={className || "cursor-pointer relative w-[450px]"} data-name="State=Hover">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <p className="font-['Montserrat:Black',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#28324b] text-[15px] text-left w-full">{label}</p>
          <div className="bg-[#ececec] h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
            <div aria-hidden="true" className="absolute border border-[#28324b] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <Wrapper>
              <p className="font-['Avenir:Roman',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[16px] text-left whitespace-nowrap">{hintText}</p>
            </Wrapper>
          </div>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "relative w-[450px]"} data-name="State=Default">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <p className="font-['Montserrat:Black',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#28324b] text-[15px] w-full">{label}</p>
        <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
          <div aria-hidden="true" className="absolute border border-[#28324b] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <InputFieldHelper hintText={hintText} />
        </div>
      </div>
    </div>
  );
}

export default function InputField1() {
  return <InputField className="relative size-full" />;
}