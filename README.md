# AmazonClone 

FreeCodeCamp.org follow-along course for Flutter e-commerce App.

## Description

This Flutter project covers the complete UI of Amazon including features like auth with email/password, cart, searching products, fetching them based on category, rating them, fetching deal of the day, checking out using GPay Pay, viewing the orders, the details of the order along with their status which can be changed from the admin panel, view total sales and graph of sales based on category.

#### Technologies used

- Flutter
- Node.js
- MongoDB
- Express
- Mongoose
- Cloudinary
- Provider

---

## How To Use

After cloning this repository, migrate to amazon_clonev2 folder. Then:

- Create MongoDB Project & Cluster
- Click on Connect, follow the process where you will get the uri.- Replace the MongoDB uri with yours in server/index.js[const DB="YOURKEY"].
- Head to lib/constants/global_variables.dart file, replace with your IP Address (String uri = http://"YOURIP":3000;).
- Create Cloudinary Project, enable unsigned operation in settings.
- Head to lib/features/admin/services/admin_services.dart, replace denfgaxvg and uszbstnu with your Cloud Name and Upload Preset respectively.

### Dependencies

- http: ^0.13.5
- shared_preferences: ^2.0.15

- provider: ^6.0.4
- badges: ^2.0.3
- carousel_slider: ^4.1.1
- dotted_border: ^2.0.0+3
- file_picker: ^5.2.3
- cloudinary_public: ^0.20.0
- flutter_rating_bar: ^4.0.1
- pay: ^1.0.11
- intl: ^0.17.0
- charts_flutter_new: ^0.12.0

---

## Demo

- User Side

 <img src="https://user-images.githubusercontent.com/108269074/205439621-d49ed375-0a4a-4786-ac83-c6ee9ecddaf4.gif" height=650)>
  
  
<img src="https://i.imgur.com/6u2X03u.png" height=200>      <img src="https://i.imgur.com/AhJY7Ju.png" height=200>       <img src="https://i.imgur.com/097gFlI.png" height=200>      <img src="https://i.imgur.com/wnXGPIy.png" height=200>      <img src="https://i.imgur.com/Y9jxRlU.png" height=200>      <img src="https://i.imgur.com/ue9wtDT.png" height=200>


---

## Author Info

- LinkedIn - [@Mehmed](https://www.linkedin.com/in/meša-selimović-18b189251/)

[Back To The Top](#AmazonClone)

