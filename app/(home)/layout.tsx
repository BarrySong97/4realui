import type { ReactNode } from "react";
import HomeNavBar from "@/components/layout/HomeNavBar";
import HomeLayout from "@/components/layout/HomeLayout";
import BasicContainer from "@/components/layout/BaiscContainer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout>
      <HomeNavBar />
      <BasicContainer>{children}</BasicContainer>
    </HomeLayout>
  );
}
