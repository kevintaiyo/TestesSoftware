//import dos modulos  selenium
//Buiilder - BY - KEY
const {Builder, By, Key} = require ('selenium-webdriver');

//importa o objeto do modulo selenium-webdriver/chrome
const chrome = require ('selenium-webdriver/chrome');

//importa o modulo chormedriver
const chromedriver = require ('chromedriver')

//cria um objeto
const sevice = ()=> chrome.setDefaultService (new chrome.ServiceBuilder(chromedriver.path).build());

//Definir a função
async function run(){
    //criar um novo objeto webdriver
    let driver = await new Builder().forBrowser('chrome').build();

    //abre a pagina
    await driver.get('https://www.google.com.br');

    //encontra o elemento com o nome no navegador 
    const pesquisa = await driver.findElement(By.name('q'));

    //insere o texto
    await pesquisa.sendKeys("Javascript");

    //Pressionar o enter
    await pesquisa.sendKeys(Key.ENTER);

    
}
//chamando a função
run();