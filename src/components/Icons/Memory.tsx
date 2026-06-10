export const MemoryIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 20 A12 12 0 1 1 14 30.4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 23 L14 30.4 L21.5 30.4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="20"
        y1="13"
        x2="20"
        y2="20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="20"
        x2="25"
        y2="22"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
