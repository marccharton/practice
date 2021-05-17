const foodController = {

    getFoodList : (req, res) => {
        
        const foods = [
            { id: 1, description: 'burritos' },
            { id: 2, description: 'quesadillas' },
            { id: 3, description: 'churos' }
        ];
        
        console.log(req.user);
        res.json(foods);
    }
};

module.exports = foodController;