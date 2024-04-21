let input = document.querySelector('input')
let h2 = document.querySelector('h2')

// 縮放
let currentWidth = 400;
let currentHeight = 300;

let img = document.querySelector('img')
let zoomIn = document.getElementById('zoomIn')

zoomIn.addEventListener('click', () => {
    if(img.style.width < '450px') {
      currentWidth *= 1.1;
      currentHeight *= 1.1;
      img.style.width = currentWidth + 'px';
      img.style.height = currentHeight + 'px';
      input.style.width = currentWidth + 'px';
      input.style.height = currentHeight + 'px';
      h2.style.width = currentWidth + 'px';
      h2.style.height = currentHeight + 'px';
    }
})

let zoomOut = document.getElementById('zoomOut')
zoomOut.addEventListener('click', () => {
    if(img.style.width > '350px') {
      currentWidth /= 1.1;
      currentHeight /= 1.1;
      img.style.width = currentWidth + 'px';
      img.style.height = currentHeight + 'px';
      input.style.width = currentWidth + 'px';
      input.style.height = currentHeight + 'px';
      h2.style.width = currentWidth + 'px';
      h2.style.height = currentHeight + 'px';
    }
})

// 旋轉
let currentDegree = 0;

let rotateLeft = document.getElementById('rotateLeft')
rotateLeft.addEventListener('click', () => {
    currentDegree -= 30
    img.style.transform = `rotate(${currentDegree}deg)`;
    input.style.transform = `rotate(${currentDegree}deg)`;
    h2.style.transform = `rotate(${currentDegree}deg)`;
})

let rotateRight = document.getElementById('rotateRight')
rotateRight.addEventListener('click', () => {
    currentDegree += 30
    img.style.transform = `rotate(${currentDegree}deg)`;
    input.style.transform = `rotate(${currentDegree}deg)`;
    h2.style.transform = `rotate(${currentDegree}deg)`;
})


  // 拖曳,上傳
    function doFirst() {
        let imgHere = document.querySelector(".theFile");
        imgHere.onchange = droppedHere
    }

      function droppedHere(e) {
        document.querySelector('h2').style.display = 'none'

        let files = e.target.files[0];
        let imgReader = new FileReader()
        imgReader.readAsDataURL(files)
        imgReader.addEventListener('load', () => {
          img.src = imgReader.result
        });
        console.log(input.value)
      };

      window.addEventListener('load', doFirst)

      // 刪除
      let remove = document.getElementById('remove')
      remove.addEventListener('click', () => {
        if(img.src) {
          img.src = ''
          input.value = ''
          console.log(input.value)
        }
        document.querySelector('h2').style.display = 'block'
      })