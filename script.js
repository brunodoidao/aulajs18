var contatos = [];

var btn_ins = document.getElementById("btn-ins");

var txtNome = document.getElementById("txtNome");

var txtTelefone = document.getElementById("txtTelefone");

var tbody = document.getElementById("tbody");

function carregar_tabela(){
    limpa_tabela();
    for(i=0; i < contatos.length; i++){
        incluir_linha_tabela(contatos[i]);
        
    }
}

function clique(){
    
    var contato = {};
    contato.nome = txtNome.value;
    contato.telefone = txtTelefone.value;
    contatos.push(contato);  
    txtNome.value = "";
    txtTelefone.value = "";
    carregar_tabela();
    txtPesquisa.value = "";
}

var txtPesquisa = document.getElementById("txtPesquisa");
    txtPesquisa.addEventListener("keydown", function(e){
        if(e.key==="Enter"){
            pesquisar();
        }
    });

function limpa_tabela(){
    tbody.innerHTML="";
}
function incluir_linha_tabela(contato){
    var novaLinha = document.createElement("tr");
        var nome = document.createElement("td");
        var telefone = document.createElement("td");
        nome.innerHTML = contato.nome;
        telefone.innerHTML = contato.telefone;
        novaLinha.appendChild(nome);
        novaLinha.appendChild(telefone);
        tbody.appendChild(novaLinha);
}

function pesquisar(){
    limpa_tabela();
    for(i=0; i < contatos.length; i++){
        if(contatos[i].nome.indexOf(txtPesquisa.value) != -1){
            incluir_linha_tabela(contatos[i]);
        }
    }
}