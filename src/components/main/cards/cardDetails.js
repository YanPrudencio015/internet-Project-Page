


/* 

aqui vai ter um object que vai pegar todos os valores dos planos para compor nos cards
e adicionar no pricing
*/


function formatPrice(price){
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export const CardPricing = [
    {name:"standard",mega:90, price:formatPrice(79.90), downloadValue:90,uploadValue:50,},
    {name:"Iniciante",mega:100, price:formatPrice(105.00), downloadValue:200,uploadValue:100,},
    {name:"Básico",mega:150, price:formatPrice(110.00), downloadValue:300,uploadValue:150,},
    {name:"Top",mega:300, price:formatPrice(115.00), downloadValue:600,uploadValue:300,},
    {name:"Sublime",mega:500, price:formatPrice(150.00), downloadValue:600,uploadValue:300, 
        cdn:[<i className="fa-solid fa-plus"></i>,"CDN TV PLAY para televisões compatíveis"] },
]