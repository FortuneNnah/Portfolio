/*
  Replaces the two basketball players with a developer's world:
  a browser window mid-build, a UI card, a phone, and a live
  multiplayer-style cursor. Cropped at the bottom edge of the
  footer, like the original illustration.
*/
export default function FooterIllustration() {
  return (
    <svg
      className="footer__art"
      viewBox="0 0 560 320"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      focusable="false"
    >
      {/* Sparkles */}
      <path
        transform="translate(118 96)"
        d="M0 -14 L3.5 -3.5 L14 0 L3.5 3.5 L0 14 L-3.5 3.5 L-14 0 L-3.5 -3.5 Z"
        fill="#2862E7"
        stroke="#0B0F1B"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        transform="translate(500 40)"
        d="M0 -10 L2.5 -2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5 -2.5 Z"
        fill="#FFB020"
        stroke="#0B0F1B"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Left: UI card */}
      <g transform="translate(36 150) rotate(-8)">
        <rect width="124" height="104" rx="12" fill="#FFFFFF" stroke="#0B0F1B" strokeWidth="4" />
        <rect x="12" y="12" width="100" height="42" rx="6" fill="#BFD6FF" />
        <circle cx="32" cy="29" r="8" fill="#FFB020" />
        <path d="M12 54 L48 30 L72 46 L92 34 L112 54 Z" fill="#2862E7" />
        <rect x="12" y="64" width="72" height="8" rx="4" fill="#9DB7E8" />
        <rect x="12" y="80" width="46" height="16" rx="8" fill="#FFB020" stroke="#0B0F1B" strokeWidth="2.5" />
      </g>

      {/* Center: browser window */}
      <g transform="translate(170 40)">
        <rect width="230" height="300" rx="16" fill="#FFFFFF" stroke="#0B0F1B" strokeWidth="4" />
        <rect x="2" y="2" width="226" height="34" rx="14" fill="#DCE9FF" />
        <rect x="2" y="20" width="226" height="16" fill="#DCE9FF" />
        <path d="M2 36 H228" stroke="#0B0F1B" strokeWidth="3" />
        <circle cx="22" cy="19" r="5" fill="#FFB020" />
        <circle cx="38" cy="19" r="5" fill="#FFC93C" />
        <circle cx="54" cy="19" r="5" fill="#2862E7" />
        <rect x="76" y="11" width="132" height="16" rx="8" fill="#FFFFFF" />

        {/* Code lines */}
        <rect x="20" y="56" width="60" height="9" rx="4.5" fill="#FFB020" />
        <rect x="88" y="56" width="92" height="9" rx="4.5" fill="#2862E7" />
        <rect x="36" y="76" width="112" height="9" rx="4.5" fill="#9DB7E8" />
        <rect x="36" y="96" width="70" height="9" rx="4.5" fill="#2862E7" />
        <rect x="112" y="96" width="52" height="9" rx="4.5" fill="#FFB020" />
        <rect x="36" y="116" width="134" height="9" rx="4.5" fill="#9DB7E8" />
        <rect x="20" y="136" width="40" height="9" rx="4.5" fill="#FFB020" />

        {/* Hero block being built */}
        <rect x="20" y="164" width="190" height="92" rx="10" fill="#2862E7" stroke="#0B0F1B" strokeWidth="3" />
        <rect x="34" y="180" width="104" height="10" rx="5" fill="#FFFFFF" />
        <rect x="34" y="198" width="72" height="8" rx="4" fill="#BFD6FF" />
        <rect x="34" y="220" width="64" height="20" rx="10" fill="#FFB020" stroke="#0B0F1B" strokeWidth="2.5" />

        {/* Cards below, cropped by the footer edge */}
        <rect x="20" y="272" width="90" height="40" rx="8" fill="#DCE9FF" stroke="#0B0F1B" strokeWidth="2.5" />
        <rect x="120" y="272" width="90" height="40" rx="8" fill="#DCE9FF" stroke="#0B0F1B" strokeWidth="2.5" />
      </g>

      {/* Right: phone */}
      <g transform="translate(424 98) rotate(8)">
        <rect width="98" height="200" rx="20" fill="#FFFFFF" stroke="#0B0F1B" strokeWidth="4" />
        <rect x="35" y="9" width="28" height="6" rx="3" fill="#0B0F1B" />
        <rect x="10" y="28" width="78" height="38" rx="8" fill="#2862E7" />
        <rect x="10" y="76" width="60" height="8" rx="4" fill="#9DB7E8" />
        <rect x="10" y="92" width="78" height="8" rx="4" fill="#9DB7E8" />
        <circle cx="19" cy="124" r="8" fill="#FFB020" />
        <rect x="33" y="120" width="55" height="8" rx="4" fill="#9DB7E8" />
        <circle cx="19" cy="150" r="8" fill="#2862E7" />
        <rect x="33" y="146" width="55" height="8" rx="4" fill="#9DB7E8" />
        <circle cx="19" cy="176" r="8" fill="#FFC93C" />
        <rect x="33" y="172" width="55" height="8" rx="4" fill="#9DB7E8" />
      </g>

      {/* Chips: tag and braces */}
      <g transform="translate(146 18)">
        <rect width="68" height="36" rx="18" fill="#0B0F1B" />
        <text
          x="34"
          y="24"
          textAnchor="middle"
          fontFamily="ui-monospace, Menlo, Consolas, monospace"
          fontSize="16"
          fontWeight="700"
          fill="#FFFFFF"
        >
          {"</>"}
        </text>
      </g>
      <g transform="translate(468 74)">
        <circle r="24" fill="#FFB020" stroke="#0B0F1B" strokeWidth="4" />
        <text
          y="6"
          textAnchor="middle"
          fontFamily="ui-monospace, Menlo, Consolas, monospace"
          fontSize="18"
          fontWeight="700"
          fill="#0B0F1B"
        >
          {"{ }"}
        </text>
      </g>

      {/* Cursor with name tag */}
      <g transform="translate(318 196)">
        <path
          d="M0 0 L0 28 L8 21 L14 34 L20 31 L14 19 L24 19 Z"
          fill="#FFB020"
          stroke="#0B0F1B"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <rect x="16" y="36" width="76" height="24" rx="12" fill="#FFB020" stroke="#0B0F1B" strokeWidth="3" />
        <text
          x="54"
          y="53"
          textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="13"
          fontWeight="700"
          fill="#0B0F1B"
        >
          Fortune
        </text>
      </g>
    </svg>
  );
}