

function gerar()
{
    let quantidadeObj = document.getElementById('obj').value;
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
        listaArray.push(`<li><strong class="a">${i++}</strong> - <input type="text">  <input type="number"> <input type="number"></li>`); 
        for (i = 2 ; i <= quantidadeObj; i++)
        {
            listaArray.push(`<li><strong class="a">${i}</strong> - <input type="text">  <input type="number"> <input type="number"></li>`); 
            list.innerHTML = listaArray.join("");
        }
        //console.log(listaArray);
    }
   

}