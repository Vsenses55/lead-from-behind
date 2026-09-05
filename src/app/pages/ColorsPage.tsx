import { useState } from "react";

interface ColorSwatch {
  name: string;
  hex: string;
  contrastText: string;
  accessibilityRating: string;
}

interface ColorCategory {
  category: string;
  swatches: ColorSwatch[];
}

const colorData: ColorCategory[] = [
  {
    category: "Primary",
    swatches: [
      { name: "Primary/100", hex: "#d4d6db", contrastText: "#000000", accessibilityRating: "AAA" },
      { name: "Primary/200", hex: "#a9adb7", contrastText: "#000000", accessibilityRating: "AAA" },
      { name: "Primary/300", hex: "#7e8493", contrastText: "#000000", accessibilityRating: "AAA" },
      { name: "Primary/400", hex: "#535b6f", contrastText: "#ececec", accessibilityRating: "AAA" },
      { name: "Primary/500", hex: "#28324b", contrastText: "#ececec", accessibilityRating: "AAA" },
      { name: "Primary/600", hex: "#20283c", contrastText: "#ececec", accessibilityRating: "AAA" },
      { name: "Primary/700", hex: "#181e2d", contrastText: "#ececec", accessibilityRating: "AAA" },
      { name: "Primary/800", hex: "#10141e", contrastText: "#a9adb7", accessibilityRating: "AAA" },
      { name: "Primary/900", hex: "#080a0f", contrastText: "#ececec", accessibilityRating: "AAA" }
    ]
  },
  {
    category: "Secondary",
    swatches: [
      { name: "Secondary/100", hex: "#cce3f4", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Secondary/200", hex: "#99c7ea", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Secondary/300", hex: "#66aadf", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Secondary/400", hex: "#338ed5", contrastText: "#000000", accessibilityRating: "AAA" },
      { name: "Secondary/500", hex: "#0072ca", contrastText: "#ececec", accessibilityRating: "AA" },
      { name: "Secondary/600", hex: "#005ba2", contrastText: "#ececec", accessibilityRating: "AAA" },
      { name: "Secondary/700", hex: "#004479", contrastText: "#ececec", accessibilityRating: "AAA" },
      { name: "Secondary/800", hex: "#002e51", contrastText: "#cce3f4", accessibilityRating: "AAA" },
      { name: "Secondary/900", hex: "#001728", contrastText: "#ececec", accessibilityRating: "AAA" }
    ]
  },
  {
    category: "Accent",
    swatches: [
      { name: "Accent/100", hex: "#fff8cc", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Accent/200", hex: "#fff199", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Accent/300", hex: "#ffeb66", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Accent/400", hex: "#ffe433", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Accent/500", hex: "#ffdd00", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Accent/600", hex: "#ccb100", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Accent/700", hex: "#998500", contrastText: "#ffffff", accessibilityRating: "AA" },
      { name: "Accent/800", hex: "#665800", contrastText: "#fff8cc", accessibilityRating: "AAA" },
      { name: "Accent/900", hex: "#332c00", contrastText: "#ececec", accessibilityRating: "AAA" }
    ]
  },
  {
    category: "Danger",
    swatches: [
      { name: "Danger/100", hex: "#ffd8cc", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Danger/200", hex: "#ffb199", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Danger/300", hex: "#ff8a66", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Danger/400", hex: "#ff6333", contrastText: "#000000", accessibilityRating: "AAA" },
      { name: "Danger/500", hex: "#ff3c00", contrastText: "#000000", accessibilityRating: "AAA" },
      { name: "Danger/600", hex: "#cc3000", contrastText: "#ffffff", accessibilityRating: "AAA" },
      { name: "Danger/700", hex: "#992400", contrastText: "#ececec", accessibilityRating: "AAA" },
      { name: "Danger/800", hex: "#661800", contrastText: "#ffd8cc", accessibilityRating: "AAA" },
      { name: "Danger/900", hex: "#330c00", contrastText: "#ffb199", accessibilityRating: "AAA" }
    ]
  },
  {
    category: "Success",
    swatches: [
      { name: "Success/100", hex: "#f5ffcc", contrastText: "#526600", accessibilityRating: "AAA" },
      { name: "Success/200", hex: "#ebff99", contrastText: "#526600", accessibilityRating: "AAA" },
      { name: "Success/300", hex: "#e0ff66", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Success/400", hex: "#d6ff33", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Success/500", hex: "#ccff00", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Success/600", hex: "#a3cc00", contrastText: "#28324b", accessibilityRating: "AAA" },
      { name: "Success/700", hex: "#7a9900", contrastText: "#ffffff", accessibilityRating: "AAA" },
      { name: "Success/800", hex: "#526600", contrastText: "#f5ffcc", accessibilityRating: "AAA" },
      { name: "Success/900", hex: "#293300", contrastText: "#ebff99", accessibilityRating: "AAA" }
    ]
  }
];

export default function ColorsPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  // Filter to only show 100, 300, 500, 700, 900 values
  const filteredColorData = colorData.map(category => ({
    ...category,
    swatches: category.swatches.filter(swatch =>
      swatch.name.endsWith('/100') ||
      swatch.name.endsWith('/300') ||
      swatch.name.endsWith('/500') ||
      swatch.name.endsWith('/700') ||
      swatch.name.endsWith('/900')
    )
  }));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] leading-[28px] text-[#0f172b] tracking-[-0.4492px]">
          Colors
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] text-[#45556c] tracking-[-0.3125px]">
          Color palette and usage guidelines for the Lead From Behind design system.
        </p>
      </div>

      {filteredColorData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="flex flex-col gap-6">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] leading-[28px] text-[#0f172b] tracking-[-0.4492px]">
            {category.category}
          </h2>

          {/* Mobile: 2 columns, Desktop: 5 columns */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {category.swatches.map((swatch, swatchIndex) => (
              <div
                key={swatchIndex}
                className="relative rounded-[10px] border border-[#e2e8f0] cursor-pointer"
                onClick={() => copyToClipboard(swatch.hex)}
              >
                <div className="flex flex-col gap-3 p-[17px]">
                  {/* WCAG rating container */}
                  <div
                    className="relative bg-white rounded-[8px] border border-[#e2e8f0] flex items-center justify-center px-[72px] py-[41px]"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <p
                      className="font-['Montserrat:Bold',sans-serif] font-bold text-[20px] leading-[24px] text-center whitespace-nowrap"
                      style={{ color: swatch.contrastText }}
                    >
                      {swatch.accessibilityRating}
                    </p>
                  </div>

                  {/* Color info */}
                  <div className="flex flex-col gap-1">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#0f172b] whitespace-nowrap">
                      {swatch.name.replace('/', ' ')}
                    </p>
                    <div className="flex items-center justify-between gap-1">
                      <p className="font-['Menlo:Regular',sans-serif] text-[12px] leading-[16px] text-[#45556c]">
                        {swatch.hex}
                      </p>
                      {copiedColor === swatch.hex && (
                        <span className="text-[11px] text-[#0072ca] font-['Inter:Semi_Bold',sans-serif] font-semibold whitespace-nowrap">
                          ✓
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}