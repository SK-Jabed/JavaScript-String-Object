const address = "Dhaka";
const part = address.slice(0, 3);
console.log(part);

// const sentence = "I am a good and hardworking person";
// console.log(sentence.split());

// const sentence = "I am a good and hardworking person";
// console.log(sentence.split(''));

const sentence = "I am a good and hardworking person";
// console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendsStr = "Rahim, Karim, Mahim, Fahim, Ibrahim";
const friends = friendsStr.split(",");
console.log(friends);

const realFriend = ["Rahim", "Karim", "Mahim", "Fahim", "Ibrahim"];
console.log(realFriend.join());
console.log(realFriend.join("|"));
console.log(realFriend.join("-"));
