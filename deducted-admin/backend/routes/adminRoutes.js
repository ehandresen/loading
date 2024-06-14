const { login, updateText, getText } = require('../controllers/adminController');
const auth = require('../middleware/auth');  // Middleware for verifying JWT
const router = express.Router();

router.post('/login', login);
router.post('/text', auth, updateText);
router.get('/text', getText);

module.exports = router;