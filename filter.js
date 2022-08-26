/* 
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

 */
const number = [10, 20, 30, 3, 9, 6, 11, 50, 100];

const oddNumber = number.filter(number => number % 2 !== 0);
console.log(oddNumber);