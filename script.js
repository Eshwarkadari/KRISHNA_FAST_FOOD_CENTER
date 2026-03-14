const menu = [

{
name:"Chicken Biryani",
price:180,
img:"https://images.unsplash.com/photo-1563379091339-03246963d51a"
},

{
name:"Fried Rice",
price:120,
img:"https://images.unsplash.com/photo-1604908176997-43140c3e65a6"
},

{
name:"Noodles",
price:110,
img:"https://images.unsplash.com/photo-1585032226651-759b368d7246"
},

{
name:"Meals",
price:100,
img:"https://images.unsplash.com/photo-1628294895950-9805252327bc"
}

]


const container = document.getElementById("menu-container")

menu.forEach(item=>{

container.innerHTML += `

<div class="menu-card">

<img src="${item.img}">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="order('${item.name}')">
Order
</button>

</div>

`

})


function order(item){

alert("Order placed for "+item)

}
