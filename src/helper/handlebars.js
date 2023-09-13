const Handlebars = require('Handlebars')
module.exports = {

        sum: (a, b) => a + b,
        sort: (name_column,Object_sort)=>{
          const sort_click = name_column === Object_sort.column ? Object_sort.type :'default'
          const icon = {
            default :'bi bi-airplane',
            asc:'bi bi-sort-alpha-down',
            desc: 'bi bi-sort-alpha-down',
          }
          const types = {
            default: 'asc',   
            asc:'desc',     
            desc: 'asc',
            
          }
          const icons = icon[sort_click]
          const typee = types[sort_click]
          // console.log(name_column) name column
            //   bao ve the a khoi hacker
            const protect = Handlebars.escapeExpression(`?_sort&column=${name_column}&type=${typee}`)
                const output_Tag_a =`<a href="${protect}" >
                <i class="${icons} "></i>
                </a>`
            return new Handlebars.SafeString(output_Tag_a);
        }
    
}