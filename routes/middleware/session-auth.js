var admins = require('../../models/auth-model').admins;
module.exports.session = function(req, res, next) {
  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session && req.session.passport && req.session.passport.user) {
    return next();
  }

  // User is not allowed
  return res.status(403).send('You are not authorized to view this');
};

module.exports.admin = function(req, res, next){
  if (req.session && req.session.passport && req.session.passport.user && admins[req.user.facebookId]) {
    return next();
  }
  return res.status(403).send('You are not authorized to view this');
}
