/*
const students = [
    { name: "Алексей", scores: [85, 92, 78] },
    { name: "Мария", scores: [95, 87, 92] }
];

function calculateGrate(students) {
    for (const student of students) {
        let average = 0;
        for (const num of student.scores) {
            average += num;
        }
        student.average = Math.floor(average/student.scores.length);

        let grade = "";
        if (student.average >=90) {
            grade = "A";
        } else if (student.average >=80) {
            grade = "B";
        } else if (student.average >=70) {
            grade = "C";
        } else {
            grade = "F"
        }
        student.grade = grade;
    }
    return students


}
console.log(calculateGrate(students))

 */


// const products = [
//     { name: "Ноутбук", price: 50000, category: "электроника" },
//     { name: "Стул", price: 5000, category: "мебель" },
//     { name: "Кофеварка", price: 15000, category: "электроника" }
// ];
// const filters = { maxPrice: 50000, category: "электроника" };
//
// const filterProducts = (products, filters) => {
//     if (!filters || filters.maxPrice === undefined) {
//         return products
//     }
//     let filtered = [];
//     for (const product of products) {
//         if (product.price <= filters.maxPrice && product.category === filters.category) {
//             filtered.push(product);
//         }
//
//     }
//     return filtered;
//
// };
//
// console.log(filterProducts(products, filters))