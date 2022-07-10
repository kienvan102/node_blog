const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app){
    app.use('/news', newsRouter)
    app.use('/', siteRouter)
    // app.get('/submitForm', (req,res) => {
    //     res.render('submitForm')
    // })

    // app.post('/submitForm', (req,res) => {
    //     console.log(req.body)

    //     res.send('')
    // })


}

module.exports = route;