import { useId } from 'react'

// NOX DIGITAL logo, rebuilt as a scalable SVG in the brush-stroke style of the poster.
export default function Logo({ sub = true, className = '', title = 'NOX Digital' }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg
      className={`logo ${className}`}
      viewBox={sub ? '0 0 420 190' : '0 0 420 140'}
      role="img"
      aria-label={title}
    >
      <defs>
        <filter id={`rough-${id}`} x="-5%" y="-10%" width="110%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045 0.09" numOctaves="3" seed="4" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="4.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter={`url(#rough-${id})`} fill="currentColor">
        <text
          x="210"
          y="122"
          textAnchor="middle"
          fontFamily="'Bricolage Grotesque Variable','Bricolage Grotesque',sans-serif"
          fontWeight="800"
          fontSize="150"
          letterSpacing="-6"
          textLength="400"
          lengthAdjust="spacingAndGlyphs"
        >
          NOX
        </text>
        {/* brush flicks, like the poster's N and X */}
        <path d="M18 44 L74 26 L70 40 L26 58 Z" />
        <path d="M352 120 L412 6 L400 8 L338 118 Z" />
        <path d="M30 128 L64 112 L66 120 L36 136 Z" opacity=".9" />
      </g>
      {sub && (
        <text
          x="210"
        y="176"
          textAnchor="middle"
          fontFamily="'Bricolage Grotesque Variable','Bricolage Grotesque',sans-serif"
          fontWeight="600"
          fontSize="30"
          letterSpacing="14"
          fill="currentColor"
        >
          DIGITAL
        </text>
      )}
    </svg>
  )
}

export function Wordmark({ className = '' }) {
  return (
    <span className={`wordmark ${className}`} aria-label="NOX Digital">
      <span className="wordmark-n">NOX</span>
      <span className="wordmark-d">DIGITAL</span>
    </span>
  )
}
