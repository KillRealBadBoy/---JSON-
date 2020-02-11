const input = document.querySelector('input[type="file"]')
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
}, false

 /*$("form[name='uploader']").submit(function(e) {
        var formData = new FormData($(this)[0]);

        $.ajax({
            url: 'file.php',
            type: "POST",
            data: formData,
            async: false,
            success: function (msg) {
                alert(msg);
            },
            error: function(msg) {
                alert('Ошибка!');
            },
            cache: false,
            contentType: false,
            processData: false
        });
        e.preventDefault();
    });
    */