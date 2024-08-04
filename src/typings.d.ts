interface CreepMemory {
  role: "harvester" | "builder" | "upgrader" | "defender" | "repairer";
  building: boolean;
  harvesting: boolean;
  upgrading: boolean;
  repairing: boolean;
}
