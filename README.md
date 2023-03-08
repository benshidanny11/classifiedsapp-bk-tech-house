# Project: Classfieds App(Backend)
> A BK techhouse challenge project
## Built With
- Language: Node js(Javascript runtime environment)
- Framework: Express js
- DBMS: Postgresql
- ORM: Sequelize

## Getting started
To get a local copy of this project, Please follow these simple example steps.
### Prerequisites
- Node js [Get it here](https://nodejs.org/en/)

#### 1. Clone this repository or download the Zip folder:"

```bash command
$ git clone https://github.com/benshidanny11/classifiedsapp-bk-tech-house.git
```
#### 2. Navigate to the location of the folder in your machine:
```bash command
you@your-Pc-name:~$ cd <classifiedsapp-bk-tech-house>
```
#### 3. Press Enter to navigate to your local clone.

#### 4. Type `npm install` to istall dependencies 

#### 4. Type `npm start` to start development server.

Please remember to set environment variables using .env-example provided

## Live server

Please visit [this link](https://classfiedsapp.herokuapp.com/api/) to access live api server.

## EndPoints

Below are the endpoints
 

| **Endpoint**               | **Methods**   | **Functionalities**    |**Data**                        |
| ---------------------------|---------------|------------------------|--------------------------------|
|/user/signup       | POST          | Signpu user     |name: String (Body data), email: String (Body data), Password: String (Body data) |
|/user/login   | POST          | Login user   |email: String (Body data), password: String (Body data)| 
|/product/createnew      | POST           | Create new product    | name: String(Body data), description:String(Body data), image: String(Body data), price: Float(Body data), category: String(Body data), manufacture_date: String(Body data), token: String(Header data)|
|/product/update/{id} | PUT | Update user product  |id: String (Param), name: String(Body data), description:String(Body data), image: String(Body data), price: Float(Body data), category: String(Body data), manufacture_date: String(Body data), token: String(Header data)|
|/product/deleteuserproduct/{id}         | DETETE          |Delete product      |token: String(Header data), id: Number(Param data)|
|product/getone/{id}      | GET          | Get one product | id: Number(Param data)|
|product/getuserproducts      | GET          | Get all products associated with user | token: String(Header data)|

### Author

👤 **Daniel Urimubenshi**

- GitHub: [@benshidanny11](https://github.com/bensidanny11)
- Twitter: [@DBenshi](https://twitter.com/DBenshi)
- LinkedIn: [Daniel Urimubenshi](https://www.linkedin.com/in/danielurimubenshi/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support
