/*para tipar um objeto ou variavel no typescript eh nescessario somente isso:
	nomeDaVariavel:tipoDaVariavel
	nesse arquivo vai ficar nome:string, email:string, telefone:int

	para fazer com que um parâmetro em um objeto seja opcional basta adicionar ? antes do : na interface ou função que esteja utilizando
*/
interface Usuario {
	nome:string, email:string, telefone?:string //telefone aqui vira opcional
}

function enviarEmail({email, nome, telefone}: Usuario) {
    console.log(`olá ${nome} seu email é ${email} e seu telefone é ${telefone}`);
	
}
enviarEmail({
	nome:"Guilherme",
	email:"guilhermebn198@gmail.com",
	// telefone:"1298391283"
})