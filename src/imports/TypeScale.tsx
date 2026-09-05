import clsx from "clsx";
type FrameProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Frame({ text, text1, additionalClassNames = "" }: FrameProps) {
  return (
    <div className={clsx("bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-end leading-[normal] overflow-clip relative shrink-0 text-[12px] whitespace-nowrap", additionalClassNames)}>
      <p className="opacity-40 relative shrink-0">{text}</p>
      <p className="opacity-40 relative shrink-0">{text1}</p>
    </div>
  );
}

export default function TypeScale() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-start not-italic p-[64px] relative size-full text-black" data-name="Type Scale">
      <Frame text="Base Value: 16" text1="Scale: 1.333" additionalClassNames="gap-[12px] pl-[96px]" />
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
        <Frame text="90px" text1="5.625rem" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Montserrat:Black',sans-serif] leading-[84px] min-h-px min-w-px relative text-[90px] uppercase">
          <p className="mb-0">Display 1</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
        <Frame text="76px" text1="4.75rem" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Montserrat:Black',sans-serif] leading-[70px] min-h-px min-w-px relative text-[76px] uppercase">
          <p className="mb-0">DISPLAY 2</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
        <Frame text="61px" text1="3.813rem" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Montserrat:Black',sans-serif] leading-[60px] min-h-px min-w-px relative text-[61px] uppercase">
          <p className="mb-0">H1</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
        <Frame text="48px" text1="3rem" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Montserrat:Black',sans-serif] leading-[54px] min-h-px min-w-px relative text-[51px] uppercase">
          <p className="mb-0">h2</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
        <Frame text="39px" text1="2.438em" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Montserrat:ExtraBold',sans-serif] leading-[43px] min-h-px min-w-px relative text-[39px]">
          <p className="mb-0">H3</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
        <Frame text="28px" text1="1.750rem" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Montserrat:Bold',sans-serif] leading-[35px] min-h-px min-w-px relative text-[31px] uppercase">
          <p className="mb-0">H4</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
        <Frame text="20px" text1="1.25rem" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Montserrat:Bold',sans-serif] leading-[28px] min-h-px min-w-px relative text-[20px] uppercase">
          <p className="mb-0">H5</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
        <Frame text="20px" text1="1.25rem" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Avenir:Roman',sans-serif] leading-[25px] min-h-px min-w-px relative text-[25px]">
          <p className="mb-0">Body (Large)</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
        <Frame text="20px" text1="1.25rem" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Avenir:Book',sans-serif] leading-[32px] min-h-px min-w-px relative text-[20px]">
          <p className="mb-0">Body</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[368px]" data-name="Frame">
        <Frame text="16px" text1="1.000rem" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Avenir:Roman',sans-serif] leading-[24px] min-h-px min-w-px relative text-[16px]">
          <p className="mb-0">Body (Small)</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[300px]" data-name="Frame">
        <Frame text="14px" text1="0.875rem" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Avenir:Black',sans-serif] leading-[16px] min-h-px min-w-px relative text-[14px] uppercase">
          <p className="mb-0">LABELS</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[300px]" data-name="Frame">
        <Frame text="13px" text1="0.813rem" additionalClassNames="flex-col gap-[4px] w-[64px]" />
        <div className="flex-[1_0_0] font-['Avenir:Roman',sans-serif] leading-[16px] min-h-px min-w-px relative text-[13px]">
          <p className="mb-0">CAPTIONS</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
    </div>
  );
}