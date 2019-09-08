import {
  UPDATE_MEMBERS_LIST,
  SET_ROOM_NAME
} from './constants'

const defaultState = {
  roomName: "白色相簿",
  roomId: 13321452314,
  members: [
    {
      username: "孙翔宇",
      identity: "leader",
      id: 1
    },
    {
      username: "赵子琦",
      identity: "member",
      id: 2
    },
    {
      username: "田承涵",
      identity: "member",
      id: 3
    }
  ],
  message: "胡昊江加入本房间",
  difficult: 4,
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case SET_ROOM_NAME:
      newState.roomName = action.value;
      return newState;
    case UPDATE_MEMBERS_LIST:
      newState.members = action.value;
      return newState;
    default:
      return newState
  }
}
