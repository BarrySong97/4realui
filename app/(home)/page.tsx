import GridLine from "@/components/layout/GridLine";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import SlotMachineText2 from "@/components/common/SlotMachineText2";

export default function HomePage() {
  return (
    <div className="max-w-[92rem] mx-auto">
      <GridLine showSecondLine={false} showThirdLine={false} />
      <div className="flex h-screen  items-center z-10  mx-10 ">
        <div className="flex-1">
          <div className="relative z-10">
            <div className="text-5xl font-bold mb-10">
              <SlotMachineText2 text="Made with" className="mb-2 block" />
              <SlotMachineText2 text="React, Tailwind and Motion" />
            </div>
            <Tabs
              className="max-w-[30rem]"
              items={["pnpm", "npm", "bun", "yarn"]}
            >
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
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
