import { CharacterArea } from "../components/menus/CharacterMenu";
import { FishingMenu } from "../components/menus/FishingMenu";
import { MiningMenu } from "../components/menus/MiningMenu";
import { WoodcuttingMenu } from "../components/menus/WoodcuttingMenu";

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
  woodcutting: <WoodcuttingMenu />,
  fishing: <FishingMenu />,
  mining: <MiningMenu />,
};
