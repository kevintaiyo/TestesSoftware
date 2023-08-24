const {Builder, By, Key} = require ('selenium-webdriver');
const chrome = require ('selenium-webdriver/chrome');
const chromedriver = require ('chromedriver')

const sevice = ()=> chrome.setDefaultService (new chrome.ServiceBuilder(chromedriver.path).build());

async function run(){
    //criar um novo objeto webdriver
    let driver = await new Builder().forBrowser('chrome').build();

    //abre a pagina
    await driver.get('https://github.com/login');

    //encontra o elemento com o nome no navegador 
    const login = await driver.findElement(By.name('login'));
    const senha = await driver.findElement(By.name('password'));

    //insere o texto
    await login.sendKeys("");
    await senha.sendKeys("");
    //Pressionar o enter
    await senha.sendKeys(Key.ENTER);

    
}
//chamando a função
run();