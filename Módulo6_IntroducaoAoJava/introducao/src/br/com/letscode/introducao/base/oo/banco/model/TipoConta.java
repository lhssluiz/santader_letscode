package br.com.letscode.introducao.base.oo.banco.model;

public enum TipoConta {

    CONTA_CORRENTE("Conta corrente"),
    CP("Conta Poupança"),
    CONTA_PAGAMENTO("Conta Pagamento");

    private final String nome;
    // Toda variável final, precisa ser instanciada no construtor
    // quando ela não tiver um valor inicializado
    // a partir daí ela vira constante

    TipoConta(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "TipoConta{" +
                "nome='" + nome + '\'' +
                '}';
    }
}
