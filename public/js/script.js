const container = document.querySelector('section')



fetch('http://localhost:5050/3',{method:'POST'}).then(data=>data.json()).then(data=>data.forEach(element => {
 
        const div = document.createElement('div')
        div.setAttribute("class", 'noticia')
        const h1 = document.createElement('h1')
        const p = document.createElement('p')
        h1.innerHTML=element.title
        p.innerHTML=element.texto
        div.appendChild(h1)
        div.appendChild(p)
        container.appendChild(div)
     
}))