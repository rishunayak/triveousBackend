<h1 align="center">Triveous Backend Assginment</h1>

<h3 align="center">Tech Used</h3>

  <div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" align="center" alt="nodejs" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" align="center" alt="expressjs"/>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" align="center" alt="mongodb"/>
<img src="https://img.shields.io/badge/mongoose-%2300f.svg?style=for-the-badge&logo=fastify&logoColor=white" align="center" alt="mongoose"/>
<img src="https://img.shields.io/badge/jwt-339933?style=for-the-badge&logo=nodedotjs&logoColor=white%22" align="center" alt="jwt"/>

 </div>



# path

  ## `(post) user/register :`
   
    
      {
        "name:"Rishu Kumar Nayak",
        "email":"rishunayak22@gmail.com",
        "password":"rishu"
      }
      
  Response :- 
       
        {msg:"Successfully Registered"}
      
  ## `(post) user/login :`
   

     {
        "password":"rishu",
        "email":"rishunayak22@gmail.com"
     }  
     
   Response  
   
    {token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmVkOGM5NDZlN2NhYzhmMDhkOTc4OSIsImlhdCI6MTY5MDIyODk1Nn0.kkX4yV2gEZO30pyz-WgJfoNjoWhzF5noAlAp6fUI_4k"}


   ## `(get) categorys/ :`
   Response 
   
      
           {
            [
             {"_id":"64beba4885c6bddac8a3d0cf","name":"Book","__v":0},
             {"_id":"64beba5285c6bddac8a3d0d1","name":"Mobile","__v":0},
             {"_id":"64beba5c85c6bddac8a3d0d3","name":"Shirt","__v":0},
             {"_id":"64beba6885c6bddac8a3d0d5","name":"T-Shirt","__v":0},
             {"_id":"64beba8c85c6bddac8a3d0d7","name":"Toys","__v":0},
             {"_id":"64bebaa085c6bddac8a3d0d9","name":"Beauty","__v":0}
            ]
           }
     

   ## `(get) products/category/:categoryId : (categoryId=64beba4885c6bddac8a3d0cf)`

   Response

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


## `(get) products/:productId : (productId=64bed7d19874c37162ae6612)`

Response

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


    
  




