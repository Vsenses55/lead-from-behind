import svgPaths from "../../imports/svg-jcmvsgzmvw";
import FormField from "./FormField";

export default function SignupForm() {
  return (
    <div className="w-full flex justify-center px-4 md:px-6">
      <div className="w-full max-w-[1440px]">
        <div className="flex flex-col gap-[24px] md:gap-[32px] items-center px-[20px] md:px-[40px] lg:px-[80px] py-[40px] md:py-[60px]">
          {/* Title and Description */}
          <div className="flex flex-col gap-[24px] md:gap-[32px] items-center pb-[24px] md:pb-[48px] w-full text-center">
            <div className="font-['Montserrat',sans-serif] font-black text-[32px] md:text-[48px] lg:text-[61px] leading-[1.1] md:leading-[60px] uppercase w-full">
              <p className="mb-0 text-[#28324b]">JOIN US AND BE A LEADER</p>
              <p className="text-[#0072ca]">WHO PROUDLY CHECKS THEIR A**</p>
            </div>
            <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] max-w-[800px] text-[#28324b]" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 400 }}>
              <span>Join </span>
              <span style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 900 }}>LEAD FROM BEHIND</span>
              <span> and help prevent colon cancer in yourself and others. Plus, please give us your birthday so that we can occasionally surprise you with "gifts" that you never knew you wanted!</span>
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-[32px] md:gap-[48px] items-start w-full max-w-[916px]">
            {/* First Row: First Name & Last Name */}
            <div className="flex flex-col md:flex-row gap-[24px] md:gap-[16px] w-full">
              <FormField id="firstName" label="FIRST NAME" placeholder="First Name" required />
              <FormField id="lastName" label="LAST NAME" placeholder="Last Name" required />
            </div>

            {/* Second Row: Email & Date of Birth */}
            <div className="flex flex-col md:flex-row gap-[24px] md:gap-[16px] w-full">
              <FormField
                id="email"
                label="EMAIL"
                type="email"
                placeholder="Enter Email Address"
                required
                validate={(value) => {
                  if (!value.trim()) return "This field is required.";
                  if (!/^\S+@\S+\.\S+$/.test(value)) return "Enter a valid email address.";
                  return null;
                }}
              />
              <FormField
                id="dob"
                label="DATE OF BIRTH"
                placeholder="00/00/0000"
                required
                validate={(value) => {
                  if (!value.trim()) return "This field is required.";
                  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) return "Use MM/DD/YYYY format.";
                  return null;
                }}
              />
            </div>
          </div>

          {/* Opt-in Checkbox */}
          <div className="flex gap-[8px] items-start w-full max-w-[916px]">
            <div className="relative shrink-0 size-[20px] mt-[2px]">
              <div className="size-full rounded-[5px] border border-[#28324b] bg-[#0072ca] flex items-center justify-center">
                <svg className="size-[10px]" fill="none" viewBox="0 0 10 8">
                  <path d={svgPaths.p1a043300} fill="#FFDD00" />
                </svg>
              </div>
            </div>
            <p className="text-[13px] leading-[16px] text-[#28324b]" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 400 }}>
              By providing information, I agree to receive email updates from the Colorectal Cancer Alliance.
            </p>
          </div>

          {/* Submit Button */}
          <button className="bg-[#0072ca] h-[50px] md:h-[60px] rounded-[40px] px-6 md:px-[30px] py-3 md:py-[19px] flex gap-2 md:gap-[10px] items-center justify-center cursor-pointer hover:bg-[#147bca] transition-colors group">
            <span className="text-[18px] md:text-[20px] leading-[24px] md:leading-[32px] text-white whitespace-nowrap" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 900 }}>
              submit
            </span>
            <div className="h-[14px] md:h-[16px] w-[18px] md:w-[20px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                <path d={svgPaths.p204a5900} fill="#FFDD00" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}