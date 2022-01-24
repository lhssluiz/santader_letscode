package br.com.letscode.introducao.base.oo.banco.model;

public class ClientePessoa extends Pessoa implements Cliente {

    private Conta conta;
    public ClientePessoa(String nome, String sobreNome, int idade) {
        super(nome, sobreNome, idade);

        conta = new Conta();
    }

    public Conta getConta() {
        return conta;
    }

    public void setConta(Conta conta) {
        this.conta = conta;
    }
}
