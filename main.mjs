import { renderTabela, salvarContato, excluirContato } from './controller/AgendaController.mjs';

Object.assign(window, { excluirContato });

document.addEventListener('DOMContentLoaded', () => {
    renderTabela();

    const form = document.getElementById('form-agenda');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            salvarContato(form);
        });
    }
});
