import "./sidebar.css";
export default function Sidebar() {
 


  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.Cn9iyO9ILqIWx6eRK2n2egHaHa&pid=Api&P=0&h=180"
          alt=""
        />
        <p>
        "Traveling is the only thing you can buy that makes you richer."
        "Adventure awaits those who seek it beyond their comfort zone."
        "Travel far, travel wide, travel deep within yourself and discover the world anew.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}