import { useState } from "react";
import InputFieldComponent from "../../imports/InputField";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPaths from "../../imports/svg-dn5viqj6k5";
import PostComponent from "../../imports/Post";
import instagramSvgPaths from "../../imports/svg-08y6c51tzd";
import imgImg from "figma:asset/c43702e20b98578db1a1f975c7e86755f2160492.png";
import footerSvgPaths from "../../imports/svg-q6bvmyd1kg";
import buttonSvgPaths from "../../imports/svg-p4ng6lrfde";
import buttonDonateSvgPaths from "../../imports/svg-v4a702cyph";

// Extract the InputField function from the module
const InputField = (props: {
  className?: string;
  hintText?: string;
  label?: string;
  state?: "Default" | "Hover" | "Entry" | "Error";
}) => {
  const { className, hintText = "Label Name", label = "LABEL NAME", state = "Default" } = props;
  
  if (state === "Error") {
    return (
      <div className={className || "relative w-[450px]"} data-name="State=Error">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <p className="font-['Montserrat:Black',sans-serif] font-[900] leading-[25px] not-italic relative shrink-0 text-[#ff3c00] text-[15px] w-full">{label}</p>
          <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
            <div aria-hidden="true" className="absolute border border-[#ff3c00] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[25px] py-[19px] relative size-full">
                <p className="font-['Avenir:Roman',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap">{hintText}</p>
              </div>
            </div>
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
          <p className="font-['Montserrat:Black',sans-serif] font-[900] leading-[25px] not-italic relative shrink-0 text-[#0072ca] text-[15px] w-full">{label}</p>
          <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
            <div aria-hidden="true" className="absolute border-2 border-[#0072ca] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[25px] py-[19px] relative size-full">
                <p className="font-['Avenir:Roman',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap">{hintText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Hover") {
    return (
      <div className={className || "relative w-[450px]"} data-name="State=Hover">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <p className="font-['Montserrat:Black',sans-serif] font-[900] leading-[25px] not-italic relative shrink-0 text-[#28324b] text-[15px] w-full">{label}</p>
          <div className="bg-[#ececec] h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
            <div aria-hidden="true" className="absolute border border-[#28324b] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[25px] py-[19px] relative size-full">
                <p className="font-['Avenir:Roman',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap">{hintText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "relative w-[450px]"} data-name="State=Default">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <p className="font-['Montserrat:Black',sans-serif] font-[900] leading-[25px] not-italic relative shrink-0 text-[#28324b] text-[15px] w-full">{label}</p>
        <div className="bg-white h-[54px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
          <div aria-hidden="true" className="absolute border border-[#28324b] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[25px] py-[19px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[16px] whitespace-nowrap">{hintText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ComponentsPage() {
  const [testValue, setTestValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleTestInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTestValue(value);
    // Simple validation: show error if input contains numbers
    setHasError(/\d/.test(value));
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 max-w-[1200px]">
      <div className="flex flex-col gap-2">
        <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#0f172b] tracking-[0.0703px]">
          Components
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#45556c] tracking-[-0.3125px]">
          Reusable UI components for the Lead From Behind design system.
        </p>
      </div>

      {/* Form Fields Section */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-[#0f172b]">
            Form Fields
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#64748b]">
            Input fields with multiple states for form interactions.
          </p>
        </div>

        {/* States Display */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-6">
            Input Field States
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Default State */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b]">
                  Default
                </span>
                <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">
                  Initial state
                </span>
              </div>
              <InputField state="Default" label="LABEL NAME" hintText="Label Name" className="w-full max-w-[450px]" />
            </div>

            {/* Hover State */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b]">
                  Hover
                </span>
                <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">
                  Mouse over
                </span>
              </div>
              <InputField state="Hover" label="LABEL NAME" hintText="Label Name" className="w-full max-w-[450px]" />
            </div>

            {/* Entry/Focus State */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b]">
                  Entry
                </span>
                <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">
                  Active/Focused
                </span>
              </div>
              <InputField state="Entry" label="LABEL NAME" hintText="Label Name" className="w-full max-w-[450px]" />
            </div>

            {/* Error State */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b]">
                  Error
                </span>
                <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">
                  Validation failed
                </span>
              </div>
              <InputField state="Error" label="LABEL NAME" hintText="Label Name" className="w-full max-w-[450px]" />
            </div>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-4">
            Interactive Example
          </h3>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b] mb-6">
            Try typing in the field below. Numbers will trigger an error state.
          </p>
          
          <div className="max-w-[450px]">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
              <label 
                htmlFor="test-input"
                className={`font-['Montserrat:Black',sans-serif] font-[900] leading-[25px] not-italic relative shrink-0 text-[15px] w-full transition-colors ${
                  hasError ? "text-[#ff3c00]" : isFocused ? "text-[#0072ca]" : "text-[#28324b]"
                }`}
              >
                LABEL NAME
              </label>
              <div className="relative w-full">
                <input
                  id="test-input"
                  type="text"
                  value={testValue}
                  onChange={handleTestInput}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter your name"
                  className={`w-full h-[54px] px-[25px] py-[19px] rounded-[8px] font-['Avenir:Roman',sans-serif] text-[16px] leading-[24px] transition-all outline-none ${
                    hasError
                      ? "bg-white border border-[#ff3c00] text-[#28324b]"
                      : isFocused
                      ? "bg-white border-2 border-[#0072ca] text-[#28324b]"
                      : "bg-white border border-[#28324b] text-[#28324b] hover:bg-[#ececec]"
                  } placeholder:text-[#a3a3a3]`}
                />
              </div>
              {hasError && (
                <p className="font-['Avenir:Heavy',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#ff3c00] text-[14px] w-full">
                  *Please enter only letters, no numbers allowed
                </p>
              )}
              {testValue && !hasError && (
                <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#10b981] text-[14px] w-full">
                  ✓ Valid input
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-4">
            Usage
          </h3>
          <pre className="font-['Menlo:Regular',monospace] text-[13px] md:text-[14px] text-[#e2e8f0] overflow-x-auto">
            <code>{`import InputField from './components/InputField';

// Default state
<InputField 
  state="Default"
  label="LABEL NAME"
  hintText="Label Name"
/>

// Error state
<InputField 
  state="Error"
  label="LABEL NAME"
  hintText="Label Name"
/>

// Entry/Focused state
<InputField 
  state="Entry"
  label="LABEL NAME"
  hintText="Label Name"
/>`}</code>
          </pre>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-[#0f172b]">
            Buttons
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#64748b]">
            Call-to-action buttons in various styles for different purposes.
          </p>
        </div>

        {/* Button Variants Display */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-6">
            Button Variants
          </h3>
          
          <div className="flex flex-col gap-8">
            {/* Pill Button (Primary Action) */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b]">
                  Pill Button
                </span>
                <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">
                  Primary action with 3 states
                </span>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                {/* Default State */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">Default</span>
                  <button className="bg-[#0072ca] rounded-[40px] h-[60px] px-[30px] py-[19px] flex gap-[10px] items-center justify-center transition-colors">
                    <span className="font-['Avenir:Heavy',sans-serif] leading-[32px] text-[20px] text-white whitespace-nowrap">label</span>
                    <div className="h-[16px] w-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                        <path d={buttonSvgPaths.p204a5900} fill="#FFDD00" />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Hover State */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">Hover</span>
                  <button className="bg-[#147bca] rounded-[40px] h-[60px] px-[30px] py-[19px] flex gap-[10px] items-center justify-center cursor-pointer">
                    <span className="font-['Avenir:Heavy',sans-serif] leading-[32px] text-[20px] text-[#fd0] whitespace-nowrap">label</span>
                    <div className="h-[16px] w-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                        <path d={buttonSvgPaths.p204a5900} fill="#FFDD00" />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Press State */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">Press</span>
                  <button className="bg-[#fd0] rounded-[40px] h-[60px] px-[30px] py-[19px] flex gap-[10px] items-center justify-center">
                    <span className="font-['Avenir:Heavy',sans-serif] leading-[32px] text-[20px] text-black whitespace-nowrap">label</span>
                    <div className="h-[16px] w-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                        <path d={buttonSvgPaths.p204a5900} fill="#28324B" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Donate Button */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b]">
                  Donate Button
                </span>
                <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">
                  Secondary action with icon
                </span>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                {/* Default State */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">Default</span>
                  <button className="bg-[#0072ca] rounded-[6px] px-[40px] py-[16px] flex gap-[10px] items-center justify-center hover:bg-[#005a9e] transition-colors">
                    <div className="h-[16.981px] w-[18.915px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9147 16.9808">
                        <path clipRule="evenodd" d={buttonDonateSvgPaths.p280b7d80} fill="white" fillRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-['Avenir:Heavy',sans-serif] text-[16px] text-white whitespace-nowrap">Donate</span>
                  </button>
                </div>

                {/* Hover State */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">Hover</span>
                  <button className="bg-[#005a9e] rounded-[6px] px-[40px] py-[16px] flex gap-[10px] items-center justify-center">
                    <div className="h-[16.981px] w-[18.915px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9147 16.9808">
                        <path clipRule="evenodd" d={buttonDonateSvgPaths.p280b7d80} fill="white" fillRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-['Avenir:Heavy',sans-serif] text-[16px] text-white whitespace-nowrap">Donate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Size Variations */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b]">
                  Responsive Sizing
                </span>
                <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">
                  Buttons adapt to screen size
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="bg-[#0072ca] rounded-[40px] px-[20px] sm:px-[30px] py-[14px] sm:py-[19px] flex gap-[8px] sm:gap-[10px] items-center hover:bg-[#147bca] transition-colors group">
                  <span className="font-['Avenir:Heavy',sans-serif] text-[16px] sm:text-[20px] text-white group-hover:text-[#fd0] whitespace-nowrap transition-colors">label</span>
                  <div className="h-[12px] sm:h-[16px] w-[15px] sm:w-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                      <path d={buttonSvgPaths.p204a5900} fill="#FFDD00" />
                    </svg>
                  </div>
                </button>

                <button className="bg-[#0072ca] rounded-[6px] px-[30px] sm:px-[40px] py-[12px] sm:py-[16px] flex gap-[8px] sm:gap-[10px] items-center justify-center hover:bg-[#147bca] transition-colors">
                  <div className="h-[14px] sm:h-[16.981px] w-[15.6px] sm:w-[18.915px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9147 16.9808">
                      <path clipRule="evenodd" d={buttonDonateSvgPaths.p280b7d80} fill="white" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-['Avenir:Heavy',sans-serif] text-[14px] sm:text-[16px] text-white whitespace-nowrap">Donate</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-4">
            Usage
          </h3>
          <pre className="font-['Menlo:Regular',monospace] text-[13px] md:text-[14px] text-[#e2e8f0] overflow-x-auto">
            <code>{`// Pill Button (Default State)
<button className="bg-[#0072ca] rounded-[40px] h-[60px] px-[30px] py-[19px] 
                   flex gap-[10px] items-center justify-center">
  <span className="font-['Avenir:Heavy'] leading-[32px] text-[20px] text-white">
    label
  </span>
  <svg className="h-[16px] w-[20px]">
    {/* Arrow icon, fill: #FFDD00 */}
  </svg>
</button>

// Pill Button (Hover State)
<button className="bg-[#147bca] rounded-[40px] h-[60px] px-[30px] py-[19px] 
                   flex gap-[10px] items-center justify-center">
  <span className="font-['Avenir:Heavy'] leading-[32px] text-[20px] text-[#fd0]">
    label
  </span>
  <svg className="h-[16px] w-[20px]">
    {/* Arrow icon, fill: #FFDD00 */}
  </svg>
</button>

// Pill Button (Press State)
<button className="bg-[#fd0] rounded-[40px] h-[60px] px-[30px] py-[19px] 
                   flex gap-[10px] items-center justify-center">
  <span className="font-['Avenir:Heavy'] leading-[32px] text-[20px] text-black">
    label
  </span>
  <svg className="h-[16px] w-[20px]">
    {/* Arrow icon, fill: #28324B */}
  </svg>
</button>

// Donate Button
<button className="bg-[#0072ca] rounded-[6px] px-[40px] py-[16px] 
                   flex gap-[10px] items-center justify-center
                   hover:bg-[#147bca] transition-colors">
  <svg className="h-[16.981px] w-[18.915px]">
    {/* Heart icon, fill: white */}
  </svg>
  <span className="font-['Avenir:Heavy'] text-[16px] text-white">
    Donate
  </span>
</button>`}</code>
          </pre>
        </div>

        {/* Properties Table */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-4">
            Component Properties
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Button Type</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Specification</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="font-['Inter:Regular',sans-serif] text-[14px] text-[#1e293b]">
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Pill Button - Height</td>
                  <td className="py-3 pr-4">60px</td>
                  <td className="py-3">Fixed height</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Pill Button - Border Radius</td>
                  <td className="py-3 pr-4">40px</td>
                  <td className="py-3">Pill-shaped button</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Pill Button - Padding</td>
                  <td className="py-3 pr-4">30px horizontal, 19px vertical</td>
                  <td className="py-3">Responsive: 20px/14px on mobile</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Default State - Background</td>
                  <td className="py-3 pr-4">#0072ca</td>
                  <td className="py-3">Blue primary color</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Default State - Text</td>
                  <td className="py-3 pr-4">Avenir Heavy, 20px, white</td>
                  <td className="py-3">Line height: 32px</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Default State - Arrow</td>
                  <td className="py-3 pr-4">20px × 16px, #FFDD00</td>
                  <td className="py-3">Yellow arrow icon</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Hover State - Background</td>
                  <td className="py-3 pr-4">#147bca</td>
                  <td className="py-3">Lighter blue</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Hover State - Text</td>
                  <td className="py-3 pr-4">Avenir Heavy, 20px, #FDD000</td>
                  <td className="py-3">Yellow text on hover</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Hover State - Arrow</td>
                  <td className="py-3 pr-4">20px × 16px, #FFDD00</td>
                  <td className="py-3">Remains yellow</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Press State - Background</td>
                  <td className="py-3 pr-4">#FDD000</td>
                  <td className="py-3">Yellow background</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Press State - Text</td>
                  <td className="py-3 pr-4">Avenir Heavy, 20px, black</td>
                  <td className="py-3">Black text on yellow</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Press State - Arrow</td>
                  <td className="py-3 pr-4">20px × 16px, #28324B</td>
                  <td className="py-3">Dark arrow on press</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Donate - Background</td>
                  <td className="py-3 pr-4">#0072ca (default), #147bca (hover)</td>
                  <td className="py-3">Blue with lighter hover</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Donate - Border Radius</td>
                  <td className="py-3 pr-4">6px</td>
                  <td className="py-3">Slightly rounded corners</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Donate - Padding</td>
                  <td className="py-3 pr-4">40px horizontal, 16px vertical</td>
                  <td className="py-3">Responsive: 30px/12px on mobile</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Donate - Text</td>
                  <td className="py-3 pr-4">Avenir Heavy, 16px, white</td>
                  <td className="py-3">Capitalized text</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Donate - Heart Icon</td>
                  <td className="py-3 pr-4">18.915px × 16.981px, white</td>
                  <td className="py-3">Positioned before text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Content Section Component */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-[#0f172b]">
            Content Section
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#64748b]">
            A flexible layout component that pairs an image with headline and body content. Commonly used for storytelling, features, or sequential information.
          </p>
        </div>

        {/* Variants Display */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-6">
            Variants
          </h3>
          
          <div className="flex flex-col gap-16 md:gap-20">
            {/* Image Left with Number */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b]">
                  Image Left + Numbered
                </span>
                <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">
                  Step-based layout
                </span>
              </div>
              <div className="content-center flex flex-col lg:flex-row gap-[32px] lg:gap-[64px] items-center justify-center relative w-full">
                <div className="h-[300px] lg:h-[400px] relative shrink-0 w-full lg:w-[400px]">
                  <ImageWithFallback 
                    alt="Medical professional" 
                    className="w-full h-full object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc3MjkzODA5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </div>
                <div className="content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-start relative shrink-0 w-full lg:w-[400px]">
                  <div className="bg-[#fd0] relative rounded-[200px] shrink-0 size-[80px] lg:size-[112px]">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Black',sans-serif] font-[900] leading-[60px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[40px] lg:text-[61px] text-center top-1/2 -translate-y-1/2 uppercase whitespace-nowrap">1</p>
                  </div>
                  <p className="font-['Montserrat:ExtraBold',sans-serif] font-[800] leading-[32px] lg:leading-[43px] not-italic relative shrink-0 text-[#28324b] text-[28px] lg:text-[39px] w-full line-clamp-2">Early detection saves lives</p>
                  <div className="flex flex-col font-['Avenir:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[20px] text-black w-full">
                    <p className="leading-[26px] lg:leading-[32px]">Regular screenings can save lives by catching issues early when they're most treatable. Talk to your healthcare provider about when to start screening.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Right with Number */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b]">
                  Image Right + Numbered
                </span>
                <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">
                  Step-based layout (reversed)
                </span>
              </div>
              <div className="content-center flex flex-col lg:flex-row-reverse gap-[32px] lg:gap-[64px] items-center justify-center relative w-full">
                <div className="h-[300px] lg:h-[400px] relative shrink-0 w-full lg:w-[400px]">
                  <ImageWithFallback 
                    alt="Happy family" 
                    className="w-full h-full object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1766808982517-2c3f6f8c2e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzI5MzgwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </div>
                <div className="content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-start relative shrink-0 w-full lg:w-[400px]">
                  <div className="bg-[#fd0] relative rounded-[200px] shrink-0 size-[80px] lg:size-[112px]">
                    <p className="-translate-x-1/2 absolute font-['Montserrat:Black',sans-serif] font-[900] leading-[60px] left-[calc(50%+0.5px)] not-italic text-[#28324b] text-[40px] lg:text-[61px] text-center top-1/2 -translate-y-1/2 uppercase whitespace-nowrap">2</p>
                  </div>
                  <p className="font-['Montserrat:ExtraBold',sans-serif] font-[800] leading-[32px] lg:leading-[43px] not-italic relative shrink-0 text-[#28324b] text-[28px] lg:text-[39px] w-full line-clamp-2">Taking action for your health</p>
                  <div className="flex flex-col font-['Avenir:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[20px] text-black w-full">
                    <p className="leading-[26px] lg:leading-[32px]">Prevention and early detection give you the best chance at living a long, healthy life with the people you love most.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Left without Number */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b]">
                  Image Left (No Number)
                </span>
                <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">
                  Standard content block
                </span>
              </div>
              <div className="content-center flex flex-col lg:flex-row gap-[32px] lg:gap-[64px] items-center justify-center relative w-full">
                <div className="h-[300px] lg:h-[400px] relative shrink-0 w-full lg:w-[400px]">
                  <ImageWithFallback 
                    alt="Medical professional" 
                    className="w-full h-full object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc3MjkzODA5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </div>
                <div className="content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-start relative shrink-0 w-full lg:w-[400px]">
                  <p className="font-['Montserrat:ExtraBold',sans-serif] font-[800] leading-[32px] lg:leading-[43px] not-italic relative shrink-0 text-[#28324b] text-[28px] lg:text-[39px] w-full line-clamp-2">Expert care when you need it</p>
                  <div className="flex flex-col font-['Avenir:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[20px] text-black w-full">
                    <p className="leading-[26px] lg:leading-[32px]">Our team of medical professionals is dedicated to providing you with the highest quality care and support throughout your health journey.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Right without Number */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b]">
                  Image Right (No Number)
                </span>
                <span className="text-[11px] text-[#94a3b8] font-['Inter:Regular',sans-serif]">
                  Standard content block (reversed)
                </span>
              </div>
              <div className="content-center flex flex-col lg:flex-row-reverse gap-[32px] lg:gap-[64px] items-center justify-center relative w-full">
                <div className="h-[300px] lg:h-[400px] relative shrink-0 w-full lg:w-[400px]">
                  <ImageWithFallback 
                    alt="Happy family" 
                    className="w-full h-full object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1766808982517-2c3f6f8c2e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzI5MzgwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </div>
                <div className="content-stretch flex flex-col gap-[24px] lg:gap-[40px] items-start relative shrink-0 w-full lg:w-[400px]">
                  <p className="font-['Montserrat:ExtraBold',sans-serif] font-[800] leading-[32px] lg:leading-[43px] not-italic relative shrink-0 text-[#28324b] text-[28px] lg:text-[39px] w-full line-clamp-2">Live life to the fullest</p>
                  <div className="flex flex-col font-['Avenir:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[20px] text-black w-full">
                    <p className="leading-[26px] lg:leading-[32px]">Taking control of your health means more time with loved ones and the freedom to enjoy every moment without worry.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Props & Usage */}
        <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-4">
            Usage
          </h3>
          <pre className="font-['Menlo:Regular',monospace] text-[13px] md:text-[14px] text-[#e2e8f0] overflow-x-auto">
            <code>{`// Image Left with Number
<div className="flex flex-row gap-[64px]">
  <img src="image.jpg" className="w-[536px] h-[548px]" />
  <div className="flex flex-col gap-[40px] w-[536px]">
    <div className="bg-[#fd0] rounded-[200px] size-[112px]">
      <p className="text-[#28324b] text-[61px]">1</p>
    </div>
    <p className="text-[39px]">Headline text</p>
    <p className="text-[20px]">Body content</p>
  </div>
</div>

// Image Right with Number (use flex-row-reverse)
// Image Left without Number (omit number badge)
// Image Right without Number (flex-row-reverse + no badge)`}</code>
          </pre>
        </div>

        {/* Properties Table */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-4">
            Component Properties
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Element</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Specification</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="font-['Inter:Regular',sans-serif] text-[14px] text-[#1e293b]">
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Image Container</td>
                  <td className="py-3 pr-4">536px × 548px</td>
                  <td className="py-3">Responsive on mobile</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Number Badge</td>
                  <td className="py-3 pr-4">112px circle, #FDD000</td>
                  <td className="py-3">Optional</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Number Text</td>
                  <td className="py-3 pr-4">Montserrat Black, 61px</td>
                  <td className="py-3">Color: #28324b</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Headline</td>
                  <td className="py-3 pr-4">Montserrat ExtraBold, 39px</td>
                  <td className="py-3">Line height: 43px</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Body Text</td>
                  <td className="py-3 pr-4">Avenir Book, 20px</td>
                  <td className="py-3">Line height: 32px</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Gap Between Columns</td>
                  <td className="py-3 pr-4">64px</td>
                  <td className="py-3">32px on mobile</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Circle Creative Component */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-[#0f172b]">
            Circle Creative
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#64748b]">
            An eye-catching component featuring overlapping circular elements with an image and bold messaging on a yellow background.
          </p>
        </div>

        {/* Example Display */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-6">
            Example
          </h3>
          
          {/* Mobile Layout */}
          <div className="lg:hidden w-full">
            <div className="content-stretch flex flex-col items-center pb-[90px] relative rounded-[16px] overflow-hidden">
              {/* Circular Image */}
              <div className="content-stretch flex items-center mb-[-90px] relative shrink-0">
                <div className="relative shrink-0 size-[300px]">
                  <ImageWithFallback 
                    alt="Relaxed person" 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-full"
                    src="https://images.unsplash.com/photo-1766818979596-ea06a46b6da5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxheGVkJTIwd29tYW4lMjBzbWlsaW5nJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcyOTM5MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </div>
              </div>
              {/* Yellow Circle with Text */}
              <div className="bg-[#fd0] content-stretch flex flex-col items-center justify-center mb-[-90px] p-[80px] relative rounded-[500px] shrink-0 size-[504px]">
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic p-[40px] relative text-black w-full">
                      <p className="font-['Montserrat:Black',sans-serif] font-[900] leading-[35px] relative shrink-0 text-[31px] uppercase w-full text-center">Afraid of your colonoscopy? Relax.</p>
                      <p className="font-['Avenir:Roman',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full text-center">Everything about a colonoscopy has gotten better in the last decade. The drugs are amazing. There are alternatives to the drink that comes in a jug.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block w-full overflow-x-auto">
            <div className="flex items-center justify-center py-8">
              <div className="content-center flex flex-nowrap gap-y-0 items-center justify-center pr-[140px] relative" style={{ minWidth: 'max-content' }}>
                {/* Circular Image */}
                <div className="content-stretch flex items-center mr-[-140px] relative shrink-0">
                  <div className="relative shrink-0 size-[400px] rounded-full overflow-hidden bg-[#f0f0f0]">
                    <ImageWithFallback 
                      alt="Relaxed person" 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                      src="https://images.unsplash.com/photo-1766818979596-ea06a46b6da5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxheGVkJTIwd29tYW4lMjBzbWlsaW5nJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcyOTM5MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    />
                  </div>
                </div>
                {/* Yellow Circle with Text */}
                <div className="bg-[#fd0] content-stretch flex flex-col h-[607px] items-center justify-center mr-[-140px] px-[102px] py-[134px] relative rounded-[500px] shrink-0 w-[619px]">
                  <div className="content-stretch flex flex-col gap-[21px] items-start not-italic relative shrink-0 text-black w-full">
                    <p className="font-['Montserrat:Black',sans-serif] font-[900] leading-[47px] relative shrink-0 text-[43px] uppercase w-[407px]">Afraid of your colonoscopy? Relax.</p>
                    <p className="font-['Avenir:Roman',sans-serif] leading-[30px] relative shrink-0 text-[18px] w-[414px]">Everything about a colonoscopy has gotten better in the last decade. The drugs are amazing. There are alternatives to the drink that comes in a jug.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-4">
            Usage
          </h3>
          <pre className="font-['Menlo:Regular',monospace] text-[13px] md:text-[14px] text-[#e2e8f0] overflow-x-auto">
            <code>{`// Circle Creative with overlapping elements
<div className="flex items-center pr-[200px]">
  {/* Circular Image */}
  <div className="mr-[-200px] p-[10px]">
    <div className="size-[570px] rounded-full overflow-hidden">
      <img src="image.jpg" className="object-cover size-full" />
    </div>
  </div>
  
  {/* Yellow Circle with Text */}
  <div className="bg-[#fd0] rounded-[500px] w-[883.921px] aspect-square 
                  px-[146px] py-[192px] mr-[-200px]">
    <div className="flex flex-col gap-[30px] max-w-[582px]">
      <p className="font-['Montserrat:Black'] text-[61px] leading-[67px] uppercase">
        Headline Text
      </p>
      <p className="font-['Avenir:Roman'] text-[26px] leading-[43px]">
        Body content goes here
      </p>
    </div>
  </div>
</div>`}</code>
          </pre>
        </div>

        {/* Properties Table */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-4">
            Component Properties
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Element</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Specification</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="font-['Inter:Regular',sans-serif] text-[14px] text-[#1e293b]">
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Image Circle</td>
                  <td className="py-3 pr-4">570px diameter</td>
                  <td className="py-3">Circular clipped image</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Yellow Circle</td>
                  <td className="py-3 pr-4">~884px × 867px, #FDD000</td>
                  <td className="py-3">Aspect ratio maintained</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Overlap (negative margin)</td>
                  <td className="py-3 pr-4">-200px</td>
                  <td className="py-3">Creates overlapping effect</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Headline</td>
                  <td className="py-3 pr-4">Montserrat Black, 61px uppercase</td>
                  <td className="py-3">Line height: 67px</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Body Text</td>
                  <td className="py-3 pr-4">Avenir Roman, 26px</td>
                  <td className="py-3">Line height: 43px</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Content Width</td>
                  <td className="py-3 pr-4">Max 582px</td>
                  <td className="py-3">Inside yellow circle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Info Panel Component */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-[#0f172b]">
            Info Panel
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#64748b]">
            A dark container component for highlighting important information with an icon and formatted text content.
          </p>
        </div>

        {/* Example Display */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-6">
            Example
          </h3>
          
          <div className="max-w-[900px] mx-auto">
            <div className="bg-[#28324b] content-stretch flex flex-col gap-[24px] md:gap-[36px] items-center px-[40px] md:px-[80px] py-[40px] md:py-[70px] relative rounded-[25px] w-full">
              <div className="h-[80px] md:h-[121.86px] relative shrink-0 w-[86px] md:w-[131.14px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.14 121.86">
                  <g clipPath="url(#clip0_43_37)">
                    <path d={svgPaths.p23330880} fill="#FFDD00" />
                    <path d={svgPaths.p2d4ce500} fill="#FFDD00" />
                    <path d={svgPaths.p314d5300} fill="#FFDD00" />
                    <path d={svgPaths.p3ee09200} fill="#FFDD00" />
                    <path d={svgPaths.p1685a000} fill="#FFDD00" />
                    <path d={svgPaths.pa49b80} fill="#FFDD00" />
                    <path d={svgPaths.p1dddf172} fill="#FFDD00" />
                    <path d={svgPaths.p78d9700} fill="#FFDD00" />
                    <path d={svgPaths.p20068480} fill="#FFDD00" />
                    <path d={svgPaths.p24dea200} fill="#FFDD00" />
                  </g>
                  <defs>
                    <clipPath id="clip0_43_37">
                      <rect fill="white" height="121.86" width="131.14" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-['Montserrat:Regular',sans-serif] leading-[32px] md:leading-[48px] not-italic relative shrink-0 text-[20px] md:text-[31px] text-center text-white w-full">
                <span>Because colon cancer is the second biggest cancer killer in America. It's rising in young people. </span>
                <span className="font-['Montserrat:Bold',sans-serif] text-[#fd0]">Yet, it's preventable.</span>
                <span> Yep, you read that right - colon cancer is preventable. And the best way to prevent it is by having a colonoscopy.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-4">
            Usage
          </h3>
          <pre className="font-['Menlo:Regular',monospace] text-[13px] md:text-[14px] text-[#e2e8f0] overflow-x-auto">
            <code>{`// Info Panel with icon and mixed text styling
<div className="bg-[#28324b] flex flex-col gap-[36px] items-center 
                px-[80px] py-[70px] rounded-[25px]">
  {/* Icon */}
  <div className="h-[121.86px] w-[131.14px]">
    <svg>
      {/* SVG icon paths */}
    </svg>
  </div>
  
  {/* Text with highlight */}
  <p className="font-['Montserrat:Regular'] text-[31px] leading-[48px] 
                text-center text-white">
    <span>Regular text content. </span>
    <span className="font-['Montserrat:Bold'] text-[#fd0]">
      Highlighted text.
    </span>
    <span> More regular text.</span>
  </p>
</div>`}</code>
          </pre>
        </div>

        {/* Properties Table */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-4">
            Component Properties
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Element</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Specification</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="font-['Inter:Regular',sans-serif] text-[14px] text-[#1e293b]">
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Container</td>
                  <td className="py-3 pr-4">Background: #28324b</td>
                  <td className="py-3">Dark blue container</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Border Radius</td>
                  <td className="py-3 pr-4">25px</td>
                  <td className="py-3">Rounded corners</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Padding</td>
                  <td className="py-3 pr-4">80px horizontal, 70px vertical</td>
                  <td className="py-3">40px/40px on mobile</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Icon Size</td>
                  <td className="py-3 pr-4">131.14px × 121.86px</td>
                  <td className="py-3">Scales to 86px × 80px on mobile</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Icon Color</td>
                  <td className="py-3 pr-4">#FFDD00 (yellow)</td>
                  <td className="py-3">Brand yellow</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Gap (icon to text)</td>
                  <td className="py-3 pr-4">36px</td>
                  <td className="py-3">24px on mobile</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Body Text</td>
                  <td className="py-3 pr-4">Montserrat Regular, 31px, white</td>
                  <td className="py-3">20px on mobile, line-height: 48px</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Highlight Text</td>
                  <td className="py-3 pr-4">Montserrat Bold, #FDD000</td>
                  <td className="py-3">For emphasis within body text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Instagram Post Component */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-[#0f172b]">
            Instagram Post
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#64748b]">
            A social media post component designed for Instagram, featuring a header with branding, main image, content area with hashtags, and Instagram icon.
          </p>
        </div>

        {/* Example Display */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-6">
            Example
          </h3>
          
          <div className="max-w-[500px] mx-auto">
            <div className="bg-white content-stretch flex flex-col gap-[16px] md:gap-[24px] items-center pb-[14px] md:pb-[20px] pt-[12px] md:pt-[18px] relative rounded-[16px] w-full">
              {/* Header */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[16px] md:px-[20px] relative w-full">
                    <div className="content-stretch flex gap-[12px] md:gap-[16px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[36px] md:size-[45px]">
                        <div className="absolute inset-0">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.1113 45.1338">
                            <g>
                              <circle cx="22.5" cy="22.5" fill="#FFDD00" r="22.5" />
                              <path d={instagramSvgPaths.p34ad5e00} fill="black" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Montserrat:Bold',sans-serif] leading-[20px] md:leading-[28px] not-italic relative shrink-0 text-[#28324b] text-[16px] md:text-[20px] uppercase whitespace-nowrap">LEADFROMBEHIND</p>
                    </div>
                    <p className="font-['Gibson:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#b6b6b6] text-[14px] md:text-[18px] text-right whitespace-nowrap">2d</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="flex-[1_0_0] h-[300px] md:h-[431px] min-h-px min-w-px relative">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                    <img alt="Instagram post content" className="absolute h-full w-full object-cover" src={imgImg} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col gap-[32px] md:gap-[64px] items-center leading-[20px] md:leading-[24px] not-italic pb-[4px] pt-[16px] md:pt-[24px] px-[24px] md:px-[40px] relative text-[#28324b] text-[14px] md:text-[16px] w-full">
                    <p className="font-['Avenir:Regular',sans-serif] relative shrink-0 w-full">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0 w-full break-words">#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness</p>
                  </div>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-end px-[16px] md:px-[20px] relative w-full">
                    <div className="relative shrink-0 size-[18px] md:size-[23.048px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0479 23.0479">
                        <path d={instagramSvgPaths.p2bfe9300} fill="black" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-4">
            Usage
          </h3>
          <pre className="font-['Menlo:Regular',monospace] text-[13px] md:text-[14px] text-[#e2e8f0] overflow-x-auto">
            <code>{`// Instagram Post Component
<div className="bg-white flex flex-col gap-[24px] rounded-[16px] 
                pb-[20px] pt-[18px]">
  {/* Header with logo and username */}
  <div className="flex items-center justify-between px-[20px]">
    <div className="flex gap-[16px] items-center">
      <div className="size-[45px]">
        <svg>{/* Logo SVG */}</svg>
      </div>
      <p className="font-['Montserrat:Bold'] text-[20px] uppercase">
        LEADFROMBEHIND
      </p>
    </div>
    <p className="text-[#b6b6b6] text-[18px]">2d</p>
  </div>

  {/* Main Image */}
  <div className="h-[431px]">
    <img src="image.jpg" className="w-full h-full object-cover" />
  </div>

  {/* Caption and Hashtags */}
  <div className="flex flex-col gap-[64px] px-[40px] pt-[24px]">
    <p className="font-['Avenir:Regular'] text-[16px]">
      Post caption text goes here...
    </p>
    <p className="font-['Avenir:Heavy'] text-[16px]">
      #hashtag1 #hashtag2 #hashtag3
    </p>
  </div>

  {/* Instagram Icon */}
  <div className="flex justify-end px-[20px]">
    <svg className="size-[23px]">{/* Instagram icon */}</svg>
  </div>
</div>`}</code>
          </pre>
        </div>

        {/* Properties Table */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-4">
            Component Properties
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Element</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Specification</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="font-['Inter:Regular',sans-serif] text-[14px] text-[#1e293b]">
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Container</td>
                  <td className="py-3 pr-4">White background, 16px border radius</td>
                  <td className="py-3">Max width: 500px recommended</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Logo Circle</td>
                  <td className="py-3 pr-4">45px diameter, #FFDD00</td>
                  <td className="py-3">36px on mobile</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Username</td>
                  <td className="py-3 pr-4">Montserrat Bold, 20px uppercase</td>
                  <td className="py-3">16px on mobile, color: #28324b</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Timestamp</td>
                  <td className="py-3 pr-4">Gibson Regular, 18px</td>
                  <td className="py-3">14px on mobile, color: #b6b6b6</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Main Image</td>
                  <td className="py-3 pr-4">431px height</td>
                  <td className="py-3">300px on mobile, full width</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Caption Text</td>
                  <td className="py-3 pr-4">Avenir Regular, 16px</td>
                  <td className="py-3">14px on mobile, line-height: 24px</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Hashtags</td>
                  <td className="py-3 pr-4">Avenir Heavy, 16px</td>
                  <td className="py-3">14px on mobile, color: #28324b</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Gap (caption to hashtags)</td>
                  <td className="py-3 pr-4">64px</td>
                  <td className="py-3">32px on mobile</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Instagram Icon</td>
                  <td className="py-3 pr-4">23px × 23px</td>
                  <td className="py-3">18px on mobile, aligned right</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-[#0f172b]">
            Footer
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#64748b]">
            A comprehensive footer component featuring organization branding, navigation links, contact information, social media icons, and back-to-top functionality.
          </p>
        </div>

        {/* Example Display */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-6">
            Example
          </h3>
          
          <div className="w-full overflow-x-auto">
            <div className="bg-[#28324b] relative w-full min-w-[320px]">
              <div className="content-start flex flex-col lg:flex-row lg:flex-wrap gap-y-[48px] lg:gap-y-[80px] items-start justify-between px-[20px] md:px-[60px] lg:px-[120px] py-[40px] md:py-[50px] lg:py-[60px] relative w-full">
                
                {/* Left Side Content */}
                <div className="content-start flex flex-col md:flex-row flex-wrap gap-[32px] md:gap-[40px] items-start relative w-full lg:w-auto lg:max-w-[60%]">
                  
                  {/* Logo LFB */}
                  <div className="content-stretch flex flex-col h-[60px] md:h-[75px] items-start w-[107px] md:w-[134px] relative shrink-0">
                    <div className="h-[60px] md:h-[75px] w-[107px] md:w-[134px] overflow-clip relative">
                      <div className="absolute inset-[85.43%_94.43%_0.2%_0]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.46769 10.7725">
                          <path d={footerSvgPaths.p2e69c900} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.43%_87.74%_0.18%_6.52%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.68848 10.7923">
                          <path d={footerSvgPaths.p2db12880} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.44%_79.55%_0.2%_12.83%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2046 10.7701">
                          <path d={footerSvgPaths.p23c33700} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.43%_72.14%_0.2%_21.33%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75432 10.7768">
                          <path d={footerSvgPaths.p906c800} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.42%_65.71%_0.21%_29.33%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.65031 10.7818">
                          <path d={footerSvgPaths.p11f02d80} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.42%_58.55%_0.21%_35.71%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.69171 10.7814">
                          <path d={footerSvgPaths.p8cbe600} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.24%_51.34%_0_42.57%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16307 11.0752">
                          <path d={footerSvgPaths.p65ea800} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.4%_42.97%_0.21%_50.24%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.09782 10.793">
                          <path d={footerSvgPaths.p1099f7c0} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.42%_34.78%_0.21%_58.74%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.6809 10.7782">
                          <path d={footerSvgPaths.p122a6500} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.43%_27.82%_0.18%_66.44%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.68582 10.7923">
                          <path d={footerSvgPaths.p309da680} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.43%_19.98%_0.2%_73.41%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.85782 10.7755">
                          <path d={footerSvgPaths.p1e861a80} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.43%_16.44%_0.2%_81.55%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.6955 10.7756">
                          <path d={footerSvgPaths.p31c56600} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.43%_8.59%_0.2%_85.09%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.47648 10.7729">
                          <path d={footerSvgPaths.p2d5d19f0} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[85.43%_0.53%_0.2%_92.94%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74272 10.7768">
                          <path d={footerSvgPaths.p32169280} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[0_70.8%_21.69%_0.04%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0811 58.7349">
                          <path d={footerSvgPaths.p7e98b00} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[0_37.55%_21.69%_33.29%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0702 58.735">
                          <path d={footerSvgPaths.p191bef80} fill="white" />
                        </svg>
                      </div>
                      <div className="absolute inset-[0.2%_0_21.95%_66.53%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.8467 58.3918">
                          <path d={footerSvgPaths.p263abe70} fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Navigation & Content */}
                  <div className="content-start flex flex-col md:flex-row flex-wrap gap-[32px] md:gap-[40px] lg:gap-[60px] items-start relative w-full md:w-auto">
                    
                    {/* Menu Items */}
                    <div className="content-stretch flex flex-col font-['Avenir:Regular',sans-serif] gap-[16px] md:gap-[24px] items-start justify-center leading-[24px] not-italic relative shrink-0 text-[14px] md:text-[16px] text-white">
                      <p className="relative shrink-0 cursor-pointer hover:text-[#fd0] transition-colors">COLON CANCER</p>
                      <p className="relative shrink-0 cursor-pointer hover:text-[#fd0] transition-colors">HOW TO PREVENT</p>
                      <p className="relative shrink-0 cursor-pointer hover:text-[#fd0] transition-colors">ABOUT</p>
                      <p className="relative shrink-0 cursor-pointer hover:text-[#fd0] transition-colors">ACT</p>
                    </div>

                    {/* Email Section */}
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <div className="font-['Avenir:Black',sans-serif] leading-[14px] md:leading-[16px] not-italic relative shrink-0 text-[#dadada] text-[12px] md:text-[14px] uppercase">
                        <p className="mb-0 text-white">Email:</p>
                        <p className="font-['Avenir:Roman',sans-serif] mb-0">hello@leadfrombehind.org</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0 text-white">Press email:</p>
                        <p className="font-['Avenir:Roman',sans-serif]">press@leadfrombehind.org</p>
                      </div>
                    </div>
                  </div>

                  {/* Address & Footer Links */}
                  <div className="content-stretch flex flex-col gap-[24px] md:gap-[34px] items-start not-italic relative text-white w-full">
                    <div className="flex flex-col font-['Avenir:Regular',sans-serif] justify-center leading-[14px] md:leading-[16px] relative shrink-0 text-[11px] md:text-[13px] w-full">
                      <p className="mb-0">1025 Vermont Ave NW, Suite 1066, Washington, DC 20005</p>
                      <p className="mb-0">(202) 628-0123 Toll-free Helpline: (877) 422-2030</p>
                      <p>© 2021 Colorectal Cancer Alliance, a 501(c)(3) non-profit.</p>
                    </div>
                    <div className="flex flex-col font-['Avenir:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] md:text-[14px] uppercase w-full">
                      <p className="leading-[14px] md:leading-[16px] whitespace-pre-wrap">{`Disclaimer   •   Privacy Policy   •   Non-discrimination Statement`}</p>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="content-stretch flex gap-[20px] md:gap-[24px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[18px] md:size-[21px] cursor-pointer hover:opacity-80 transition-opacity">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                        <g clipPath="url(#clip0_48_153)">
                          <g />
                          <path d={footerSvgPaths.p361ccc00} fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_48_153">
                            <rect fill="white" height="21" width="21" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="relative shrink-0 size-[20px] md:size-[23px] cursor-pointer hover:opacity-80 transition-opacity">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
                        <g clipPath="url(#clip0_48_161_footer)">
                          <path d={footerSvgPaths.p39a2d100} fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_48_161_footer">
                            <rect fill="white" height="23" width="23" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="h-[18px] md:h-[20px] relative shrink-0 w-[20px] md:w-[23px] cursor-pointer hover:opacity-80 transition-opacity">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 20">
                        <g>
                          <path d={footerSvgPaths.p1451a800} fill="white" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Side - CCA Logo & Helpline */}
                <div className="flex flex-col gap-[24px] md:gap-[32px] relative shrink-0 w-full lg:w-auto">
                  <div className="h-[58px] md:h-[73px] relative shrink-0 w-[129px] md:w-[161px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 73">
                      <g clipPath="url(#clip0_48_164)">
                        <path d={footerSvgPaths.p38e0f700} fill="white" />
                        <path d={footerSvgPaths.p16170e80} fill="white" />
                        <path d={footerSvgPaths.p12c08e80} fill="white" />
                        <path d={footerSvgPaths.p39c9dd00} fill="white" />
                        <path d={footerSvgPaths.p117ec100} fill="white" />
                        <path d={footerSvgPaths.p1abe8100} fill="white" />
                        <path d={footerSvgPaths.p5cb1180} fill="white" />
                        <path d={footerSvgPaths.p9eab800} fill="white" />
                        <path d={footerSvgPaths.p3b933700} fill="white" />
                        <path d={footerSvgPaths.p34ad8400} fill="white" />
                        <path d={footerSvgPaths.p1584f00} fill="white" />
                        <path d={footerSvgPaths.p24e8c200} fill="white" />
                        <path d={footerSvgPaths.p2667f300} fill="white" />
                        <path d={footerSvgPaths.pc969900} fill="white" />
                        <path d={footerSvgPaths.p1f419300} fill="white" />
                        <path d={footerSvgPaths.pcbdc700} fill="white" />
                        <path d={footerSvgPaths.p7becc90} fill="white" />
                        <path d={footerSvgPaths.p2e094380} fill="white" />
                        <path d={footerSvgPaths.p3ad77700} fill="white" />
                        <path d={footerSvgPaths.p2550f880} fill="white" />
                        <path d={footerSvgPaths.p2da16100} fill="white" />
                        <path d={footerSvgPaths.p30b288f2} fill="white" />
                        <path d={footerSvgPaths.pf265cf0} fill="white" />
                        <path d={footerSvgPaths.p27af3900} fill="white" />
                        <path d={footerSvgPaths.p1ae1b800} fill="white" />
                        <path d={footerSvgPaths.pc5a2700} fill="white" />
                        <path d={footerSvgPaths.p28b0e00} fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_164">
                          <rect fill="white" height="73" width="161" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col font-['Gibson:SemiBold',sans-serif] justify-center leading-[16px] md:leading-[19px] not-italic text-[#dadada] text-[13px] md:text-[15px] tracking-[0.2px]">
                    <p className="mb-0 text-white">Call our Helpline</p>
                    <p className="font-['Gibson:Regular',sans-serif]">877-422-2030</p>
                  </div>
                </div>

                {/* Back to Top Button */}
                <div className="absolute bottom-[16px] md:bottom-[20px] right-[16px] md:right-[20px] size-[36px] md:size-[45px] cursor-pointer hover:scale-110 transition-transform">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45.1002">
                    <g clipPath="url(#clip0_48_147)">
                      <path d={footerSvgPaths.p187b3600} stroke="#FFDD00" strokeMiterlimit="10" strokeWidth="3" />
                      <path d={footerSvgPaths.p2400ed00} fill="#FFDD00" />
                    </g>
                    <defs>
                      <clipPath id="clip0_48_147">
                        <rect fill="white" height="45.1002" width="45" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-4">
            Usage
          </h3>
          <pre className="font-['Menlo:Regular',monospace] text-[13px] md:text-[14px] text-[#e2e8f0] overflow-x-auto">
            <code>{`// Footer Component
<footer className="bg-[#28324b] px-[120px] py-[60px] relative">
  <div className="flex justify-between">
    {/* Left Side */}
    <div className="flex gap-[40px]">
      <svg>{/* LFB Logo */}</svg>
      
      <div className="flex flex-col gap-[24px] text-white">
        <p>COLON CANCER</p>
        <p>HOW TO PREVENT</p>
        <p>ABOUT</p>
        <p>ACT</p>
      </div>
      
      <div>
        <p className="text-white">Email:</p>
        <p>hello@leadfrombehind.org</p>
      </div>
      
      <div className="flex gap-[24px]">
        <svg>{/* Social Icons */}</svg>
      </div>
    </div>
    
    {/* Right Side */}
    <div>
      <svg>{/* CCA Logo */}</svg>
      <p>Call our Helpline: 877-422-2030</p>
    </div>
    
    {/* Back to Top */}
    <button className="absolute bottom-[20px] right-[20px] size-[45px]">
      <svg>{/* Arrow up icon */}</svg>
    </button>
  </div>
</footer>`}</code>
          </pre>
        </div>

        {/* Properties Table */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 md:p-8">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[18px] text-[#1e293b] mb-4">
            Component Properties
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Element</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3 pr-4">Specification</th>
                  <th className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#64748b] py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="font-['Inter:Regular',sans-serif] text-[14px] text-[#1e293b]">
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Container</td>
                  <td className="py-3 pr-4">Background: #28324b</td>
                  <td className="py-3">Dark blue background</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Padding</td>
                  <td className="py-3 pr-4">120px horizontal, 60px vertical</td>
                  <td className="py-3">Responsive: 20px/40px on mobile</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">LFB Logo</td>
                  <td className="py-3 pr-4">134px × 75px, white</td>
                  <td className="py-3">107px × 60px on mobile</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Navigation Links</td>
                  <td className="py-3 pr-4">Avenir Regular, 16px, white</td>
                  <td className="py-3">Uppercase, 24px gap between items</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Email Section</td>
                  <td className="py-3 pr-4">Avenir Black/Roman, 14px</td>
                  <td className="py-3">Labels in white, emails in #dadada</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Address Text</td>
                  <td className="py-3 pr-4">Avenir Regular, 13px, white</td>
                  <td className="py-3">Line height: 16px</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Footer Links</td>
                  <td className="py-3 pr-4">Avenir Black, 14px uppercase</td>
                  <td className="py-3">Separated by bullets (•)</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Social Icons</td>
                  <td className="py-3 pr-4">21-23px, white</td>
                  <td className="py-3">Facebook, Instagram, Twitter</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">CCA Logo</td>
                  <td className="py-3 pr-4">161px × 73px, white</td>
                  <td className="py-3">129px × 58px on mobile</td>
                </tr>
                <tr className="border-b border-[#f1f5f9]">
                  <td className="py-3 pr-4">Helpline</td>
                  <td className="py-3 pr-4">Gibson SemiBold/Regular, 15px</td>
                  <td className="py-3">Label in white, number in #dadada</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Back to Top Button</td>
                  <td className="py-3 pr-4">45px circle, #FFDD00</td>
                  <td className="py-3">36px on mobile, bottom-right position</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}