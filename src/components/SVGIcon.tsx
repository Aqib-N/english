import React from "react";

interface SVGIconProps {
  color: string;
}

export const SVGIcon: React.FC<SVGIconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="20"
      height="20"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={color} //#26A2C9
        stroke="none"
      >
        <path
          d="M2479 4997 c-62 -23 -108 -57 -137 -100 -16 -23 -161 -351 -322 -729
            -291 -682 -293 -688 -324 -693 -17 -2 -359 -34 -761 -70 -777 -70 -772 -69
            -843 -130 -69 -58 -107 -183 -83 -272 6 -23 26 -62 44 -86 17 -25 273 -256
            567 -513 294 -256 547 -478 562 -493 l28 -26 -166 -725 c-108 -474 -166 -746
            -167 -785 -1 -106 53 -194 150 -241 70 -35 156 -37 223 -7 25 11 277 159 560
            328 283 169 563 336 621 371 58 35 113 66 121 69 8 3 276 -151 644 -371 346
            -207 649 -386 674 -397 67 -31 153 -28 223 7 97 47 151 135 150 241 -1 39 -59
            311 -167 785 l-165 725 22 21 c12 12 265 234 562 494 297 259 555 492 572 517
            41 56 57 113 50 180 -11 102 -79 193 -171 228 -28 11 -283 38 -794 84 -414 38
            -755 71 -757 73 -2 2 -138 316 -301 698 -163 382 -309 711 -324 731 -62 77
            -202 119 -291 86z"
        />
      </g>
    </svg>
  );
};