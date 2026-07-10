const base = {
  width: 32,
  height: 32,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Icon({ name }) {
  switch (name) {
    case 'earthwork':
      return (
        <svg {...base}>
          <path d="M3 17l4-4 3 2 4-5 3 3 4-4" />
          <path d="M3 21h18" />
          <circle cx="7" cy="20" r="1" />
          <circle cx="17" cy="20" r="1" />
        </svg>
      )
    case 'roadway':
      return (
        <svg {...base}>
          <path d="M5 21L9 3M19 21L15 3" />
          <path d="M12 5v2M12 11v2M12 17v2" />
        </svg>
      )
    case 'bridge':
      return (
        <svg {...base}>
          <path d="M3 9h18" />
          <path d="M3 9v9M21 9v9" />
          <path d="M3 14c4 0 5-3 9-3s5 3 9 3" />
          <path d="M9 13v5M15 13v5" />
        </svg>
      )
    case 'utilities':
      return (
        <svg {...base}>
          <path d="M4 8h10a3 3 0 013 3v0a3 3 0 01-3 3H7a3 3 0 00-3 3v0" />
          <circle cx="4" cy="8" r="1.4" />
          <path d="M18 14l2 3h-4z" />
        </svg>
      )
    case 'demolition':
      return (
        <svg {...base}>
          <circle cx="7" cy="16" r="3" />
          <path d="M9 14l7-7 4 4" />
          <path d="M16 3l4 4" />
          <path d="M3 21h18" />
        </svg>
      )
    case 'stormwater':
      return (
        <svg {...base}>
          <path d="M12 3c3 4 5 6.5 5 9a5 5 0 01-10 0c0-2.5 2-5 5-9z" />
          <path d="M3 21h18" />
        </svg>
      )
    default:
      return null
  }
}
