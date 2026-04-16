export class Contato {
    constructor({id = null, nome, telefone, email}){
        this.id = id ?? Date.now();
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;

    }

    static validar(dados) {
        const erros = [];
        if (!dados.nome?.trim()) erros.push('Nome é obrigatório');
        if (!dados.email?.trim()) erros.push('E-mail é obrigatório');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email))
            erros.push('E-mail inválido');
        return erros;
    }

}
