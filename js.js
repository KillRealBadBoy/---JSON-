function dropHandler(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  // FileList object.
  var files = evt.dataTransfer.files;

  if (files.length != 1) {
      resetLog();
      appendLog("Please drag and drop 1 file!");
      return;
  }
  var file = files[0];

  var fileReader = new FileReader();

  fileReader.onloadstart = function(progressEvent) {
      resetLog();
      appendLog("onloadstart!");
      var msg = "File Name: " + file.name + "<br>" +
          "File Size: " + file.size + "<br>" +
          "File Type: " + file.type;

      appendLog(msg);
  }

  fileReader.onload = function(progressEvent) {
      appendLog("onload!");

      var stringData = fileReader.result;
      appendLog(" ---------------- File Content ----------------: ");
      appendLog(stringData);
  }

  fileReader.onloadend = function(progressEvent) {
      appendLog("onloadend!");
      // FileReader.EMPTY, FileReader.LOADING, FileReader.DONE
      appendLog("readyState = " + fileReader.readyState);
  }

  fileReader.onerror = function(progressEvent) {
      appendLog("onerror!");
      appendLog("Has Error!");
  }

  // Read file asynchronously.
  fileReader.readAsText(file, "UTF-8"); // fileReader.result -> String.
}

function dragoverHandler(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  // Explicitly show this is a copy.
  evt.dataTransfer.dropEffect = 'copy';
}

function resetLog() {
  let x = document.getElementById("testInput").value;
  document.getElementById('log-div').innerHTML = "";
}

function appendLog(msg) {
  document.getElementById('log-div').innerHTML += "<br>" + msg;
}

/*const input = document.querySelector('input[type="file"]')
input.addEventListener('change'), 
function handleFiles (files) {
  console.log(files)
  const reader = new FileReader()
  reader.onload = function () {
     const lines = reader.result.split('\n').map(function (line) {
       return line.split(',')
     })
     console.log(lines)
   
    document.body.appendChild(reader)
  }
  reader.readAsText(files[0])
}, 
function resetLog() {
  document.getElementById('files').innerHTML = "";
}

function appendLog(msg) {
  document.getElementById('files').innerHTML += "<br>" + msg;
}
/*document.getElementById('files').addEventListener('change', handleFileSelect, false)*/