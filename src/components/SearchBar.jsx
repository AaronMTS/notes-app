import SearchIcon from "../assets/search-magnifying-glass.svg";

const SearchBar = () => {
  return (
    <label className="flex items-center gap-2 w-full p-1.5 bg-neutral-200 rounded-lg">
      <span className="flex justify-center items-center size-4.5">
        <SearchIcon className="size-6 text-black" />
      </span>
      <input
        type="text"
        name="searchNotes"
        id=""
        placeholder="type to search..."
        className="grow bg-transparent border-none outline-none text-neutral-800"
      />
    </label>
  );
};

export default SearchBar;
