const CLIENT_DATA = {
  projectName: "Projeto de Reestruturação - Casas Goianita",
  clientName: "Casas Goianita",
  contact: "A definir",
  company: "GRUPO UGESTOR",
  consultant: "A definir",
  startDate: "A definir",
  goLiveDate: "A definir",
  endDate: "A definir",
  phases: [
    {
      id: "1-auditoria-e-diagnostico",
      name: "1. Auditoria e Diagnóstico Inicial",
      description: "Levantamento completo da situação atual da empresa nos âmbitos de estoque, financeiro e trabalhista para embasar as próximas ações.",
      type: "phase", // Adicionado type
      nodes: [ // Renomeado de sub_phases para nodes
        {
          id: "1-1-auditorias",
          name: "Auditorias",
          description: "Execução de auditorias em áreas críticas da empresa.",
          type: "sub-phase", // Adicionado type
          nodes: [ // Renomeado de tasks para nodes
            {
              id: "1-1-1-auditoria-inventario",
              name: "Auditoria de Inventário (Estoque e Imobilizado)",
              details: "Realizar a contagem e auditoria do estoque de produtos de revenda e do ativo imobilizado nas três lojas.",
              responsible: "Equipe UGESTOR",
              dueDate: "A definir",
              status: "pending",
              type: "task", // Adicionado type
            },
            {
              id: "1-1-2-auditoria-financeira",
              name: "Auditoria Financeira",
              details: "Levantamento de todas as contas a pagar, a receber e dívidas em aberto para um panorama financeiro completo.",
              responsible: "Equipe UGESTOR",
              dueDate: "A definir",
              status: "pending",
              type: "task",
            },
            {
              id: "1-1-3-qualificacao-dividas",
              name: "Relatório de Qualificação de Dívidas",
              details: "Apuração detalhada e classificação de todas as dívidas da empresa.",
              responsible: "Equipe UGESTOR",
              dueDate: "A definir",
              status: "pending",
              type: "task",
            },
            {
              id: "1-1-4-mapeamento-passivo-trabalhista",
              name: "Mapeamento do Passivo Trabalhista",
              details: "Identificação e documentação de todos os passivos e riscos trabalhistas.",
              responsible: "Equipe UGESTOR",
              dueDate: "A definir",
              status: "pending",
              type: "task",
            },
          ],
        },
      ],
    },
    {
      id: "2-processos-e-sistema",
      name: "2. Processos e Sistema",
      description: "Mapeamento dos processos existentes, saneamento de dados e implantação de um novo sistema de gestão.",
      type: "phase",
      nodes: [
        {
          id: "2-1-mapeamento-e-implantacao",
          name: "Mapeamento e Implantação",
          description: "Documentação dos fluxos de trabalho e implementação da nova ferramenta de gestão.",
          type: "sub-phase",
          nodes: [
             {
              id: "2-1-1-mapeamento-processos",
              name: "Mapeamento de Processos (Financeiro, Compras, Estoque)",
              details: "Documentar os processos atuais que são executados de forma pessoalizada e não formalizada.",
              responsible: "Equipe UGESTOR",
              dueDate: "A definir",
              status: "pending",
              type: "task",
            },
            {
              id: "2-1-2-implantacao-erp",
              name: "Implantação de Novo Sistema ERP",
              details: "Implementar um novo sistema de gestão para centralizar e controlar as operações da empresa.",
              responsible: "Equipe UGESTOR",
              dueDate: "A definir",
              status: "pending",
              type: "task",
            },
            {
              id: "2-1-3-saneamento-cadastros",
              name: "Saneamento de Cadastros",
              details: "Limpeza, padronização e organização dos cadastros de clientes e fornecedores.",
              responsible: "Equipe UGESTOR e Cliente",
              dueDate: "A definir",
              status: "pending",
              type: "task",
            },
            {
              id: "2-1-4-reordenamento-plano-contas",
              name: "Reordenamento do Plano de Contas",
              details: "Estruturar um novo plano de contas que atenda às necessidades de controle financeiro e gerencial.",
              responsible: "Equipe UGESTOR",
              dueDate: "A definir",
              status: "pending",
              type: "task",
            },
          ],
        },
      ],
    },
    {
      id: "3-estrutura-organizacional",
      name: "3. Estrutura Organizacional e Pessoas",
      description: "Redefinição da estrutura da empresa e análise das competências da equipe.",
      type: "phase",
      nodes: [ // Renomeado de tasks para nodes e ajustado para type: "task"
        {
          id: "3-1-estruturacao-organograma",
          name: "Estruturação do Organograma",
          details: "Desenhar e oficializar a nova estrutura hierárquica e de departamentos da empresa.",
          responsible: "Equipe UGESTOR",
          dueDate: "A definir",
          status: "pending",
          type: "task",
        },
        {
          id: "3-2-mapeamento-perfil-comportamental",
          name: "Mapeamento de Perfil (Comportamental e Técnico)",
          details: "Analisar o perfil técnico e comportamental dos colaboradores para otimizar a alocação de pessoas.",
          responsible: "Equipe UGESTOR",
          dueDate: "A definir",
          status: "pending",
          type: "task",
        },
      ],
    },
    {
        id: "4-estrategia-de-mercado-e-marketing",
        name: "4. Estratégia de Mercado e Marketing",
        description: "Análise de mercado, reestruturação da identidade da marca e planejamento da expansão comercial.",
        type: "phase",
        nodes: [
            {
                id: "4-1-analise-de-mercado",
                name: "Análise de Mercado e Posicionamento",
                description: "Estudos para entender o mercado e o desempenho dos produtos.",
                type: "sub-phase",
                nodes: [
                    {
                        id: "4-1-1-estudo-curva-abc",
                        name: "Estudo de Curva ABC",
                        details: "Análise do portfólio de produtos para identificar os itens de maior impacto em faturamento e margem.",
                        responsible: "Equipe UGESTOR",
                        dueDate: "A definir",
                        status: "pending",
                        type: "task",
                    },
                    {
                        id: "4-1-2-benchmark-concorrentes",
                        name: "Benchmark de Mercado",
                        details: "Realizar um estudo comparativo com concorrentes, clientes, parceiros e fornecedores.",
                        responsible: "Equipe UGESTOR",
                        dueDate: "A definir",
                        status: "pending",
                        type: "task",
                    }
                ]
            },
            {
                id: "4-2-desenvolvimento-estrategico",
                name: "Desenvolvimento Estratégico",
                description: "Ações para renovar a marca e expandir sua atuação.",
                type: "sub-phase",
                nodes: [
                    {
                        id: "4-2-1-reestruturacao-identidade-marketing",
                        name: "Planejamento de Reestruturação de Identidade e Marketing",
                        details: "Desenvolver novo plano de marketing e identidade visual para a Casa Goianita.",
                        responsible: "Equipe UGESTOR",
                        dueDate: "A definir",
                        status: "pending",
                        type: "task",
                    },
                    {
                        id: "4-2-2-insercao-mercado-digital",
                        name: "Inserção no Mercado Digital",
                        details: "Estruturar a entrada e operação da empresa nos canais de venda digitais.",
                        responsible: "Equipe UGESTOR",
                        dueDate: "A definir",
                        status: "pending",
                        type: "task",
                    },
                    {
                        id: "4-2-3-novos-produtos-parcerias",
                        name: "Novos Produtos e Parcerias",
                        details: "Buscar e negociar com novos fornecedores (com exclusividade) e artistas plásticos para collabs.",
                        responsible: "Equipe UGESTOR e Cliente",
                        dueDate: "A definir",
                        status: "pending",
                        type: "task",
                    }
                ]
            }
        ]
    },
    {
        id: "5-reestruturacao-fisica",
        name: "5. Reestruturação Física",
        description: "Redefinição da estrutura física das operações da empresa.",
        type: "phase",
        nodes: [
            {
                id: "5-1-plano-reestruturacao-lojas",
                name: "Plano de Reestruturação das Lojas",
                details: "Estudar e planejar a transição da operação de três lojas para uma loja única centralizada.",
                responsible: "Equipe UGESTOR",
                dueDate: "A definir",
                status: "pending",
                type: "task",
            }
        ]
    }
  ],
};
