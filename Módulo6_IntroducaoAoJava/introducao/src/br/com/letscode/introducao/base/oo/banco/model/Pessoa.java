package br.com.letscode.introducao.base.oo.banco.model;

public class Pessoa {
    private String nome;
    private String sobrenome;
    private int  idade;

    public Pessoa(String nome, String sobrenome, int idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        setIdade(idade);
    }

    @Override
    public String toString() {
        return "Pessoa{" +
                "nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", idade=" + idade +
                '}';
    }

    public String getNome() {
        return nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public int getIdade() {
        return idade;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public void setIdade(int idade) {
        if(idade < 150 && idade > 0) {
            this.idade = idade;
        }
        else {
            System.err.println("Não é possível adicionar essa idade");
        }
    }
}
