

function gerar()
{
    let quantidadeObj = document.getElementById('obj').value;
    let list = document.getElementById('lista');
    var listaArray = [];
    

    if (quantidadeObj == 0 )
    {
        alert("[ERRO] Digite um numero maior que zero!!")
        listaArray.push('')

    }else
    {
        listaArray.push('')
        for (var i = 1; i <= quantidadeObj; i++)
        {
            listaArray.push(`<li><strong class="a">${i}</strong> - <input type="text"></li>`); 
            list.innerHTML = listaArray.join()
        }
    }
   

}