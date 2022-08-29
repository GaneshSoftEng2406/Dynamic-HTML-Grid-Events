var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}




   var products = document.getElementById("product-list");


    var leftSide=document.createElement("div");
    leftSide.className="left-side";


    var images = document.createElement("img");
    images.setAttribute("id", "imgId");
    images.className="imgg"
    images.src=productData.preview;
    images.alt=productData.name 
    leftSide.append(images);
    // products.append(main);


    var rightSide=document.createElement("div")
    rightSide.className="right-side"

    var allInfo=document.createElement("div");
    allInfo.className= "allInfor";
    rightSide.appendChild(allInfo);

    var pName = document.createElement("h1");
    pName.className="h1";
    pName.innerText=productData.name;
     
         // Appended Name into rightSide Div
     allInfo.appendChild(pName)


    var brand  = document.createElement("h4");
    brand.className="h4";
    brand.innerText=productData.brand;

         // Appended Brand into rightSide Div

     allInfo.appendChild(brand)

// price
var price = document.createElement("h3");
price.className = "price";
price.innerText = "Price: Rs ";

// Appended Price into rightSide Div
   allInfo.appendChild(price)

// price value span
var priceValue = document.createElement("span");
priceValue.className = "pValue";
priceValue.innerText = productData.price;
price.appendChild(priceValue);

                
     


    var child = document.createElement("div")
    child.className="child"
     allInfo.appendChild(child)

    var description=document.createElement("h3");
    description.className="desc";
    description.innerText="Description";
  child.appendChild(description);


    var description1=document.createElement("p");
    description1.className="desc1";
    description1.innerText=productData.description;
  child.appendChild(description1);


    var productPreview=document.createElement("h3");
    productPreview.className="desc2";
    productPreview.innerText="Product Preview";
    child.appendChild(productPreview);



 var child2=document.createElement("div")
    child2.setAttribute("id", "child2");
    child2.className="child2"
    allInfo.appendChild(child2);



  
  // Product Preview Image 0
  var photo0 = document.createElement("img");
  photo0.src = productData.photos[0];
          photo0.className="picS"
  // Product Preview Image 1
  var photo1 = document.createElement("img");
      photo1.className="pics"
  photo1.src = productData.photos[1];

  // Product Preview Image 2
  var photo2 = document.createElement("img");
photo2.className="pics"
  photo2.src = productData.photos[2];

  // Product Preview Image 3
  var photo3 = document.createElement("img");
photo3.className="pics"  
photo3.src = productData.photos[3];

  // Product Preview Image 4
  var photo4 = document.createElement("img");
photo4.className="pics"  
photo4.src = productData.photos[4];
child2.append(photo0,photo1,photo2,photo3,photo4)

  // ---------------- Change Preview Image OnClick -------
  function changeImage() {
    // Photo 0
    photo0.addEventListener("click", function() {
      imgId.src = productData.photos[0];
    });

    // Photo 1
    photo1.addEventListener("click", function() {
      imgId.src = productData.photos[1];
    });
    // Photo 2
    photo2.addEventListener("click", function() {
      imgId.src = productData.photos[2];
    });

    // Photo 3
    photo3.addEventListener("click", function() {
      imgId.src = productData.photos[3];
    });

    // Photo 4
    photo4.addEventListener("click", function() {
      imgId.src = productData.photos[4];
    });

    
  }
  changeImage();
// }
   //create button
var button = document.createElement("div");
    button.className="btn";
 rightSide.appendChild(button);

    var btN=document.createElement("button");
    btN.className="btN";
    btN.innerText="Add to Card";
       button.appendChild(btN);


        // these are appended into products Div
   products.append(leftSide,rightSide);



   

