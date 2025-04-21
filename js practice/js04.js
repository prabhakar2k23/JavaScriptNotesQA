const users = [
{ name: "Alice", age: 25, active: true },
{ name: "Bob", age: 30, active: false },
{ name: "Charlie", age: 35, active: true },
{ name: "David", age: 40, active: false }
];

function getActiveUsersOver30(users) {
    const result = users
    .filter(user => user.active && user.age > 30)
    .map(user => user.name);

    return result.length > 0 ? result : "No active users over 30.";
}

console.log(getActiveUsersOver30(users));
               
