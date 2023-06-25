const init = () => {
 const inputForm =document.querySelector('form');
 inputForm.addEventListener('submit',(e)=>{
    console.log(e +"event is loaded")
 let Input=document.querySelector("#searchByID")   
   e.preventDefault();
   e.target.children[1].value


   //    console.log(e.target.children[1].value)
//console.log(fetch(`http://localhost:3000/movies/${e.target.children[1].value}`))

fetch(`http://localhost:3000/movies/${e.target.children[1].value}`)
.then(response=>response.json())
.then(data=>{
    let title =document.querySelector("#title ")
    let summary =document.querySelector("#summary")

    title.innerText=data.title
    summary.innerText=data.summary
})


 })

}

document.addEventListener('DOMContentLoaded', init);