<h1 align="center">Triveous Backend Assginment</h1>

<h3 align="center">Tech Used</h3>

  <div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" align="center" alt="nodejs" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" align="center" alt="expressjs"/>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" align="center" alt="mongodb"/>
<img src="https://img.shields.io/badge/mongoose-%2300f.svg?style=for-the-badge&logo=fastify&logoColor=white" align="center" alt="mongoose"/>
<img src="https://img.shields.io/badge/jwt-339933?style=for-the-badge&logo=nodedotjs&logoColor=white%22" align="center" alt="jwt"/>

 </div>

 ## Routes for api

```
POST     /user/login
POST     /user/register
GET      /categorys
GET      /products/category/:categoryId
GET      /products/:productId
GET      /cart
POST     /cart/addToCart
PATCH    /cart/updateCart/:itemId
DELETE   /cart/deleteItem/:itemId
```





  # For User Registation  https://triveousbackend.onrender.com/user/register

  - Body
    
        {
          "name:"Rishu Kumar Nayak",
          "email":"rishunayak22@gmail.com",
          "password":"Rr@887433"
        }
      
  - Response :- 
       
        {msg:"Successfully Registered"}
      
  # For User Login  https://triveousbackend.onrender.com/user/login
  
   - Body

         {
          "password":"rishu",
           "email":"rishunayak22@gmail.com"
         }  
     
   - Response  
   
    {token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmVkOGM5NDZlN2NhYzhmMDhkOTc4OSIsImlhdCI6MTY5MDIyODk1Nn0.kkX4yV2gEZO30pyz-WgJfoNjoWhzF5noAlAp6fUI_4k"}


   # For Getting All Category https://triveousbackend.onrender.com/categorys
   
  - Response 
   
      
           
            [
             {"_id":"64beba4885c6bddac8a3d0cf","name":"Book","__v":0},
             {"_id":"64beba5285c6bddac8a3d0d1","name":"Mobile","__v":0},
             {"_id":"64beba5c85c6bddac8a3d0d3","name":"Shirt","__v":0},
             {"_id":"64beba6885c6bddac8a3d0d5","name":"T-Shirt","__v":0},
             {"_id":"64beba8c85c6bddac8a3d0d7","name":"Toys","__v":0},
             {"_id":"64bebaa085c6bddac8a3d0d9","name":"Beauty","__v":0}
            ]
           
     

   # For Getting All Product With Same Category https://triveousbackend.onrender.com/products/category/:categoryId

   - Response

         [
          {
           "_id": "64bed7d19874c37162ae6612",
           "title": "SSC General Studies 6500 TCS MCQ Chapter Wise English Medium 4th Edition  (Paperback, Pinnacle Publications)",
           "price": 499,
           "description": "SSC General Studies 6500 TCS MCQ Chapter Wise English Medium 4th Edition",
           "availability": true,
            "category": {
                        "_id": "64beba4885c6bddac8a3d0cf",
                        "name": "Book",
                        "__v": 0
                   },
            "__v": 0
           }
         ]
   

# For Getting Specific product Details https://triveousbackend.onrender.com/products/:productId

- Response

      {
      "_id": "64bed7d19874c37162ae6612",
      "title": "SSC General Studies 6500 TCS MCQ Chapter Wise English Medium 4th Edition  (Paperback, Pinnacle Publications)",
      "price": 499,
      "description": "SSC General Studies 6500 TCS MCQ Chapter Wise English Medium 4th Edition",
      "availability": true,
      "category": {
                   "_id": "64beba4885c6bddac8a3d0cf",
                   "name": "Book",
                   "__v": 0
                  },
         "__v": 0
        }

# For Getting all cart details of the User https://triveousbackend.onrender.com/cart

- Headers

      {
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmVkOGM5NDZlN2NhYzhmMDhkOTc4OSIsImlhdCI6MTY5MDIyODk1Nn0.kkX4yV2gEZO30pyz-WgJfoNjoWhzF5noAlAp6fUI_4k"
      }
- Response

      [
      {
       "_id": "64beda543c89289f946c9bc6",
       "user": "64bed8c946e7cac8f08d9789",
       "items": [
                 {
                  "product": {
                              "_id": "64bed7b89874c37162ae660e",
                              "title": "Men Printed Round Neck Cotton Blend Light Blue T-Shirt",
                              "price": 499,
                              "description": "Look confident with this Casual Men T-Shirt It is regular machine wash. This fabric is soft in touch and it makes feel so comfort when you wear. The fabric does not pill and 
                                              the colour will not fade easily.Available in various color and designs for your every day fashion",
                             "availability": false,
                             "category": "64beba6885c6bddac8a3d0d5",
                             "__v": 0
                           },
              "quantity": 2,
              "_id": "64beda8d15ab8f4e5c7399e0"
             }
           ],
      "__v": 3
      }
      ]
    
  
# For Adding Product To Cart https://triveousbackend.onrender.com/cart/addToCart

- Headers

      {
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmVkOGM5NDZlN2NhYzhmMDhkOTc4OSIsImlhdCI6MTY5MDIyODk1Nn0.kkX4yV2gEZO30pyz-WgJfoNjoWhzF5noAlAp6fUI_4k"
      }
    
- Body
 
      {
       productId:"64bed7b89874c37162ae660e"
       quantity:1
      }


- Response

      [
      {
       "_id": "64beda543c89289f946c9bc6",
       "user": "64bed8c946e7cac8f08d9789",
       "items": [
                 {
                  "product": {
                              "_id": "64bed7b89874c37162ae660e",
                              "title": "Men Printed Round Neck Cotton Blend Light Blue T-Shirt",
                              "price": 499,
                              "description": "Look confident with this Casual Men T-Shirt It is regular machine wash. This fabric is soft in touch and it makes feel so comfort when you wear. The fabric does not pill and 
                                              the colour will not fade easily.Available in various color and designs for your every day fashion",
                             "availability": false,
                             "category": "64beba6885c6bddac8a3d0d5",
                             "__v": 0
                           },
              "quantity": 3,
              "_id": "64beda8d15ab8f4e5c7399e0"
             }
           ],
      "__v": 3
      }
      ]
  
# For Updating Any Product in Cart https://triveousbackend.onrender.com/cart/updateCart/:itemId


- Headers

       {
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmVkOGM5NDZlN2NhYzhmMDhkOTc4OSIsImlhdCI6MTY5MDIyODk1Nn0.kkX4yV2gEZO30pyz-WgJfoNjoWhzF5noAlAp6fUI_4k"
       }
    
- Body
 
      {
        quantity:1
      }

- Response


      [
      {
       "_id": "64beda543c89289f946c9bc6",
       "user": "64bed8c946e7cac8f08d9789",
       "items": [
                 {
                  "product": {
                              "_id": "64bed7b89874c37162ae660e",
                              "title": "Men Printed Round Neck Cotton Blend Light Blue T-Shirt",
                              "price": 499,
                              "description": "Look confident with this Casual Men T-Shirt It is regular machine wash. This fabric is soft in touch and it makes feel so comfort when you wear. The fabric does not pill and 
                                              the colour will not fade easily.Available in various color and designs for your every day fashion",
                             "availability": false,
                             "category": "64beba6885c6bddac8a3d0d5",
                             "__v": 0
                           },
              "quantity": 1,
              "_id": "64beda8d15ab8f4e5c7399e0"
             }
           ],
      "__v": 3
      }
      ]






# For Deleting Any Product from Cart https://triveousbackend.onrender.com/cart/deleteItem/:itemId


- Headers

      {
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmVkOGM5NDZlN2NhYzhmMDhkOTc4OSIsImlhdCI6MTY5MDIyODk1Nn0.kkX4yV2gEZO30pyz-WgJfoNjoWhzF5noAlAp6fUI_4k"
      }
    
- Body
 
      {
       itemId:"64bed7b89874c37162ae660e"
      }

- Response

      [
       {
        "_id": "64beda543c89289f946c9bc6",
        "user": "64bed8c946e7cac8f08d9789",
        "items": [],
        "__v": 3
       }
      ]



#  For Getting User Order History https://triveousbackend.onrender.com/order


- Headers

      {
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmVkOGM5NDZlN2NhYzhmMDhkOTc4OSIsImlhdCI6MTY5MDIyODk1Nn0.kkX4yV2gEZO30pyz-WgJfoNjoWhzF5noAlAp6fUI_4k"
      }
    
- Response

      [
       {
       "_id": "64bf66b1bb6ad46b3e0c2f37",
        "user": "64bed8c946e7cac8f08d9789",
        "products": [
      {
        "product": {
          "_id": "64bed7b89874c37162ae660e",
          "title": "Men Printed Round Neck Cotton Blend Light Blue T-Shirt",
          "price": 499,
          "description": "Look confident with this Casual Men T-Shirt It is regular machine wash. This fabric is soft in touch and it makes feel so comfort when you wear. The fabric does not pill and the colour will not 
              fade easily.Available in various color and designs for your every day fashion",
          "availability": false,
          "category": "64beba6885c6bddac8a3d0d5",
          "__v": 0
        },
        "quantity": 2,
        "_id": "64beda8d15ab8f4e5c7399e0"
       }
       ],
          "totalAmount": 998,
       "createdAt": "2023-07-25T06:07:45.377Z",
       "__v": 0
       },
      ]

# For Ordering Product https://triveousbackend.onrender.com/order
- Headers

      {
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmVkOGM5NDZlN2NhYzhmMDhkOTc4OSIsImlhdCI6MTY5MDIyODk1Nn0.kkX4yV2gEZO30pyz-WgJfoNjoWhzF5noAlAp6fUI_4k"
      }

  - Body
    
        {
          products:[],
          totalAmount:1000
        }
    
   - Response
 
         {
             newOrder
         }
     

# For Getting Details of Particular order https://triveousbackend.onrender.com/order/:orderId 
- Headers

      {
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmVkOGM5NDZlN2NhYzhmMDhkOTc4OSIsImlhdCI6MTY5MDIyODk1Nn0.kkX4yV2gEZO30pyz-WgJfoNjoWhzF5noAlAp6fUI_4k"
      }
    
   - Response
 
         {
             order
         }
     
