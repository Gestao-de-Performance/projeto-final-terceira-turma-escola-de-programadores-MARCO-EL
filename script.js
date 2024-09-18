document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.getElementById('#fff-paragraph');
    const text = paragraph.textContent;
    const greenLetters = [];

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.color ='#fff'; // cor 
        greenLetters.push(span);
    }

    let index = 0;

    function printLetter() {
        if (index < greenLetters.length) {
            paragraph.appendChild(greenLetters[index]);
            index++;
            setTimeout(printLetter, 100); // 100ms de atraso entre cada letra
        }
    }

    paragraph.addEventListener('mouseover', function() {
        index = 0; // reseta o índice
        paragraph.innerHTML = ''; // limpa o conteúdo do parágrafo
        printLetter(); // começa a mostrar as letras em verde
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll('.typewriter');
    paragraphs.forEach(paragraph => {
      const text = paragraph.innerHTML;
      paragraph.innerHTML = '';
      let i = 0;
      function typeWriter() {
        if (i < text.length) {
          paragraph.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, 50); // Adjust speed here
        }
      }
      typeWriter();
    });
  });
  