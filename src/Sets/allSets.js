//SWORD & SHIELD
import ShiningFates from "../Assets/ShiningFates.PNG";
import VividVoltage from "../Assets/VividVoltage.png";
import ChampionsPath from "../Assets/ChampionsPath.png";
import DarknessAblaze from "../Assets/DarknessAblaze.png";
import RebelClash from "../Assets/RebelClash.png";
import SwordShield from "../Assets/Sword&Shield.png";

//SUN & MOON
import CosmicEclipse from "../Assets/CosmicEclipse.png";
import HiddenFates from "../Assets/HiddenFates.png";
import UnifiedMinds from "../Assets/UnifiedMinds.png";
import UnbrokenBonds from "../Assets/UnbrokenBonds.png";
import LostThunder from "../Assets/LostThunder.png";
import TeamUp from "../Assets/TeamUp.png";
import DragonMajesty from "../Assets/DragonMajesty.png";
// import DetectivePikachu from "../Assets/DetectivePikachu.png";
import CelestialStorm from "../Assets/CelestialStorm.png";
import ForbiddenLight from "../Assets/ForbiddenLight.png";
import UltraPrism from "../Assets/UltraPrism.png";
import CrimsonInvasion from "../Assets/CrimsonInvasion.png";
import ShiningLegends from "../Assets/ShiningLegends.PNG";
import BurningShadow from "../Assets/BurningShadow.png";
import GuardiansRising from "../Assets/GuardiansRising.png";
import SunMoon from "../Assets/Sun&Moon.png";

//XY
import Evolutions from "../Assets/Evolutions.png";
import Generations from "../Assets/Generations.png";
import AncientOrigins from "../Assets/AncientOrigins.png";
import LegendaryTreasures from "../Assets/LegendaryTreasures.png";
import BoundariesCrossed from "../Assets/BoundariesCrossed.png";
import RoaringSkies from "../Assets/RoaringSkies.png";
import XY from "../Assets/XY.png";
import PrimalClash from "../Assets/PrimalClash.png";

//BLACK WHITE
import PlasmaBlast from "../Assets/PlasmaBlast.png";
import PlasmaFreeze from "../Assets/PlasmaFreeze.png";
import BlackWhite from "../Assets/Black&White.png";
import DragonsExalted from "../Assets/DragonsExalted.png";
import DarkExplorer from "../Assets/DarkExplorer.png";
import NextDestinies from "../Assets/NextDestinies.png";
import HeartGoldSoulSilver from "../Assets/HeartGold&SoulSilver.png";
import PlatinumArceus from "../Assets/PlatinumArceus.png";
import PlatinumSupremeVictors from "../Assets/PlatinumSupremeVictors.png";
import PlatinumRisingRivals from "../Assets/PlatinumRisingRivals.png";
import Platinum from "../Assets/Platinum.png";

//DIAMOND PEARL
import StormFront from "../Assets/StormFront.png";
import LegendsAwakened from "../Assets/LegendsAwakened.png"; //dp6
import MajesticDawn from "../Assets/MajesticDawn.png"; //dp5
import GreatEncounters from "../Assets/GreatEncounters.png"; //dp4
import SecretWonder from "../Assets/SecretWonders.png"; //dp3
import MysteriousTreasures from "../Assets/MysteriousTreasures.png"; //dp2

// BASE
import TeamRocket from "../Assets/TeamRocket.png";
import BaseSet2 from "../Assets/BaseSet2.png";
import BaseSet1 from "../Assets/BaseSet1.png";
import Fossil from "../Assets/Fossil.png";
import Jungle from "../Assets/Jungle.png";

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
      // { image: DetectivePikachu, title: "Detective Pikachu", id: "det1" },
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
      { image: XY, title: "XY", id: "xy1" },
      { image: Evolutions, title: "Evolutions", id: "xy12" },
      { image: Generations, title: "Generations", id: "g1" },
      { image: AncientOrigins, title: "Ancient Origins", id: "xy7" },
      { image: RoaringSkies, title: "Roaring Skies", id: "xy6" },
      { image: PrimalClash, title: "Primal Clash", id: "xy5" },
    ],
  },
  {
    setTitle: "Black & White",
    setSets: [
      { image: LegendaryTreasures, title: "Legendary Treasures", id: "bw11" },
      { image: BoundariesCrossed, title: "Boundaries Crossed", id: "bw7" },
      { image: PlasmaBlast, title: "Plasma Blast", id: "bw10" },
      { image: PlasmaFreeze, title: "Plasma Freeze", id: "bw9" },
      { image: BlackWhite, title: "Black & White", id: "bw1" },
      { image: DragonsExalted, title: "Dragons Exalted", id: "bw6" },
      { image: DarkExplorer, title: "Dark Explorer", id: "bw5" },
      { image: NextDestinies, title: "Next Destinies", id: "bw4" },
    ],
  },
  {
    setTitle: "HeartGold & SoulSilver",
    setSets: [
      {
        image: HeartGoldSoulSilver,
        title: "HeartGold & SoulSilver",
        id: "hgss1",
      },
    ],
  },
  {
    setTitle: "Platinum",
    setSets: [
      {
        image: PlatinumArceus,
        title: "Platinum Arceus",
        id: "pl4",
      },
      {
        image: PlatinumSupremeVictors,
        title: "Platinum Supreme Victors",
        id: "pl3",
      },
      {
        image: PlatinumRisingRivals,
        title: "Platinum Rising Rivals",
        id: "pl2",
      },
      {
        image: Platinum,
        title: "Platinum",
        id: "pl1",
      },
    ],
  },
  {
    setTitle: "Diamond & Pearl",
    setSets: [
      {
        image: StormFront,
        title: "Diamond & Pearl StormFront",
        id: "dp7",
      },
      {
        image: LegendsAwakened,
        title: "Diamond & Pearl Legends Awakened",
        id: "dp6",
      },
      {
        image: MajesticDawn,
        title: "Diamond & Pearl Majestic Dawn",
        id: "dp6",
      },
      {
        image: GreatEncounters,
        title: "Diamond & Pearl Great Encounters",
        id: "dp4",
      },
      {
        image: SecretWonder,
        title: "Diamond & Pearl Secret Wonder",
        id: "dp3",
      },
      {
        image: MysteriousTreasures,
        title: "Diamond & Pearl Mysterious Treasures",
        id: "dp2",
      },
    ],
  },
  {
    setTitle: "Base",
    setSets: [
      {
        image: TeamRocket,
        title: "Team Rocket",
        id: "base5",
      },
      {
        image: BaseSet2,
        title: "Base Set 2",
        id: "base4",
      },
      {
        image: BaseSet1,
        title: "Base Set 1",
        id: "base1",
      },
      { image: Fossil, title: "Fossil", id: "base3" },
      {
        image: Jungle,
        title: "Jungle",
        id: "base2",
      },
    ],
  },
];

export default allSets;
