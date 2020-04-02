const router = require('express').Router()

// REQUISITO FUNCIONAL: consulta de uma Transaction
router.get('/UKHousePricing', (req, res) => {
    // If user stated Date_of_Transfer, return Transaction with same Date_of_Transfer


    // If no Transaction matches Date_of_Transfer requested, return with status 204 (No Content)
    // Else, return with status 400 (Bad Request)
    return res.status(400).send()
    /*
    return res.status(200).send({
        // json goes here
    })
    */
})

// REQUISITO FUNCIONAL: ADICIONAR UMA NOVA TRANSACTION
router.post('/UKHousePricing', (req, res) => {
    // Send to database information to add new Transaction
    const connection = mysql.createConnection(uk_house_pricing_db)

    // Send reply to client
    return res.status(200).send({})
})

module.exports = router