const students = [
    { id: 21, name: "omar sunny" },
    { id: 23, name: "Sakib khan" },
    { id: 25, name: "Arifin shuvo" }
];
// let name = []
// for (let i = 0; i < students.length; i++) {
//     name = students[i].name;
//     console.log(name);
// }

const names = students.map(s => s.name);
const ids = students.map(i => i.id)
const getId = students.filter(get => get.id > 22);
console.log(names);
console.log(ids);
console.log(getId);