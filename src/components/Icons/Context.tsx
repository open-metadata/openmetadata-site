export const ContextIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="20" y1="10" x2="9" y2="30" stroke={color} strokeWidth="2" />
      <line x1="20" y1="10" x2="31" y2="30" stroke={color} strokeWidth="2" />
      <line x1="9" y1="30" x2="31" y2="30" stroke={color} strokeWidth="2" />
      <circle cx="20" cy="10" r="4.5" fill={color} />
      <circle cx="9" cy="30" r="4.5" fill={color} />
      <circle cx="31" cy="30" r="4.5" fill={color} />
    </svg>
  );
};
