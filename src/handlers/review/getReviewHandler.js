const {getReviewController} = require("../../controllers/review/getReviewController")

const getReviewHandler = async (req, res) => {
    try {
        const reviews = await getReviewController();
        if (reviews.length > 0) {
            res.status(200).json(reviews)
        }else {
            res.status(400).json({message: "No hay reseñas encontradas"})
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    getReviewHandler
}