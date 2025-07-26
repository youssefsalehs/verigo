import { useNavigate } from "react-router-dom";

function PageError() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      <h1 className="text-4xl font-bold mb-4 text-yellow-500">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-lg">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded"
      >
        Go Home
      </button>
    </div>
  );
}

export default PageError;
