import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function Home() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api("/health/db")
      .then(setStatus)
      .catch((e) => setError(e.message));
  }, []);

  if (error) return <p>Ошибка: {error}</p>;
  return <pre>{JSON.stringify(status)}</pre>;
}
