import React, { useState, useEffect } from 'react';

import SignUpSteps from './SignUpSteps';

function SignUpStep6() {
  const [formValues, setFormValues] = useState({});
  const handleChange = (e) =>
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  useEffect(() => {
    const script = document.createElement('script');
    const $style = document.createElement('style');
    script.src =
      'https://api.vapulus.com:1338/app/session/script?appId=dc2e5b89-892d-4e25-a537-988cd8dfefd5';
    script.async = true;
    $style.id = 'antiClickjack';
    // $style.innerHTML = `body{display:none}`;
    document.head.appendChild(script);
    document.head.appendChild($style);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild($style);
    };
  }, []);

  return (
    <SignUpSteps formData={formValues} formStep={6} skip={true}>
      {/* <h5 className="text-left pl-2 mt-3 mb-0">Credit Card</h5>
			<hr className="mt-0" />
				<div className="form-group col-6">
					<label htmlFor="holderName">CardHolder Name</label>
					<input
						type="text"
						className="form-control"
						id="holderName"
						placeholder="Name"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group col-6">
					<label htmlFor="cardNum">Card Number</label>
					<input
						type="text"
						className="form-control"
						id="cardNum"
						placeholder="XXXX XXXX XXXX XXXX"
            onChange={handleChange}
            
            maxLength="16"
					/>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-2">
					<label htmlFor="YY">Year</label>
					<input
						type="text"
						className="form-control"
						id="YY"
            onChange={handleChange}
            maxLength="2"
					/>
				</div>
				<div className="form-group col-md-2">
					<label htmlFor="MM">Month</label>
					<input
						type="text"
						className="form-control"
						id="MM"
            onChange={handleChange}
            maxLength="2"
					/>
				</div>
				<div className="form-group col-md-3 offset-2">
					<label htmlFor="cvv">CVV</label>
					<input
						type="text"
						className="form-control"
						id="cardCVC"
            onChange={handleChange}
            maxLength="3"
					/>
				</div>*/}
      <div className="form-row">
        <iframe
          style={{ height: '600px', border: '0px' }}
          src="https://accept.paymobsolutions.com/api/acceptance/iframes/39329?payment_token=ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhiVzkxYm5SZlkyVnVkSE1pT2pFd01EQXNJbVY0Y0NJNk1UVTVNamt4TWpVeU1Dd2lZM1Z5Y21WdVkza2lPaUpGUjFBaUxDSmlhV3hzYVc1blgyUmhkR0VpT25zaVptbHljM1JmYm1GdFpTSTZJa05zYVdabWIzSmtJaXdpYkdGemRGOXVZVzFsSWpvaVRtbGpiMnhoY3lJc0luTjBjbVZsZENJNklrVjBhR0Z1SUV4aGJtUWlMQ0ppZFdsc1pHbHVaeUk2SWpnd01qZ2lMQ0ptYkc5dmNpSTZJalF5SWl3aVlYQmhjblJ0Wlc1MElqb2lPREF6SWl3aVkybDBlU0k2SWtwaGMydHZiSE5yYVdKMWNtZG9JaXdpYzNSaGRHVWlPaUpWZEdGb0lpd2lZMjkxYm5SeWVTSTZJa05TSWl3aVpXMWhhV3dpT2lKamJHRjFaR1YwZEdVd09VQmxlR0V1WTI5dElpd2ljR2h2Ym1WZmJuVnRZbVZ5SWpvaUt6ZzJLRGdwT1RFek5USXhNRFE0TnlJc0luQnZjM1JoYkY5amIyUmxJam9pTURFNE9UZ2lMQ0psZUhSeVlWOWtaWE5qY21sd2RHbHZiaUk2SWs1QkluMHNJblZ6WlhKZmFXUWlPakUyTkRJNExDSnBiblJsWjNKaGRHbHZibDlwWkNJNk1qTXdOaklzSW5CdGExOXBjQ0k2SWpReExqTTJMakV3Tmk0eE5UVWlMQ0pzYjJOclgyOXlaR1Z5WDNkb1pXNWZjR0ZwWkNJNlptRnNjMlVzSW05eVpHVnlYMmxrSWpvMU1qWTNOVE01ZlEuYk1IMnZQTHdET29jSkRWclFGeC1NTHg3Z053eWhXQkhtVWFUSEl3OURYbkdZNmZuZl9LSGdBNWNMZ2pENndyNnFtRVBLNjlvVWVUWkFkLWNzM2tTN0E="
          className="form-group col-12"
        ></iframe>
      </div>

      {/* <h5 className="text-left pl-2 mt-3 mb-0">Other options</h5>
      <hr className="mt-0" />
      <div className="form-row">
        <div className="form-group col-12">
          <label htmlFor="cardHolderName">
            please press on your preferred payment method
          </label>
        </div>
        <div className="form-group offset-1 col-4">
          <input
            type="button"
            value="Paypal"
            className="btn theme-bg btn-block"
            id="cardHolderName"
          />
        </div>
        <div className="form-group offset-2 col-4">
          <input
            type="button"
            value="Vapulus"
            className="btn theme-bg btn-block"
            id="cardHolderName"
          />
        </div>
      </div>*/}
    </SignUpSteps>
  );
}

