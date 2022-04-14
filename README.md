# Projeto de Fixação: Labeninjas

<strong><em>LINK DO SURGE: [Labe Ninjas](LINK AQUI/)</em></strong>

Esse site foi desenvolvido por <em>Adernam Ferris Bauli </em>, <em>Andresa Alves </em>, <em> Christian Cardeal de Miranda Penna Botto</em>, <em>Karen Naomi Cardoso Kubo </em> e <em>Maria Eduarda Lopes</em>.

Ele é um projeto de criação de uma página de  <strong>Labe-Ninjas</strong>, um site onde prestadores de serviço podem cadastrar seus serviços, enquanto pessoas interessadas em contratar esses serviços podem os procurar.

O site é dividido em 4 partes:
<li>Home</li>
<li>Se tornar um ninja</li>
<li>Contratar um ninja</li>
<li>Carrinho</li>
<br>
A página <strong>Home</strong> é a tela inicial. Por ela você consegue acessar todas as outras.

Ao clicar em <strong> quero me tornar um ninja</strong>, a pessoa é levada para uma página em que poderá cadastrar seus serviços. Nesta página a pessoa deverá informar o nome do serviço oferecido, a descrição, o preço, formas de pagamento e prazo. ERssa criação se dará através de uma API.

Já ao clicar em <strong>contratar um ninja</strong> a pessoa será redirecionada para uma página onde todos os serviços serão carregados, diretamente da API.
Nesta página poderão ser filtrados os serviços por preço mínimo, máximo, busca por palavras e ainda poderá escolher a ordem de ordenação, tendo como opções título, valor da remuneração e prazo.
Dentro de cada serviço há três botões. Um de deletar, onde esse serviço pode ser deletado diretamente da API, um de descrição, onde ao ser clicado exibirá informações adicionais sobre esse serviço, e um de adicionar ao carrinho, onde esse produto será então adicionado ao carrinho.
Deve-se notar que todas as informações dessa página ficam salvas como local storage, assim, se o usuário sair e voltar depois, tudo estará do mesmo jeito de quando saiu!

<li> Na primeira, há o <strong><em>filtro</em></strong>, onde o usuário pode pesquisar os produtos que serão exibidos na página atráves de três filtos que funcionam concomitantemente: por <strong><em>valor mínimo</em></strong>, <strong><em>máximo</em></strong> e por <strong><em>palavras</em></strong> (ou mesmo letras!);</li>

<li>Na parte do meio estão os <strong><em>produtos</em></strong>. Eles são apresentados de acordo com a filtragem do usuário. De acordo com essas filtragens, acima dos produtos aparecerá <strong><em>quantos itens estão sendo exibidos na tela</em></strong>. Além disso, eles podem ainda cliclar em um <strong><em>dropdown menu</em></strong> para ordenar os itens que estão aparecendo por <strong><em>mais vendidos</em></strong>,  <strong><em>menor preço</em></strong> ou <strong><em>maior preço</em></strong>. Os usuários podem en~tao selecionar os produtos que querem e estes são adicionados ao carrinho;</li>

<li>Por fim, a última seção é o <strong><em>carrinho</em></strong>. Nele, os produtos que foram adicionados aparecerão com suas respectivas <strong><em>quantidades</em></strong>. Além disso, um <strong><em>subtotal para cada produto</em></strong> também aparecerá (ou seja, o valor do produto multiplicado pela quantidade de produtos). Por fim, o <strong><em>valor total da compra</em></strong> também aparece.</li>

Por último, na página de carrinhos, todos os produtos que forem adicionados estarão presente. Deve-se notar que apenas um serviço do mesmo tipo pode ser adicionado. Nessa tela será exibido os serviços, seus preços e o valor total. Além disso, o cliente terá a opção de deletar itens individuallmente, ou mesmo deletar o carrinho inteiro.
Por fim, há ainda os botões para voltar para os serviços (continuar comprando) e para dar o checkout, onde uma mensagem de agradecimentos aparecerá.
Aqui o local storage também foi empregado, assim, caso o cliente sia e volte depois, seu carrinho permanecerá intacto.

Dois outros componentes qaue merecem destaque são o Header e o Footer, presentes em todas as páginas. No header há no canto esquerdo um ícone do Labeninjas, aonde pode se clicar para retornar à tela Home. Já no canto direito há o ícone de um carrinho, onde pode se clicar para ir para o carrinho.
Jpa no footer há TERMINAR O QUE HÁ NO FOOTER.

![Captura de tela 2022-04-01 204321](https://user-images.githubusercontent.com/98923335/161354854-5a9bfb1e-c83b-4a7a-89e6-29736bff5fd4.png)
