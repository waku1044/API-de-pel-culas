function popap(text, clase) {
  let dialog = document.querySelector("[data-modal]");
  // let context = `<h3 class="text-center px-5 position-relative z-3">${text}</h3>`;
  let context = `
    <div >
        <div >
            <div >
                <div >
                    <h5 class="modal-title">${text}</h5>
                </div>      
            </div>
        </div>
    </div>`;

  dialog.innerHTML = context; // context;
  dialog.classList.add(clase);
  dialog.showModal();
  setTimeout(() => {
    dialog.close();
    // dialog.classList.remove(clase);
  }, 3000);
}
export default popap;
