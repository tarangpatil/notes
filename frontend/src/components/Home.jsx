import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      Hi!
      <Link to={"/login"}>Login</Link>
    </div>
  );
}