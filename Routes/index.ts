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
router.get('/register', function(req, res, next)  {
    let newContact = new Contact
    ({
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAddress": req.body.EmailAddress,
    })

    Contact.create(newContact, function(err, ErrorCallback))
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list')
    }

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
router.get('/edit/:id', function(req, res, next) {
    let id = req.params.id;

    Contact.findById(id, {}, {}, function(_err:any,_contactToEdit: any))
    {
        if(_err)
        {
            console.error(_err);
            res.end(_err);
        }
    }
    res.render('index', { title: 'Edit Contact', page: 'edit', displayName: '' })
});

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

router.get('/delete/:id', function(req, res, next)  {

    let id = req.params.id;

    Contact.removeAllListeners({_id: id}, function(err))
    {
        if(err){
            console.error(err)
            res.end(err)
        }
    }

    res.render('index', { title: '404', page: '404', displayName: '' })
})

export default router