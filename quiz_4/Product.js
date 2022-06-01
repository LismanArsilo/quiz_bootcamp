export default class Product {
  constructor(prodId, prodName, category, price = 0, totalBuy = 1) {
    (this.prodId = prodId),
      (this.prodName = prodName),
      (this.category = category),
      (this.price = price),
      (this.totalBuy = totalBuy),
      (this.subTotal = price * totalBuy);
  }

  setPrice(price) {
    return price.toString();
  }

  setTotalBuy(total) {
    return total.toString();
  }

  toString() {
    return `
id produk : ${this.prodId} 
nama produk : ${this.prodName}
kategori produk : ${this.category}
harga produk : Rp.${this.setPrice(this.price)}
total pembelian : ${this.setTotalBuy(this.totalBuy)} Unit
------------------------------------
sub total harga : ${this.subTotal}
`;
  }
}
