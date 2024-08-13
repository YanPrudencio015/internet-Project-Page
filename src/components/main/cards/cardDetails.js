


/* 

aqui vai ter um object que vai pegar todos os valores dos planos para compor nos cards
e adicionar no pricing
*/

function formatPrice(price){
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export const CardPricing = [
    {name:"standard",price:formatPrice(79.90), downloadValue:90,uploadValue:50,},
    {name:"standard",price:formatPrice(105.00), downloadValue:200,uploadValue:100,},
    {name:"standard",price:formatPrice(110.00), downloadValue:300,uploadValue:150,},
    {name:"standard",price:formatPrice(115.00), downloadValue:600,uploadValue:300,},

    {name:"standard",price:formatPrice(79.90), downloadValue:90,uploadValue:50,},
    {name:"standard",price:formatPrice(105.00), downloadValue:200,uploadValue:100,},
    {name:"standard",price:formatPrice(110.00), downloadValue:300,uploadValue:150,},
    {name:"standard",price:formatPrice(115.00), downloadValue:600,uploadValue:300,},

    {name:"standard",price:formatPrice(79.90), downloadValue:90,uploadValue:50,},
    {name:"standard",price:formatPrice(105.00), downloadValue:200,uploadValue:100,},
    {name:"standard",price:formatPrice(110.00), downloadValue:300,uploadValue:150,},
    {name:"standard",price:formatPrice(115.00), downloadValue:600,uploadValue:300,},
]