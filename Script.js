const editor = document.getElementById('editor');
const lineNumbers = document.getElementById('lineNumbers');

function updateLineNumbers() {
  const lines = editor.value.split('\n').length;
  lineNumbers.innerText = Array.from({ length: lines }, (_, i) => i + 1).join('\n');
}

function syncScroll() {
  lineNumbers.scrollTop = editor.scrollTop;
}

function highlightLine() {
  const position = editor.selectionStart;
  const text = editor.value.substr(0, position);
  const currentLine = text.split("\n").length;

  const lines = editor.value.split('\n');
  updateLineNumbers(); 
  const highlighted = lines.map((line, idx) =>
    idx + 1 === currentLine ? `> ${line}` : `  ${line}`
  ).join('\n');

  
  console.log("Current line:", currentLine);
}

function loadFile() {
  const input = document.getElementById('fileInput');
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    editor.value = e.target.result;
    updateLineNumbers();
  };
  reader.readAsText(file);
}
