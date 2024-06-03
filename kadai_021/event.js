const bbbbtn = document.getElementById('btn');


bbbbtn.addEventListener('click', () => {
  setTimeout(() => {
    //==============================================
    const texttext = document.getElementById('text');
    texttext.textContent = 'ボタンがクリックされました'
    //=================================================
  }, 2000);
})