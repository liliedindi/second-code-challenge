document.querySelector('input.button').addEventListener('click',
    function (){
        alert ('add items')
    }
)
let clearList= document.getElementsByClassName('clear')


document.querySelector('input.clear').addEventListener('click',()=>deleteWholeList)

function deleteWholeList() {
      let listToBeClered=document.getElementsByClassName('list')
       listToBeClered.remove()
      //console.log(listToBeClered)
   }
//deleteWholeList()

//listen for when delete button is clicked
function themButtons(){
    let classArray= document.getElementsByClassName('btn')
    for(let btn of classArray){
        btn.addEventListener('click',deleteItem)
    }
}
themButtons()

// delete item when delete button clicked
function deleteItem(e){
    e.target.parentNode.remove()
}

let classArray = document.getElementsByClassName('bought')

// listen for a click on purchase button then buyItem
function newButtons() {
    for (let btn of classArray) {
        btn.addEventListener('click', buyItem  )
    }
}
newButtons()

//change clolor when item is purchased
function buyItem(e){
    e.target.parentNode.style.color="green"
}