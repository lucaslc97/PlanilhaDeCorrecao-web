//VueJS 

var pagina1 = new Vue({
    el: '#pag1',
    data: {
      status: true
    }
  })

  var pagina2 = new Vue({
    el: '#pag2',
    data: {
      status: false
    }
  })

  var pagina3 = new Vue({
    el: '#pag3',
    data: {
      status: false
    }
  })

  var pagina4 = new Vue ({
    el : "#pag4",
    data: {
        status: false
    }

  })



//Javascript puro
function gerar()
{
    let quantidadeObj = document.getElementById('obj').value;
    let quantidadeQtd = document.getElementById('qtd').value;
    
    

    let list = document.getElementById('lista');
    var listaArray = [];
    
    


    if ((quantidadeObj == 0 ) || (quantidadeQtd == 0 ))
    {
        alert("[ERRO] Digite um numero maior que zero!!");
        listaArray = [];
    }
    else
    {

        alert(isNaN(quantidadeQtd))
        listaArray = [];
        var i; 

        document.getElementById('objq').innerHTML = "<strong> Objetivos |  Questões</strong>"
        document.getElementById('ate').innerHTML = "De - Até"

        for (i = 1 ; i <= quantidadeObj; i++)
        {
            listaArray.push(`<li><strong class="a">${i}</strong> - <input type="text">  <input type="number"> <input type="number"></li>`); 
            list.innerHTML = listaArray.join("");
        }
    }
   

}

function avancar()
{
    
    if(pagina1.status == true)
        {
            pagina1.status = false;
            pagina2.status = true; 
        }
    else if (pagina2.status == true)
        {
            pagina2.status = false; 
            pagina3.status = true;
        }
    else if (pagina3.status == true )
        {
            pagina3.status = false;
            pagina4.status = true;
        }
}

gabarito()

function gabarito()
{

  var gabaritoQTD = this.quantidadeQtd

  alert(gabaritoQTD)
  
  

}
