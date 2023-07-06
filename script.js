function somar() {

    var a = document.f1.a.value;
    var b = document.f1.b.value;
    var r = document.f1.c.value;
    r = parseFloat(a) + parseFloat(b);
    document.f1.c.value = r;

}

function subtrair() {

    var a = document.f1.a.value;
    var b = document.f1.b.value;
    var r = document.f1.c.value;
    r = parseFloat(a) - parseFloat(b);
    document.f1.c.value = r;

}
function multiplicar() {

    var a = document.f1.a.value;
    var b = document.f1.b.value;
    var r = document.f1.c.value;
    r = parseFloat(a) * parseFloat(b);
    document.f1.c.value = r;

}
function dividir() {

    var a = document.f1.a.value;
    var b = document.f1.b.value;
    var r = document.f1.c.value;
    r = parseFloat(a) / parseFloat(b);
    document.f1.c.value = r;

}
function hipotenusa() {

    var a = document.f1.a.value;
    var b = document.f1.b.value;
    var r = document.f1.c.value;
    r = parseFloat(a*a) + parseFloat(b*b);
    r = Math.sqrt(r)
    document.f1.c.value = r;
}
function calcular() {

    var operacao = document.f1.operacao.value;

    switch (operacao) {
        case "somar":
            somar();
            break;

        case "subtrair":
            subtrair();
            break;

        case "multiplicar":
            multiplicar();
            break;

        case "dividir":
            dividir();
            break;

        case "hipotenusa":
            hipotenusa();
            break;

        default:
            break;
    }
}