import { AgendaService } from '../service/AgendaService.mjs';
import { Contato } from '../model/Contato.mjs';

const svc = new AgendaService();

export function renderTabela() {
    const tbody = document.getElementById('tbl-contatos');
    const lista = svc.getContatos();

    tbody.innerHTML = lista.length === 0
    ? '<tr><td colspan="4" class="text-center text-muted">Nenhum contato cadastrado.</td></tr>'
    : lista.map(c => `
    <tr>
    <td>${c.nome}</td>
    <td>${c.telefone}</td>
    <td>${c.email}</td>
    <td>
    <button class="btn btn-sm btn-outline-danger"
    onclick="excluirContato('${c.id}')">Excluir</button>
    </td>
    </tr>
    `).join('');
}

export function salvarContato(form) {
    const dados = Object.fromEntries(new FormData(form));

    const erros = Contato.validar(dados);
    if (erros.length > 0) {
        alert(erros.join('\n'));
        return;
    }

    try {
        const novoContato = new Contato(dados);
        svc.saveContato(novoContato);

        form.reset();
        renderTabela();
    } catch (e) {
        alert(e.message);
    }
}

export function excluirContato(id) {
    if (!confirm('Deseja excluir este contato?')) return;
    svc.deleteContato(id);
    renderTabela();
}
