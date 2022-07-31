// let select=document.getElementById("selectImage");
// let div=document.getElementById("cityName");


// let imageMap=[
//     {
//         locOption:"Bangalore",
//         locImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Vidhana_Soudha_Bangalore.jpg/300px-Vidhana_Soudha_Bangalore.jpg"
//     },
//     {
//         locOption:"Amritsar",
//         locImage:"https://cdn.audleytravel.com/3987/2848/79/1340503-amritsars-golden-temple.jpg"
//     },
//     {
//         locOption:"Kolkata",
//         locImage:"https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG93cmFoJTIwYnJpZGdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
//     },
// ]
// let output="";
// let select1=document.createElement("select");
// select1.setAttribute("id","clickImage");
// console.log(select1);
// for(let value of imageMap)
// {
//     console.log(value);
//     let {locOption}=value;
   
//     console.log(locOption);
//     output +=` <option value="${locOption}"> ${locOption}</option> `;
//    select1.innerHTML=output;
// }


// document.body.append(select1);
// let image1=document.getElementById("clickImage");
// console.log(image1);

// image1.addEventListener("click",e=>{
//     console.log(e.target.value);
//     for(let value of imageMap)
//     {
       
//         if(value.locOption == e.target.value)
//         {
//             document.body.style.background=`url("${value.locImage}")`;
//         }
        
//     }
// })



let initial=document.getElementById("colors");
let color=["red","green","yellow"];
var i=0;
initial.addEventListener("click",e=>{
   i=i<color.length-1?++i:0;
   document.body.style.background=color[i];
})


