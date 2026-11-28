import { useEffect, useRef, useState } from "react";
import { SeriesNode } from "@/lib/hashnode";

interface Props {
  series: SeriesNode[];
  selectedSeries: SeriesNode | null;
  onSelect: (item: SeriesNode | null) => void;
}

const TopicDropdown = ({ series, selectedSeries, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: SeriesNode | null) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef}>
      <label className="text-gray-700 mb-2 block">Topics</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between border border-gray-400 rounded-[6px] bg-white px-4 py-3 text-left text-base transition-colors focus:outline-none focus:border-gray-600"
        >
          <span className={selectedSeries ? "text-black" : "text-gray-400"}>
            {selectedSeries ? selectedSeries.name : "Select Topic"}
          </span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-400 rounded-[6px] shadow-lg max-h-60 overflow-y-auto">
            <li>
              <button
                type="button"
                onClick={() => handleSelect(null)}
                className={`w-full text-left px-4 py-2.5 text-base transition-colors hover:bg-gray-50 ${
                  !selectedSeries ? "text-[#7147E8] font-medium" : "text-gray-700"
                }`}
              >
                All
              </button>
            </li>
            {series?.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleSelect(item)}
                  className={`w-full text-left px-4 py-2.5 text-base transition-colors hover:bg-gray-50 ${
                    selectedSeries?.id === item.id ? "text-[#7147E8] font-medium" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopicDropdown;
