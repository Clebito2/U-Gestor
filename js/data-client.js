const CASA_DIBS_DATA = {
    projectName: "Plano de Implantação ERP UGESTOR",
    clientName: "CASA DIBS LTDA",
    contact: "José, Portal e Rose",
    company: "GRUPO UGESTOR",
    consultant: "Alecio Silva e Equipe",
    startDate: "2025-04-27",
    goLiveDate: "2025-06-01",
    endDate: "2025-08-30",
    phases: [
        {
            id: "introducao",
            title: "1. Introdução e Visão Geral",
            description: "Este módulo define o propósito do projeto, o escopo e os pilares fundamentais para uma implantação de sucesso. É a base conceitual.",
            tasks: [
                {
                    id: "introducao-01",
                    name: "Compreensão e Aprovação do Escopo Geral",
                    details: "Validação do documento inicial de escopo e objetivos do projeto.",
                    responsible: "Cliente (José, Portal, Rose) e UGESTOR (Alecio)",
                    dueDate: "2025-05-09", // Data de assinatura do documento
                    status: "completed",
                    notes: "Documento assinado em 09/05/2025 conforme 'Disposições Finais'."
                }
            ]
        },
        {
            id: "modulos",
            title: "2. Definição e Parametrização dos Módulos do Sistema",
            description: "Aqui são definidos os módulos do ERP UGESTOR que serão utilizados pelo cliente, conforme contrato, e seu status de parametrização.",
            tasks: [
                {
                    id: "modulos-01",
                    name: "Módulo: Bens",
                    details: "Parametrização do módulo de gestão de bens.",
                    responsible: "Equipe UGESTOR",
                    dueDate: "2025-05-20",
                    status: "in-progress"
                },
                {
                    id: "modulos-02",
                    name: "Módulo: Pedido de Compras",
                    details: "Parametrização dos processos de Requisição, Cotação e Compra.",
                    responsible: "Equipe UGESTOR",
                    dueDate: "2025-05-25",
                    status: "pending"
                },
                // ... incluir todos os módulos listados na Seção 2 do PDF
                {
                    id: "modulos-12",
                    name: "Módulo: B.I. Ugestor",
                    details: "Configuração do Business Intelligence para relatórios gerenciais.",
                    responsible: "Equipe UGESTOR",
                    dueDate: "2025-07-15",
                    status: "pending"
                }
            ]
        },
        {
            id: "estruturas",
            title: "3. Definição das Estruturas Centrais de Gestão",
            description: "Configuração das bases organizacional, financeira e contábil no sistema.",
            tasks: [
                {
                    id: "estruturas-01",
                    name: "Estrutura Societária",
                    details: "Cadastro das empresas do grupo no sistema (formal/virtual).",
                    responsible: "Equipe UGESTOR",
                    dueDate: "2025-05-10",
                    status: "completed"
                },
                {
                    id: "estruturas-02",
                    name: "Estrutura Gerencial (Centros de Custo)",
                    details: "Definição e configuração dos centros de custo para apropriação de gastos/receitas.",
                    responsible: "Cliente + UGESTOR",
                    dueDate: "2025-05-15",
                    status: "in-progress"
                },
                {
                    id: "estruturas-03",
                    name: "Plano de Contas Contábil (DE PARA)",
                    details: "Validação do 'DE PARA' do plano de contas contábil com o contador.",
                    responsible: "Cliente (Contador) + UGESTOR",
                    dueDate: "2025-05-20",
                    status: "pending"
                },
                {
                    id: "estruturas-04",
                    name: "Plano de Contas Financeiro",
                    details: "Definição da estrutura de 3 níveis (Operacional, Investimento, Financiamento).",
                    responsible: "Cliente + UGESTOR",
                    dueDate: "2025-05-22",
                    status: "pending"
                },
                {
                    id: "estruturas-05",
                    name: "Definição de Aplicação de C.C. e Conta Financeira",
                    details: "Configuração das regras de aplicação: Conta Financeira por item, DFC NÃO por CC, CC por item.",
                    responsible: "UGESTOR",
                    dueDate: "2025-05-25",
                    status: "pending",
                    notes: "Aplica Conta Financeira: Por item. Utiliza DFC por Centro de Custo: NAO. Aplica Centro de Custo: Por item."
                }
            ]
        },
        // ... Incluir todas as outras seções do PDF como objetos no array 'phases'
        // Ex: "4. Definição da Estrutura Gerencial", "5. Definição do Fluxo e Alçadas do Processo de Compras", etc.
        {
            id: "fluxos-compras",
            title: "5. Definição do Fluxo e Alçadas do Processo de Compras",
            description: "Configuração detalhada do processo de compras, incluindo módulos, fluxo de aprovações e alçadas de usuários.",
            tasks: [
                {
                    id: "compras-01",
                    name: "Definição do Modelo de Compras",
                    details: "Utilização do modelo completo com 4 módulos: Requisição de Cotação, Cotação, Pedido, Compras.",
                    responsible: "Cliente + UGESTOR",
                    dueDate: "2025-05-15",
                    status: "completed",
                    notes: "Modelo aprovado: 4 módulos completos."
                },
                {
                    id: "compras-02",
                    name: "Mapeamento do Fluxo de Compras",
                    details: "Desenho do caminho e aprovações do processo de compras.",
                    responsible: "Cliente",
                    dueDate: "2025-05-20",
                    status: "in-progress"
                },
                {
                    id: "compras-03",
                    name: "Definição de Alçadas e Usuários de Compras",
                    details: "Identificação dos usuários com acesso e seus respectivos níveis de alçada.",
                    responsible: "Cliente",
                    dueDate: "2025-05-25",
                    status: "pending"
                }
            ]
        },
        {
            id: "faturamento",
            title: "6. Definição do Fluxo e Alçada do Processo de Faturamento",
            description: "Configuração do processo de saídas de produtos e serviços, integrando-se com o Frente de Loja Agile.",
            tasks: [
                {
                    id: "faturamento-01",
                    name: "Definição do Modelo de Faturamento",
                    details: "Utilização do modelo simplificado: Ordem de Faturamento e Vendas.",
                    responsible: "Cliente + UGESTOR",
                    dueDate: "2025-05-15",
                    status: "completed",
                    notes: "Modelo aprovado: Ordem Fat. e Vendas. Usará Frente de Loja Agile."
                },
                {
                    id: "faturamento-02",
                    name: "Mapeamento do Fluxo de Faturamento",
                    details: "Ajuste do fluxo para uso do Frente de Loja Agile.",
                    responsible: "Cliente + UGESTOR",
                    dueDate: "2025-05-20",
                    status: "in-progress"
                },
                {
                    id: "faturamento-03",
                    name: "Definição de Alçadas e Usuários de Faturamento",
                    details: "Identificação dos usuários e níveis de alçada para faturamento, via Frente de Loja Agile.",
                    responsible: "Cliente",
                    dueDate: "2025-05-25",
                    status: "pending"
                }
            ]
        },
        // ... (Adicionar as seções 7 a 15 de forma detalhada, com tarefas e responsabilidades)
        {
            id: "cadastros",
            title: "15. Definição de Cadastros Essenciais",
            description: "Estruturação e organização dos dados mestres que alimentam o ERP, crucial para o funcionamento correto do sistema.",
            tasks: [
                {
                    id: "cadastros-01",
                    name: "Cadastro de Entidade (Coleta de Dados Básicos)",
                    details: "Coleta de Razão Social, CNPJ, Inscrição Estadual, Endereço, etc.",
                    responsible: "Cliente",
                    dueDate: "2025-05-20",
                    status: "in-progress"
                },
                // ... Mais sub-tarefas para Dados Negociais, Societários, Contábeis/Fiscais, Gerenciais, Financeiros.
                {
                    id: "cadastros-02",
                    name: "Coleta de Certificado Digital, NF, Série e Logomarca",
                    details: "Obtenção dos arquivos e informações necessárias para emissão de NF-e.",
                    responsible: "Cliente",
                    dueDate: "2025-05-25",
                    status: "pending"
                },
                {
                    id: "cadastros-03",
                    name: "Cadastro de Itens - Serviços",
                    details: "Preenchimento e validação da planilha de serviços com dados negociais e fiscais (NBS, Cód. Município, etc.).",
                    responsible: "Cliente + UGESTOR",
                    dueDate: "2025-05-28",
                    status: "pending"
                },
                {
                    id: "cadastros-04",
                    name: "Cadastro de Itens - Produtos",
                    details: "Preenchimento e validação da planilha de produtos com dados negociais e fiscais (NCM, CST, etc.).",
                    responsible: "Cliente + UGESTOR",
                    dueDate: "2025-05-28",
                    status: "pending"
                },
                {
                    id: "cadastros-05",
                    name: "Mapeamento de Despesas e Gastos Gerais",
                    details: "Mapeamento a ser realizado pelo Mauro.",
                    responsible: "Mauro (Cliente)",
                    dueDate: "2025-05-29",
                    status: "pending"
                },
                {
                    id: "cadastros-06",
                    name: "Inventário de Bens",
                    details: "Inventário a ser realizado pelo Marcos.",
                    responsible: "Marcos (Cliente)",
                    dueDate: "2025-05-29",
                    status: "pending"
                }
            ]
        },
        {
            id: "cronograma",
            title: "16. Cronograma de Implantação e Marcos",
            description: "Visão consolidada das datas chave e marcos importantes do projeto, essencial para o acompanhamento estratégico.",
            tasks: [
                {
                    id: "cronograma-01",
                    name: "Início do Projeto",
                    details: "Data oficial de kickoff do projeto de implantação.",
                    responsible: "Equipe UGESTOR + Cliente",
                    dueDate: "2025-04-27",
                    status: "completed"
                },
                {
                    id: "cronograma-02",
                    name: "Entrada em Produção (Go-Live)",
                    details: "Data prevista para o sistema entrar em operação oficial.",
                    responsible: "Equipe UGESTOR + Cliente",
                    dueDate: "2025-06-01",
                    status: "pending"
                },
                {
                    id: "cronograma-03",
                    name: "Encerramento Final do Projeto",
                    details: "Data de conclusão oficial de todas as fases da implantação.",
                    responsible: "Equipe UGESTOR + Cliente",
                    dueDate: "2025-08-30",
                    status: "pending"
                }
            ]
        },
        {
            id: "treinamento",
            title: "17. Plano de Treinamento UGESTOR – Faculdade do Gestor (FU)",
            description: "Capacitação dos usuários nas funcionalidades do sistema através de cursos específicos para cada função.",
            tasks: [
                {
                    id: "treinamento-ceo",
                    name: "Treinamento CEO / Controller",
                    details: "Cursos: Apresentação do Ugestor, Sistema Proc. Operacionais, GCU – Gestão de Chamados.",
                    responsible: "CEO / Controller (Cliente)",
                    dueDate: "2025-05-30",
                    status: "in-progress",
                    link: "https://faculdadeugestor.com.br/lesson/demo/1517/156"
                },
                {
                    id: "treinamento-financeiro",
                    name: "Treinamento FINANCEIRO",
                    details: "Cursos: Processos Financeiros, Contas a Pagar/Receber, DFC, etc.",
                    responsible: "Equipe Financeira (Cliente)",
                    dueDate: "2025-05-30",
                    status: "pending",
                    link: "https://faculdadeugestor.com.br/lesson/detail/255/1457"
                },
                // ... Adicionar todas as funções e seus respectivos cursos (Compras, Estoque, Produção, Bens, Faturamento)
            ]
        },
        {
            id: "usuarios-acesso",
            title: "18. Relação de Usuários e Perfil de Acesso",
            description: "Definição e configuração dos perfis de acesso dos usuários no sistema UGESTOR, garantindo a segurança e funcionalidade.",
            tasks: [
                {
                    id: "usuarios-01",
                    name: "Envio da Planilha de Usuários e Perfis",
                    details: "Aguardando envio da planilha com a relação detalhada dos usuários e seus perfis de acesso aprovados.",
                    responsible: "Mauro (Cliente)",
                    dueDate: "2025-05-20",
                    status: "pending"
                },
                {
                    id: "usuarios-02",
                    name: "Configuração de Usuários e Perfis no Sistema",
                    details: "Criação e atribuição dos perfis de acesso conforme planilha enviada.",
                    responsible: "Equipe UGESTOR",
                    dueDate: "2025-05-28",
                    status: "pending"
                }
            ]
        },
        {
            id: "inventarios",
            title: "19. Inventários para o Go-Live",
            description: "Coleta e preparação de dados críticos financeiros e de estoque para a migração e início de operação do sistema.",
            tasks: [
                {
                    id: "inventarios-01",
                    name: "Contas a Receber",
                    details: "Preenchimento da planilha de Contas a Receber.",
                    responsible: "Cliente",
                    dueDate: "2025-05-30",
                    status: "pending"
                },
                {
                    id: "inventarios-02",
                    name: "Contas a Pagar",
                    details: "Preenchimento da planilha de Contas a Pagar.",
                    responsible: "Cliente",
                    dueDate: "2025-05-30",
                    status: "pending"
                },
                {
                    id: "inventarios-03",
                    name: "Caixa",
                    details: "Inventário do Caixa (no dia 30/05).",
                    responsible: "Cliente",
                    dueDate: "2025-05-30",
                    status: "pending"
                },
                {
                    id: "inventarios-04",
                    name: "Banco",
                    details: "Inventário do Banco (no dia 30/05).",
                    responsible: "Cliente",
                    dueDate: "2025-05-30",
                    status: "pending"
                },
                {
                    id: "inventarios-05",
                    name: "Bens",
                    details: "Inventário de Bens.",
                    responsible: "Cliente",
                    dueDate: "2025-05-30",
                    status: "pending"
                },
                {
                    id: "inventarios-06",
                    name: "Estoque",
                    details: "Inventário de Estoque.",
                    responsible: "Cliente",
                    dueDate: "2025-05-30",
                    status: "pending"
                }
            ]
        }
    ]
}
