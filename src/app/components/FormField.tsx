import { useState } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  /** Return an error message for the current value, or null if it's valid. */
  validate?: (value: string) => string | null;
  className?: string;
}

const COLORS = {
  default: "#28324b",
  focus: "#0072ca",
  error: "#d4183d",
};

/**
 * A labeled text input with Default / Hover / Entry(focused) / Error states,
 * matching the design system's "Input Field States" reference: gray fill on
 * hover, blue border + label on focus, red border + label + message once a
 * required/invalid field is left blank or malformed.
 */
export default function FormField({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  validate,
  className = "w-full md:w-[450px]",
}: FormFieldProps) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  const runValidation = (v: string): string | null => {
    if (validate) return validate(v);
    if (required && v.trim() === "") return "This field is required.";
    return null;
  };

  const error = touched ? runValidation(value) : null;
  const stateColor = error ? COLORS.error : focused ? COLORS.focus : COLORS.default;

  return (
    <div className={`flex flex-col gap-[12px] ${className}`}>
      <label
        htmlFor={id}
        className="font-['Avenir',sans-serif] font-black text-[14px] leading-[16px] uppercase transition-colors"
        style={{ fontWeight: 900, color: stateColor }}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          setTouched(true);
        }}
        aria-invalid={Boolean(error)}
        className="bg-white h-[54px] rounded-[8px] border px-[25px] py-[19px] text-[16px] leading-[24px] text-[#28324b] placeholder:text-[#a3a3a3] outline-none transition-colors hover:bg-[#e5e5e5] focus:bg-white"
        style={{ fontFamily: "Avenir, sans-serif", fontWeight: 400, borderColor: stateColor }}
      />
      {error && (
        <p
          className="uppercase text-[13px] leading-[16px]"
          style={{ fontFamily: "Avenir, sans-serif", fontWeight: 700, color: COLORS.error }}
        >
          *{error}
        </p>
      )}
    </div>
  );
}
