import React, { FC } from "react";
import BasicContainer from "./BaiscContainer";
export interface GridLineProps {}
const GridLine: FC<GridLineProps> = () => {
  return (
    <BasicContainer className="absolute grid grid-cols-12 h-full w-full z-0">
      <div className="col-span-1 w-[1px] bg-[var(--color-fd-border)]"></div>
      <div className="col-start-5 col-span-1  w-[1px] bg-[var(--color-fd-border)]"></div>
      <div className="col-start-9 col-span-1  w-[1px] bg-[var(--color-fd-border)]"></div>
      <div className="col-start-13   w-[1px] bg-[var(--color-fd-border)]"></div>
    </BasicContainer>
  );
};

export default GridLine;
