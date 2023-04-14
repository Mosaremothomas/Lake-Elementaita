import './navbar.css'

export default function Navbar() {
  return (
    <header>
        <nav>
            <div className="logo">
                <a href="#hero">Lake Elemenentaita Manor</a>
            </div>
            <ul className="nav_links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#our_story">Out story</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}
