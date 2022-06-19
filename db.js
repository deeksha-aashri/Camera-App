//connect to database
let db;
let openRequest=indexedDB.open('myDatabase');// we give a name to our db and second arg which is the version of db is optional. By default if no version is given it becomes one.
openRequest.addEventListener('success',()=>{//first type of event that may be triggered on opening request
    console.log('db connected');// connection established so we can call the result now
    db=openRequest.result;
})

openRequest.addEventListener('upgradeneeded',()=>{//second type of event that may be triggered on opneing request
    console.log('db upgraded or initialized db')//if there was no db so, on opening this event will be trigered and db will be initialized. Else if there has been upgrade on db
    db=openRequest.result;//get the result now from db

    db.createObjectStore('video',{keyPath:"id"});//once you have the db create a store which will store the object. here our store is called video and the second argumment is optional which actually gives us a unique id for our store. Here our unique identifier is given as an object property called "id" of the object which will be stores in this store
    db.createObjectStore('image',{keyPath:"id"});//we need another store for images called image. A db may have multiple object-stores.

});
openRequest.addEventListener("error",()=>{//the third and final type of event there may be on trying to open(/connect to) a db
    console.log("db error")
})