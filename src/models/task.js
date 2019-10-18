const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completion: {
        type: Boolean,
        default: false
   },
   owner: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'User'
   }
},{
    timestamps: true
})

taskSchema.pre('save', async function(next){
    const task = this
    if(task.isModified('description')){
         console.log('Task model description is modified')
    }else{
        console.log('Middleware pre save is called')
    }
    next()
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
