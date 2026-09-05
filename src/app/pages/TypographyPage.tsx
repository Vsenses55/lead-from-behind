import { useState } from "react";

interface TypeScaleItem {
  name: string;
  size: string;
  rem: string;
  lineHeight: string;
  fontFamily: string;
  fontWeight: string;
  textTransform?: string;
  example: string;
  cssClass: string;
}

const typeScales: TypeScaleItem[] = [
  {
    name: "Display 1",
    size: "90px",
    rem: "5.625rem",
    lineHeight: "84px",
    fontFamily: "Montserrat",
    fontWeight: "900",
    textTransform: "uppercase",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[90px] leading-[84px] font-['Montserrat',sans-serif] font-black uppercase"
  },
  {
    name: "Display 2",
    size: "76px",
    rem: "4.75rem",
    lineHeight: "70px",
    fontFamily: "Montserrat",
    fontWeight: "900",
    textTransform: "uppercase",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[76px] leading-[70px] font-['Montserrat',sans-serif] font-black uppercase"
  },
  {
    name: "H1",
    size: "61px",
    rem: "3.813rem",
    lineHeight: "60px",
    fontFamily: "Montserrat",
    fontWeight: "900",
    textTransform: "uppercase",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[61px] leading-[60px] font-['Montserrat',sans-serif] font-black uppercase"
  },
  {
    name: "H2",
    size: "48px",
    rem: "3rem",
    lineHeight: "54px",
    fontFamily: "Montserrat",
    fontWeight: "900",
    textTransform: "uppercase",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[51px] leading-[54px] font-['Montserrat',sans-serif] font-black uppercase"
  },
  {
    name: "H3",
    size: "39px",
    rem: "2.438rem",
    lineHeight: "43px",
    fontFamily: "Montserrat",
    fontWeight: "800",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[39px] leading-[43px] font-['Montserrat',sans-serif] font-extrabold"
  },
  {
    name: "H4",
    size: "28px",
    rem: "1.750rem",
    lineHeight: "35px",
    fontFamily: "Montserrat",
    fontWeight: "700",
    textTransform: "uppercase",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[31px] leading-[35px] font-['Montserrat',sans-serif] font-bold uppercase"
  },
  {
    name: "H5",
    size: "20px",
    rem: "1.25rem",
    lineHeight: "28px",
    fontFamily: "Montserrat",
    fontWeight: "700",
    textTransform: "uppercase",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[20px] leading-[28px] font-['Montserrat',sans-serif] font-bold uppercase"
  },
  {
    name: "Body (Large)",
    size: "20px",
    rem: "1.25rem",
    lineHeight: "25px",
    fontFamily: "Avenir",
    fontWeight: "400",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[25px] leading-[25px] font-sans font-normal"
  },
  {
    name: "Body",
    size: "20px",
    rem: "1.25rem",
    lineHeight: "32px",
    fontFamily: "Avenir",
    fontWeight: "400",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[20px] leading-[32px] font-sans font-normal"
  },
  {
    name: "Body (Small)",
    size: "16px",
    rem: "1.000rem",
    lineHeight: "24px",
    fontFamily: "Avenir",
    fontWeight: "400",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[16px] leading-[24px] font-sans font-normal"
  },
  {
    name: "Labels",
    size: "14px",
    rem: "0.875rem",
    lineHeight: "16px",
    fontFamily: "Avenir",
    fontWeight: "900",
    textTransform: "uppercase",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[14px] leading-[16px] font-sans font-black uppercase"
  },
  {
    name: "Captions",
    size: "13px",
    rem: "0.813rem",
    lineHeight: "16px",
    fontFamily: "Avenir",
    fontWeight: "400",
    example: "The quick brown fox jumps over the lazy dog",
    cssClass: "text-[13px] leading-[16px] font-sans font-normal"
  }
];

export default function TypographyPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#0f172b] tracking-[0.0703px]">
          Typography
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#45556c] tracking-[-0.3125px]">
          The Lead From Behind typography scale with font sizes, line heights, and weights.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {typeScales.map((scale, index) => (
          <div
            key={index}
            className="bg-white border border-[#e2e8f0] rounded-[10px] p-6 md:p-8"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex flex-col gap-1">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#0f172b]">
                  {scale.name}
                </h3>
                <div className="flex flex-wrap gap-2 text-[12px] font-['Menlo:Regular',sans-serif] text-[#64748b]">
                  <span className="bg-[#f1f5f9] px-2 py-1 rounded">
                    {scale.size}
                  </span>
                  <span className="bg-[#f1f5f9] px-2 py-1 rounded">
                    {scale.rem}
                  </span>
                  <span className="bg-[#f1f5f9] px-2 py-1 rounded">
                    leading-{scale.lineHeight}
                  </span>
                  <span className="bg-[#f1f5f9] px-2 py-1 rounded">
                    font-{scale.fontWeight}
                  </span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(scale.cssClass, index)}
                className="text-[12px] md:text-[14px] text-[#0072ca] hover:text-[#005a9e] font-['Inter:Semi_Bold',sans-serif] font-semibold transition-colors whitespace-nowrap ml-4"
              >
                {copiedIndex === index ? "Copied!" : "Click to copy"}
              </button>
            </div>
            <div className={`${scale.cssClass} break-words`}>
              {scale.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}