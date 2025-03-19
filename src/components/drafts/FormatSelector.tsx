import { useSearchParams } from "react-router-dom";

const FormatSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.get("format") || undefined;

  const formatFunction = () => {
    setSearchParams({ format: "" });
  };

  const options = [
    { label: "All", value: undefined },
    { label: "TV Series", value: "TV" },
    { label: "Movie", value: "MOVIE" },
    { label: "Special", value: "SPECIAL" },
    { label: "Original Video Animation", value: "OVA" },
    { label: "Original Net Animation", value: "ONA" },
    { label: "Music", value: "MUSIC" },
  ];

  return (
    <div>
      <select name="Format" defaultValue="All">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormatSelector;
