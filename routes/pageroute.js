const express = require('express');
const route = express.Router();
const {getmethod,Postmethod,deletemethod,editemethod} = require('../database/method')


route.get('/', async (req, res) => {
    let datas = await getmethod()
    res.json({
      mass: 'succes',
      data: datas
    })
  })


  route.post('/', async (req, res) => {
    let datas = await Postmethod(req.body)
    res.json({
      mass: 'succes',
      data: datas
    })
  })

  route.delete('/:id',async(req,res)=>{
    const data=await deletemethod(req.params.id)
    res.json({
        massege:"success",
        data:data
       }) 
    })

    route.put('/:id',async(req,res)=>{
        req.body.id=req.params.id;
        let datas=await editemethod(req.body);
        res.json({
            massege:"success",
            data:datas
           })
    })

    

module.exports = route;