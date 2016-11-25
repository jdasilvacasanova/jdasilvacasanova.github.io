function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var Produtos = [
{ID:"1",Nome:"Bitoque", Página:"Carne",Preço:"11",Descrição:"Batatas Fritas, arroz, bife de vaca, salada, ovo estrelado", Imagem: "resources/bitoque.jpg", Activo:true},
{ID:"2",Nome:"Mousse de chocolate", Página:"Sobremesas",Preço:"2",Descrição:"Mousse de chocolate", Imagem: "resources/mousse.jpg", Activo:false},
{ID:"3",Nome:"Bacalhau á Braz", Página:"Peixe",Preço:"13",Descrição:"Bacalhau, etc...", Imagem: "resources/bacalhau.jpg", Activo:true}];

if(localStorage.getItem('produtos')==null){
	localStorage.setItem('produtos',JSON.stringify(Produtos));
}
else{
	Produtos = JSON.parse(localStorage.getItem('produtos'));
}

var Utilizadores = [
{ID:"1",Nome:"John Smith", Nivel:"Administrador",Email:"JohnSmith@restaurant.com",Password:"Password", Imagem: "resources/JohnSmith.jpg",Activo:true},
{ID:"2",Nome:"John Cook", Nivel:"Empregado",Email:"JohnCook@restaurant.com",Password:"Password", Imagem: "resources/JohnCook.jpg",Activo:true}];

if(localStorage.getItem('utilizadores')==null){
	localStorage.setItem('utilizadores',JSON.stringify(Utilizadores));
}
else{
	Utilizadores = JSON.parse(localStorage.getItem('utilizadores'));
}

var Mesas = [
{ID:"1",Nome:"Mesa 1", Tipo:"Balcao",Capacidade:"1",Activo:true},
{ID:"2",Nome:"Mesa 2", Tipo:"Balcao",Capacidade:"1",Activo:true},
{ID:"3",Nome:"Mesa 3", Tipo:"Mesa",Capacidade:"4",Activo:true}];

if(localStorage.getItem('mesas')==null){
	localStorage.setItem('mesas',JSON.stringify(Mesas));
}
else{
	Mesas = JSON.parse(localStorage.getItem('mesas'));
}

var Paginas = [
{ID:"1",Nome:"Inicio", SubPaginaDe:"",Ordem:"1",Imagem:"resources/Inicio.jpg",Activo:true},
{ID:"2",Nome:"Carne", SubPaginaDe:"Inicio",Ordem:"1",Imagem:"resources/Carnes.jpg",Activo:true},
{ID:"3",Nome:"Peixe", SubPaginaDe:"Inicio",Ordem:"2",Imagem:"resources/Peixe.jpg",Activo:true},
{ID:"4",Nome:"Sobremesas", SubPaginaDe:"Inicio",Ordem:"3",Imagem:"resources/Sobremesas.jpg",Activo:true},
{ID:"5",Nome:"Entradas", SubPaginaDe:"Inicio",Ordem:"4",Imagem:"resources/Entradas.jpg",Activo:true},
];

if(localStorage.getItem('paginas')==null){
	localStorage.setItem('paginas',JSON.stringify(Paginas));
}
else{
	Paginas = JSON.parse(localStorage.getItem('paginas'));
}