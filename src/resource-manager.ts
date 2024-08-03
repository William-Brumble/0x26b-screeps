interface IResourceManager {
  tick: (room: Room) => void;
}

export class ResourceManager implements IResourceManager {
  constructor() {}

  tick(room: Room) {}
}
