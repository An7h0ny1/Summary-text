from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words

# Importa el modelo de idioma en español
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words



def procesar_texto(request):
    if request.method == 'POST':
        texto_obtenido = request.POST.get('text','')
        longitud = len(texto_obtenido)
        

        language = "spanish"
        stemmer = Stemmer(language)

        # Crea un parser de texto
        parser = PlaintextParser.from_string(texto_obtenido, Tokenizer(language))

        # Crea un objeto LsaSummarizer
        summarizer = LsaSummarizer(stemmer)
        summarizer.stop_words = get_stop_words(language)

        if longitud <= 300:
            summary = [str(sentence) for sentence in summarizer(parser.document, sentences_count=1)]
        elif longitud <= 600:
            summary = [str(sentence) for sentence in summarizer(parser.document, sentences_count=2)]
        elif longitud <= 2000:
            summary = [str(sentence) for sentence in summarizer(parser.document, sentences_count=4)]
        else:
            summary = [str(sentence) for sentence in summarizer(parser.document, sentences_count=5)]

        return render(request, 'index.html', {'resumen': summary})
    
    return render(request, 'index.html', {})


