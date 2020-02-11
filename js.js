<script type="text/javascript">
    $("form[name='uploader']").submit(function(e) {
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