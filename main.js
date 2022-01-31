window.addEventListener('load', updateTemplate);

var inputs = document.querySelectorAll('input');
var selects = document.querySelectorAll('select');
var myReset = document.getElementById('reset');

for (elInput of inputs) {
  elInput.addEventListener('change', updateTemplate);
}

console.log(inputs);

for (elSelect of selects) {
  elSelect.addEventListener('change', updateTemplate);
}

function test() {
  console.log('teste');
}

function updateTemplate() {
  console.log('update');
  
  var bordaLargura = document.getElementById('bordaLargura').value;
  var bordaCor = document.getElementById('bordaCor').value;
  var fonteSelect = document.getElementById('fonteSelect').value;
  var textoCor = document.getElementById('textoCor').value;
  var fundoCor = document.getElementById('fundoCor').value;
  var codigo = document.getElementById('codigo');
  console.log(fonteSelect);
  
var styleBorda = 'max-width: 700px; width: 100%; display: table; margin: 0 auto; padding: ' + bordaLargura + 'px; background: ' + bordaCor + ';';

var styleContainer = 'background:' + fundoCor + '; text-align: justify; color: ' + textoCor + '; padding: 50px 40px 0px 40px;';

var styleTitulo = "text-align: center; font-size: 42px; font-family: '" + fonteSelect + "'; color: " + bordaCor + "; margin-bottom: 60px;";

var fontStack = "<style>@import url('https://fonts.googleapis.com/css2?family=" + fonteSelect + "&display=swap');</style>"

var templateHTML = '' + fontStack + '<div style="' + styleBorda + '"><div style="' + styleContainer + '"><div style="' + styleTitulo + '">Título aqui</div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet leo dictum commodo feugiat. Donec fermentum luctus luctus. Integer convallis dolor ut odio viverra tristique. Praesent aliquet varius ex sit amet sollicitudin. Quisque tempor pulvinar iaculis. Nullam eu turpis iaculis, pellentesque felis in, tempor elit. Aliquam eu ante et quam mattis lacinia quis ut mauris. Donec sed elementum odio. Etiam posuere, tellus eget suscipit blandit, neque urna tincidunt tortor, volutpat egestas sapien libero nec sem. Pellentesque blandit ex sit amet purus ultricies, aliquam ultrices urna consequat. Nam eu risus sed sapien rhoncus scelerisque in ut purus. Nam quis maximus tortor, a dictum odio. Nunc odio ipsum, cursus euismod dapibus in, pulvinar ac ex. In volutpat tortor lorem, vel imperdiet magna pellentesque sit amet. Sed interdum augue at ex posuere elementum.</p>  <p>In consequat blandit suscipit. Nullam ac neque in ipsum fermentum suscipit a vel libero. Morbi vehicula mi erat, ac rhoncus neque dapibus in. Sed congue sit amet mauris a tincidunt. Aliquam bibendum vulputate massa nec tempus. Etiam lacinia congue diam, vitae vehicula dui lacinia a. Sed et massa gravida, consequat nulla eu, porta enim. Integer lobortis posuere interdum. Integer ut consectetur mi, nec sagittis metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sagittis congue tristique. Ut a consectetur quam. Fusce aliquam sed enim at fringilla. Cras in elit porta, ornare libero non, mollis velit. Etiam posuere dictum libero, id aliquam magna laoreet eget. </p><span style="text-align:center; font-size:8px;display:block; opacity: .5;margin-top: 20px;">by ~moony</span></div></div>';
  
var templateBox = document.getElementById('template');
templateBox.innerHTML = templateHTML;
  codigo.innerHTML = templateHTML;
}
