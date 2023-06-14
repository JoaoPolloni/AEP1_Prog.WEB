// Importando o módulo 'fs' e a função 'copyFileSync' do Node.js
import fs, { copyFileSync } from 'fs'

// Definindo um método chamado 'createProduct' na classe 'ProductService'
// que recebe um objeto 'product' como argumento
class ProductService {

    public createProduct(product) {


        const data = JSON.stringify(product)
        
        fs.writeFile('products.json', data, (err) => {
            if(err){
                throw err;
            }
            else{
                console.log("Dados gravados com sucesso!")
            }
        
        })

    }   

    
    public getAll() {

         const conteudo = fs.readFileSync('products.json')
         return JSON.parse(conteudo)

    }

    public getStock() {
        const products = fs.readFileSync('products.json')
        const jsondata = JSON.parse(products);
        let stock = jsondata.map((product) => ({
            nome: product.nome,
            qtde: product.qtde,
            preco: product.preco,
            valor_estoque: product.qtde * product.preco
    }))
     // Criando um novo array com base no objeto 'jsondata' utilizando o método 'map'
    // Cada elemento do novo array é um objeto com as propriedades 'nome', 'qtde', 'preco'
    // e 'valor_estoque', onde 'valor_estoque' é o resultado da multiplicação entre
    // 'qtde' e 'preco' para cada produto no array original
    return stock
}

    public getStockPrice() {
        const products = fs.readFileSync('products.json')
        const jsondata = JSON.parse(products);
        let stock = jsondata.reduce((aux, product) => {
            const stock_value = product.qtde * product.preco
            return aux + stock_value
    }, 0)
    return ({ValorTotalEstoque: stock})
    }

}
export default new ProductService