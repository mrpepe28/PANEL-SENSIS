// script.js
const brands = ["Apple", "Samsung", "Xiaomi", "Huawei", "Oppo", "Vivo", "Realme", "OnePlus", "Motorola", "Sony", "Google Pixel", "Asus", "Nokia", "Honor", "Lenovo", "ZTE", "LG", "Meizu", "Alcatel", "Tecno", "Infinix", "Itel", "BlackBerry", "Sharp", "Panasonic", "Coolpad", "Micromax", "Lava", "Karbonn", "Blu", "Essential", "Fairphone", "Gionee", "LeEco", "Ulefone", "Doogee", "Cubot", "Elephone", "Umidigi", "Cat", "Energizer", "Hisense", "TCL", "Microsoft", "Vertu", "iQOO", "Nothing", "Redmi", "Poco", "HTC"];
document.getElementById("marcas").innerHTML = brands.map(brand => `<option value="${brand}">${brand}</option>`).join('');

function checkPassword() {
    if (document.getElementById('password').value === 'hackstorepepe') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('panel').classList.remove('hidden');
    } else {
        alert('Contraseña incorrecta');
    }
}

function iniciarCuentaRegresiva() {
    let contador = 5;
    document.getElementById('contador').classList.remove('hidden');
    document.getElementById('generar-btn').disabled = true;
    document.getElementById('contador').innerText = `Generando en ${contador}...`;
    
    let intervalo = setInterval(() => {
        contador--;
        document.getElementById('contador').innerText = `Generando en ${contador}...`;
        if (contador === 0) {
            clearInterval(intervalo);
            document.getElementById('contador').classList.add('hidden');
            document.getElementById('generar-btn').disabled = false;
            generarValores();
            iniciarCuentaRegresivaRegenerar();
        }
    }, 1000);
}

function iniciarCuentaRegresivaRegenerar() {
    let contador = 20;
    document.getElementById('contador-regenerar').classList.remove('hidden');
    document.getElementById('regenerar-btn').disabled = true;
    document.getElementById('contador-regenerar').innerText = `Regenerar en ${contador}...`;
    
    let intervalo = setInterval(() => {
        contador--;
        document.getElementById('contador-regenerar').innerText = `Regenerar en ${contador}...`;
        if (contador === 0) {
            clearInterval(intervalo);
            document.getElementById('contador-regenerar').classList.add('hidden');
            document.getElementById('regenerar-btn').disabled = false;
        }
    }, 1000);
}

function generarValores() {
    let resultados = `
        <p>GENERAL: ${Math.floor(Math.random() * (200 - 150 + 1)) + 150}</p>
        <p>MIRA PUNTO ROJO: ${Math.floor(Math.random() * (200 - 145 + 1)) + 145}</p>
        <p>MIRA X2: ${Math.floor(Math.random() * (200 - 145 + 1)) + 145}</p>
        <p>MIRA X4: ${Math.floor(Math.random() * (200 - 145 + 1)) + 145}</p>
        <p>BOTON: ${Math.floor(Math.random() * (80 - 30 + 1)) + 30}%</p>
    `;
    document.getElementById('resultados').innerHTML = resultados;
}
