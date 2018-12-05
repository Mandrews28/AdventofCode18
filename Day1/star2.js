function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        var inputs = contents.split('\n').map(Number);
        var frequencies = [0];
        var isMultipleFreqFound = false;
        var currentSum = 0;
        var answer = null;

        console.log("Before while");

        while (!isMultipleFreqFound) {
            console.log("While entered");

            for (var i in inputs) {
                var num = inputs[i];
                console.log(currentSum, num);
                currentSum += num;

                if (frequencies.includes(currentSum)) {
                    isMultipleFreqFound = true;
                    answer = currentSum;
                    break;
                } else {
                    frequencies.push(currentSum);
                }
            }
            console.log(frequencies);
        }
        displayContents(answer);
    };
    reader.readAsText(file);
}

function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
}

document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);
