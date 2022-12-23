const criptografia = document.querySelector(".criptografia")

criptografia.addEventListener("click",()=>{
    let mudarTexto = document.querySelectorAll('.mudarTexto')
    let valor = prompt('Escreva')

    for(i = 0 ;i < 10;i++){
        switch(i){
            case 1:mudarTexto[0].outerHTML = `
            <p class='conteudo__text'>11956314564138756138756</p>
        `
        mudarTexto[1].outerHTML = `
            <p class='conteudo__text'>151519756197659185618756</p>
        `
                break;
            case 2:mudarTexto[0].outerHTML = `
            <p class='conteudo__text'>15141165178956198761856</p>
        `
        mudarTexto[1].outerHTML = `
            <p class='conteudo__text'>1456185617561875</p>
        `
                break;
                case 3:mudarTexto[0].outerHTML = `
                <p class='conteudo__text'>1515178516875618756187</p>
            `
            mudarTexto[1].outerHTML = `
                <p class='conteudo__text'>151475169785691875619875</p>
            `
                    break;
        }
    }
    mudarTexto[0].outerHTML = `
        <p class='conteudo__text'>${valor}</p>
    `
    mudarTexto[1].outerHTML = `
        <p class='conteudo__text'>${valor}</p>
    `
})