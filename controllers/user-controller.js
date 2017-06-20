var User = require('../models/user-model');

module.exports.list = function(req, res, next){
  User.find({}, function(err, users) {
    if (err) return done(err);
    res.status(200).send(users);
  })
}
module.exports.readMe = function(req, res, next){
  var userId = req.session.passport.user;
  User.findById(userId, function(err, user){
    if (err) return done(err);
    res.send(user);
  });
};
module.exports.updateMe = function(req, res, next){
  var userId = req.session.passport.user;

  // validate uniqueness in username
  if (req.body.username){
    var uniqueQuery = {username: req.body.username};
    User.findOne(uniqueQuery, function(err, user){
      if (err) return done(err);
      if (user) return res.status(422).send('username has been taken');

      User.findByIdAndUpdate(userId, req.body, {new: true}, function(err, user){
        if (err) return done(err);
        res.send(user);
      });
    });
    return;
  }

  User.findByIdAndUpdate(userId, req.body, {new: true}, function(err, user){
    if (err) return done(err);
    res.send(user);
  });
};
module.exports.read = function(req, res, next){
  var userId = req.params.id;
  User.findById(userId, function(err, user){
    if (err) return done(err);
    if (!user) return res.status(404).send();
    res.send(user);
  });
}
module.exports.update = function(req, res, next){
  res.status(200).send();
}
