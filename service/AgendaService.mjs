const KEY = 'contatos';

export class AgendaService {
    getContatos() {
        const dados = localStorage.getItem(KEY);
        return dados ? JSON.parse(dados) : [];
    }

    saveContato(contato) {
        const lista = this.getContatos();
        lista.push(contato);
        localStorage.setItem(KEY, JSON.stringify(lista));
    }

    deleteContato(id) {
        const lista = this.getContatos().filter(c => String(c.id) !== String(id));
        localStorage.setItem(KEY, JSON.stringify(lista));
    }
}
