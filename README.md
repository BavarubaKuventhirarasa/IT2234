MongoDB
Why we use MongoDB??

=> We use MongoDB when we want a fast, flexible, scalable, easy-to-develop database solution — especially when traditional SQL databases would feel too heavy or rigid.

Key Terms.

Database → Holds collections Collection → Like a table (stores documents) Document → BSON-style object _id → Auto-generated, unique identifier

Create a database and collection

Create Database -> Database Name -> Collection Name -> Create Database

Insert collection of database
Add data -> insert document -> enter the datas -> insert

Display the specific data only in the collection
Project -> {name:1,age:1}- we can get name ,age and id also
project ->{name:1,age:1,_id:0}-we can only get name and age

Find documents

options->project -> find ->{gender:Male}
filter by male students only
findOne = give the first data of the document

Sort the documents
options -> project -> sort ->{gpa:1}-Ascending Order
options -> project -> sort ->{gpa:-1}-Descending Order


In Shell
show databases:-View the exsit databases
use studentdb:-use the studentdb database
show collection:-view the exist collection in specific database
