const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts',async(req, res)=>{
    res.status(201).send(posts);
});

app.post('/events',(req , res)=>{
    const { type , data } = req.body

    if( type == "PostCreated"){
        const {id , title} = data;

        posts[id] = { id, title, comments : []}
    }

    if( type == "CommentCreacted")
    {
        const {id , content , postId} = data;

       const post = posts[postId]
       post.comments.push({id , content })
    }
    
    console.log("posts: ",posts);

    res.send({})
})

app.listen(4002,()=>{
    console.log("listening on 4002");
})