import React, { FC } from "react";
import BasicContainer from "./BaiscContainer";
export interface GridLineProps {
  showSecondLine?: boolean;
  showThirdLine?: boolean;
}
const GridLine: FC<GridLineProps> = ({
  showSecondLine = true,
  showThirdLine = true,
}) => {
  return (
    <BasicContainer className="absolute grid grid-cols-12 h-full w-full z-0">
      <div className="col-span-1 w-[1px] bg-[var(--color-fd-border)]"></div>
      {showSecondLine && (
        <div className="col-start-5 col-span-1  w-[1px] bg-[var(--color-fd-border)]"></div>
      )}
      {showThirdLine && (
        <div className="col-start-9 col-span-1  w-[1px] bg-[var(--color-fd-border)]"></div>
      )}
      <div className="col-start-13   w-[1px] bg-[var(--color-fd-border)]"></div>
    </BasicContainer>
  );
};

export default GridLine;
