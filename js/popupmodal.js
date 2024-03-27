	// popupmodal
document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.querySelector('[data-open-kofipopover]');
    const closeBtn = document.querySelector('[data-close-kofipopover]');
    const modal = document.querySelector('[data-overlay]');

    openBtn.addEventListener('click', () => {
        modal.showModal();
    });

    closeBtn.addEventListener('click', () => {
        modal.close();
    });

    modal.addEventListener('click', (event) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            event.clientX < dialogDimensions.left ||
            event.clientX > dialogDimensions.right ||
            event.clientY < dialogDimensions.top ||
            event.clientY > dialogDimensions.bottom
        ) {
            modal.close();
        }
    });
});
