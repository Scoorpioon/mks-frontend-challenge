export async function getProducts() {
    try {
        const data = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
        const json = await data.json();

        return json;
    }  catch(error) {
        console.log(`Eita, acabou dando um erro: ${error}`);
        return { error: error }
    }
}