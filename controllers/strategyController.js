// strategy_index, strategy_details, strategy_create_get, strategy_create_post, strategy_delete

const Strategy = require('../models/strategies')

const strategy_index = (req, res)=>{
    Strategy.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('strategies', {title: 'All Strategies', strategies: result})
    })
    .catch((err)=>{
        console.log(err);
    })
}

const strategy_details = (req, res)=>{
    const id = req.params.id
    Strategy.findById(id)
    .then((result)=>{
        res.render('strategies/details', {strategies: result, title: "Strategy Details"})
    })
    .catch(err=>{
        res.status(404).render('404', {title: 'Strategy not found'})
    })

}

// get the form
const strategy_create_get = (req, res)=>{
    res.render('strategies/newStrats', {title: 'Add a new Strategy'})
}

// save the form
const strategy_create_post = (req, res)=>{
    const strategy = new Strategy(req.body)

    strategy.save()
    .then((result)=>{
        res.redirect('/strategies')

    })
    .catch((err)=>{
        console.log(err);
    })
}

const strategy_delete = (req, res)=>{
    const id = req.params.id
    Strategy.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect:'/strategies'})
        
    })
    .catch((err)=>{
        console.log(err);
    })
}




module.exports= {
    strategy_index, 
    strategy_details,
    strategy_create_get, 
    strategy_create_post,
    strategy_delete
}