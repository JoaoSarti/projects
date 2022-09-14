function carregar(){
    
    var msg = document.querySelector('#msg')
    var foto = document.querySelector('.imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 6){
        foto.src = './img/fotomadrugada.jpg'
        document.body.style.background = '#2e3142'
    }else if(hora >= 6 && hora < 12){
        foto.src = './img/fotomanha.jpg'
        document.body.style.background = '#164d76'
    }else if(hora >= 12 && hora < 18){
        foto.src = './img/fototarde.jpg'
        document.body.style.background = '#eca577'
    }else{
        foto.src = './img/fotonoite.jpg'
        document.body.style.background = '#a584bb'
    }
    

}