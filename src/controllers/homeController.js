import db from '../models/index';
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render('homepage.ejs', {
      data: JSON.stringify(data),
    });
  } catch {
    console.log(e);
  }
};

let getAboutPage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render('test/about.ejs');
  } catch {
    console.log(e);
  }
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
