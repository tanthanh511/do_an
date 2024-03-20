
import { ROUTE_NAME } from "../../helpers/Route";
import { IMenus } from "./header.interface";

export const Menus: IMenus[] = [
  { name: "Home", index: 1, href: ROUTE_NAME.HOME },
  { name: "Place", index: 2, href: ROUTE_NAME.PLACE },
  { name: "Blog", index: 3, href: ROUTE_NAME.BLOG },
  { name: "Contact", index: 4, href: ROUTE_NAME.CONTACT },
  
];
