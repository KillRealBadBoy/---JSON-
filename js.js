const input = document.querySelector('input[type="file"]');
const jsonOutput = document.querySelector('.json');
const dropArea = document.querySelector('#drop-area');
window.addEventListener(
  'dragover',
  function(e) {
  e = e || event;
  e.preventDefault();
  },
  false,
  );
  
  window.addEventListener(
  'drop',
  function(e) {
  e = e || event;
  e.preventDefault();
  },
  false,
  );
  
  const handleDrop = e => handleFiles(e.dataTransfer.files);
  
  input.addEventListener('change', ({ target: { files } }) => handleFiles(files));
  dropArea.addEventListener('drop', handleDrop);
  
  function handleFiles(files) {
  const reader = new FileReader();
  reader.onload = function() {
  jsonOutput.innerText = reader.result;
  };
  reader.readAsText(files[0]);
  }

  function resetLog() {
  document.getElementById('files').innerHTML = '';
  }
  
  function appendLog(msg) {
  document.getElementById('files').innerHTML += '<br>' + msg;
  }