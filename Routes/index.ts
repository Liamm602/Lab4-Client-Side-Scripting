import express from 'express'
const router = express.Router()
import Contact from "../Models/contact";
// GET home page
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Home', page: 'home', displayName: '' })
})
router.get('/home', (req, res, next) => {
    res.render('index', { title: 'Home', page: 'home', displayName: '' })
})

// GET projects
router.get('/products', (req, res, next) => {
    res.render('index', { title: 'Products', page: 'products', displayName: '' })
})

// GET contacts
router.get('/contact', (req, res, next) => {
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: '' })
})

// GET login
router.get('/login', (req, res, next) => {
    res.render('index', { title: 'Login', page: 'login', displayName: '' })
})

// GET register
router.get('/register', (req, res, next) => {
    res.render('index', { title: 'Register', page: 'register', displayName: '' })
})

// Temp Routes
// GET contact-list

router.get('/contact-list', function(req, res, next) {
    Contact.find(function(err: any, contacts: any)
    {
        if(err)
        {
            console.error("Encountered an Error reading from the database " + err.message);
            res.end();
        }
        console.log(contacts);
        res.render('index', { title: 'Contact-List', page: 'contact-list',contacts:contacts, displayName: '' })
    })
   
})
//GET edit
router.get('/edit', (req, res, next) => {
    res.render('index', { title: 'Edit Contact', page: 'edit', displayName: '' })
})

//GET edit
router.get('/about', (req, res, next) => {
    res.render('index', { title: 'about', page: 'about', displayName: '' })
})
//GET edit
router.get('/task-list', (req, res, next) => {
    res.render('index', { title: 'Task List', page: 'task-list', displayName: '' })
})
router.get('/404', (req, res, next) => {
    res.render('index', { title: '404', page: '404', displayName: '' })
})

export default router