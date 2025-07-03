import searchIcon from "../assets/search-magnifying-glass.svg";

const SearchBar = () => {
  return (
    <label className="flex items-center gap-[3px] w-full p-1.5 bg-neutral-200 rounded-lg">
      <span className="flex justify-center items-center size-4.5">
        <img className="size-full m-auto" src={searchIcon} alt="search" />
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