export default SignUpStep6;

//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------

//----------------------------------------------------------------

const Offers = require('../models/Offers');
const Customers = require('../models/HSM_Customers');
const Company = require('../models/Companies');
const CaptivePortals = require('../models/Captive_Portals');
const SSIDs = require('../models/SSIDs');
const Nas = require('../models/nas');
const InstalledModules = require('../models/InstalledModules');
const InstalledCharts = require('../models/InstalledCharts');
const Vouchers = require('../models/Vouchers');
const DM = require('../models/Digital_Menus');

const bcrypt = require('bcrypt');

const { QueryTypes } = require('sequelize');
const sequelize = require('../DB/DBConnection');

exports.delete = async (req, res) => {
  const id = req.userData.customerId;
  console.log(req.userData);

  try {
    await CaptivePortals.destroy({ where: { Customer_ID: id } });
    await InstalledModules.destroy({ where: { CustomerID: id } });

    await InstalledCharts.destroy({ where: { CustomerID: id } });

    await Nas.destroy({ where: { Customer_ID: id } });

    await SSIDs.destroy({ where: { Customer_ID: id } });
    await Company.destroy({ where: { Customer_ID: id } });

    await Offers.destroy({ where: { Customer_ID: id } });
    await Vouchers.destroy({ where: { Customer_ID: id } });
    await DM.destroy({ where: { customer_id: id } });

    // await Customers.update(
    //   { Customer_ID: null },
    //   {
    //     where: {
    //       Customer_ID: id,
    //     },
    //   }
    // );
    //await Customers.destroy({ where: { ID: id } });

    let sql_query = `
  
  delete from customers where Customer_ID =${id};
 
  `;
    sequelize
      .query(`SET FOREIGN_KEY_CHECKS=0;`, { type: QueryTypes.FOREIGNKEYS })
      .then(() => {
        return sequelize.query(sql_query, { type: QueryTypes.DELETE });
      })
      .then(() => {
        return sequelize.query(`SET FOREIGN_KEY_CHECKS=1;`, {
          type: QueryTypes.FOREIGNKEYS,
        });
      })
      .then(() => {
        res.status(200).json({
          status: 'success',
        });
      });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: err,
    });
  }
};

exports.getAccountType = (req, res) => {
  Customers.findOne({ where: { ID: req.userData.customerId } }).then(
    (result) => {
      console.log();
      if (result.dataValues.Password == '.') {
        return res.send({ account: false });
      }
      res.send({ account: true });
    }
  );
};

exports.changePass = (req, res) => {
  Customers.findOne({ where: { ID: req.userData.customerId } })
    .then((result) => {
      return bcrypt.compare(req.body.pass.cpass, result.dataValues.Password);
    })
    .then((resul) => {
      if (resul == true) {
        return bcrypt.hash(req.body.pass.npass, 10);
      } else {
        res.send({ message: 'err' });
      }
    })
    .then((hashPass) => {
      console.log(hashPass);
      Customers.update(
        { Password: hashPass },
        { where: { ID: req.userData.customerId } }
      );
    })
    .then(() => res.send({ message: 'updated' }))
    .catch((err) => res.send(err));
};

exports.getAllInfo = (req, res) => {
  console.log(req.params.id);
  Customers.findOne({
    where: {
      ID: req.params.id,
    },
  }).then((result) => {
    console.log(result);

    res.send(result.toJSON());
  });
};
exports.savePresonalInfo = (req, res) => {
  console.log(req.body);
  Customers.update(
    {
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Date_Of_Birth: req.body.date_of_birth,
      City: req.body.city,
      Country: req.body.country,
      ZIP_code: req.body.zip,
      Address_Line_1: req.body.Address_one,
      Address_Line_2: req.body.Address_two,
    },
    {
      where: {
        ID: req.userData.customerId,
      },
    }
  )
    .then((result) => {
      res.status(200).send({ message: 'edited' });
    })
    .catch((err) => console.log(err));
};

exports.getCompanyInfo = async (req, res) => {
  console.log(req.params.id);
  let customerId = await Customers.findOne({ where: { ID: req.params.id } });
  Company.findOne({
    where: {
      Customer_ID: customerId.Customer_ID,
    },
  }).then((result) => {
    console.log(result);
    res.send(result.toJSON());
  });
};
exports.saveCompanyInfo = (req, res) => {
  console.log('this is saving');
  const fileName = req.file.filename;

  let filePath;
  if (fileName) {
    const url = req.protocol + '://' + req.get('host');
    filePath = url + '/static/cps-logos/' + fileName;
  } else {
    throw 'Error uploading the image';
  }
  Company.update(
    {
      Name: req.body.company_name,
      Size: req.body.company_size,
      Industry: req.body.industry,
      Website: req.body.website,
    },
    { where: { Customer_ID: req.userData.userId } }
  )
    // updating HSM_Customers table
    .then((r) => {
      Customers.update(
        { Avatar_URL: filePath },
        { where: { ID: req.userData.userId } }
      ).catch((err) => console.log(err));
    })
    .then((r) => {
      res.status(200).json({ message: 'success' });
    })
    .catch((err) => {
      console.log(err);
      let error = err.message ? err.message : err;
      res.status(401).json({ message: error });
    });
};
