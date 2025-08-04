const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiFetch = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  return response.json();
};
