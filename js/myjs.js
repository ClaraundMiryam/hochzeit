// var bool_vp = true;

var lang = "it";

var stay_family = document.getElementById('option-1');
var stay_friends = document.getElementById('option-2');

function openSite(lang) {
    var password = document.getElementById('password').value;
    var url = "";

    if (password === 'Clara.Miryam') { //clara-miry
        if (lang === 'de') {
            url = "index-de.html?option=b";
        } else if (lang === 'it') {
            url = "index-it.html?option=b";
        }
    } else if (password === 'Clara-Miryam') { //clara_miry
        if (lang === 'de') {
            url = "index-de.html?option=r";
        } else if (lang === 'it') {
            url = "index-it.html?option=r";
        }
    } else {
        document.getElementById('errorMessage').textContent = 'Falsches Passwort. Bitte versuchen Sie es erneut / Password errata. Riprova.';
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    window.location.href = url;
}

// Link agli itinerari maps

// villa prato
var micle_vp = "https://maps.app.goo.gl/67SvMk66iLupkSoD9";
var mimpx_vp = "https://maps.app.goo.gl/36kRQxYnZSZNYGXy7";
var milin_vp = "https://maps.app.goo.gl/sjSkxfqAtr5YGX9Y7";
var mibgy_vp = "https://maps.app.goo.gl/Zq3Quk851XJWpnNq6";
var tocle_vp = "https://maps.app.goo.gl/MhrHPQNbZP5kVx5w6";
var gecol_vp = "https://maps.app.goo.gl/QpfzB4dFmt5wYMoA8";
var alsfn_vp = "https://maps.app.goo.gl/dQK9FPkdRgAbwpeB6";

// villa castelletto
var micle_vc = "https://maps.app.goo.gl/7gHPwgUsNaEkDS6VA";
var mimpx_vc = "https://maps.app.goo.gl/TuytFoSPmZPbEz6n8";
var milin_vc = "https://maps.app.goo.gl/278J8BAWyX73URQP6";
var mibgy_vc = "https://maps.app.goo.gl/DL7dTQF8LA8Fg4Y66";
var tocle_vc = "https://maps.app.goo.gl/7mBxfJNq1kUnMZfr9";
var gecol_vc = "https://maps.app.goo.gl/qbtbueEUSLPjSFvM6";
var alsfn_vc = "https://maps.app.goo.gl/rDTTpAy4ZTQNYPN99";

function openMap(guest) {
    var departure = document.getElementById("dep-loc-select").value;
    if (guest) {
        if (departure === 'MI-FS') {
            window.open(micle_vp, "_blank");
        } else if (departure === 'MPX') {
            window.open(mimpx_vp, "_blank");
        } else if (departure === 'LIN') {
            window.open(milin_vp, "_blank");
        } else if (departure === 'BGY') {
            window.open(mibgy_vp, "_blank");
        } else if (departure === 'TRN') {
            window.open(tocle_vp,"_blank");
        } else if (departure === 'GOA') {
            window.open(gecol_vp,"_blank");
        } else if (departure === 'AL-FS') {
            window.open(alsfn_vp,"_blank");
        }
    }
    else {
        if (departure === 'MI-FS') {
            window.open(micle_vc,"_blank");
        } else if (departure === 'MPX') {
            window.open(mimpx_vc,"_blank");
        } else if (departure === 'LIN') {
            window.open(milin_vc,"_blank");
        } else if (departure === 'BGY') {
            window.open(mibgy_vc,"_blank");
        } else if (departure === 'TRN') {
            window.open(tocle_vc,"_blank");
        } else if (departure === 'GOA') {
            window.open(gecol_vc,"_blank");
        } else if (departure === 'AL-FS') {
            window.open(alsfn_vc,"_blank");
        }
    }
}