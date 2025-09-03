import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow">
      <div className="flex gap-4 p-4">
        <Link
          to="/"
          className={`px-3 py-2 font-semibold ${
            location.pathname === "/" ? "underline underline-offset-4 " : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/favourites"
          className={`px-3 py-2 font-semibold ${
            location.pathname === "/favourites"
              ? "underline underline-offset-4 "
              : ""
          }`}
        >
          Favourites
        </Link>
      </div>
    </header>
  );
};
