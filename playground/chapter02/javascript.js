var relationship1 = {
  name: 'test',
  friends: [1, 2, 3],
  logFriends: function () {
    this.friends.forEach(function (friend) {
      console.log(this.name, friend);
    });
  },
};

var candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy: function () {
    this.status.count--;
    return this.status.count;
  },
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

const {
  getCandy,
  status: { count },
} = candyMachine;

var array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;
