import svgPaths from "./svg-jcmvsgzmvw";

function InputField1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[450px]">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">{children}</div>
    </div>
  );
}

function ButtonArrow({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-[25px] py-[19px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <p className="font-['Avenir:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap">{children}</p>
    </Wrapper1>
  );
}
type InputFieldTextProps = {
  text: string;
};

function InputFieldText({ text }: InputFieldTextProps) {
  return (
    <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#28324b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Wrapper>{text}</Wrapper>
    </div>
  );
}
type HelperbuttonHelperProps = {
  hintText: string;
};

function HelperbuttonHelper({ hintText }: HelperbuttonHelperProps) {
  return (
    <Wrapper1>
      <p className="font-['Avenir:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[16px] text-left whitespace-nowrap">{hintText}</p>
    </Wrapper1>
  );
}
type InputFieldHelperProps = {
  hintText: string;
};

function InputFieldHelper({ hintText }: InputFieldHelperProps) {
  return <Wrapper>{hintText}</Wrapper>;
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
type OptButtonProps = {
  className?: string;
  state?: boolean;
};

function OptButton({ className, state = true }: OptButtonProps) {
  const isNotState = !state;
  return (
    <button className={className || `relative rounded-[5px] size-[20px] ${isNotState ? "bg-black" : "bg-[#0072ca]"}`}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-1/2 top-1/2 w-[10px]" data-name="Checkmark">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isNotState ? "0 0 32 32" : "0 0 10 8"}>
            {state && <path d={svgPaths.p1a043300} fill="var(--fill-0, #FFDD00)" id="Checkmark" />}
            {isNotState && <g id="Checkmark" />}
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#28324b] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </button>
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
      <button className={className || "cursor-pointer relative w-[450px]"} data-name="State=Entry">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <p className="font-['Montserrat:Black',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#0072ca] text-[15px] text-left w-full">{label}</p>
          <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
            <div aria-hidden="true" className="absolute border-2 border-[#0072ca] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <HelperbuttonHelper hintText={hintText} />
          </div>
        </div>
      </button>
    );
  }
  if (state === "Hover") {
    return (
      <button className={className || "cursor-pointer relative w-[450px]"} data-name="State=Hover">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <p className="font-['Montserrat:Black',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#28324b] text-[15px] text-left w-full">{label}</p>
          <div className="bg-[#ececec] h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
            <div aria-hidden="true" className="absolute border border-[#28324b] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <HelperbuttonHelper hintText={hintText} />
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

export default function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center px-[80px] relative rounded-[25px] size-full" data-name="Form">
      <div className="content-stretch flex flex-col gap-[32px] items-center not-italic pb-[48px] relative shrink-0 text-[#28324b] text-[0px] text-center w-full" data-name="Copy">
        <div className="font-['Montserrat:Black',sans-serif] leading-[60px] relative shrink-0 text-[61px] uppercase w-full">
          <p className="mb-0">JOIN US AND BE A LEADER</p>
          <p className="text-[#0072ca]">WHO PROUDLY CHECKS THEIR A**</p>
        </div>
        <p className="font-['Avenir:Book',sans-serif] leading-[0] max-w-[800px] relative shrink-0 text-[20px] w-full">
          <span className="leading-[32px]">{`Join `}</span>
          <span className="font-['Avenir:Heavy',sans-serif] leading-[32px]">LEAD FROM BEHIND</span>
          <span className="leading-[32px]">{` and help prevent colon cancer in yourself and others. Plus, please give us your birthday so that we can occasionally surprise you with “gifts” that you never knew you wanted!`}</span>
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[916px] relative shrink-0 w-full" data-name="Form Fields">
        <div className="content-center flex flex-wrap gap-[16px] items-center justify-center max-w-[916px] relative shrink-0 w-full" data-name="Form Fields">
          <InputField className="relative shrink-0 w-[450px]" hintText="First Name" label="First Name" />
          <InputField1>
            <p className="font-['Avenir:Black',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#28324b] text-[14px] uppercase w-full">LAST NAME</p>
            <InputFieldText text="Last Name" />
          </InputField1>
        </div>
        <div className="content-center flex flex-wrap gap-[16px] items-center justify-center max-w-[916px] relative shrink-0 w-full" data-name="Form Fields">
          <InputField1>
            <p className="font-['Avenir:Black',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#28324b] text-[14px] uppercase w-full">EMAIL</p>
            <InputFieldText text="Enter Email Address" />
          </InputField1>
          <InputField1>
            <p className="font-['Avenir:Black',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#28324b] text-[14px] uppercase w-full">DATE OF BIRTH</p>
            <InputFieldText text="00/00/0000" />
          </InputField1>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Opt In">
        <OptButton className="bg-[#0072ca] cursor-pointer relative rounded-[5px] shrink-0 size-[20px]" />
        <p className="font-['Avenir:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#28324b] text-[13px] whitespace-nowrap">By providing information, I agree to receive email updates from the Colorectal Cancer Alliance.</p>
      </div>
      <Button className="bg-[#0072ca] h-[60px] relative rounded-[40px] shrink-0" label="submit" />
    </div>
  );
}