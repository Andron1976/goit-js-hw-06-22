const itemCount = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemCount.length}`);

const itemText = document.querySelectorAll('h2');
itemText.forEach((item) => {
    console.log(`Category: ${item.textContent}`);
    console.log(`Elements: ${item.nextElementSibling.children.length}`);
})