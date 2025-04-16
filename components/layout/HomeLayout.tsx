import { NavProvider } from "fumadocs-ui/provider";
import React, { FC, HTMLAttributes, ReactNode } from "react";
export interface HomeLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const HomeLayout: FC<HomeLayoutProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      <NavProvider>{children}</NavProvider>
    </div>
  );
};

export default HomeLayout;
