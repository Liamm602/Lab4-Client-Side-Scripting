"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const contact_1 = __importDefault(require("../Models/contact"));
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
});
router.get('/home', (req, res, next) => {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
});
router.get('/products', (req, res, next) => {
    res.render('index', { title: 'Products', page: 'products', displayName: '' });
});
router.get('/contact', (req, res, next) => {
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: '' });
});
router.get('/login', (req, res, next) => {
    res.render('index', { title: 'Login', page: 'login', displayName: '' });
});
router.get('/register', function (req, res, next) {
    let newContact = new contact_1.default({
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAddress": req.body.EmailAddress,
    });
    contact_1.default.create(newContact, function (err, ErrorCallback) { });
    {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    }
    res.render('index', { title: 'Register', page: 'register', displayName: '' });
});
router.get('/contact-list', function (req, res, next) {
    contact_1.default.find(function (err, contacts) {
        if (err) {
            console.error("Encountered an Error reading from the database " + err.message);
            res.end();
        }
        console.log(contacts);
        res.render('index', { title: 'Contact-List', page: 'contact-list', contacts: contacts, displayName: '' });
    });
});
router.get('/edit/:id', function (req, res, next) {
    let id = req.params.id;
    let updateContact = new contact_1.default({
        "_id": id,
        "FullName": req.body.ContactNumber,
        "EmailAddress": req.body.EmailAddress
    });
    contact_1.default.update({ _id: id }, updateContact, function (err, _contactToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
    });
    contact_1.default.findById(id, {}, {}, );
    {
        if (_err) {
            console.error(_err);
            res.end(_err);
        }
    }
    res.render('index', { title: 'Edit Contact', page: 'edit', displayName: '' });
});
router.get('/about', (req, res, next) => {
    res.render('index', { title: 'about', page: 'about', displayName: '' });
});
router.get('/task-list', (req, res, next) => {
    res.render('index', { title: 'Task List', page: 'task-list', displayName: '' });
});
router.get('/404', (req, res, next) => {
    res.render('index', { title: '404', page: '404', displayName: '' });
});
router.get('/delete/:id', function (req, res, next) {
    let id = req.params.id;
    contact_1.default.removeAllListeners({ _id: id }, function (err) { });
    {
        if (err) {
            console.error(err);
            res.end(err);
        }
    }
    res.render('index', { title: '404', page: '404', displayName: '' });
});
exports.default = router;
//# sourceMappingURL=index.js.map