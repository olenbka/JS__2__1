const goods = [
    { title: 'Shirt', price: 150, img: './images/tshirt.png' },
    { title: 'Socks', price: 50, img: './images/socks.jpg' },
    { title: 'Jacket', price: 350, img: './images/jacket.jpg' },
    { title: 'Shoes', price: 250, img: './images/shoes.jpeg' },
  ];

  
  const renderGoodsItem = (title = 'Shirt', price = 200, img) => `<div class="goods-item"><img class="services__icon" width="60" height="60" src="${img}"><h3>${title}</h3><p>${price}</p><button class="button" type="button">Добавить</button></div>`;

  
  const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img)).join("");
    document.querySelector('.goods-list').innerHTML = goodsList;
  }
  
  renderGoodsList(goods);