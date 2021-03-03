import ShiningFates from "../Assets/ShiningFates.PNG";
import VividVoltage from "../Assets/VividVoltage.png";
import ChampionsPath from "../Assets/ChampionsPath.png";
import DarknessAblaze from "../Assets/DarknessAblaze.png";
import RebelClash from "../Assets/RebelClash.png";
import SwordShield from "../Assets/Sword&Shield.png";
import CosmicEclipse from "../Assets/CosmicEclipse.png";
import HiddenFates from "../Assets/HiddenFates.png";
import UnifiedMinds from "../Assets/UnifiedMinds.png";
import UnbrokenBonds from "../Assets/UnbrokenBonds.png";
import LostThunder from "../Assets/LostThunder.png";
import TeamUp from "../Assets/TeamUp.png";
import DragonMajesty from "../Assets/DragonMajesty.png";
import DetectivePikachu from "../Assets/DetectivePikachu.png";
import CelestialStorm from "../Assets/CelestialStorm.png";
import ForbiddenLight from "../Assets/ForbiddenLight.png";
import UltraPrism from "../Assets/UltraPrism.png";
import CrimsonInvasion from "../Assets/CrimsonInvasion.png";
import ShiningLegends from "../Assets/ShiningLegends.PNG";
import BurningShadow from "../Assets/BurningShadow.png";
import GuardiansRising from "../Assets/GuardiansRising.png";
import SunMoon from "../Assets/Sun&Moon.png";
import Evolutions from "../Assets/Evolutions.png";
import Generations from "../Assets/Generations.png";
import AncientOrigins from "../Assets/AncientOrigins.png";
import LegendaryTreasures from "../Assets/LegendaryTreasures.png";
import BoundariesCrossed from "../Assets/BoundariesCrossed.png";
import RoaringSkies from "../Assets/RoaringSkies.png";

// allSets[0].setTitle == "Sword & Shield"
// allSets[0].SwordShield[0].title == "Shining Fates"

// allsets.map((set, index) => {
//      return <h1></h1>
// })

const allSets = [
  {
    setTitle: "Sword & Shield",
    setSets: [
      {
        image: ShiningFates,
        title: "Shining Fates",
        id: "swsh45",
      },
      {
        image: VividVoltage,
        title: "Vivid Voltage",
        id: "swsh4",
      },
      { image: ChampionsPath, title: "Champions Path", id: "swsh35" },
      { image: DarknessAblaze, title: "Darkness Ablaze", id: "swsh3" },
      { image: RebelClash, title: "Rebel Clash", id: "swsh2" },
      { image: SwordShield, title: "Sword & Shield", id: "swsh1" },
    ],
  },
  {
    setTitle: "Sun & Moon",
    setSets: [
      { image: CosmicEclipse, title: "Cosmic Eclipse", id: "sm12" },
      { image: HiddenFates, title: "Hidden Fates", id: "sm115" },
      { image: UnifiedMinds, title: "Unified Minds", id: "sm11" },
      { image: UnbrokenBonds, title: "Unbroken Bonds", id: "sm10" },
      { image: DetectivePikachu, title: "Detective Pikachu", id: "det1" },
      { image: TeamUp, title: "Team Up", id: "sm9" },
      { image: DragonMajesty, title: "Dragon Majesty", id: "sm75" },
      { image: LostThunder, title: "Lost Thunder", id: "sm8" },
      { image: CelestialStorm, title: "Celestial Storm", id: "sm7" },
      { image: ForbiddenLight, title: "Forbidden Light", id: "sm6" },
      { image: UltraPrism, title: "Ultra Prism", id: "sm5" },
      { image: CrimsonInvasion, title: "Crimson Invasion", id: "sm4" },
      {
        image: ShiningLegends,
        title: "Shining Legends",
        id: "sm35",
      },
      { image: BurningShadow, title: "Burning Shadow", id: "sm3" },
      { image: GuardiansRising, title: "Guardians Rising", id: "sm2" },
      { image: SunMoon, title: "Sun & Moon", id: "sm1" },
    ],
  },
  {
    setTitle: "XY",
    setSets: [
      { image: Evolutions, title: "Evolutions", id: "xy12" },
      { image: Generations, title: "Generations", id: "g1" },
      { image: AncientOrigins, title: "Ancient Origins", id: "xy7" },
      { image: RoaringSkies, title: "Roaring Skies", id: "xy6" },
    ],
  },
  {
    setTitle: "Black & White",
    setSets: [
      { image: LegendaryTreasures, title: "Legendary Treasures", id: "bw11" },
      { image: BoundariesCrossed, title: "Boundaries Crossed", id: "bw7" },
    ],
  },
];

export default allSets;
