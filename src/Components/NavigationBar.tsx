import "../App.css";
import { Link } from "react-router-dom";
export default function NavigationBar() {
  return (
    <>
      <header id="Nav">
        <h1>Albert Einstein</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Biography</Link>
            </li>

            <li>
              <Link to="/Achievements">Achievements</Link>
            </li>
            <li>
              <Link to="/Quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
