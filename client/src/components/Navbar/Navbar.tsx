import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <h1>{title}</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
