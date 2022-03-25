$(document).ready(function(){
  console.log('Ready');

  $("form").submit(function(event) {
    var data = new FormData($(this)[0]);

    $.ajax({
      url: '/fileupload',
      type: 'POST',
      data: data,
      processData: false, // These two are needed to prevent JQuery from processing the form data
      contentType: false,
      mimeType: 'multipart/form-data',
      dataType: 'json', // Without this, the server's response will be a string instead of a JSON object
      success: uploadSuccess
    });

    return false;
  });

});

function uploadSuccess(data) {
  //console.log(typeof data);
  display.src = "images/" + data.name;
}
