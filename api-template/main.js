document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest() { //we use a promise async/await function to practice timing
    const alienVariable = document.querySelector('input').value
    try{
        const response = await fetch(`https://navy-blue-kangaroo-robe.cyclic.app/api/${alienVariable}`) //we await to have this be first
        const data = await response.json() // this saves the json into the data variable
        console.log(data) //this logs our json into the console
    }catch(error){
        console.log(error)
    }
}