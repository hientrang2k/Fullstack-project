import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render('homepage.ejs', {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render('test/about.ejs');
};

let getCRUD = (req, res) => {
  return res.render('crud.ejs');
};

let postCRUD = async (req, res) => {
  await CRUDService.createNewUser(req.body);
  return res.render('crud.ejs');
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
