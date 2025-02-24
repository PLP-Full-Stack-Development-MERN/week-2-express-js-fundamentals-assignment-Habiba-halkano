const logger = (req, res, next) => {
    console.log(`$[{timeStamp}] ${req.method} ${req.url}`);
    next();
};

export default logger;