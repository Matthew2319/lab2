function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <button className="btn">Create account</button>
        <button className="btn">Log in</button>
      </nav>

      <nav className="navbar2">
        <button className="btn2">Page</button>
        <button className="btn2">Discussion</button>
      </nav>

      <nav className="navbar3">
        <button className="btn3">Read</button>
        <button className="btn3">View source</button>
        <button className="btn3">View History</button>
        <input
          className="search"
          type="text"
          placeholder="Search Stardew Valley Wiki"
        ></input>
      </nav>
    </div>
  );
}

export default Header;
