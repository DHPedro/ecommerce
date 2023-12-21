document.addEventListener('DOMContentLoaded', () => {
  const productList: HTMLElement | null = document.getElementById('product-list');

  // Verifique se o elemento existe antes de manipulá-lo
  if (productList) {
    const productsData: { name: string; price: number }[] = [
      { name: 'Produto 1', price: 99.99 },
      { name: 'Produto 2', price: 149.99 },
      { name: 'Produto 3', price: 79.99 },
    ];

    productsData.forEach(product => {
      const productItem: HTMLLIElement = document.createElement('li');
      productItem.textContent = `${product.name} - R$ ${product.price.toFixed(2)}`;

      productList.appendChild(productItem);

      productItem.addEventListener('click', () => {
        alert(`Você clicou em ${product.name}!`);
      });
    });
  }
});
