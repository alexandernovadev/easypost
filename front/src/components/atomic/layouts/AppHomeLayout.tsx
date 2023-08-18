import { Nabvar } from "../molecules/navbar/Nabvar";

interface Props {
  children: JSX.Element | JSX.Element[]; // Typing children to be a single element or an array of elements
}

export const AppHomeLayout= ({ children }:Props) => {
  return (
    <div>
      <Nabvar/>
      {children}
    </div>
  );
}
