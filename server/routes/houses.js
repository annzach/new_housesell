const express = require('express');
const router = express.Router();
const House = require('../models/house');

router.route('/')
  .get((req, res)=>{
    House.find({}, (err, houses)=>{
      res.status(err ? 400 :200).send(err || houses);
    })
  })
  .post((req, res)=>{
    House.create(req.body, (err, house)=>{
      if(err){
        return res.status(400).send(err);
      }
      res.send(house);
    });
  });

router.route('/:id')
  .get((req, res) =>{
    House.findById(req.params.id, (err, house)=>{
      if(err || !house){
        return res.status(400).send(err || 'House not found');
      }
      res.send(house);
    }).populate('buyer')
  })
  .delete((req, res) => {
    House.findByIdAndRemove(req.params.id, err => {
      if(err){
        return res.status(400).send(err);
      }
      House.find({}, (err, houses) =>{
        res.status(err? 400 : 200).send(err || houses);
      })
    }).populate('owner')
  })
  .put((req, res) => {
    House.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, house) => {
      if(err){
        return res.status(400).send(err);
      }
      // else { house.save(); }
      House.find({}, (err,houses) =>{
        res.status(err ? 400 : 200).send(err || houses);
      }).populate('owner')
    })
  })

router.route('/lookup/:zipcode')
  .get((req, res) => {
    House.find({zipcode: req.params.zipcode}, (err, houses) => {
      if(err|| !houses){
        return res.status(400).send(err || 'House not found');
      }
      res.send(houses);
    });
  })

router.put('/:houseId/addBuyer/:buyerId', (req, res)=>{
  House.findById(req.params.houseId, (err, house)=>{
    console.log('house:', house)
    if(err || !house){
      return res.status(400).send(err || 'House not found');
    }

    let buyerId = req.params.buyerId;

    house.buyer = buyerId;
    console.log('buyerId:', buyerId)
    house.save((err, savedHouse)=>{
      console.log('savedHouse:', savedHouse)
      res.status(err ? 400 :200).send(err || savedHouse);
    });
  })
})





module.exports = router;
