interface Pedido
{
    nombre : string
    cantidad : number
}

class Cliente
{
    realizarPedido(mozo : Mozo, pedido : Pedido)
    {
        mozo.recibirPedido(pedido) // <--- El momento donde se origina el mensaje
    }
}

class Mozo
{
    recibirPedido(pedido : Pedido) : void
    {
        console.log("Se recibio el pedido")
    }
}

let main = () => {
    let pepito = new Cliente()
    let mozo : Mozo = new Mozo()
    let pedido : Pedido = {
        nombre : "Ceviche",
        cantidad : 2
    }

    pepito.realizarPedido(mozo, pedido)
}
main()