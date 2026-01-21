import { useEffect, useState } from "react";

const OPENMETADATA_API_URL =
  "https://api.github.com/repos/open-metadata/OpenMetadata";

const CACHE_KEY = "openmetadata_github_stars";
const CACHE_TTL = 1000 * 60 * 30;

let memoryCache: {
  stars: number | null;
  fetchedAt: number;
} = {
  stars: null,
  fetchedAt: 0,
};

const gitHubLogo = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#000000"
      fillRule="evenodd"
      d="m60,12c0-4.42-3.58-8-8-8H12c-4.42,0-8,3.58-8,8v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m26.73,47.67c0,1.1-.01,2.3-.01,3.4,0,.26-.13.51-.34.67-.21.16-.49.2-.74.13-8.4-2.7-14.49-10.58-14.49-19.87,0-11.51,9.34-20.85,20.85-20.85s20.85,9.34,20.85,20.85c0,9.28-6.08,17.15-14.46,19.85-.25.08-.53.03-.74-.13-.21-.16-.34-.4-.34-.67-.02-2.45-.03-5.34-.03-6.65s-1.28-2.39-1.28-2.39c0,0,9.45-1.16,9.45-9.34,0-5.19-2.06-6.94-2.06-6.94.44-1.86.38-3.63-.1-5.31-.07-.24-.31-.4-.56-.38-2.01.18-3.85.91-5.52,2.24,0,0-2.95-.81-5.2-.81h0c-2.25,0-5.2.81-5.2.81-1.67-1.32-3.52-2.06-5.52-2.24-.25-.02-.49.14-.56.38-.48,1.68-.54,3.45-.11,5.31,0,0-2.05,1.75-2.05,6.94,0,8.18,9.45,9.34,9.45,9.34,0,0-1.28,1.08-1.28,2.39v.3c-.72.26-1.7.5-2.8.43-2.99-.2-3.39-3.42-4.62-3.94-.9-.38-1.78-.43-2.45-.37-.2.02-.36.16-.41.35-.05.19.02.39.18.51.81.55,1.89,1.33,2.19,1.9.81,1.52,2.06,3.93,3.67,4.19,1.96.32,3.36.13,4.25-.12h0Z"
    />
  </svg>
);

export const GitHubLogo = () => {
  const [stars, setStars] = useState(0);

  const fetchStartsCount = async () => {
    const now = Date.now();

    // In-memory cache
    if (memoryCache.stars !== null && now - memoryCache.fetchedAt < CACHE_TTL) {
      setStars(memoryCache.stars);
      return;
    }

    // localStorage cache
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (now - parsed.fetchedAt < CACHE_TTL) {
          memoryCache = parsed;
          setStars(parsed.stars);
          return;
        }
      }
    } catch {}

    // GitHub API fetch
    try {
      const response = await fetch(OPENMETADATA_API_URL);
      const data = await response.json();

      const starsCount = data.stargazers_count;

      const newCache = {
        stars: starsCount,
        fetchedAt: now,
      };

      memoryCache = newCache;
      localStorage.setItem(CACHE_KEY, JSON.stringify(newCache));

      setStars(starsCount);
    } catch (error) {
      console.error("GitHub stars fetch failed:", error);

      // stale cache fallback
      if (memoryCache.stars !== null) {
        setStars(memoryCache.stars);
        return;
      }

      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          setStars(parsed.stars);
          return;
        }
      } catch {}

      // absolute fallback
      setStars(0);
    }
  };

  const formatStars = (stars: number) => {
    if (stars >= 1000) {
      return `${(stars / 1000).toFixed(1)}K`;
    }
    return stars;
  };

  useEffect(() => {
    fetchStartsCount();
  }, []);

  return (
    <div className="flex items-center gap-[2px] bg-black rounded-md px-1 py-1">
      <div>{gitHubLogo}</div>
      <div className="text-[10px] font-semibold text-white mr-[4px]">
        OPENMETADATA
      </div>
      <div className="text-[10px] font-semibold text-black bg-white rounded-md px-1 pt-[2px] leading-6">
        {formatStars(stars)}
      </div>
    </div>
  );
};
