/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {

    Info.find({})
      .then((info) => {
        if (info.length === 0) {
          req.addFlash('error', 'Не найдено контактов администратора!');
          sails.log('Error in main/index ' + 'Не найдено контактов администратора!');
          return res.render('main/index', {info: {}});
        }
        res.render('main/index', {info: info[0]});
      })
      .catch((err) => {
        req.addFlash('error', 'Нет соединения с базой данных!');
        res.render('main/index', {info: {}});
        sails.log('Error in main/index ' + err);
      })
  },

  login: function (req, res) {
    function createError(req, message = 'Неправильный логин или пароль!') {
      req.addFlash('error', message);
    }

    var login = req.param("login");
    var password = req.param("password");

    if (!login || !password) {
      createError(req, 'Пожалуйста, введите логин и пароль!');
      res.redirect('back');
      return;
    }

    User.findOne({login, password})
      .then(function (user) {
        if (!user) {
          createError(req);
          res.redirect('back');
          return;
        }

        req.session.user = user;
        res.redirect('back');
      })
      .catch(function (err) {
        sails.log('Error in login' + e);
      });
  },

  logout: function (req, res) {

    req.session.user = undefined;
    res.redirect('back');
  }
};

/*

 // callback
 User.create(user).exec(function(err, user1) {
 if (err) return res.send(500);
 console.log(`created ${user1.login}`);
 // >
 });



 // promise
 User.create(user)
 .then(function(createdUser) {
 // >
 })
 .catch(function(err) {
 ...
 })
 ;



 // async/await
 try {
 var createdUser = await User.create(user);
 // >
 }
 catch (err) {
 ...
 }

 //*/
