// function gettxt() {
//     var text = document.getElementById("txtbox").value;
//     alert(text);
// }

// function settxt() {
//     var text = document.getElementById("txtbox").value;
//     alert('Hello World !');

// }
function showHxContent1() {
    var content = document.getElementById('title1');
    
    alert('test')
    if (content.style.display === 'none'){
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

function showHxContent2() {
    var content = document.getElementById('title2');
    
    alert('test2')
    if (content.style.display === 'none'){
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

// function createEventHandler(items, i) {
    
//     return function() {
//       alert(items[i].querySelector('.title').innerHTML);
//     };
//   }
//   onload = function() {
//     var show = document.getElementById('bod');
//     var items = show.getElementsByTagName('p');
//     for (var i = 0; i < items.length; i++) {
//       items[i].onclick = createEventHandler(items, i);
//     }
//   };