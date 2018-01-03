//document.getElementById('pizzeria-image').innerHTML='<img src="images/pizzeria-100.webp" srcset="images/200_pizzeria.webp 200w, images/400_pizzeria.webp 400w, images/600_pizzeria.webp 600w, images/800_pizzeria.webp 800w" alt="the restaurant" class="img-responsive">  <!-- Image credit to: http://commons.wikimedia.org/wiki/File:HK_TST_night_%E5%98%89%E8%98%AD%E9%81%93_Granville_Road_restaurant_Paisanos_Pizzeria_pizza_Dec-2013.JPG -->';
var image = document.createElement('img');
image.alt="the restaurant";
image.src="images/pizzeria-100.webp";
image.class="img-responsive";
image.srcset="images/200_pizzeria.webp 200w, images/400_pizzeria.webp 400w, images/600_pizzeria.webp 600w, images/800_pizzeria.webp 800w";
document.getElementById('pizzeria-image').appendChild(image);
