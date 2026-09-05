import svgPaths from "../../imports/svg-9tnwgy8zyi";
import imgImg from "figma:asset/c43702e20b98578db1a1f975c7e86755f2160492.png";
import imgRectangle33 from "figma:asset/69b62d5306965b8b5f4ffb6d816911ebd9a47ca1.png";
import imgRectangle34 from "figma:asset/eaf79e6c53d87005634d688f9190188c9fa5e2ed.png";
import imgRectangle35 from "figma:asset/123e8703dc64b10d99c77bab606578f45f9152f1.png";
import imgRectangle36 from "figma:asset/bd9128ae83ec126f704f699379c87257eadf940c.png";
import imgRectangle37 from "figma:asset/eb819d91967db67518d88a6b577f7b9d08fa2f6f.png";

interface PostProps {
  image: string;
  text: string;
  hashtags: string;
  timestamp?: string;
}

function Post({ image, text, hashtags, timestamp = "2d" }: PostProps) {
  return (
    <div className="bg-white flex flex-col gap-[24px] rounded-[16px] pb-[20px] pt-[18px] w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-[20px]">
        <div className="flex gap-[16px] items-center">
          <div className="relative shrink-0 size-[45px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.1113 45.1338">
              <circle cx="22.5" cy="22.5" fill="#FFDD00" r="22.5" />
              <path d={svgPaths.p34ad5e00} fill="black" />
            </svg>
          </div>
          <p className="font-['Montserrat',sans-serif] font-bold text-[20px] leading-[28px] text-[#28324b] uppercase">
            LEADFROMBEHIND
          </p>
        </div>
        <p className="text-[18px] md:text-[20px] leading-[32px] text-[#b6b6b6]" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 400 }}>
          {timestamp}
        </p>
      </div>

      {/* Image */}
      <div className="w-full">
        <img 
          alt="Instagram post" 
          className="w-full h-auto object-cover" 
          src={image} 
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[24px] px-[40px]">
        <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#28324b]" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 400 }}>
          {text}
        </p>
        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#28324b]" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 900 }}>
          {hashtags}
        </p>
      </div>

      {/* Instagram Icon */}
      <div className="flex justify-end px-[20px]">
        <div className="relative shrink-0 size-[23px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0479 23.0479">
            <path d={svgPaths.p2bfe9300} fill="black" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function InstagramPosts() {
  const posts = [
    {
      image: imgImg,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      hashtags: "#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness"
    },
    {
      image: imgRectangle33,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      hashtags: "#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness"
    },
    {
      image: imgRectangle34,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      hashtags: "#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness"
    },
    {
      image: imgRectangle35,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      hashtags: "#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness"
    },
    {
      image: imgRectangle36,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      hashtags: "#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness"
    },
    {
      image: imgRectangle37,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. olore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      hashtags: "#coloncancerstory #colorectalcancer #coloncancerawareness #coloncancer #colorectalcancerawareness"
    }
  ];

  return (
    <div className="w-full flex justify-center px-4 md:px-6 lg:px-[80px]">
      <div className="w-full max-w-[1440px] flex flex-col gap-[40px] md:gap-[64px] items-center py-[40px]">
        {/* Heading */}
        <h2 className="font-['Montserrat',sans-serif] font-black text-[32px] md:text-[48px] lg:text-[61px] leading-[1.1] md:leading-[60px] text-[#28324b] text-center uppercase max-w-[960px]">
          People are talking sh*t about LFB
        </h2>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full">
          {posts.map((post, index) => (
            <Post
              key={index}
              image={post.image}
              text={post.text}
              hashtags={post.hashtags}
            />
          ))}
        </div>

        {/* View More Button */}
        <button className="bg-[#0072ca] h-[50px] md:h-[60px] rounded-[40px] px-6 md:px-[30px] py-3 md:py-[19px] flex gap-2 md:gap-[10px] items-center justify-center cursor-pointer hover:bg-[#147bca] transition-colors group">
          <span className="text-[18px] md:text-[20px] leading-[24px] md:leading-[32px] text-white whitespace-nowrap" style={{ fontFamily: 'Avenir, sans-serif', fontWeight: 900 }}>
            view more
          </span>
          <div className="h-[14px] md:h-[16px] w-[18px] md:w-[20px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p204a5900} fill="#FFDD00" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
