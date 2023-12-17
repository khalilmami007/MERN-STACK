const Joke = require("../models/jokes.model")




const getALLJokes =(req,res) =>{
    Joke.find().then((ALLJokes)=> res.json(ALLJokes))
    .catch((err)=> console.log(err));



};

const getJokebyId=(req,res)=>{
    const {params}=req;
    Joke.findOne({_id: params.id})
    .then((joke)=> res.json(joke))
    .catch((err)=> console.log(err));

};

const createNEWJoke=(req,res)=>{
    const {body}= req;
    Joke.create(body)
    .then((newJoke)=> res.json(newJoke))
    .catch((err)=> console.log(err))

};

const updateJokeById = (req, res) => {
    const { params, body } = req;
    Joke.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => console.log(err));
};

const deleteJokeById = (req, res) => {
    const { params } = req;
    Joke.findOneAndDelete({ _id: params.id })
        .then(() => res.json({ message: "Joke deleted successfully" }))
        .catch((err) => console.log(err));
};





module.exports={
    getALLJokes,
    getJokebyId,
    createNEWJoke,
    updateJokeById,
    deleteJokeById

};
