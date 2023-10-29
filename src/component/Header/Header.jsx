import "./Header.css";

const Header = () => {
  return (
    <div id="container">
      <h1>Ema John</h1>
      <div className="nav-item">
        <a href="/home">Home</a>
        <a href="/Shop">Shop</a>
        <a href="/Login">Login</a>
      </div>
    </div>
  );
};

export default Header;
