function verificar(){
    var data = new Date(); 
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        // Criando a tag img escrito e atribuindo o id e a mesma com o nome foto
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Masculino'

            if ( idade >= 0 && idade < 15){
                img.setAttribute('src', './EX15/foto-bebe-h.png') 
                //criança
            } else if (idade < 30){
                img.setAttribute('src', './EX15/foto-adolescente-h.png') 
                //jovem
            } else if (idade < 59){
                img.setAttribute('src', './EX15/foto-jovem-h.png')
                //adulto
            } else {
                img.setAttribute('src', './EX15/foto-idoso-h.png')
                //idoso
            
            }
        } else if (fsex[1].checked){ 
            genero = 'Feminino'

            if ( idade >= 0 && idade < 15){
                img.setAttribute('src', './EX15/foto-bebe-m.png')
                //criança
            } else if (idade < 30){
                img.setAttribute('src', './EX15/foto-adolescente-m.png')
                //jovem
            } else if (idade < 59){
                img.setAttribute('src', './EX15/foto-jovem-m.png')
                //adulto
            } else {
                img.setAttribute('src', './EX15/foto-idoso-m.png')
                //idoso
            
            }

        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} HUGO com ${idade} anos`;
        res.appendChild(img)
    }
} 