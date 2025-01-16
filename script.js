const botonEnviar = document.querySelector('[enviar-boton]');
const botonLimpiar = document.querySelector('[limpiar-boton]');
const listaProductos = document.querySelector('.productos_container__lista');
const inputNombre = document.querySelector('[nombre]');
const inputPrecio = document.querySelector('[precio]');
const inputImagen = document.querySelector('[imagen]');

const productos = [
    {
        nombre: "Game Boy Classic",
        precio: "60",
        foto: "https://s3-alpha-sig.figma.com/img/d558/49ab/5123b06dc2b03005a463881f216b87f1?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJL3jv36tgVsDihh1LuQhVJQGVU0RHSxMuEyS5qRqSL3LSeIaTObLjKGbtF2zm6IcTe~Z~OYrLNSKSdgaBuDlpjKFtddhcLlBLmRb6Mz~9kULycwJY2frZezY9OBwlm~zHOWamJuo64nyREgdW5Y8IGEFIZmQlbsq8sTxZutJOw-RqKjJ9gd7gUh1~ft3-zwbSqJRUp8EbSnOzyoAMrkp3r1vk4OzLlIWvjzvuM0sM7hWbN-m93YYhevjLLXgMadiJCu4DjFF1Jhp62XdLIrmvs97b0l3x3OiIiPDLSFmgQoWxkgKL-ytGznFhOX27TMM5pYsjmN6b9pkD2R87vBKg__"
    },
    {
        nombre: "Stormtrooper",
        precio: "80",
        foto: "https://s3-alpha-sig.figma.com/img/7288/617c/839c11fc3105027e126215f3647fa5b0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l2UoJSwyjl0Q7UOZ08ZhWSsNGw6qZgObHChd7J5lrKA1IiW0JXh2JXAkksw1ZHkBvzjCfblR7TJaDXd7rXydbT88bd60Mu5mh2e~Fu~2EkIXslHr1U77~yf3FxKTAq-CsaiO14HcVxqhcN2biga3Xot8v894dxw0LtynaSIoPPgxp0t-kj0CqnI3uyM64L~WmWahkl~rPYFEzBG2lYgA8ndwM-LEynY3UILkxCG3-To1CGe~-NJx8T7IEiXfCSXNdwb~pjZLazCRJsoZttrUFRCbPdcY0x5cKGBp~je7Li~4z-BmqwcyuIL9QXgVr4PU4pmaGtSd~LCh3-w8QiBL2A__"
    },
    {
        nombre: "Game Boy Color",
        precio: "100",
        foto: "https://m.media-amazon.com/images/I/71YDNC98aaL.jpg"
    }
];


function agregarProductoAlDOM(producto) {
    const productoItem = document.createElement('li');
    productoItem.className = 'producto';
    productoItem.innerHTML = `
        <img class="producto__imagen" src="${producto.foto}" alt="imagen"/>
        <p>${producto.nombre}</p>
        <p>$ ${producto.precio},00</p>
        <img class="caneca" src="assets/trash.png" alt="Eliminar producto" />
    `;
    const caneca = productoItem.querySelector('.caneca');
    caneca.addEventListener('click', () => {
        listaProductos.removeChild(productoItem);
        const index = productos.indexOf(producto);
        if (index !== -1) {
            productos.splice(index, 1);
        }
    });
    listaProductos.appendChild(productoItem);
}

function limpiarFormulario() {
    inputNombre.value = '';
    inputPrecio.value = '';
    inputImagen.value = '';
}

botonEnviar.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    const precio = inputPrecio.value.trim();
    const foto = inputImagen.value.trim();

    if (nombre && precio && foto) {
        const nuevoProducto = { nombre, precio, foto };
        productos.push(nuevoProducto);
        agregarProductoAlDOM(nuevoProducto);
        limpiarFormulario();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

botonLimpiar.addEventListener('click', limpiarFormulario);

productos.forEach(agregarProductoAlDOM);
