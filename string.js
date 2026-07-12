let letter = "A"; // ye ek string hai, na ki character type
console.log(typeof letter); // Output: "string"


let name = "Aatif";
// name[0] = "Z";  // ❌ This will NOT change the string

// ✅ Correct way:
let newName = "Z" + name.slice(1);
console.log(newName); // Output: "Zatif"

let multiLineStr = `
    This is a
    Multiline
    String
`;
console.log(multiLineStr);
let user_name = prompt("Enter your fullname without spaces");
var user_name_Should = "@" + user_name + user_name.length;
console.log(user_name_Should);
