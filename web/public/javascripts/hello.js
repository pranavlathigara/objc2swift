var objcEditor = CodeMirror.fromTextArea(document.getElementById('editorObjc'), {
    mode: "clike",
    // theme: "monokai",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    styleActiveLine: true
});

var swiftEditor = CodeMirror.fromTextArea(document.getElementById('editorSwift'), {
    mode: "swift",
    // theme: "monokai",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    styleActiveLine: true
});

objcEditor.on('change', function() {
  var currentTimer;
  return function(obj, e) {
    if(!$("#auto").is(':checked'))
      return;

    var timer = setTimeout(function() {
      if(currentTimer !== timer) console.log("pass");

      if(currentTimer !== timer)
        return;

      var input = e.text;
      var value = obj.getValue();

      $.post("", {source: value, raw: "1"}, function(data) {
        console.log("update");
        swiftEditor.getDoc().setValue(data);
      })
    }, 800);
    currentTimer = timer;
  }
}());