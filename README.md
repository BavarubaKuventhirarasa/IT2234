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

some output pictures
Insert the data
![mongoshellinsertdata](https://github.com/user-attachments/assets/5309cefa-9178-45e4-afa6-bf7e79c4b2f8)

![insert2](https://github.com/user-attachments/assets/876a153d-1b3e-4ede-8a5b-19ea61d468a9)

Sort the data
![sort](https://github.com/user-attachments/assets/9f942325-b8e3-4df2-a241-d85bb9d77285)

using shell to find the data

![shellfind](https://github.com/user-attachments/assets/d8b43934-52fb-46f0-8fd8-797a77011367)
