var Human = function (type) {
  this.type = type || 'human';
};

Human.isHuman = function (human) {
  return human instanceof Human;
};

Human.prototype.breathe = function () {
  alert('h-a-a-a-m');
};

var Zero = function (type, firstName, lastName) {
  Human.apply(this, arguments);
};
