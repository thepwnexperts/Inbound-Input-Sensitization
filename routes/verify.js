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

router.get('/email', async (req, res) => {
  const email = req.query.email;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (emailRegex.test(email)) {
      // Email is valid, perform desired actions
      res.send('Valid email address');
  } else {
      // Email is invalid
      res.status(400).send('Invalid email address');
  }
});

router.get('/mobile', async (req, res) => {
  const mobileNumber = req.query.number;
  const mobileRegex = /^\d{10}$/;

  if (mobileRegex.test(mobileNumber)) {
      // Mobile number is valid, perform desired actions
      res.send('Valid mobile number');
  } else {
      // Mobile number is invalid
      res.status(400).send('Invalid mobile number');
  }
});

router.get('/address', async (req, res) => {
  const streetAddress = req.query.streetAddress;
  const streetAddress2 = req.query.streetAddress2;
  const city = req.query.city;
  const state = req.query.state;
  const country = req.query.country;
  const pincode = req.query.pincode;

  // Define regular expressions for each field
  const addressRegex = /^[A-Za-z0-9\s\-]+$/;
  const cityRegex = /^[A-Za-z\s]+$/;
  const stateRegex = /^[A-Za-z\s]+$/;
  const countryRegex = /^[A-Za-z\s]+$/;
  const pincodeRegex = /^\d{5}$/;

  // Validate each field
  if (
      addressRegex.test(streetAddress) &&
      addressRegex.test(streetAddress2) &&
      cityRegex.test(city) &&
      stateRegex.test(state) &&
      countryRegex.test(country) &&
      pincodeRegex.test(pincode)
  ) {
      // Address is valid, perform desired actions
      res.send('Valid address');
  } else {
      // Address is invalid
      res.status(400).send('Invalid address');
  }
});



module.exports = router;
