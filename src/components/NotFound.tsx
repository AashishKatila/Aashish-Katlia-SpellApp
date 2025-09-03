import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="flex flex-col justify-center items-center h-64 text-center">
    <h1 className="h1 text-6xl mb-4">404</h1>
    <p className="body mb-4">
      Oops! The page you are looking for does not exist.
    </p>
    <Link to="/" className="btn">
      Go Home
    </Link>
  </div>
);
