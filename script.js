
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano ){
        window.alert('[ERRO] Preencha os campos do formulario!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

       if(fsex[0].checked){
            genero ='Homem'
            if(idade >= 0 && idade <= 3){
                //bebe
                img.setAttribute('src', 'baby_boy.jpg')
            }else if(idade < 12){
                //crianca
                img.setAttribute('src', 'kid_boy.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'young_men.jpg')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'adult_man.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'old_man.jpg')
            }
        }

       else{
            genero = 'Mulher'
            if(idade >= 0 && idade <= 3){
                //bebe
                img.setAttribute('src', 'baby_girl.jpg')
            }else if(idade < 12){
                //crianca
                img.setAttribute('src', 'kid_girl.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'young_woman.jpg')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'adult_woman.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'old_woman.jpg')
            }
       }

       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
    
}