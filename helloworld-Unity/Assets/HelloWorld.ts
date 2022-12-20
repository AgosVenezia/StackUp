import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class HelloWorld extends ZepetoScriptBehaviour {

  Start() {   
    console.log('Hi, this Aguito! This log code is used to keep track of what your code is doing.');
    console.warn('Hi, this is Aguito! This log code outputs a warning message, but your code is still able to run successfully.');
    console.error('Hi, this is Aguito! This log code is displayed on the console when your application runs into an error.');
  }
}