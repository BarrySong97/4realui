import type { ReactNode } from "react";
import HomeNavBar from "@/components/layout/HomeNavBar";
import HomeLayout from "@/components/layout/HomeLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout>
      <HomeNavBar />
      {children}
    </HomeLayout>
  );
}
