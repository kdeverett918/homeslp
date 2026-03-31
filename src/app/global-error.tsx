"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", textAlign: "center" }}>
        <h2>Something went wrong</h2>
        <p style={{ color: "#666", marginTop: "0.5rem" }}>
          {"An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
