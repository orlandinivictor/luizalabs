import { NavigateFunction } from "react-router-dom";

export interface IComponentProps {
  navigate: NavigateFunction;
  pathname?: string;
}
