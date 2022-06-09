/**
 * hitung sales discount plus tax rate
 * function getSalesDiscount
 */

function getSalesDiscount(price, tax, discount) {
  if (isNaN(price) && isNaN(tax) && isNaN(discount)) {
    return `Price, Tax & Discount harus dalam angkaa`;
  } else if (isNaN(price)) {
    return `Price harus dalam angkaa`;
  } else if (isNaN(tax)) {
    return `Pajak harus dalam angka`;
  } else {
    const disc = (price * discount) / 100;
    const afterDisc = price - disc;
    const pajak = (afterDisc * tax) / 100;
    const total = afterDisc + pajak;

    console.info(`Total Sales 	: Rp. ${price}`);
    console.info(`Discount (${discount}%) 	: Rp.${disc}`);
    console.info(`PriceAfterDiscount 	: Rp.${afterDisc}`);
    console.info(`Pajak (${tax}%) 	: Rp.${pajak}`);
    console.info(`------------------------------------------`);
    return `TotalPayment 	: Rp.${total}`;
  }
}

console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10, 5));
/**
   Total Sales 	: Rp.4500 
   Discount (5%) 	: Rp.225
   PriceAfterDiscount 	: Rp.4275
   Pajak (10%) 	: Rp.427.5
   ----------------------------------
   TotalPayment 	: Rp.4702.5
*/
