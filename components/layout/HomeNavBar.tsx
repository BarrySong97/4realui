import { baseOptions } from "@/app/layout.config";
import { LargeSearchToggle } from "fumadocs-ui/components/layout/search-toggle";
import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";

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
import BasicContainer from "./BaiscContainer";
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

  return (
    <header className="sticky top-0 border-b h-[60px]  mx-auto">
      <BasicContainer className="  flex justify-between items-center h-full">
        <Link
          href={"/"}
          className="inline-flex items-center gap-2.5 font-semibold"
        >
          {baseOptions.nav?.title}
        </Link>
        <ul className="flex flex-row items-center gap-2 px-6 max-sm:hidden">
          {navItems
            .filter((item) => !isSecondary(item))
            .map(
              (item, i) => null
              // <Li key={i} item={item} className="text-sm" />
            )}
        </ul>
        <div className="flex flex-row items-center justify-end gap-2 flex-1">
          <LargeSearchToggle
            className="w-full max-w-[240px] max-lg:hidden"
            hideIfDisabled
          />
          <ThemeToggle className="max-lg:hidden" />
          <Link
            href={baseOptions.githubUrl!}
            target="_blank"
            className="flex flex-col gap-2   transition-colors "
          >
            <div className="w-fit rounded-md  bg-fd-muted p-1 [&_svg]:size-4">
              <svg role="img" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </div>
          </Link>
        </div>
      </BasicContainer>
    </header>
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
