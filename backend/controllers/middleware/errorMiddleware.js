const errorHaldlerS = (req, res, res, next) => {
        const statusCode =  res.statusCode ? res. statusCode: 5000
    res.status(statusCode);

        res.json({
            message: err.message
        })

        res.json({
            //ABANGAN 
        })
};