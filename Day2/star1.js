function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        var inputs = contents.split('\n');
        var sumInputs = inputs.reduce((sum, current) => sum + current, 0);
        displayContents(sumInputs);
    };
    reader.readAsText(file);
}
  
function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
}
  
document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);
