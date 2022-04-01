import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      <Link to="/">
        <h1>GifMaster</h1>
      </Link>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign In</button>
      )}
      {user ? (
        <Link to="/gifs/favorites">Favorites</Link>
      ) : (
        <p>Please sign in to see Favorites List</p>
      )}
    </header>
  );
};

export default Header;
