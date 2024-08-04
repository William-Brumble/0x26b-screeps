interface CreepMemory {
  role: "harvester" | "builder" | "upgrader" | "defender";
  building: boolean;
  harvesting: boolean;
  upgrading: boolean;
}
