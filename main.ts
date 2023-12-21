// Selecionando elementos HTML
const productList: HTMLElement | null = document.getElementById('product-list');

// Verificando se o elemento existe antes de manipulá-lo
if (productList) {
  // Array de produtos fictícios
  const productsData: { name: string; price: number }[] = [
    { name: 'Produto 1', price: 99.99 },
    { name: 'Produto 2', price: 149.99 },
    { name: 'Produto 3', price: 79.99 },
  ];

  // Iterando sobre a lista de produtos e adicionando-os ao HTML
  productsData.forEach(product => {
    const productItem: HTMLLIElement = document.createElement('li');
    productItem.textContent = `${product.name} - R$ ${product.price.toFixed(2)}`;

    productList.appendChild(productItem);

    // Adicionando um evento de clique para cada produto
    productItem.addEventListener('click', () => {
      alert(`Você clicou em ${product.name}!`);
    });
  });
}
