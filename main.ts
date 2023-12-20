// Classe representando um produto
class Product {
    name: string;
    price: number;
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  }
  
  // Variáveis
  let cartQuantity: number = 0;
  
  // Função para adicionar ao carrinho
  function addToCart() {
    cartQuantity++;
    updateCart();
  }
  
  // Função para atualizar a quantidade no carrinho
  function updateCart() {
    const quantityElement = document.getElementById('quantity');
    if (quantityElement) {
      quantityElement.innerText = cartQuantity.toString();
    }
  }
  
  // Função para criar e adicionar elementos na página
  function createElements() {
    const container = document.createElement('div');
    container.classList.add('container');
  
    const h1 = document.createElement('h1');
    h1.textContent = 'Loja Online';
    container.appendChild(h1);
  
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
  
    const img = document.createElement('img');
    img.src = 'caminho_para_sua_imagem.jpg';
    img.alt = 'Nome do Produto';
    img.width = 100;
    img.height = 100;
    productDiv.appendChild(img);
  
    const productName = document.createElement('p');
    productName.textContent = 'Nome do Produto';
    productDiv.appendChild(productName);
  
    const productPrice = document.createElement('p');
    productPrice.textContent = 'R$ 99,99';
    productDiv.appendChild(productPrice);
  
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Adicionar ao Carrinho';
    addToCartButton.addEventListener('click', addToCart);
    productDiv.appendChild(addToCartButton);
  
    container.appendChild(productDiv);
  
    const cartDiv = document.createElement('div');
    cartDiv.classList.add('cart');
  
    const cartHeading = document.createElement('h2');
    cartHeading.textContent = 'Carrinho';
    cartDiv.appendChild(cartHeading);
  
    const quantityText = document.createElement('p');
    quantityText.textContent = 'Quantidade: ';
    cartDiv.appendChild(quantityText);
  
    const quantitySpan = document.createElement('span');
    quantitySpan.id = 'quantity';
    quantitySpan.textContent = '0';
    quantityText.appendChild(quantitySpan);
  
    container.appendChild(cartDiv);
  
    document.body.appendChild(container);
  }
  
  // Chamando a função para criar os elementos na página
  createElements();
  