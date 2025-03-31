import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaPrint, 
  FaChevronDown 
} from "react-icons/fa";
import { MdDashboard, MdEditDocument, MdAccountBalance } from "react-icons/md";
import { FaUserGroup} from "react-icons/fa6";
import { IoReceiptSharp } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";




import { useSidebar } from "../context/SidebarContext";


const navItems = [
  {
    icon: MdDashboard, 
    name: "Dashboard", 
    path: "/"
  },
  {
    icon: FaUserGroup, 
    name: "Customers", 
    path: "/customers",
  },
  {
    icon: IoReceiptSharp, 
    name: "Invoice", 
    path: "/invoice",
  },
  {
    name: "Add a Staff",
    icon: FaUserTie, 
    path:"/staff2",
  },
  {
    name: "KYC",
    icon: MdEditDocument, 
    path:"/kyc"
  },
  {
    name:"Accounts",
    icon:MdAccountBalance,
    path:"/accounts"
  },
  {
    name:"Print",
    icon:FaPrint,
    path:"/print",
  }
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  
  const [openSubmenu, setOpenSubmenu] = useState(null);
  
  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    let submenuMatched = false;
    navItems.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu(index);
            submenuMatched = true;
          }
        });
      }
    });
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [location, isActive]);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu((prev) => (prev === index ? null : index));
  };

  return (
    <aside
    className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white 
    dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen 
    transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
    ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"} 
    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    onMouseEnter={() => !isExpanded && setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="py-8 flex justify-center">
      <Link to="/">
        <img
          className="dark:hidden"
          src={isExpanded || isHovered || isMobileOpen ? "/src/assets/images/Logo.png" : "/images/logo/logo-icon.svg"}
          alt="Logo"
          width={isExpanded || isHovered || isMobileOpen ? 150 : 32}
          height={isExpanded || isHovered || isMobileOpen ? 40 : 32}
        />
      </Link>
    </div>
    <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
      <nav className="mb-6">
        <ul className="flex flex-col gap-4">
          {navItems.map((nav, index) => (
            <li key={nav.name}>
              {nav.subItems ? (
                <>
                  <button
                    onClick={() => setOpenSubmenu(prev => (prev === index ? null : index))}
                    className={`menu-item group ${openSubmenu === index ? "menu-item-active" : "menu-item-inactive"} cursor-pointer`}
                  >
                    <span className="menu-item-icon-size"><nav.icon /></span>
                    {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                    {(isExpanded || isHovered || isMobileOpen) && <FaChevronDown className={`ml-auto w-5 h-5 transition-transform duration-200 ${openSubmenu === index ? "rotate-180 text-brand-500" : ""}`} />}
                  </button>
                  {openSubmenu === index && (
                    <ul className="submenu">
                      {nav.subItems.map(subItem => (
                        <li key={subItem.name}>
                          <Link to={subItem.path} className={`menu-dropdown-item ${
                            isActive(subItem.path)?"menu-dropdown-item-active":"menu-dropdown-item-inactive"
                          }`}>{subItem.name}
                          
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={nav.path} className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"}`}>
                  <span className="menu-item-icon-size"><nav.icon /></span>
                  {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
    </div>
  </aside>
  );
};

export default AppSidebar;
