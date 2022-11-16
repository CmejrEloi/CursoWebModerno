function Carro(velocidademaxima = 200, delta = 5){
    //atibuto privado
    let velocidadeAtual = 0;

    //metodo publico -> oO uso do This torna metodo/variavel publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidademaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidademaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())