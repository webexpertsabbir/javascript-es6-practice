/* ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের 
কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে
 ভাগ করে আউটপুট দিবে। */

 const quotient = (number) => number / 5;
 const number1 = quotient(20);
//  console.log(number1)

/* ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  */

const number = (first, second) => {
    const total1 = first + 2;
    const total2 = second + 2;
    const total = total1 * total2;
    // console.log(total)
};
const sum = number(10, 20)

