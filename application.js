let list_1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"]
let list_2 = ["Adwait", 'Laxman', "Amit", "Adnan", "Nitin", "Gaurav"]

let unique_users_list_1 = []
let unique_users_list_2 = []
let commomn_users = []


for (let i of list_1) {
    if (list_2.includes(i)) {
        continue;
    }
    else {
        unique_users_list_1.push(i)
    }
}

for (let j of list_2) {
    if (list_1.includes(j)) {
        continue;
    }
    else {
        unique_users_list_2.push(j)
    }
}

for (let k of list_1) {
    if (list_2.includes(k)) {
        commomn_users.push(k)
    }
    else {
        continue;
    }
}

console.log(unique_users_list_1)
console.log(unique_users_list_2)
console.log(commomn_users)