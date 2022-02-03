import { ActivityArea } from "../components/menus/ActivityArea";
import { CharacterArea } from "../components/menus/CharacterMenu";

// menus
interface menuSet {
  [key: string]: JSX.Element;
  home: JSX.Element;
  woodcutting: JSX.Element;
  fishing: JSX.Element;
  mining: JSX.Element;
}

export const menus: menuSet = {
  home: <CharacterArea />,
  woodcutting: <ActivityArea />,
  fishing: <ActivityArea />,
  mining: <ActivityArea />,
};

// interface myObj {
//   name: string,
//   age: number,
// }

// const obj: myObj = {
//   name: "bob",
//   age: 12,
// }

// const propIWant = "name";

// obj[propIWant];
