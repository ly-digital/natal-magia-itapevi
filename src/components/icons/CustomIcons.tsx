import { LucideProps } from "lucide-react";
import icBailarina from "@/assets/ic-bailarina.svg";
import icCirco from "@/assets/ic-circo.svg";

export const BalletDancer = ({ size = 24, color = "currentColor", className }: LucideProps) => (
  <img 
    src={icBailarina} 
    width={size} 
    height={size} 
    style={{ color }}
    className={className}
    alt="Dança"
  />
);

export const CircusTent = ({ size = 24, color = "currentColor", className }: LucideProps) => (
  <img 
    src={icCirco} 
    width={size} 
    height={size} 
    style={{ color }}
    className={className}
    alt="Circo"
  />
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
