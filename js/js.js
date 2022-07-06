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
    
    if (content.style.display === 'none'){
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

function showHxContent2() {
    var content = document.getElementById('title2');
    
    if (content.style.display === 'none'){
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

function cacher() {
    var para1 = document.getElementById('title1');
    var para2 = document.getElementById('title2');

    if (para1.style.display === 'block' || para2.style.display === 'block'){
        para1.style.display = 'none';
        para2.style.display = 'none';
    }
}

function choixtitre() {
    var para1 = document.getElementById('title1');
    var para2 = document.getElementById('title2');
    const val = document.querySelector('#title').value;
    console.log(val);

    if (val === '1'){
        para1.style.display = 'block';
        para2.style.display = 'none';
    } else if (val === '2'){
        para1.style.display = 'none';
        para2.style.display = 'block';
    } else {
        alert('Aucun paragraphe avec ce numero')
    }
}

function suppr() {
    var page = document.getElementById('pagetitle');

    if (page != '' ){
        page.remove();
    }
}

function nouveautitre() {
    const val = document.querySelector('#paget').value;
    console.log(val);

    if (val != ''){
        document.title = val;
    } else{
        alert('Veuillez supprimer le titre deja present');
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