import { LucideProps } from "lucide-react";

export const BalletDancer = ({ size = 24, color = "currentColor", ...props }: LucideProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="4" r="2" fill={color} stroke="none" />
    <path d="M12 6c0 0 -3 2 -4 4c-1 2 -1 4 0 6l2 2" fill="none" />
    <path d="M12 6c0 0 3 2 4 4c1 2 1 4 0 6l-2 2" fill="none" />
    <path d="M8 16c0 0 -2 2 -3 4" fill="none" />
    <path d="M16 16c0 0 2 2 3 4" fill="none" />
    <path d="M10 11l-4 -3" fill="none" />
    <path d="M14 11l4 -3" fill="none" />
  </svg>
);

export const CircusTent = ({ size = 24, color = "currentColor", ...props }: LucideProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3l-8 18h16l-8 -18z" fill="none" />
    <path d="M4 21h16" fill="none" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="8" y1="21" x2="10" y2="15" />
    <line x1="16" y1="21" x2="14" y2="15" />
    <path d="M12 3l-3 6" fill="none" />
    <path d="M12 3l3 6" fill="none" />
    <circle cx="12" cy="5" r="0.5" fill={color} stroke="none" />
    <path d="M11 5h2l0.5 -1l-0.5 -0.5l-1 0l-0.5 0.5z" fill={color} stroke="none" />
  </svg>
);

export const SantaHat = ({ size = 24, color = "currentColor", ...props }: LucideProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 18h12c0.5 0 1 -0.5 1 -1c0 -0.5 -0.5 -1 -1 -1H6c-0.5 0 -1 0.5 -1 1c0 0.5 0.5 1 1 1z" fill="none" />
    <path d="M7 16C7 16 8 8 12 5c4 3 5 11 5 11" fill="none" />
    <circle cx="17" cy="5" r="2" fill={color} stroke="none" />
    <path d="M12 18v-2" fill="none" />
  </svg>
);
