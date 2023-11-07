
// function dodajAktywne(elem) {
//     // get all 'a' elements
//     var a = document.getElementsByClassName('wp-block-image');
//     // loop through all 'a' elements
//     for (i = 0; i < a.length; i++) {
//         // Remove the class 'active' if it exists
//         a[i].classList.remove('wp-block-image-hover')
//     }
//     // add 'active' classs to the element that was clicked
//     elem.classList.add('wp-block-image-hover');
// }



// const target = document.querySelector('.page-template-default')

// document.addEventListener('click', (event) => {
//     const withinBoundaries = event.composedPath().includes(target)
//     var a = event.target.classList;
//     var b = document.getElementsByClassName('wp-block-image');

//     for (i = 0; i < a.length; i++) {
//         // Remove the class 'active' if it exists
//         if(!a[i].includes('wp-image')) {

//             for (i = 0; i < b.length; i++) {
//                 b[i].classList.remove('wp-block-image-hover')
//             }        
//         }
//     }
// });