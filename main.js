const paragraph = document.querySelector('p')
//changes the color of the paragraph
paragraph.style.color = 'lightblue'
// changes the text of the paragraph
paragraph.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpresss'


const heading = document.querySelector('h1')
//changes the size of the font for the header
heading.style.fontSize ='5em'

const item13 = document.querySelector('#item-13')
//changes the text's transparency
item13.style.opacity = '0.5'

const item3 = document.querySelector('#item-3')
//changes the text's text
item3.innerText = 'I say,"Hi!"'

const image = document.querySelector('img')
//changes the image.. adds a source
image.src ='http://www.tioxic.com/wp-content/uploads/trex_4.jpg'
//changes the size of the image
image.style.height = '300px'

//manually added a new picture in the html
const pinkDino = document.querySelector('#secondDino')
//changed the height of the image
pinkDino.style.height ='300px'

//add a list item using JS
const addedLI = document.createElement('li')
addedLI.className = 'item'
addedLI.id = '#item-16'
// addedLI.setAttribute('id','#item-16');
// give the same class as the others
// addedLI.element.classList.add('.item')
addedLI.innerText ='Won\'t get fooled again'
const list = document.querySelector('ul')
list.appendChild(addedLI)