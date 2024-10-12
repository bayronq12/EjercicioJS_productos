import { Product } from "./Product.js";
import { UI } from "./UI.js";

//DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function (e){
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const product = new Product(name, price, year);

        const ui= new UI();
        if(name === '' || price === '' || year=== '' ){
            return ui.showMessage('Por favor, llenar cada uno de los campos','danger');
        }
        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage('¡Producto agregado correctamente!', 'success');

        e.preventDefault();
    });

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
});