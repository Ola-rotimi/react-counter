import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home--container">
      <h1>Welcome</h1>
      <p><Link to="/counter">Go to Counter</Link></p>
    </div>
  );
}
