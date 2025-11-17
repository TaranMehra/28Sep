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
import { useName } from "@/context/createContext";
import { useEffect } from "react";
function Header() {
  const { logedIn } = useName();

  useEffect(() => {}, [logedIn]);

  console.log("logedIn in header :", logedIn);
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="navigation-menu-list">
          {logedIn ? (
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link className="link-color" to="/">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : (
            ""
          )}
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
