const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongoose_delete = require('mongoose-delete')
const Schema = mongoose.Schema
const CourseSchema= new Schema(
  {
    name: { type: String, maxLength: 255, require: true, },
    description: { type: String, maxLength: 1000 },
    img: { type: String, maxLength: 255, require: true, },
    videoid: { type: String, maxLength: 1000, require: true, },
    slug: { type: String, slug: ['name'],}, //  unique:true 
  },
  {
    timestamps: true,
  },
)
// middleware
CourseSchema.query.sortTable=function(req){
  if (req.query.hasOwnProperty('_sort')) {
    // phng tranh hack
    const type_default = ['asc', 'desc'].includes(req.query.type)
     return this.sort({
      [req.query.column]: type_default ? req.query.type : 'asc',
    })
  }
  return this
}
mongoose.plugin(slug)
CourseSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: true,
})
module.exports = mongoose.model('name', CourseSchema)
