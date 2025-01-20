export const HeroSection = () => {
  return (
    <div className="flex flex-col px-6 md:px-20 py-12 md:py-20 max-w-7xl w-full space-y-6 md:space-y-16">
      <h1 className="text-2xl md:text-5xl leading-normal">
        We are <span className="font-accent text-accent">design</span> and{" "}
        <span className="font-accent text-accent">development</span> studio that
        turns ideas into{" "}
        <span className="font-accent text-accent">
          beautifully crafted software
        </span>
        .
      </h1>
      <a
        href="https://trysouschef.com"
        target="_blank"
        className="md:text-xl pt-6 flex items-center space-x-4 md:space-x-6 ml-auto hover:fill-[#cf8360]"
      >
        <span className="underline">
          Check out our premier software offering - Souschef
        </span>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="1280.000000pt"
          height="640.000000pt"
          viewBox="0 0 1280.000000 640.000000"
          preserveAspectRatio="xMidYMid meet"
          className="w-20 h-12 text-accent"
        >
          <g
            transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M10210 4430 c-39 -24 92 -213 257 -370 338 -321 832 -595 1330 -740
40 -11 75 -26 79 -32 7 -12 -13 -11 -411 12 -1998 114 -7454 152 -10090 70
-756 -23 -1233 -54 -1339 -87 -98 -29 399 -75 1179 -108 1525 -64 3482 -95
5925 -95 2139 0 3758 27 4568 75 134 8 253 15 265 15 46 0 -4 -21 -140 -60
-537 -151 -1045 -424 -1409 -755 -156 -142 -294 -328 -277 -372 14 -37 104 6
453 214 392 233 663 376 990 520 219 96 396 163 894 338 263 92 333 130 287
154 -11 6 -26 11 -34 11 -8 0 -22 10 -33 22 -28 32 -130 75 -429 183 -399 144
-630 241 -920 385 -289 143 -405 208 -723 404 -323 199 -392 234 -422 216z"
            />
          </g>
        </svg>
      </a>
    </div>
  );
};

export default HeroSection;
