import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes } from "react";
export interface BasicContainerProps extends HTMLAttributes<HTMLDivElement> {}
const BasicContainer: FC<BasicContainerProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={cn("max-w-[92rem] mx-auto", props.className)}>
      {children}
    </div>
  );
};

export default BasicContainer;
