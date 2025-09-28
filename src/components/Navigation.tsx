import { Link, useLocation } from "react-router-dom";
import { Calculator, Info } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass-effect border border-nav-border rounded-2xl p-4 mb-8">
      <div className="flex items-center justify-center space-x-8">
        <Link
          to="/"
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
            isActive("/")
              ? "bg-button-primary text-button-primary-foreground shadow-lg"
              : "text-foreground hover:bg-button-secondary hover:text-button-secondary-foreground"
          }`}
        >
          <Calculator size={20} />
          <span className="font-semibold">Calculator</span>
        </Link>
        
        <Link
          to="/about"
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
            isActive("/about")
              ? "bg-button-primary text-button-primary-foreground shadow-lg"
              : "text-foreground hover:bg-button-secondary hover:text-button-secondary-foreground"
          }`}
        >
          <Info size={20} />
          <span className="font-semibold">About</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;