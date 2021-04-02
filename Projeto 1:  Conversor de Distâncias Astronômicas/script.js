function converterKm() {
    var kilometros = parseFloat(document.getElementById("kmName").value);
    var anoLuz = kilometros / 9460528404879.4;
    var unidadeAstro = kilometros / 149597870.7;
    var resultado = window.document.getElementById("resultado");
    
    if(isNaN(kilometros)) {
      alert("Você não inseriu um valor.")
    } else {
      resultado.innerHTML = "Valor em Ano-luz: " + anoLuz + " ano-luz" + "<br />" + "Valor em Unidade Astronômica: " + unidadeAstro + " UA" + "<br />" + "Valor em Kilometros: " + kilometros + " km"; 
    }
  }
  
  function converterAnoLuz() {
    var anoLuz = parseFloat(document.getElementById("anoLuzName").value);
    var kilometros = anoLuz * 9460528404879.4;
    var unidadeAstro = kilometros / 149597870.7;
    var resultado = window.document.getElementById("resultado");
    
    if(isNaN(anoLuz)){
      alert("Você não inseriu um valor.")
    } else {
     resultado.innerHTML = "Valor em Ano-luz: " + anoLuz + " ano-luz" + "<br />" + "Valor em Unidade Astronômica: " + unidadeAstro + " UA" + "<br />" + "Valor em Kilometros: " + kilometros + " km"; 
    }
  }
  
  function converterUnidadeAstro() {
    var unidadeAstro = parseFloat(document.getElementById("unidadeAstroName").value);
    var kilometros = unidadeAstro * 149597870.7;
    var anoLuz = kilometros / 9460528404879.4;
    var resultado = window.document.getElementById("resultado");
    
    if(isNaN(unidadeAstro)){
      alert("Você não inseriu um valor.")
    } else {
     resultado.innerHTML = "Valor em Ano-luz: " + anoLuz + " ano-luz" + "<br />" + "Valor em Unidade Astronômica: " + unidadeAstro + " UA" + "<br />" + "Valor em Kilometros: " + kilometros + " km"; 
    }
  }