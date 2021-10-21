const express = require('express');
const cors =require('cors')
const app = express();
// app.use(cors())
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const users = [
  {id:'0',name:'Akash',phone:21739,mail:"mail@.com"},
  {id:'1',name:'Ashraful',phone:21739,mail:"mail@.com"},
  {id:'2',name:'Ariful',phone:21739,mail:"mail@.com"},
  {id:'3',name:'adnan',phone:21739,mail:"mail@.com"},
  {id:'4',name:'ayman',phone:21739,mail:"mail@.com"},
]

app.get('/users', (req, res) => {
  console.log('Get request from useEffect');
  const search = req.query.search;
  // user Query peramter
  if (search) {
    const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
    res.send(searchResult)
  }
  else {
    res.send(users);
  }
})

app.get('/users/:id', (req, res)=> {
  const id = (req.params.id);
  const user = users[id];
  res.send(user)
})
app.get('/vegetables/fruits/mango', (req, res) => {
  res.send("Mango is one of the best fruits in the world ,it is a famous in favourites fruits")
})

app.post('/users', (req, res) => {
  console.log('This is post');
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  // console.log('post hoito kaj korbe',req.body);
  // res.send('post kaj kortase')
  res.json(newUser)
})

app.listen(port, () => {
  console.log('this is port', port);
})