import { ForwardRefExoticComponent, RefAttributes } from "react";
import { BookText, LucideProps, Search, Store, Users } from "lucide-react";

interface BareItem {
  title: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

interface NavbarItem extends BareItem {
  items?: NavbarItem[];
}

interface MainNavbarConfig {
  items: NavbarItem[];
}

export const mainNavbarConfig: MainNavbarConfig = {
  items: [
    {
      title: "Explore",
      href: "/",
      icon: Search,
    },
    {
      title: "Marketplace",
      href: "/marketplace",
      icon: Store,
    },
    {
      title: "Community",
      href: "/community",
      icon: Users,
    },
    {
      title: "Docs",
      href: "/docs",
      icon: BookText,
    },
  ],
};
