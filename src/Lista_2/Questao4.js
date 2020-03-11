import Lista from "../Lista";

export default function inverterOrdem(lista) {
    if(lista.isEmpty()){
        throw new Error("List is empty");
    }
    let listaAux = new Lista();
    let anterior, atual;

    while (!lista.isEmpty()) {
        anterior = lista.head;
        atual = lista.head.proximo;

        while (atual !== null) {
            anterior = atual;
            atual = atual.proximo;
        }
        listaAux.append(anterior.dado);
        lista.removeEnd();
    }

    // Preencher lista principal com os elementos em outra ordem
    while (!listaAux.isEmpty()) {
        anterior = listaAux.head;
        atual = listaAux.head.proximo;

        while (atual !== null) {
            anterior = atual;
            atual = atual.proximo;
        }
        lista.add(anterior.dado);
        listaAux.removeEnd();
    }
    
    return lista;
}