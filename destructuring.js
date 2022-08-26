/*
 ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  
*/

const student ={
    name: 'Maisha',
    collage: 'Rajshahi',

}

const {name, collage} = student;
console.log(name);

/*
 ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
 */


const [first, second, third] = [12, 30, 40, 50];
const three = third;
console.log(three);