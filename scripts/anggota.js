let anggota = 1;

function checkAnggota(id) {
    let marker = document.getElementById('marker').innerHTML;

    if (marker != 'hello') {
        document.getElementById('anggota-' + marker).style.display = 'none';
    }

    document.getElementById('profil').style.display = 'flex';
    document.getElementById('anggota-' + id).style.display = 'flex';

    document.getElementById('marker').innerHTML = id;
}

function action(id) {
    let marker = document.getElementById('marker').innerHTML;

    if (marker != 'hello') {
        document.getElementById('anggota-' + marker).style.display = 'none';
        anggota = marker;
    }

    document.getElementById('anggota-' + anggota).style.display = 'none';

    if (id === 'kanan') {
        anggota++;
        if (anggota > 4) {
            anggota = 1;
        }
    } else {
        anggota--;
        if (anggota < 1) {
            anggota = 4;
        }
    }

    document.getElementById('marker').innerHTML = "anggota-" + anggota;
    document.getElementById('anggota-' + anggota).style.display = 'flex';

    document.getElementById('marker').innerHTML = anggota;
}
