var emailArray = [];
var passwordArray = [];


var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");



function register() {
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;
    var Adiniz = document.getElementById("Adi").value;
    var Soyadiniz = document.getElementById("Soyadi").value;
    var Gsm = document.getElementById("Gsm").value;

    if (email == "") {
        alert("Email Gerekli Alandır...");
        return;
    } else if (password == "") {
        alert("Şifre Gerekli Alandır...");
        return;
    } else if (passwordRetype == "") {
        alert("Şifre Tekrarı Gerekli Alandır...");
        return;
    } else if (password != passwordRetype) {
        alert("Parolanız Eşleşmiyor. Lütfen Tekrar Deneyin...");
        return;
    } else if (Adiniz == "") {
        alert("Adınız Alanı Gerekli alandır...");
        return;
    } else if (Soyadiniz == "") {
        alert("Soyadınız Alanı Gerekli alandır...");
        return;
    } else if (Gsm == "") {
        alert("Gsm Alanı Gerekli alandır...");
        return;
    } else if (emailArray.indexOf(email) == -1) {
        emailArray.push(email);
        passwordArray.push(password);
        setCookie('email', email, 1);
        setCookie('password', password, 1);
        setCookie('Adi', Adiniz, 1);
        setCookie('Soyadi', Soyadiniz, 1);

        alert("Sn. " + Adiniz + " " + Soyadiniz + "  Kaydınız Başarılı Bir Şekilde Gerçekleştirildi. Sizi Giriş Sayfasına Yönlendiriyorum...");
        window.open('girişyap.html', '_self');
        document.getElementById("re").value = "";
        document.getElementById("rp").value = "";
        document.getElementById("rrp").value = "";
        document.getElementById("Adi").value = "";
        document.getElementById("Soyadi").value = "";
        document.getElementById("Gsm").value = "";
    } else {
        alert(email + " Bu Eposta Adresi Daha Önce Sistemimize Kayıt Edildi...");
        return;
    }
}

function login() {
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var email2 = getCookie('email');
    var password2 = getCookie('password');
    if (email == email2 & password == password2) {
        alert('Giriş Başarılı');
        window.open('Index.html', '_self');
    } else {
        alert("Kullanıcı Adı veya Şifre Hatalı...");
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}