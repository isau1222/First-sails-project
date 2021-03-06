/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {

    Info.find({})
      .then((info) => {
        if (info.length === 0) {
          req.addFlash('error', 'Не найдено контактов администратора!');
          res.render('admin/index', {info: {}});
          sails.log('Error in admin/index ' + 'Не найдено контактов администратора!');
          return;
        }
        res.render('admin/index', {info: info[0]});
      })
      .catch((err) => {
        req.addFlash('error', 'Нет соединения с базой данных!');
        res.render('admin/index', {info: {}});
        sails.log('Error in admin/index ' + err);
      })
  },

  setInfo: function (req, res) {

    var newInfo = {
      telephone: req.param("telephone") || '+7 (903) 564-80-67',
      fullName: req.param("fullName") || 'Anikin Andrew Serveevich',
      mail: req.param("mail") || 'andreas@mail.ru',
    }

    Info.update({}, newInfo)
      .then((info) => {
        if (info.length !== 0) {
          req.addFlash('success', "Данные администратора успешно изменены!");
          return res.redirect('/admin');
        }
        Info.create(newInfo)
          .then((info) => {
            req.addFlash('success', "Данные администратора успешно изменены!");
            res.redirect('/admin');
          })
          .catch((err) => {
            req.addFlash('error', 'Нет соединения с базой данных!');
            res.redirect('/admin');
            sails.log('Error in admin/index ' + err);
          })
      })
      .catch((err) => {
        req.addFlash('error', 'Нет соединения с базой данных!');
        res.redirect('/admin');
        sails.log('Error in admin/index ' + err);
      })
  }
};

