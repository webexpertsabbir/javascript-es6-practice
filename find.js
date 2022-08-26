/* 
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
*/



const product = [
    {id: 1, name: 'Laptop', price: 2000},
    {id: 2, name: 'Iphone', price: 3000},
    {id: 3, name: 'Watch', price: 5000},
    {id: 4, name: 'Tablet', price: 1000},
]

const price5000 = product.find(p => p.price == 5000);
console.log(price5000);