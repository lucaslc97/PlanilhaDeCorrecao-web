   

function gerar()
{
    let quantidadeObj = document.getElementById('obj').value;
    let quantidadeQtd = document.getElementById('qtd').value;
    let list = document.getElementById('lista');
    var listaArray = [];
    

    if (quantidadeObj == 0 )
    {
        alert("[ERRO] Digite um numero maior que zero!!");
        listaArray = [];

    }else
    {
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

    if ((this.quantidadeObj == 0) || (this.quantidadeQtd == 0 ))
    {
        alert('[ERRO]Por favor preencha todos os campos')

    }




}