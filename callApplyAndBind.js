function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
     
      console.log(this.catgory,food.category)
    Product.call(this, name, price);
    this.category = 'food';
    console.log(this.catgory,food.category)
  }
  //console.log(this.catgory,food.category)





