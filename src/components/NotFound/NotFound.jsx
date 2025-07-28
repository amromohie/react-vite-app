import {Link} from "react-router-dom";

export default function NotFound() {
  return (
      <div className="flex flex-col items-center justify-center  text-center">
        {/* SVG Icon */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-blue-500 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M5.07 19H18.93A2 2 0 0020.87 17L13.97 4.46a2 2 0 00-3.44 0L3.13 17a2 2 0 001.94 2z"
          />
        </svg>

        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
  );
}