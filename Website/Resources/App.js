
const categories = await fetch('Resources/Colors.json').then((r) => r.json());

const selection = document.getElementById('Categories');
const list = document.getElementById('Colors');

for ( const category of categories ){
    
    const section = document.createElement('div');
    section.dataset.category = category.name;
    
    for ( const color of category.items ){
        
        if(color.color){
            const element = document.createElement('Color');
            element.style.backgroundColor = `rgba(${ color.color.join() })`;
            section.appendChild(element);
            
        } else {
            
            const element = document.createElement('div');
            section.appendChild(element);
            
            const blue = document.createElement('Color');
            blue.style.backgroundColor = `rgba(${ color.blue })`;
            element.appendChild(blue);
            
            const red = document.createElement('Color');
            red.style.backgroundColor = `rgba(${ color.red })`;
            element.appendChild(red);
        }
    }
    
    list.appendChild(section);
    
    
    const selector = document.createElement('input');
    selector.type = 'checkbox';
    selector.checked = true;
    selector.addEventListener('click',() => {
        section.classList.toggle('Unsee');
        setTimeout(() => section.classList.toggle('Unseen'),220);
    });
    selection.appendChild(selector);    
}



document.querySelectorAll('Color').forEach((preview) => {
    preview.addEventListener('click',({ target }) => {
        
        const rgb = target.style.backgroundColor.match(/(\d+), *(\d+), *(\d+)/)?.slice(1,4) ?? [ 0 , 0 , 0 ];
        
        const hex = `#${ rgb.map((channel) => parseInt(channel).toString(16).toUpperCase().padStart(2,'0')).join('') }`;
        
        navigator.clipboard.writeText(hex);
    })
})
