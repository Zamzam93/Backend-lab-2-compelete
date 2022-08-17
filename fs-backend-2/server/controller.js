const houses = require('./db.json')
let globalId = 4

module.exports = {
    getHouses:(req, res)=>  res.status(200).send(houses),
     deleteHouse: (req, res) =>{
        //const id = Number(req.params.id);
        let index = houses.findIndex(elem => elem.id === +req.params.id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },








 createHouse: (req, res) =>{

    },



 updateHouse: (req, res) => {

    },

    
  

};





