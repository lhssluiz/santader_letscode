package br.com.letscode.introducao.base.oo.banco.model;

public class Gerente extends Funcionario {

    ClientePessoa criarConta;

    public Gerente(String nome, String sobrenome, int idade) {
        super(nome, sobrenome, idade);
    }

    @Override
    public void trabalhar() {
        System.out.println("Atualizando plailhas e aprovando empréstimos.");
    }

    public void baterPonto() {
        super.baterPonto();
    }

    public ClientePessoa abrirContaPessoal(Pessoa pessoa){
        System.out.println("Abrindo conta para " + pessoa);
        return  new ClientePessoa(pessoa.getNome(), pessoa.getSobrenome(), pessoa.getIdade());
    }

    public ClienteEmpresa abrirConta(Empresa empresa){
        System.out.println("Abrindo conta para " + empresa);
        return new ClienteEmpresa(empresa.getNomeFantasia(), empresa.getCnpj());
    }
}
