interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'full' | 'compact' | 'light' | 'dark';
}

export function Logo({
  className = '',
  showTagline = true,
  variant = 'dark'
}: LogoProps) {
  // Determine if we're showing full or compact version
  const isCompact = variant === 'compact';

  // Determine color scheme based on variant
  const isLight = variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#555555';
  const knyColor = '#C41E3A';
  const taglineColor = isLight ? 'rgba(255,255,255,0.85)' : '#777777';

  // Compact version - just the symbol
  if (isCompact) {
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        aria-label="Fliesen Kny"
      >
        <QuatrefoilSymbol />
      </svg>
    );
  }

  // Full version with text
  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      aria-label="Fliesen Kny Logo"
    >
      {/* Quatrefoil Symbol */}
      <g transform="translate(8, 8)">
        <g transform="scale(0.8)">
          <QuatrefoilSymbol />
        </g>
      </g>

      {/* Company Name */}
      <text
        x="72"
        y="38"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="28"
        fontWeight="600"
        letterSpacing="0.5"
      >
        <tspan fill={textColor}>Fliesen</tspan>
        <tspan fill={knyColor} fontWeight="700"> Kny</tspan>
      </text>

      {/* Tagline */}
      {showTagline && (
        <text
          x="72"
          y="58"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="10"
          fill={taglineColor}
          letterSpacing="0.3"
        >
          Der Geheimtipp für Fliesen &amp; Sanitär im Rhein-Main
        </text>
      )}
    </svg>
  );
}

// Marokkanisches Quatrefoil Symbol (4-Punkt Fliesen-Muster)
function QuatrefoilSymbol() {
  return (
    <g>
      {/* Äußere Form: 4 geschwungene Blütenblätter */}
      {/* Oberes Blütenblatt */}
      <path
        d="M32 4
           C38 4, 44 8, 48 14
           C52 20, 52 28, 48 34
           C44 28, 38 24, 32 24
           C26 24, 20 28, 16 34
           C12 28, 12 20, 16 14
           C20 8, 26 4, 32 4Z"
        fill="#C41E3A"
      />

      {/* Rechtes Blütenblatt */}
      <path
        d="M60 32
           C60 38, 56 44, 50 48
           C44 52, 36 52, 30 48
           C36 44, 40 38, 40 32
           C40 26, 36 20, 30 16
           C36 12, 44 12, 50 16
           C56 20, 60 26, 60 32Z"
        fill="#C41E3A"
      />

      {/* Unteres Blütenblatt */}
      <path
        d="M32 60
           C26 60, 20 56, 16 50
           C12 44, 12 36, 16 30
           C20 36, 26 40, 32 40
           C38 40, 44 36, 48 30
           C52 36, 52 44, 48 50
           C44 56, 38 60, 32 60Z"
        fill="#C41E3A"
      />

      {/* Linkes Blütenblatt */}
      <path
        d="M4 32
           C4 26, 8 20, 14 16
           C20 12, 28 12, 34 16
           C28 20, 24 26, 24 32
           C24 38, 28 44, 34 48
           C28 52, 20 52, 14 48
           C8 44, 4 38, 4 32Z"
        fill="#C41E3A"
      />

      {/* Innere weiße Raute */}
      <path
        d="M32 18 L46 32 L32 46 L18 32 Z"
        fill="#FFFFFF"
      />

      {/* V-förmiges Element in der Raute */}
      <path
        d="M26 26 L32 38 L38 26"
        fill="none"
        stroke="#C41E3A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

// Export für Icon-Only Verwendung (Favicon, Mobile Nav, etc.)
export function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-label="Fliesen Kny"
    >
      <QuatrefoilSymbol />
    </svg>
  );
}

// Named export für flexible Imports
export default Logo;
