const express = require('express');
const router = express.Router();

const Buyer = require('../models/buyer');

router.route('/')
  .get((req, res)=>{
    Buyer.find({}, (err, buyers)=>{
      res.status(err ? 400 :200).send(err || buyers);
    })
  })
  .post((req, res)=>{
    Buyer.create(req.body, (err, buyer)=>{
      console.log(req.body);
      if(err){
        return res.status(400).send(err);
      }
      res.send(buyer)
    });
  });

// router.route('/email/:www')
// .get((req, res) => {
//   Buyer.findOne({email: req.params.www}, (err, buyer) => {
//     res.status(err ? 400 : 200).send(err || buyer);
//   });
// })

router.route('/:id')
  .get((req, res) => {
    Buyer.findById(req.params.id, (err, buyer) => {
      res.status(err ? 400 : 200).send(err || buyer);
    })
  })
  .delete((req, res) => {
    Buyer.findByIdAndRemove(req.params.id, err => {
      if(err){
        return res.status(400).send(err);
      }
      Buyer.find({}, (err, buyers) =>{
        res.status(err? 400 : 200).send(err || buyers);
      });
    });
  })
  .put((req, res) => {
    Buyer.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err,buyer) => {
      if(err) return res.status(400).send(err);
      // res.send(Buyer)
      Buyer.find({}, (err, buyers)=>{
        res.status(err ? 400 :200).send(err || buyers);
      });
    });
  })

module.exports = router;
