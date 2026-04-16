import { renderTabela, salvarContato, excluirContato } from './controller/AgendaController.mjs';

Object.assign(window, {
    salvarContato,
    excluirContato
});

document.addEventListener('DOMContentLoaded', renderTabela);
