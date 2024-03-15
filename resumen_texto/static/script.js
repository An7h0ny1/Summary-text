// Función para ajustar automáticamente la altura del textarea
function autoSizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}


// Llama a autoSizeTextarea() cuando se ingresa texto en el textarea
document.getElementById('text').addEventListener('input', function() {
    autoSizeTextarea(this); // "this" hace referencia al elemento que desencadenó el evento
});
document.getElementById('text2').addEventListener('input', function() {
    autoSizeTextarea(this); // "this" hace referencia al elemento que desencadenó el evento
});

document.addEventListener('DOMContentLoaded', function() {
    autoSizeTextarea(document.getElementById('text'));
    autoSizeTextarea(document.getElementById('text2'));
});


function borrarTexto() {
    // Obtener el elemento textarea por su ID
    let textarea = document.getElementById("text");

    // Borrar el contenido del textarea
    textarea.value = "";
}

//Contar el numero de caracteres
function contarCaracteres(outputId, textareaId) {
    let textarea = document.getElementById(textareaId);
    let wordCount = document.getElementById(outputId);

    // Obtiene el contenido del textarea
    let content = textarea.value;

    // Cuenta el número de caracteres, incluyendo espacios
    let totalCharacters = content.length;

    // Actualiza el número de caracteres
    wordCount.innerHTML = "Número de caracteres: " + totalCharacters;

    // Almacena el número de caracteres en el almacenamiento local del navegador
    localStorage.setItem(outputId, totalCharacters);
}

window.onload = function() {
    var textArea = document.getElementById('text2');
    var wordCount = document.getElementById('wordCount2');

    textArea.addEventListener('input', function() {
        var numCharacters = textArea.value.length;
        wordCount.innerHTML = 'Número de caracteres: ' + numCharacters;
    });
};


window.onload = function() {
    // Recuperar y actualizar los valores almacenados
    for (let i = 1; i <= 2; i++) {
        let savedCharacterCount = localStorage.getItem("wordCount" + i);
        if (savedCharacterCount !== null) {
            let wordCount = document.getElementById("wordCount" + i);
            wordCount.innerHTML = "Número de caracteres: " + savedCharacterCount;
        }
    }
}

function copiarTexto() {
    const mensaje = document.getElementById('text2');
    mensaje.select();
    document.execCommand('copy');
  } 

