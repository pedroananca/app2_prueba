// express es una clase configurable de servicio htttp
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
console.log("step 1 completed")
res.send(`<h1>Todo bien y funcionando</h1>`)
});
module.exports.inicio = router;