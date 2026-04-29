import { Contato } from '../model/Contato.mjs';

const KEY = 'contatos';

export class AgendaService {
    listar() {
        const dados = localStorage.getItem(KEY);
        return dados ? JSON.parse(dados) : [];
    }

    salvar(dados) {
        const erros = Contato.validar(dados);
        if (erros.length) throw new Error(erros.join(' | '));
        const lista = this.listar();
        const contato = new Contato(dados);
        lista.push(contato);
        localStorage.setItem(KEY, JSON.stringify(lista));
        return contato;
    }

    excluir(id) {
        const lista = this.listar().filter(c => c.id !== id);
        localStorage.setItem(KEY, JSON.stringify(lista));
    }
}
