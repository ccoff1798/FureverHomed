// defined route with login data returned from front end as router.post importing from express allowing for router methods. router.post('/login') async (req, res) => {} required for the try {} await
const router = require('express').Router();
// importing data from User.js and assigning it to table named "User" const {User}
const { User } = require('../../models');
// only 2 possibilities when this route is triggered the data coming in is req, res is data being returned to user. This route engages 
router.post('/login', async (req, res) => {
  
  // Find the user User.findOne({{}}) who matches the posted e-mail address, this code is triggered automatically once the user inputs their user data that is sent as a req above. "User" is the name for the table in the database. method User.findone({where: {email: req.body.email}}) Select * from user where email = instead of req.body.email the actual value of email entered by user as seen in insomnia must be entered in that format via mysql to find data from user input on front end. The package installed as sequalize allows you to communicate with relational databases like mysql, postgersql, sqLite inside express.js package inside the node.js application. In terms of sequalize(library or package inside node.js or express.js within node.js, associated with package/s in package.json) "User" is known as the "Model" name not table. Otherwise "User" is known as the table name within the database user_db.

  // req.body.email User.findOne({{}}) comes from sequalize and is checking if email entered by user that was saved as req.body.email exists 
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
   // error message to return if no userData is found wont check password if no email exists
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password matches with userData.checkpassword(req.body.password);
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    // req.session.save(() => {}) function that will save user data associated with the unique id: of the logged in user into the cookies of the user browser.
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // res.json({}) returns userData as user: and prompt "your are now logged in!" as message: in User table.
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/register', async (req, res) => {

  try {
    // userData is assigned from saved values from user input either error or as correct values, user input values come from req.body.name/email/password in the form name:, email:, password: inserted into the table or model "Users".
    const userData = await User.create({ 
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
     });
   
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

   

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are registered successfully' });
    });

  } catch (err) {
    res.status(400).json(err);
    
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
