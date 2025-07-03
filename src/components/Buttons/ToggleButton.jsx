const ToggleButton = () => {
  return (
    <label className="relative inline-block h-6 w-12">
      <input
        type="checkbox"
        name="toggleColorScheme"
        className="peer invisible size-0"
      />
      <span className="peer-checked:bg-primary peer-checked:*:translate-x-6 absolute top-0 left-0 h-full w-full bg-[#bbb] rounded-full cursor-pointer transition-colors duration-300">
        <span className="absolute top-1 left-1 size-4 rounded-[50%] bg-white transition-transform duration-300"></span>
      </span>
    </label>
  );
};

export default ToggleButton;
