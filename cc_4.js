// Product Array
const products = [
  { name: "Laptop", category: "electronics", price: 1200, inventory: 5 },
  { name: "Shirt", category: "apparel", price: 25, inventory: 10 },
  { name: "Apple", category: "groceries", price: 1, inventory: 50 },
  { name: "Cleaner", category: "household", price: 8, inventory: 20 },
  { name: "Comic", category: "books", price: 15, inventory: 30 }
];

// Discounts
for (const product of products) {
  let discount = 0;

  switch (product.category) {
    case "electronics":
      discount = 0.2;
      break;
    case "apparel":
      discount = 0.15;
      break;
    case "groceries":
    case "household":
      discount = 0.10;
      break;
    default:
      discount = 0;
  }

  product.discountedPrice = product.price * (1 - discount);
  console.log(`${product.name} after category discount: $${product.discountedPrice.toFixed(2)}`);
}

// Type of Customer Discounts
function getCustomerDiscount(type) {
  if (type === "student") {
    return 0.05;
  } else if (type === "senior") {
    return 0.07;
  } else {
    return 0;
  }
}

// 3 Customers
const customerTypes = ["regular", "student", "senior"];

for (let i = 0; i < 3; i++) {
  const customerType = customerTypes[i];
  let total = 0;

  console.log(`\nCustomer ${i + 1} (${customerType}) checkout:`);

  for (const product of products) {
    if (product.inventory > 0) {
      total += product.discountedPrice;
      product.inventory--;
    }
  }

  // The Discount
  const extraDiscount = getCustomerDiscount(customerType);
  const finalTotal = total * (1 - extraDiscount);

  console.log(`Total before extra discount: $${total.toFixed(2)}`);
  console.log(`Final total after ${extraDiscount * 100}% ${customerType} discount: $${finalTotal.toFixed(2)}`);
}

// Log Product Details
console.log("\nProduct details after discounts (using for...in):");
const sampleProduct = products[0];
for (const key in sampleProduct) {
  console.log(`${key}: ${sampleProduct[key]}`);
}

// Use Object.entries()
console.log("\nAll product info after inventory update:");
for (const product of products) {
  const entries = Object.entries(product);
  for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
  console.log("---");
}
