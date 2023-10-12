Project1

```Javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})
```

Project2
```Javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please input a valid height`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please input a valid height`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`
  }
});
```
