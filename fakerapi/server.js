const express = require("express")



const app=express()

const PORT = 5000

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// we can create a function to return a random / fake "Product"
const { faker } = require('@faker-js/faker');
const createuser = () => {
    const newFake = {      
        id:faker.database.collation(),
        firstName: faker.person.firstName(),
        lastname: faker.person.lastName(),
        password:faker.internet.password(),
        email:faker.internet.email(),
        phonenumber:faker.phone.number(),
    }
        
    return newFake;
};


const createcompany = () => {
    const newFakecom = {
    id:faker.database.collation(),
    company : faker.company.name() ,
    streetadress:faker.location.streetAddress() ,
    city:faker.location.city(),
    zipcode:faker.location.zipCode(),
    state:faker.location.state(),
    country:faker.location.country(),


}
return newFakecom;

};

const newFakeuser = createuser();
console.log(newFakeuser);

const newFakecompany = createcompany();
console.log(newFakecompany);


app.listen(PORT,()=>{
    console.log(`running server:${PORT}`)
})
app.get("/api/user/new", (req, res) => {
    res.json(newFakeuser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newFakecompany);
});

app.get("/api/user/company",(req,res)=>{
 res.json({newFakeuser,newFakecompany});

})