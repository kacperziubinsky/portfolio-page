function Header() {
    const headStyle = {
      display: "flex",
      padding: "25px 10vw",
      width: "100vw",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#fff",
      boxShadow: "0 10px 100px rgba(0,0,0,0.1)",
      zIndex: "9999",
      color: "black"
    };
  
    const menuNav = {
      display: "flex",
    };
  
    const logoImg = {
      height: "70px",
    };
  
    const listStyle = {
      listStyle: "none",
      display: "flex",
      gap: "20px", 
      padding: 0,
      margin: 0,
    };
  
    return (
      <header style={headStyle}>
        <img
          src="https://ziubinski.pl/mail/ziubinski_logo.png"
          alt="Ziubiński"
          style={logoImg}
        />
        <nav>
          <ul style={listStyle} className="menu">
            <li><a href="#about">O mnie</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#portfolio">Kontakt</a></li>
          </ul>
        </nav>
        <h1 className="pageName">Kacper Ziubiński</h1>
      </header>
    );
  }
  
  export default Header;
  