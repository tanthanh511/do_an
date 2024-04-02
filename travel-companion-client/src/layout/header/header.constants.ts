
import { ROUTE_NAME } from "../../helpers/Route";
import { IMenus } from "./header.interface";

export const Menus: IMenus[] = [
  { name: "home", index: 1, href: ROUTE_NAME.HOME },
  { name: "place", index: 2, href: ROUTE_NAME.PLACE },
  { name: "blog", index: 3, href: ROUTE_NAME.BLOG },
  { name: "contact", index: 4, href: ROUTE_NAME.CONTACT }, 
];
