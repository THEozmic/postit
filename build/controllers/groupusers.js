'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  addOrRemoveUser: function addOrRemoveUser(req, res) {
    if (!req.body.usersIds) {
      return res.status(400).send({ error: 'Param: "users" is required', status: 400 });
    }

    if (!req.params.id) {
      return res.status(400).send({ error: 'Param: "group_id" is required', status: 400 });
    }

    _models2.default.Groups.findOne({ where: { id: req.params.id } }).then(function (foundGroup) {
      if (!foundGroup) {
        return res.status(404).send({ error: 'Group does not exist', status: 404 });
      }
      res.status(200).send({ message: 'Group members list updated', status: 200 });
    });

    JSON.parse(req.body.usersIds).map(function (_ref) {
      var id = _ref.id;
      return _models2.default.Users.findOne({ where: { id: id } }).then(function (userFound) {
        if (userFound) {
          _models2.default.GroupUsers.findOne({ where: { userId: id, groupId: req.params.id } }).then(function (foundUser) {
            if (foundUser !== null) {
              _models2.default.Groups.findOne({ where: { id: req.params.id } }).then(function (foundGroup) {
                if (foundGroup.admin === req.decoded.data.id) {
                  return _models2.default.GroupUsers.destroy({ where: { userId: id, groupId: req.params.id } });
                }
              });
            } else {
              _models2.default.GroupUsers.create({ userId: id, groupId: req.params.id });
            }
          });
        }
      });
    });
  }
};
//# sourceMappingURL=groupusers.js.map