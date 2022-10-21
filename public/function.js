
function home_btn(){
    let home = document.getElementById('home');
    let registrar = document.getElementById('registrar');
    let adicionar = document.getElementById('adicionar');
    let sair = document.getElementById('sair');
    home.className = "active";
    registrar.className = "disabled";
    adicionar.className = "disabled";
    sair.className = "disabled";
    $("#content").load("div_content/home.html");
}

function register_btn(){
    let home = document.getElementById('home');
    let registrar = document.getElementById('registrar');
    let adicionar = document.getElementById('adicionar');
    let sair = document.getElementById('sair');
    home.className = "disabled";
    registrar.className = "active";
    adicionar.className = "disabled";
    sair.className = "disabled";
    $("#content").load("div_content/registrar.html");
}

function add_btn(){
    let home = document.getElementById('home');
    let registrar = document.getElementById('registrar');
    let adicionar = document.getElementById('adicionar');
    let sair = document.getElementById('sair');
    home.className = "disabled";
    registrar.className = "disabled";
    adicionar.className = "active";
    sair.className = "disabled";
    $("#content").load("div_content/adicionar.html");
}

function quit_btn(){
    let home = document.getElementById('home');
    let registrar = document.getElementById('registrar');
    let adicionar = document.getElementById('adicionar');
    let sair = document.getElementById('sair');
    home.className = "disabled";
    registrar.className = "disabled";
    adicionar.className = "disabled";
    sair.className = "active";
    $("#content").load("div_content/sair.html");
}