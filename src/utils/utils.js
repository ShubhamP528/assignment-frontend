export const NODE_API_ENDPONINT =
  process.env.NODE_ENV === "production"
    ? "https://assignment-backend-gujr.onrender.com/api"
    : "http://localhost:9000/api";
