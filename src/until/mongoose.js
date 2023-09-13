module.exports = {
  mutipleMongooseToObject:  (mongoose_array) =>{
    return mongoose_array.map((mongoos_array) => mongoos_array.toObject())
  },
  // su dung khi co 1 document thì return lai nó
  mongooseToObject: (mongoose_array) => {
    return mongoose_array ? mongoose_array.toObject() : mongoose_array
  },
}
