document.addEventListener('DOMContentLoaded', () => {
    const clientData = CASA_DIBS_DATA; // Assume que 'CASA_DIBS_DATA' está disponível globalmente

    const projectTitleElem = document.getElementById('project-title');
    const clientInfoElem = document.getElementById('client-info');
    const sidebarNavElem = document.getElementById('sidebar-nav');
    const contentAreaElem = document.getElementById('content-area');
    const overallProgressBar = document.getElementById('overall-progress-bar');
    const overallProgressText = document.getElementById('overall-progress-text');

    // Preenche o cabeçalho
    projectTitleElem.textContent = clientData.projectName;
    clientInfoElem.innerHTML = `Cliente: <strong>${clientData.clientName}</strong> | Contato: ${clientData.contact}<br>Consultor: ${clientData.consultant}`;

    let totalTasks = 0;
    let completedTasks = 0;

    // Renderiza as seções e tarefas
    clientData.phases.forEach(phase => {
        // Adiciona link na sidebar
        const navLink = document.createElement('a');
        navLink.href = `#${phase.id}`;
        navLink.textContent = phase.title;
        sidebarNavElem.appendChild(navLink);

        // Cria a seção da fase
        const phaseSection = document.createElement('section');
        phaseSection.id = phase.id;
        phaseSection.className = 'phase-section';

        const phaseHeader = document.createElement('div');
        phaseHeader.className = 'phase-header';
        phaseHeader.innerHTML = `<h2>${phase.title}</h2><i class="fas fa-chevron-down"></i>`;
        phaseSection.appendChild(phaseHeader);

        const phaseContent = document.createElement('div');
        phaseContent.className = 'phase-content'; // Escondido por padrão
        phaseContent.innerHTML = `<p>${phase.description}</p>`;

        // Adiciona as tarefas dentro do conteúdo da fase
        phase.tasks.forEach(task => {
            totalTasks++;
            if (task.status === 'completed') {
                completedTasks++;
            }

            const taskCard = document.createElement('div');
            // Determina a classe de status para estilização de borda
            let statusClass = '';
            let statusIcon = '';
            let statusText = '';
            const today = new Date();
            const dueDate = new Date(task.dueDate);

            if (task.status === 'completed') {
                statusClass = 'status-completed';
                statusIcon = '<i class="fas fa-check-circle status-icon"></i>';
                statusText = 'Concluído';
            } else if (task.status === 'in-progress') {
                statusClass = 'status-in-progress';
                statusIcon = '<i class="fas fa-spinner status-icon fa-spin"></i>';
                statusText = 'Em Progresso';
            } else if (task.status === 'pending') {
                if (today > dueDate) {
                    statusClass = 'status-overdue';
                    statusIcon = '<i class="fas fa-exclamation-triangle status-icon"></i>';
                    statusText = 'Atrasado';
                } else {
                    statusClass = 'status-pending';
                    statusIcon = '<i class="fas fa-hourglass-half status-icon"></i>';
                    statusText = 'Pendente';
                }
            } else { // Default para status desconhecido
                statusClass = 'status-pending';
                statusIcon = '<i class="fas fa-question-circle status-icon"></i>';
                statusText = 'Desconhecido';
            }

            taskCard.className = `task-card ${statusClass}`;
            taskCard.innerHTML = `
                <strong>${task.name}</strong>
                <p class="task-details">${task.details}</p>
                <div class="task-meta">
                    <span>Responsável: <strong>${task.responsible}</strong></span>
                    <span>Prazo: <strong>${new Date(task.dueDate).toLocaleDateString('pt-BR')}</strong></span>
                    <span class="status ${statusClass}">${statusIcon}${statusText}</span>
                </div>
                ${task.notes ? `<p class="task-details" data-tooltip="Observações Adicionais"><em>${task.notes}</em></p>` : ''}
                ${task.link ? `<p class="task-details"><a href="${task.link}" target="_blank" rel="noopener noreferrer">Acessar Recurso <i class="fas fa-external-link-alt"></i></a></p>` : ''}
            `;
            phaseContent.appendChild(taskCard);
        });

        phaseSection.appendChild(phaseContent);
        contentAreaElem.appendChild(phaseSection);

        // Adiciona evento de clique para expandir/contrair
        phaseHeader.addEventListener('click', () => {
            phaseContent.classList.toggle('active');
            phaseHeader.querySelector('i').classList.toggle('fa-chevron-down');
            phaseHeader.querySelector('i').classList.toggle('fa-chevron-up');
        });
    });

    // Calcula e atualiza o progresso geral
    const overallProgress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    overallProgressBar.style.width = `${overallProgress.toFixed(2)}%`;
    overallProgressText.textContent = `${overallProgress.toFixed(0)}% Concluído (${completedTasks}/${totalTasks} Tarefas)`;

    // Abre a primeira seção por padrão (opcional)
    if (clientData.phases.length > 0) {
        document.getElementById(clientData.phases[0].id).querySelector('.phase-content').classList.add('active');
        document.getElementById(clientData.phases[0].id).querySelector('.phase-header i').classList.remove('fa-chevron-down');
        document.getElementById(clientData.phases[0].id).querySelector('.phase-header i').classList.add('fa-chevron-up');
    }
});
