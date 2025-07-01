// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    // A variável CLIENT_DATA é carregada de js/data-client.js
    if (typeof CLIENT_DATA === 'undefined') {
        console.error("CLIENT_DATA não encontrado. Verifique se 'js/data-client.js' foi carregado corretamente.");
        return;
    }

    const projectTitleElem = document.getElementById('project-title');
    const clientInfoElem = document.getElementById('client-info');
    const startDateElem = document.getElementById('startDate');
    const goLiveDateElem = document.getElementById('goLiveDate');
    const endDateElem = document.getElementById('endDate');
    const overallProgressBar = document.getElementById('overall-progress-bar');
    const overallProgressText = document.getElementById('overall-progress-text');
    const mindMapContainer = document.getElementById('mind-map-container');

    // Preenche o cabeçalho com as informações do cliente
    projectTitleElem.textContent = CLIENT_DATA.projectName;
    clientInfoElem.innerHTML = `Cliente: <strong>${CLIENT_DATA.clientName}</strong> | Contato: ${CLIENT_DATA.contact}<br>Consultor: ${CLIENT_DATA.consultant}`;
    if (startDateElem) startDateElem.textContent = new Date(CLIENT_DATA.startDate).toLocaleDateString('pt-BR');
    if (goLiveDateElem) goLiveDateElem.textContent = new Date(CLIENT_DATA.goLiveDate).toLocaleDateString('pt-BR');
    if (endDateElem) endDateElem.textContent = new Date(CLIENT_DATA.endDate).toLocaleDateString('pt-BR');

    let totalTasksCount = 0;
    let completedTasksCount = 0;

    // Função recursiva para criar os nós do mapa mental
    function createNode(nodeData, level = 0) {
        let status = nodeData.status;
        let isOverdue = false;

        // Se for uma tarefa (type === 'task'), verifica o status e prazo
        if (nodeData.type === 'task') {
            totalTasksCount++;
            if (status === 'completed') {
                completedTasksCount++;
            } else if (status === 'pending' || status === 'in-progress') { // Apenas tarefas pendentes ou em progresso podem ficar atrasadas
                const today = new Date();
                // Normaliza a data para evitar problemas com fuso horário / hora
                const dueDate = new Date(nodeData.dueDate);
                dueDate.setHours(0, 0, 0, 0);
                today.setHours(0, 0, 0, 0);

                if (today > dueDate) {
                    isOverdue = true;
                    status = 'overdue'; // Sobrescreve o status para 'atrasado' se o prazo passou
                }
            }
        }

        const nodeCard = document.createElement('div');
        nodeCard.className = `node-card type-${nodeData.type || 'task'} ${status ? `status-${status}` : ''}`;
        if (nodeData.type !== 'task' && nodeData.nodes && nodeData.nodes.length > 0) { // Apenas nós com filhos são clicáveis
            nodeCard.classList.add('clickable');
        }


        const nodeHeader = document.createElement('div');
        nodeHeader.className = 'node-header';
        nodeHeader.innerHTML = `
            <h3>${nodeData.name}</h3>
            ${(nodeData.nodes && nodeData.nodes.length > 0) ? `<i class="fas fa-chevron-right toggle-icon"></i>` : ''}
        `;
        nodeCard.appendChild(nodeHeader);

        const nodeContent = document.createElement('div');
        nodeContent.className = 'node-content';

        if (nodeData.description) {
            nodeContent.innerHTML += `<p class="node-description">${nodeData.description}</p>`;
        }
        if (nodeData.details) {
            nodeContent.innerHTML += `<p class="node-details"><strong>Detalhes:</strong> ${nodeData.details}</p>`;
        }

        // Adiciona informações meta para tarefas
        if (nodeData.type === 'task') {
            let statusIcon = '';
            let statusText = '';
            switch (status) {
                case 'completed': statusIcon = '<i class="fas fa-check-circle status-icon"></i>'; statusText = 'Concluído'; break;
                case 'in-progress': statusIcon = '<i class="fas fa-spinner status-icon fa-spin"></i>'; statusText = 'Em Progresso'; break;
                case 'pending': statusIcon = '<i class="fas fa-hourglass-half status-icon"></i>'; statusText = 'Pendente'; break;
                case 'overdue': statusIcon = '<i class="fas fa-exclamation-triangle status-icon"></i>'; statusText = 'ATRASADO'; break;
                default: statusIcon = '<i class="fas fa-question-circle status-icon"></i>'; statusText = 'N/A'; break;
            }

            nodeContent.innerHTML += `
                <div class="node-meta">
                    <span><strong>Responsável:</strong> ${nodeData.responsible}</span>
                    <span><strong>Prazo:</strong> ${new Date(nodeData.dueDate).toLocaleDateString('pt-BR')}</span>
                    <span class="status-indicator status-${status}">${statusIcon} ${statusText}</span>
                </div>
            `;
            if (nodeData.notes) {
                nodeContent.innerHTML += `<p class="node-details node-notes"><em>Observações: ${nodeData.notes}</em></p>`;
            }
            if (nodeData.link) {
                nodeContent.innerHTML += `<p class="node-details"><a href="${nodeData.link}" target="_blank" rel="noopener noreferrer" class="node-link">Acessar Recurso <i class="fas fa-external-link-alt"></i></a></p>`;
            }
        }

        const childNodesContainer = document.createElement('div');
        childNodesContainer.className = 'child-nodes-container';
        // Renderiza nós filhos recursivamente
        if (nodeData.nodes && nodeData.nodes.length > 0) {
            nodeData.nodes.forEach(childNode => {
                // Garante que cada nó filho também tenha um 'type', default para 'task' se não especificado
                if (!childNode.type) childNode.type = 'task';
                childNodesContainer.appendChild(createNode(childNode, level + 1));
            });
            nodeContent.appendChild(childNodesContainer);
        }

        nodeCard.appendChild(nodeContent);

        // Adiciona funcionalidade de expandir/contrair para nós com filhos
        if (nodeData.nodes && nodeData.nodes.length > 0) {
            nodeHeader.addEventListener('click', (e) => {
                // Previne que o clique no header de uma tarefa tente expandir/colapsar
                if (nodeData.type !== 'task') {
                     e.stopPropagation(); // Impede que o evento se propague para cards pais, caso haja aninhamento de clickables
                    nodeCard.classList.toggle('expanded');
                }
            });
        }

        return nodeCard;
    }

    // Renderiza as fases principais
    if (mindMapContainer && CLIENT_DATA.phases) {
        CLIENT_DATA.phases.forEach(phase => {
             if (!phase.type) phase.type = 'phase'; // Garante que fases principais tenham tipo
            mindMapContainer.appendChild(createNode(phase));
        });
    } else {
        console.error("Elemento 'mind-map-container' não encontrado ou CLIENT_DATA.phases não definido.");
    }

    // Atualiza o progresso geral após renderizar todos os nós
    if (overallProgressBar && overallProgressText) {
        const overallProgress = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;
        overallProgressBar.style.width = `${overallProgress.toFixed(2)}%`;
        overallProgressText.textContent = `${overallProgress.toFixed(0)}% Concluído (${completedTasksCount}/${totalTasksCount} tarefas)`;
    } else {
        console.error("Elementos da barra de progresso não encontrados.");
    }
});
