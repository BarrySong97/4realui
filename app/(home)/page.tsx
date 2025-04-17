import GridLine from "@/components/layout/GridLine";
import { Banner } from "fumadocs-ui/components/banner";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";

export default function HomePage() {
  return (
    <div className="max-w-[92rem] mx-auto">
      <GridLine />
      <div className="flex h-screen  items-center z-10 ">
        <div className="flex-1">
          <div className="relative z-10">
            <Tabs items={["pnpm", "npm", "bun", "yarn"]}>
              <Tab value="pnpm">
                <DynamicCodeBlock
                  lang="bash"
                  code="pnpm add motion clsx tailwind-merge"
                />
              </Tab>
              <Tab value="npm">
                <DynamicCodeBlock
                  lang="bash"
                  code="npm install motion clsx tailwind-merge"
                />
              </Tab>
              <Tab value="bun">
                <DynamicCodeBlock
                  lang="bash"
                  code="bun add motion clsx tailwind-merge"
                />
              </Tab>
              <Tab value="yarn">
                <DynamicCodeBlock
                  lang="bash"
                  code="yarn add motion clsx tailwind-merge"
                />
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="flex-2"></div>
      </div>
    </div>
  );
}
