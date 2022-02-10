window.addEventListener('load', updateTemplate);

var inputs = document.querySelectorAll('input');
var selects = document.querySelectorAll('select');
var reset = document.getElementById('myreset');
var submit = document.getElementById('submit');
var codigo = document.getElementById('codigo');
var inputsBorda = document.querySelectorAll('.input_borda');
var btDarkmode = document.getElementById('darkmode');
var copy = document.getElementById('copy');
var darkmodeAtivo = btDarkmode.querySelector('input').checked;

console.log(darkmodeAtivo);

for (elInput of inputs) {
  elInput.addEventListener('change', updateTemplate);
}

for (elSelect of selects) {
  elSelect.addEventListener('change', updateTemplate);
}

for (elInputBorda of inputsBorda) {
  elInputBorda.addEventListener('change', updateBorda);
}

btDarkmode.addEventListener('click', ativarDarkmode);
submit.addEventListener('click', enviarForm);
reset.addEventListener('click', resetForm);
copy.addEventListener('click', copiarTemplate);

function resetForm() {
  document.getElementById('form').reset();
  updateTemplate;
  console.log(darkmodeAtivo);
}

function ativarDarkmode() {
  if (darkmodeAtivo == true){
    document.body.classList.add('has--darkmode');
  }
  else {
    document.body.classList.remove('has--darkmode');
  }
}

function enviarForm() {
  event.preventDefault();
}

function updateBorda() {
  var valorBorda = event.target.value;
  for (elInputBorda of inputsBorda) {
  elInputBorda.value = valorBorda;
}
}

function copiarTemplate() {

  codigo.select();
  codigo.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(codigo.value);
  
  copy.value = 'Copiado!'
}

function updateTemplate() {
  var bordaLargura = document.getElementById('bordaLargura').value;
  var bordaLarguraType = document.getElementById('bordaLarguraType').value;
  var bordaCor = document.getElementById('bordaCor').value;
  var fonteSelect = document.getElementById('fonteSelect').value;
  var textoCor = document.getElementById('textoCor').value;
  var fundoCor = document.getElementById('fundoCor').value;
  var tituloTexto = document.getElementById('tituloTexto').value;
  var tituloTamanho = document.getElementById('tituloTamanho').value;
  
var styleBorda = 'max-width: 700px; width: 100%; display: table; margin: 0 auto; padding: ' + bordaLargura + 'px; background: ' + bordaCor + ';';

var styleContainer = 'background:' + fundoCor + '; text-align: justify; color: ' + textoCor + '; padding: 50px 40px 0px 40px;';

var styleTitulo = "text-align: center; font-size: " + tituloTamanho + "px; font-family: '" + fonteSelect + "'; color: " + bordaCor + "; margin-bottom: 60px;";

var fontStack = "<style>@import url('https://fonts.googleapis.com/css2?family=" + fonteSelect + "&display=swap');</style>"

var templateHTML = '' + fontStack + '<div style="' + styleBorda + '"><div style="' + styleContainer + '"><div style="' + styleTitulo + '">' + tituloTexto + '</div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet leo dictum commodo feugiat. Donec fermentum luctus luctus. Integer convallis dolor ut odio viverra tristique. Praesent aliquet varius ex sit amet sollicitudin. Quisque tempor pulvinar iaculis. Nullam eu turpis iaculis, pellentesque felis in, tempor elit. Aliquam eu ante et quam mattis lacinia quis ut mauris. Donec sed elementum odio. Etiam posuere, tellus eget suscipit blandit, neque urna tincidunt tortor, volutpat egestas sapien libero nec sem. Pellentesque blandit ex sit amet purus ultricies, aliquam ultrices urna consequat. Nam eu risus sed sapien rhoncus scelerisque in ut purus. Nam quis maximus tortor, a dictum odio. Nunc odio ipsum, cursus euismod dapibus in, pulvinar ac ex. In volutpat tortor lorem, vel imperdiet magna pellentesque sit amet. Sed interdum augue at ex posuere elementum.</p>  <p>In consequat blandit suscipit. Nullam ac neque in ipsum fermentum suscipit a vel libero. Morbi vehicula mi erat, ac rhoncus neque dapibus in. Sed congue sit amet mauris a tincidunt. Aliquam bibendum vulputate massa nec tempus. Etiam lacinia congue diam, vitae vehicula dui lacinia a. Sed et massa gravida, consequat nulla eu, porta enim. Integer lobortis posuere interdum. Integer ut consectetur mi, nec sagittis metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sagittis congue tristique. Ut a consectetur quam. Fusce aliquam sed enim at fringilla. Cras in elit porta, ornare libero non, mollis velit. Etiam posuere dictum libero, id aliquam magna laoreet eget. </p><a href="https://moonygraphics.tumblr.com/" target="_blank" style="text-align:center; font-size:8px;display:block; opacity: .5;margin-top: 20px; color: ' + textoCor + '; text-decoration: none;">by ~moony</a></div></div>';
  
var templateBox = document.getElementById('template');
templateBox.innerHTML = templateHTML;
  codigo.innerHTML = templateHTML;
  
  copy.value = 'Copiar código';
}
