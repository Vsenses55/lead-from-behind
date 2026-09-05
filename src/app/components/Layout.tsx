import { NavLink, Outlet, useLocation } from "react-router";
import svgPaths from "../../imports/svg-8slm7qfkjv";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isPrototypePage = location.pathname === '/prototype';
  
  const tabs = [
    { name: "Components", path: "/" },
    { name: "Colors", path: "/colors" },
    { name: "Typography", path: "/typography" },
    { name: "Spacing", path: "/spacing" },
    { name: "Prototype", path: "/prototype" },
  ];

  return (
    <div className="bg-white flex flex-col items-start size-full overflow-hidden">
      {/* Header with white background */}
      <div className="bg-white h-[80px] md:h-[112px] w-full">
        <div className="flex items-center justify-center size-full px-4">
          <div className="flex items-center justify-between w-full max-w-[1200px] md:justify-center">
            {/* LFB Logo */}
            <div className="h-[30px] w-[112px] md:h-[40px] md:w-[150px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 40">
                <g clipPath="url(#clip0_1_1702)">
                  <path d={svgPaths.p12daa380} fill="#28324b" />
                  <path d={svgPaths.p3b54a100} fill="#28324b" />
                  <path d={svgPaths.p3283e546} fill="#28324b" />
                  <path d={svgPaths.p2f01fe00} fill="#28324b" />
                  <path d={svgPaths.p23b58800} fill="#28324b" />
                  <path d={svgPaths.p397e1a00} fill="#28324b" />
                  <path d={svgPaths.p2569c900} fill="#28324b" />
                  <path d={svgPaths.p1a78b900} fill="#28324b" />
                  <path d={svgPaths.p22fbb080} fill="#28324b" />
                  <path d={svgPaths.p10c12148} fill="#28324b" />
                  <path d={svgPaths.p3f5e2600} fill="#28324b" />
                  <path d={svgPaths.p4567d00} fill="#28324b" />
                  <path d={svgPaths.p3503f300} fill="#28324b" />
                  <path d={svgPaths.p34bd3060} fill="#28324b" />
                  <path d={svgPaths.p10705f00} fill="#28324b" />
                  <path d={svgPaths.p1da84500} fill="#28324b" />
                  <path d={svgPaths.p24f32900} fill="#28324b" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1702">
                    <rect fill="white" height="40" width="150" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-black"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <div className="hidden md:block bg-white h-[57px] w-full border-b border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-center h-full">
          <nav className="flex gap-8 items-center px-6">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                end={tab.path === "/"}
                className={({ isActive }) =>
                  `relative h-[56px] flex items-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] tracking-[-0.3125px] ${
                    isActive ? "text-[#0072ca]" : "text-[#4a5565]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {tab.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%+40px)] h-[2px] bg-[#0072ca]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Navigation Bar - Mobile */}
      <div className="md:hidden bg-white w-full border-b border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] overflow-x-auto scrollbar-hide">
        <nav className="flex items-center px-4 min-w-max">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end={tab.path === "/"}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `relative h-[48px] flex items-center px-4 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] tracking-[-0.3125px] whitespace-nowrap ${
                  isActive ? "text-[#0072ca]" : "text-[#4a5565]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {tab.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0072ca]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full bg-white overflow-auto">
        {isPrototypePage ? (
          <Outlet />
        ) : (
          <div className="flex justify-center w-full">
            <div className="max-w-[1072px] w-full px-4 md:px-6 lg:px-8 py-6 md:py-12">
              <Outlet />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}