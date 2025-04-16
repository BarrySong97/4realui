import { baseOptions } from "@/app/layout.config";
import { LanguageToggle } from "fumadocs-ui/components/layout/language-toggle";
import {
  LargeSearchToggle,
  SearchToggle,
} from "fumadocs-ui/components/layout/search-toggle";
import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";
import {
  Menu,
  MenuContent,
  MenuLinkItem,
  MenuTrigger,
} from "fumadocs-ui/layouts/home/menu";
import {
  Navbar,
  NavbarLink,
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import { getLinks, LinkItemType } from "fumadocs-ui/layouts/shared";
import Link from "next/link";
import React, { FC, Fragment, useMemo } from "react";
export interface HomeNavBarProps {}
function isSecondary(item: LinkItemType): boolean {
  return (
    ("secondary" in item && item.secondary === true) || item.type === "icon"
  );
}
const HomeNavBar: FC<HomeNavBarProps> = () => {
  const finalLinks = useMemo(
    () => getLinks(baseOptions.links, baseOptions.githubUrl),
    [baseOptions.links, baseOptions.githubUrl]
  );

  const navItems = finalLinks.filter((item) =>
    ["nav", "all"].includes(item.on ?? "all")
  );
  const menuItems = finalLinks.filter((item) =>
    ["menu", "all"].includes(item.on ?? "all")
  );

  return (
    <Navbar>
      <Link
        href={"/"}
        className="inline-flex items-center gap-2.5 font-semibold"
      >
        {baseOptions.nav?.title}
      </Link>
      {baseOptions.nav?.children}
      <ul className="flex flex-row items-center gap-2 px-6 max-sm:hidden">
        {navItems
          .filter((item) => !isSecondary(item))
          .map((item, i) => (
            <NavbarLinkItem key={i} item={item} className="text-sm" />
          ))}
      </ul>
      <div className="flex flex-row items-center justify-end gap-1.5 flex-1">
        <LargeSearchToggle
          className="w-full max-w-[240px] max-lg:hidden"
          hideIfDisabled
        />
        <ThemeToggle className="max-lg:hidden" />
      </div>
      <ul className="flex flex-row items-center">
        {navItems.filter(isSecondary).map((item, i) => (
          <NavbarLinkItem
            key={i}
            item={item}
            className="-me-1.5 max-lg:hidden"
          />
        ))}
      </ul>
    </Navbar>
  );
};
function NavbarLinkItem({
  item,
  ...props
}: {
  item: LinkItemType;
  className?: string;
}) {
  if (item.type === "custom") return <div {...props}>{item.children}</div>;

  if (item.type === "menu") {
    const children = item.items.map((child, j) => {
      if (child.type === "custom")
        return <Fragment key={j}>{child.children}</Fragment>;

      const {
        banner = child.icon ? (
          <div className="w-fit rounded-md border bg-fd-muted p-1 [&_svg]:size-4">
            {child.icon}
          </div>
        ) : null,
        ...rest
      } = child.menu ?? {};

      return (
        <NavbarMenuLink key={j} href={child.url} {...rest}>
          {rest.children ?? (
            <>
              {banner}
              <p className="-mb-1 text-sm font-medium">{child.text}</p>
              {child.description ? (
                <p className="text-[13px] text-fd-muted-foreground">
                  {child.description}
                </p>
              ) : null}
            </>
          )}
        </NavbarMenuLink>
      );
    });

    return (
      <NavbarMenu>
        <NavbarMenuTrigger {...props}>
          {item.url ? <Link href={item.url}>{item.text}</Link> : item.text}
        </NavbarMenuTrigger>
        <NavbarMenuContent>{children}</NavbarMenuContent>
      </NavbarMenu>
    );
  }

  return (
    <NavbarLink
      {...props}
      item={item}
      variant={item.type}
      aria-label={item.type === "icon" ? item.label : undefined}
    >
      {item.type === "icon" ? item.icon : item.text}
    </NavbarLink>
  );
}

export default HomeNavBar;
