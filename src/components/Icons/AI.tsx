export const AIIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.5 7.5L19 9L13.5 10.5L12 16L10.5 10.5L5 9L10.5 7.5L12 2Z"
        fill={color}
      />
      <path
        d="M19 14L19.75 16.25L22 17L19.75 17.75L19 20L18.25 17.75L16 17L18.25 16.25L19 14Z"
        fill={color}
      />
      <path
        d="M5 15L5.6 16.8L7.4 17.4L5.6 18L5 19.8L4.4 18L2.6 17.4L4.4 16.8L5 15Z"
        fill={color}
      />
    </svg>
  );
};
