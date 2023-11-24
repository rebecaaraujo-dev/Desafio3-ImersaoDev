//Desafio 3: Paulo quer que troque o for por while. Rafa quer que as imagens tenham jpg no final. Gui quer que armazenemos também o nome dos filmes em uma lista, com novo "document.write".

//começamos adicionando todos os filmes e seus nomes através de duas variáveis diferentes em lista
var filmes=['https://www.clickguarulhos.com.br/wp-content/uploads/2016/03/a-bruxa-thewitch-poster.jpg','https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg','https://br.web.img3.acsta.net/pictures/18/06/14/13/11/1751062.jpg','https://2.bp.blogspot.com/-Ca73Ynm48Lg/XYRONTbxi-I/AAAAAAAAV5Q/b0VEoUiCfyw1cptyrJOjf0aKYryZCmdmwCLcBGAsYHQ/s1600/Captura%2Bde%2BTela%2B2019-09-20%2Ba%25CC%2580s%2B00.33.13.png','https://tm.ibxk.com.br//ms/images/highlights/000/037/005/35512.jpg']

//utilizando o push vamos adicionar filmes na lista
filmes.push('https://cinecriticas.com.br/wp-content/uploads/2023/07/Cine1-10.jpg','https://upload.wikimedia.org/wikipedia/pt/4/46/Pearl_2022.jpg','https://jovemnerd.com.br/wp-content/uploads/2022/01/X-movie-poster-760x1127.jpg','https://cinecriticas.com.br/wp-content/uploads/2020/05/chale.jpg','https://br.web.img2.acsta.net/pictures/22/08/02/20/58/3033503.jpg')

var nomes=['A Bruxa','O Farol','Hereditário','Midsommar','Mãe','Beau tem Medo','Pearl', 'X', 'O Chalé', 'Men']

//agora para o laço, vamos abrir uma div que é como uma caixinha/container onde colocamos nossas informações para aparecer na tela

document.write('<div class="container_todosFilmes">');
var i = 0;
while ( i < filmes.length ) {
        if((filmes[i].endsWith('jpg'))||(filmes[i].endsWith('jpeg'))||(filmes[i].endsWith('png'))) {
            document.write('<div class="container_filme">');
            document.write(`<img src=${filmes[i]}>`);
            document.write(`<p>${nomes[i]}</p>`);
            document.write('</div>');
        } else {
            document.write(`<p> A imagem ${filmes[i]} não pode ser lida pois não termina com jpg, jpeg ou png. </p>`)
        }
        i++
    }
document.write('</div>');

//MEUS ERROS:
//sempre colocar aspas simples dentro dos parenteses em document.write. Exemplo: document.write('<div class = "container_filmes"')
//o nome da div class deve vir entre aspas como mostrado no exemplo anterior
//ao usar o ".endsWith" devemos colocar a especificação entre parenteses e o With começa sempre com letra maiúscula. Exemplo: filmes.endsWith(jpeg)
//não esquecer de colocar no final o i++ para que o laço não fique "travado" no 0!!!