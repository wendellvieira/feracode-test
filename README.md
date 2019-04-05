
# Avaliação de habilidades feracode

## Considerações....
> Teste desenvolvido com base em um template quasar framework
> Uma build pode ser visto em [Dist](http://feracodetest.kdcweb.com.br/#/)

* Embora fosse pedido no documento para que o carrousel avançasse de 4 em 4 achei que ficou agressivo demais então acabei configurando para um avanço de 1 em 1, mas o avanço pode ser configurado em uma variável presente no código...
* Como esse projeto e um teste não fiz responsivo...
O design desse site e inspirado em um site de fraudas brasileiro, por esse motivo não recomendo o uso para fins de produção...
* Como é um teste deixei os inputs do cadastro/registro já preenchidos para agilizar o teste
* Em uma aplicação VUE-CLI/QUASAR-CLI erros no console são praticamente inaceitáveis então de antemão aviso que ao abrir o modal caso role o scroll aparecera um erro n vezes, esse erro e proveniente do próprio quasar e não e nocivo a aplicação...
* O intuito desse teste não e provar minhas habilidades em design, UX ou UI porque as mesmas são nulas ou inexistentes kkkkkk.... Caso queiram exemplos de projetos que fiz alinhado a um UX/UI seguem os links abaixo:
> [Clube do Sign](https://clubedosign.com.br/#/)
> [Stoot Digital](https://stootdigital.com/#/)

## Conteúdo
> O conteúdo do site pode ser editado no arquivo /assets/content.json; neste arquivo estão presentes os seguintes hooks:

### Categories:
* Categoria foi uma dependência do projeto que apareceu por conta dos layouts dos cards
* Customiza a imagem redonda (140x140), subtítulo e a cor do card de produtos;

### Products:
* Embora tenha sido pedido para colocar 8 produtos o card está com 9 para os testes de avanço do carrousel
* Customiza a imagem retangular (453x245), título e descrição do card de produtos

### Contentes:
> Customiza os textos e links de mídias sociais
* Header: os textos da header (pode-se usar tags html)
* Networks: Links para redes sócias (em caso de não haver toda a seção e descontinuada)
* Contacts: as informações de contato (em caso de não haver toda a seção e descontinuada)

## Considerações acerca do desenvolvimento
* Como sugerido foi usado o vuex para simular consultas ao server acabei não resistindo e colocando um delay na resolução das ações...
* Para o state que fazem parte da simulação do server foi criado um modulo, então o rootState seria equivalente ao state convencional... eu não criei um modulo porque não achei desnecessário devido ao tamanho do projeto...
* Para persistir os dados foi usado uma instância do “VuexPersistence” usando como manager o motor “”localforage”...
* Existe uma animação de uma nuvem no início do pagina ela e bem clarinha então pode passar despercebida... existem ali dois tipos de animação ( css pra fazer as nuvens viajarem para esquerda e vue pra criar um efeito paralax )
