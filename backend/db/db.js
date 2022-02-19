
module.exports = function(mongoose) {
    if(process.env.NODE_ENV === "production") {
        mongoose.connect(process.env.URI,(err) => {
            if(!err) {
                console.log("mongoDB Atlas is connected ");
            } else {
                console.log(err);
            }
        })
    } else {
        mongoose.connect('mongodb://localhost:27017/commercialtest',(err) => {
            if(!err) {
                console.log("local Database is connected");
            } else {
                console.log(err);
            }
        })
    }
    
}