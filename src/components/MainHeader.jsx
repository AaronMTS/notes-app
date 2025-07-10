import { Link } from "react-router-dom";

const MainHeader = ({ children }) => {
  return (
    <header className="flex justify-between items-center">
      <Link to="/" className="text-2xl font-semibold leading-[normal] dark:text-gray-100">Notes</Link>
      {children}
    </header>
  );
};

export default MainHeader;
