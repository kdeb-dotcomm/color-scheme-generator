
// tryg to fetch from the color scheme api

// fetch('https://www.thecolorapi.com/scheme?hex=0047AB&mode=monochrome')
//     .then(res => res.json())
//     .then(data => { 
//         console.log(data);
//         const colors = data.colors;
//         colors.map(color => { 
//             const colorDiv = document.createElement('div');
//             colorDiv.style.backgroundColor = color.hex.value;
//             colorDiv.style.width = '100px';
//             colorDiv.style.height = '100px';
//             document.body.appendChild(colorDiv);
//         })
//     })
// let me just set up our body for the project
const bigContainer = document.querySelector('.container');

//let create an input type of color
const colorPicker = document.createElement('div')
colorPicker.classList.add ('colorPicker') 
colorPicker.innerHTML = `<input type = 'color'>`
bigContainer.append(colorPicker)

// let create a select dropdown for the color scheme options
const select = document.createElement('div')
select.classList.add ('select')
select.innerHTML = `<select id = 'themes'>
<option value = 'monochrome'>Monochrome</option>
<option value = 'monochrome-dark'>Monochrome-dark</option>
<option value = 'monochrome-light'>Monochrome-light</option>
<option value = 'analogic'>Analogic</option>
<option value = 'complement'>Complement</option>
<option value = 'analogic-complement'>Analogic-complement</option>
<option value = 'triad'>Triad</option>
<option value = 'quad'>Quad</option>
`
bigContainer.append(select)

// let create a button to fetch the color scheme
const button = document.createElement('div')
button.classList.add ('button')
button.innerHTML = `<button id ='btn'>Get Color Scheme</button>`
bigContainer.append(button)

// before let get a conatainer to hold the colr picker, the select and the button
const inputContainer = document.createElement('div')
inputContainer.classList.add ('inputContainer')
inputContainer.append(colorPicker, select, button)
bigContainer.append(inputContainer)

// let create a container to hold the color scheme
const colorSchemeContainer = document.createElement('div')
colorSchemeContainer.classList.add ('colorSchemeContainer')
bigContainer.append(colorSchemeContainer)

// now let add an event listener to the button
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    // get the color value from the color picker
    const color = document.querySelector('input[type="color"]').value.slice(1);
    // get the selected theme from the dropdown
    const theme = document.getElementById('themes').value;
    // fetch the color scheme from the api
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${theme}`)
        .then(res => res.json())
        .then(data => {
            // clear the previous color scheme
            colorSchemeContainer.innerHTML = '';
            const colors = data.colors;
            colors.map(color => {
                const colorDiv = document.createElement('div');
                colorDiv.classList.add('colorDiv');
                colorDiv.style.width = '11vw';
                colorDiv.style.height = '45vh';
                colorDiv.style.display = 'inline-block';
                colorDiv.style.backgroundColor = color.hex.value;
                colorDiv.style.margin = '5px';
                // let add the hex value to the div
                const hexValue = document.createElement('p');
                hexValue.innerText = color.hex.value;
                hexValue.style.textAlign = 'center';
                hexValue.style.color = '#fff';
                colorDiv.appendChild(hexValue);
                colorSchemeContainer.appendChild(colorDiv);
            })
        })
})

