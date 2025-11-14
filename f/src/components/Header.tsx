import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import "../styles/Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="navigation-menu-list">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link className="link-color" to="/">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link className="link-color" to="/chat">
                Chat
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link className="link-color" to="/sign-up">
                Sing-Up
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default Header;
