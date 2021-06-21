import express from "express"; //toda vez q se ve ... antes da importação de uma biblioteca significa q a biblioteca necessita da importação de suas tipagens também
import { response } from "express";
//geralmente as bibliotecas de tipos ficam em @types/NomeDaBiblioteca, nessa caso @types/express

const app = express();
/**
 * get		=> Buscar uma informação
 * post		=> Inserir(criar) uma informação
 * put		=> Alterar uma informação
 * delete	=> Remover um dado
 * patch	=> Alterar uma informação específica
 */

app.get("/test", (req, res) => {
	//req => tudo q entra
	//res => tudo q sai
	return res.send("olá mundo")
})

app.post("/test-post", (req,res) => {
	return res.send("olá mundo, este eh o resultado do método post")
})

//http://localhost:3000
app.listen(3000,() => console.log("server is running at port 3000"));