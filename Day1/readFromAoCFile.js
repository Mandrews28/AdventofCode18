// function readSingleFile(e) {
//     var file = e.target.files[0];
//     if (!file) {
//         return;
//     }
//     var reader = new FileReader();
//     reader.onload = function(e) {
//         var contents = e.target.result;
//         var inputs = contents.split('\n').map(Number);
//         var sumInputs = inputs.reduce((sum, current) => sum + current, 0);
//         displayContents(sumInputs);
//     };
//     reader.readAsText(file);
// }
  
function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
}
  
// document.getElementById('file-input')
//     .addEventListener('change', readSingleFile, false);


fetch('file:///Users/michael.andrews/Documents/workspace/side-projects/AdventofCode18/Day2/Input-2.txt', {mode: 'cors'}).then((response) => {
    if (response.status === 200) {
        response.text().then(input => {
            displayContents(input);
        });
    }
}).catch((e) => {
    console.log(e);
});


// var txtFile = new XMLHttpRequest();
// txtFile.open("GET", "https://adventofcode.com/2018/day/2/input", true);
// txtFile.onreadystatechange = function() {
//     if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
//         if (txtFile.status === 200) {  // Makes sure it's found the file.
//             allText = txtFile.responseText; 
//             lines = txtFile.responseText.split("\n"); // Will separate each line into an array
//             displayContents(lines);
//         }
//     }
// }
// txtFile.send(null);


// Look at Axios instead of Fetch in the future

