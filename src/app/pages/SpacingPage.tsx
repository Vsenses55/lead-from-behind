import { useState } from "react";

interface SpacingValue {
  scale: string;
  pixels: string;
  rem: string;
  classes: string[];
}

const spacingValues: SpacingValue[] = [
  { scale: "0", pixels: "0px", rem: "0rem", classes: ["p-0", "m-0", "gap-0"] },
  { scale: "2", pixels: "2px", rem: "0.125rem", classes: ["p-[2px]", "m-[2px]", "gap-[2px]"] },
  { scale: "4", pixels: "4px", rem: "0.25rem", classes: ["p-1", "m-1", "gap-1"] },
  { scale: "6", pixels: "6px", rem: "0.375rem", classes: ["p-1.5", "m-1.5", "gap-1.5"] },
  { scale: "8", pixels: "8px", rem: "0.5rem", classes: ["p-2", "m-2", "gap-2"] },
  { scale: "12", pixels: "12px", rem: "0.75rem", classes: ["p-3", "m-3", "gap-3"] },
  { scale: "16", pixels: "16px", rem: "1rem", classes: ["p-4", "m-4", "gap-4"] },
  { scale: "20", pixels: "20px", rem: "1.25rem", classes: ["p-5", "m-5", "gap-5"] },
  { scale: "24", pixels: "24px", rem: "1.5rem", classes: ["p-6", "m-6", "gap-6"] },
  { scale: "32", pixels: "32px", rem: "2rem", classes: ["p-8", "m-8", "gap-8"] },
  { scale: "40", pixels: "40px", rem: "2.5rem", classes: ["p-10", "m-10", "gap-10"] },
  { scale: "48", pixels: "48px", rem: "3rem", classes: ["p-12", "m-12", "gap-12"] },
  { scale: "64", pixels: "64px", rem: "4rem", classes: ["p-16", "m-16", "gap-16"] },
  { scale: "80", pixels: "80px", rem: "5rem", classes: ["p-20", "m-20", "gap-20"] },
  { scale: "96", pixels: "96px", rem: "6rem", classes: ["p-24", "m-24", "gap-24"] },
  { scale: "120", pixels: "120px", rem: "7.5rem", classes: ["p-[120px]", "m-[120px]", "gap-[120px]"] },
  { scale: "160", pixels: "160px", rem: "10rem", classes: ["p-[160px]", "m-[160px]", "gap-[160px]"] }
];

export default function SpacingPage() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(text);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 max-w-[1200px]">
      <div className="flex flex-col gap-3">
        <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-[#1e293b]">
          Spacing Scale
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#64748b]">
          Consistent spacing scale for margins, padding, and gaps throughout the design system.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {spacingValues.map((spacing, index) => {
          const pixelValue = parseInt(spacing.pixels);
          const barWidth = pixelValue === 0 ? 0 : Math.max(pixelValue, 8);
          const isActive = copiedValue === spacing.classes.join(" ");

          return (
            <div
              key={index}
              className="bg-white border border-[#e2e8f0] rounded-lg p-4 md:p-6 hover:border-[#cbd5e1] transition-all cursor-pointer"
              onClick={() => copyToClipboard(spacing.classes.join(" "))}
            >
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-4 md:gap-8 items-center">
                {/* Visual bar + Scale */}
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-20 md:w-24 h-12 md:h-16 bg-[#f8fafc] rounded flex items-center justify-start px-2">
                    {pixelValue > 0 && (
                      <div
                        className="bg-[#0072ca] rounded"
                        style={{ 
                          width: `${Math.min(barWidth, 80)}px`, 
                          height: "8px",
                          maxWidth: "100%"
                        }}
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-[40px]">
                    <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] md:text-[20px] text-[#1e293b]">
                      {spacing.scale}
                    </span>
                  </div>
                </div>

                {/* Values + Classes */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] md:text-[16px] text-[#1e293b]">
                      {spacing.pixels}
                    </span>
                    <span className="font-['Inter:Regular',sans-serif] text-[13px] md:text-[14px] text-[#94a3b8]">
                      {spacing.rem}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {spacing.classes.map((className, idx) => (
                      <span key={idx} className="flex items-center">
                        <code className="font-['Menlo:Regular',monospace] text-[12px] md:text-[13px] text-[#64748b] bg-[#f1f5f9] px-2 py-1 rounded">
                          {className}
                        </code>
                        {idx < spacing.classes.length - 1 && (
                          <span className="text-[#cbd5e1] mx-1">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Copy button */}
                <button
                  className="text-[13px] md:text-[14px] font-['Inter:Medium',sans-serif] font-medium text-[#64748b] hover:text-[#475569] transition-colors justify-self-end"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(spacing.classes.join(" "));
                  }}
                >
                  {isActive ? (
                    <span className="text-[#10b981]">✓ Copied</span>
                  ) : (
                    "Click to copy"
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}