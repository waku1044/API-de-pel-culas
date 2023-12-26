
function popap(text,clase) {
    let dialog = document.querySelector('[data-modal]');
    let context = `<h3>${text}</h3><hr>`;
    dialog.innerHTML = context;
    dialog.classList.add(clase);
    dialog.showModal();
    setTimeout(()=>{
        dialog.close();
        // dialog.classList.remove(clase);
    },3000)
};
export default popap;