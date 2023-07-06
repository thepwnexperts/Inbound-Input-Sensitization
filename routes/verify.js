const router = require('express').Router();
const { log } = require('console');
//const waf = Boolean(process.env.waf);
//const waf = JSON.parse(process.env.waf);



router.get('/name', async (req, res) => {
  const name = req.query.name;
  const nameRegex = /^[A-Za-z\s-']+$/;

  if (nameRegex.test(name)) {
    res.send('Valid name');
  } else {
    res.status(400).send('Invalid name');
  }
});



router.get('/fullname', async (req, res) => {
    const fullName = req.query.name;
//console.log(fullName);
    const fullNameRegex = /^[A-Za-z]+(\s[A-Za-z]+){0,2}$/;

    if (fullNameRegex.test(fullName)) {
        // Full name is valid, perform desired actions
        res.send('Valid full name');
    } else {
        // Full name is invalid
        res.status(400).send('Invalid full name');
    }
});




module.exports = router;
