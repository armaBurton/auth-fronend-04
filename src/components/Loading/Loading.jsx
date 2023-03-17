import "./Loading.css";

export default function Loading() {
  return (
    <div className="lds_ellipsis" aria-label="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
