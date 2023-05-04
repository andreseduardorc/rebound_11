
  
const apiUrl_2 ='https://geek-jokes.sameerkumar.website/api?format=json'

function getJokes(apiUrl_2){
   return fetch(apiUrl_2)
   .then(res => res.json())
   .then(data =>{
    return data;
    
   })
   .catch(error => {
    console.error('error', error)
   })
}

const jokes = document.createElement('p')
jokes.classList.add('card', 'box_1','center')
document.body.appendChild(jokes)

const button = document.createElement('button')
button.textContent = 'Genera una broma'
button.classList.add('btn', 'btn-primary', 'my-5', 'center')
document.body.appendChild(button)

button.addEventListener('click', () => {
    getJokes(apiUrl_2)
    .then(data =>{
        console.log(data);
        jokes.textContent = data.joke;
    })
})
