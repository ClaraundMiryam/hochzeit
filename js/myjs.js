var bool_vp = true;

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    var pw_sect = document.getElementById('pwform');
    var main_content = document.getElementById('content');

    var stay_family = document.getElementById('option-1');
    var stay_friends = document.getElementById('option-2');

    var pickup_point = document.getElementById('pickup-point');

    // Nascondi tutti i contenuti e il messaggio di errore
    main_content.style.display = 'none';
    errorMessage.style.display = 'none';

    // Controlla la password e mostra il contenuto appropriato
    if (password === 'p1') { //clara-miry
        main_content.style.display = 'block';
        pw_sect.style.display = 'none';
        pw_sect.classList.add('d-none');

        stay_family.style.display = 'block';
        stay_friends.style.display = 'none';

        pickup_point.innerHTML = '<strong>Vi chiediamo di essere al luogo del vostro pernottamenento, Villa Prato, alle 16.30</strong>';
    } else if (password === 'p2') { //clara_miry
        main_content.style.display = 'block';
        pw_sect.style.display = 'none';
        pw_sect.classList.add('d-none');

        stay_family.style.display = 'none';
        stay_friends.style.display = 'block';

        bool_vp = false;

        pickup_point.innerHTML = '<strong>Vi chiediamo di essere al luogo del vostro pernottamenento, Villa Castelletto, alle 16.30</strong>';
    } 
        else {
        errorMessage.textContent = 'Password errata. Riprova.';
        errorMessage.style.display = 'block';
    }

    // Resetta il campo della password
    document.getElementById('passwordForm').reset();
});

function adjustIframeHeightToImage(carouselId, iframeContainerClass) {
    // Seleziona l'immagine attiva nel carosello e il contenitore dell'iframe
    const activeImage = document.querySelector(`${carouselId} .carousel-item.active img`);
    const iframeContainer = document.querySelector(iframeContainerClass);
  
    if (activeImage && iframeContainer) {
        // Ottieni l'altezza dell'immagine attiva e imposta quella del contenitore dell'iframe
        const imageHeight = activeImage.offsetHeight;
        iframeContainer.style.height = `${imageHeight}px`;
    }
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