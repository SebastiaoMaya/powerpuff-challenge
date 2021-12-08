import React from "react";
import { TopBackground } from "./TopBackground";

interface Props {
  children: JSX.Element;
}

export const TopBackgroundWrapper: React.FC<Props> = ({ children }) => (
  <>
    <TopBackground />
    {children}
  </>
);
