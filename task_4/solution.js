// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data = json.parse(json);
    let product = data.products;
    return product;
    
    // Аргументом функции является JSON

    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data
}
function renderProductsCards(json) {
    clearProducts();
    product = parseProducts(json);
    lennght = product.length;
for (let i = 0; i < lengh; i + 1) {
    addProduct(product[i]);
    }

}
// Напишите функцию renderProductsCards(json)
// Аргументом функции является JSON
// Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
// Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
// Запишите в переменную length значение свойства products.length
// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
