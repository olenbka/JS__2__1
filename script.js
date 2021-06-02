class GoodsItem {
    constructor(img, title, price) {
      this.img = img;
      this.title = title;
      this.price = price;
      
    }
    render() {
      return `<div class="goods-item"><img class="services__icon" width="60" height="60" src="${this.img}"><h3>${this.title}</h3><p>${this.price}</p></p><button class="button" type="button">Добавить</button></div>`;
    }
  }
  
  class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150, img: './images/tshirt.png' },
        { title: 'Socks', price: 50, img: './images/socks.jpg'},
        { title: 'Jacket', price: 350, img: './images/jacket.jpg' },
        { title: 'Shoes', price: 250, img: './images/shoes.jpeg' },
      ];
    }
    sum() {
      let listSum = 0;
      this.goods.forEach(good => {
        listSum += good.price;
      
      });
      
      return listSum;
    }
    render() {
      let listHtml = '';
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.img, good.title, good.price);
        listHtml += goodItem.render();
      });
      document.querySelector('.goods-list').innerHTML = listHtml;
    }
  }

  const list = new GoodsList();
  list.fetchGoods();
  list.render();
  
  
  
  class BasketItem {
    constructor(title, price, quantity) {
      this.title = title;
      this.price = price;
      this.quantity = quantity;
    }
    render() {
      return `<div class="basket-item"><h3>${this.title}</h3><p>${this.price}</p><p>${this.quantity}</p><button>Delete item</button></div>`;
    }
  }
  
 
  
  class Basket {
    constructor() {
      this.items = [];
    }
    
    addItem(item) {
      
    }
    
    deleteItem() {
      
    }
    
    removeAllItems() {
    }
}