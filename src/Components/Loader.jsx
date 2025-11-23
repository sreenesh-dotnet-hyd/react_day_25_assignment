// Loader.jsx
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(255, 255, 255, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999
    }}>
      <ClipLoader
        loading={true}
        size={70}
        aria-label="Loading Spinner"
      />
    </div>
  );
}
