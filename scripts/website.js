let image = 1;
let keterangan = [
    'Francisco',
    'Razi',
    'Syafigya',
    'Qois'
]

function action(panah) {
    // Remove current
    document.getElementById('portofolio-' + image).style.display = 'none';

    // Calculation
    if (panah === 'kiri' ) {
        image--;
        if (image <= 0) {
            image = 4;
        }
    } else if (panah) {
        image++;
        if (image > 4) {
            image = 1;
        }
    }

    // Display new image
    document.getElementById('portofolio-' + image).style.display = 'block';

    document.getElementById('keterangan-portofolio').innerHTML = 'Portofolio ' + keterangan[image - 1];
}
