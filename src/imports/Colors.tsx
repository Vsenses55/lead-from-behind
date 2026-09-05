import imgColorPreview from "figma:asset/7b15a01fe58a974012d32aed38cfde307fc0908a.png";

function ColorPreviewBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: `url('${imgColorPreview}')` }} className="bg-size-[36px_36px] bg-top-left h-[180px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type ListOfColorsBackgroundImageAndTextProps = {
  text: string;
};

function ListOfColorsBackgroundImageAndText({ text }: ListOfColorsBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Colors() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[48px] items-start px-[56px] py-[48px] relative size-full" data-name="Colors">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Primary">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Primary</p>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="Primary">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/100">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#d4d6db] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[39px] text-black text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/100</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#d4d6db" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/200">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#a9adb7] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[39px] text-black text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/200</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#a9adb7" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/300">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#7e8493] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[39px] text-black text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/300</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#7e8493" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/400">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#535b6f] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ececec] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/400</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#535b6f" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/500">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#28324b] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ececec] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/500</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#28324b" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/600">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#20283c] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ececec] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/600</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#20283c" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/700">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#181e2d] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ececec] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/700</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#181e2d" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/800">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#10141e] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#a9adb7] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/800</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#10141e" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/900">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#080a0f] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ececec] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/900</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#080a0f" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Secondary">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Secondary</p>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="Secondary">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/100">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#cce3f4] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/100</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#cce3f4" />
            </div>
            <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-40px)] whitespace-nowrap">AAA</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/200">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#99c7ea] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/200</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#99c7ea" />
            </div>
            <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-40px)] whitespace-nowrap">AAA</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/300">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#66aadf] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/300</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#66aadf" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/400">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#338ed5] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[39px] text-black text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/400</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#338ed5" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/500">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#0072ca] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ececec] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/500</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#0072ca" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/600">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#005ba2] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ececec] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/600</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#005ba2" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/700">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#004479] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/700</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#004479" />
            </div>
            <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ececec] text-[39px] text-center top-[calc(50%-40px)] whitespace-nowrap">AAA</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/800">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#002e51] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/800</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#002e51" />
            </div>
            <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#cce3f4] text-[39px] text-center top-[calc(50%-40px)] whitespace-nowrap">AAA</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/900">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#001728] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/900</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#001728" />
            </div>
            <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ececec] text-[39px] text-center top-[calc(50%-40px)] whitespace-nowrap">AAA</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Accent">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Accent</p>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="Accent">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Accent/100">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#fff8cc] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Accent/100</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#fff8cc" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Accent/200">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#fff199] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Accent/200</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#fff199" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Accent/300">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#ffeb66] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Accent/300</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ffeb66" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Accent/400">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#ffe433] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Accent/400</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ffe433" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Accent/500">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#fd0] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Accent/500</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ffdd00" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Accent/600">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#ccb100] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Accent/600</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ccb100" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Accent/700">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#998500] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[39px] text-center text-white top-[calc(50%-13px)] whitespace-nowrap">AA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Accent/700</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#998500" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Accent/800">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#665800] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#fff8cc] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Accent/800</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#665800" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Accent/900">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#332c00] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ececec] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Accent/900</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#332c00" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Danger">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Danger</p>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="Danger">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/100">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#ffd8cc] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/100</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ffd8cc" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/200">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#ffb199] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/200</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ffb199" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/300">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#ff8a66] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/300</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ff8a66" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/400">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#ff6333] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[39px] text-black text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/400</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ff6333" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/500">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#ff3c00] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[39px] text-black text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/500</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ff3c00" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/600">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#cc3000] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[39px] text-center text-white top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/600</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#cc3000" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/700">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#992400] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ececec] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/700</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#992400" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/800">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#661800] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ffd8cc] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/800</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#661800" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/900">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#330c00] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ffb199] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/900</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#330c00" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Success">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Success</p>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="Success">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Success/100">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#f5ffcc] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Success/100</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#f5ffcc" />
            </div>
            <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#526600] text-[39px] text-center top-[calc(50%-40px)] whitespace-nowrap">AAA</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Success/200">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#ebff99] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#526600] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Success/200</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ebff99" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Success/300">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#e0ff66] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Success/300</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#e0ff66" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Success/400">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#d6ff33] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Success/400</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#d6ff33" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Success/500">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#cf0] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Success/500</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ccff00" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Success/600">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#a3cc00] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Success/600</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#a3cc00" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Success/700">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#7a9900] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[39px] text-center text-white top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Success/700</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#7a9900" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Success/800">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#526600] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Success/800</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#526600" />
            </div>
            <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#ffeb66] text-[39px] text-center top-[calc(50%-40px)] whitespace-nowrap">AAA</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Success/900">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#293300] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Montserrat:ExtraBold',sans-serif] leading-[43px] left-[calc(50%+0.5px)] not-italic text-[#fff199] text-[39px] text-center top-[calc(50%-13px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Success/900</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#293300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}