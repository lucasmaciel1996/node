var nome='Lucas';
var idade=23;

console.log(nome,idade);

var fs =require("fs");

fs.readFile("alunos.csv","utf8",function(erro,dados){
  console.log(erro,dados);
  var linha =dados.split("\n");
  console.log(linha);

});

var mysql=require("mysql");

var dados ={
  host     : 'localhost',
  user     : 'root',
  password : 'elaborata',
  database : 'pdv'
};

var connection = mysql.createConnection(dados);
connection.connect();

var sql ="SELECT * FROM produtos";

connection.query(sql,function(erro,dados){
 console.log(erro,dados);
 connection.end();
});
