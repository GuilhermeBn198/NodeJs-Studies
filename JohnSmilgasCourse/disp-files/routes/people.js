const express = require("express");
const router = express.Router();

const {
	  getPeople,
	  createPerson,
	  createPersonPostman,
	  updatePerson,
	  deletePerson,
} = require('../controllers/people')

// router.get("/", getPeople);     //padronized way of routing the application
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);


//this permit us to implemnte multiple types of operations in the same route just like the method above, but with a fewer lines
route.route('/').get(getPeople).post(createPerson)  
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)
module.exports = router;
