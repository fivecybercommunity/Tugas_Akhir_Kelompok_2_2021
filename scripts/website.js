let portofolio = 1;

function action(panah) {
    // Remove current portofolio
    document.getElementById('portofolio-' + portofolio).style.display = 'none';

    // Calculation
    if (panah === 'kiri' ) {
        portofolio--;
        if (portofolio <= 0) {
            portofolio = 4;
        }
    } else if (panah) {
        portofolio++;
        if (portofolio > 4) {
            portofolio = 1;
        }
    }

    // Display new image
    document.getElementById('portofolio-' + portofolio).style.display = 'flex';
}
