import { RoomManager } from "./room-manager";

type IConstructor = {
  roomManager: RoomManager;
};
export class ShardManager {
  private roomManager: RoomManager;

  constructor({ roomManager }: IConstructor) {
    this.roomManager = roomManager;
  }

  tick() {
    for (let roomName in Game.rooms) {
      let room = Game.rooms[roomName];
      this.roomManager.tick(room);
    }
  }
}
