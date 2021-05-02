console.log('Drag and Drop ')

const imgBox = document.querySelector('.imgBox');
const whitBoxes = document.getElementsByClassName('whitBox')


// Event listeners for  draggle element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been trigged');
    e.target.className += ' hold';

    setTimeout(() => {
        e.target.className = 'hide'
    }, 0);

})

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been trigged')
    e.target.className = 'imgBox'
})

for (whitBox of whitBoxes) {
    whitBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been trigged')
    })

    whitBox.addEventListener('dragenter', () => {
        console.log('DragEnter has been trigged')

    })

    whitBox.addEventListener('dragleave', () => {
        console.log('DragLeave has been trigged')

    })

    whitBox.addEventListener('drop', (e) => {
        console.log('Drop has been trigged')
        e.target.appendChild(imgBox)

    })
}