const router = require("express").Router();
const booksController = require("../../controllers/googleController");
// exmp21-05
// Matches with "/api/google"
router.route("/")
    .get(googleController.findAll);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;