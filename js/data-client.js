// js/data-client.js

const CLIENT_DATA = {
    projectName: "Implantação ERP UGESTOR - CASA DIBS LTDA",
    clientName: "CASA DIBS LTDA",
    contact: "José, Portal e Rose",
    company: "GRUPO UGESTOR",
    consultant: "Alecio Silva e Equipe",
    startDate: "2025-04-27",
    goLiveDate: "2025-06-01",
    endDate: "2025-08-30",

    // As fases e tarefas, organizadas em uma estrutura de "mapa mental"
    phases: [
        {
            id: "introducao",
            name: "1. Introdução e Visão Geral",
            description: "Esta fase estabelece a base e o escopo do projeto, garantindo o alinhamento de expectativas e o entendimento mútuo dos objetivos.",
            type: "phase", // Tipo de nó: fase principal
            nodes: [
                {
                    id: "intro-task-1",
                    name: "1.1. Compreensão e Aprovação do Escopo Geral do Projeto",
                    details: "Validação do documento inicial de escopo e objetivos, assinado pelas partes.",
                    responsible: "Cliente (José, Portal, Rose) e UGESTOR (Alecio)",
                    dueDate: "2025-05-09",
                    status: "completed",
                    type: "task", // Adicionado tipo para consistência
                    notes: "Documento assinado em 09/05/2025, conforme 'Disposições Finais' do plano de implantação."
                }
            ]
        },
        {
            id: "modulos",
            name: "2. Definição e Parametrização dos Módulos do Sistema",
            description: "Configuração dos módulos específicos do ERP UGESTOR contratados, liberados conforme o contrato comercial.",
            type: "phase",
            nodes: [
                {
                    id: "mod-bens",
                    name: "2.1. Módulo: Bens e Gestão Patrimonial",
                    details: "Parametrização completa do módulo de gestão de bens e ativos imobilizados.",
                    responsible: "Equipe UGESTOR",
                    dueDate: "2025-05-20",
                    status: "in-progress",
                    type: "task"
                },
                {
                    id: "mod-compras",
                    name: "2.2. Módulo: Pedido de Compras (Ciclo Completo)",
                    details: "Configuração dos processos de Requisição de Cotação, Cotação, Pedido e Compras.",
                    responsible: "Equipe UGESTOR",
                    dueDate: "2025-05-25",
                    status: "pending",
                    type: "task"
                },
                {
                    id: "mod-faturamento",
                    name: "2.3. Módulo: Pedido de Vendas / Faturamento",
                    details: "Parametrização das saídas de produtos/serviços e emissão de documentos fiscais.",
                    responsible: "Equipe UGESTOR",
                    dueDate: "2025-05-28",
                    status: "pending",
                    type: "task"
                },
                {
                    id: "mod-frente-loja",
                    name: "2.4. Módulo: Sistema Agille – Frente de Loja",
                    details: "Integração e configuração do PDV Agille para vendas diretas.",
                    responsible: "Equipe UGESTOR",
                    dueDate: "2025-06-01", // Go-Live
                    status: "pending",
                    type: "task"
                },
                // ... adicione todos os módulos do item 2 do PDF
                {
                    id: "mod-bi",
                    name: "2.12. Módulo: B.I. Ugestor",
                    details: "Configuração e personalização dos painéis de Business Intelligence para análise de dados gerenciais.",
                    responsible: "Equipe UGESTOR",
                    dueDate: "2025-07-15",
                    status: "pending",
                    type: "task"
                }
            ]
        },
        {
            id: "estruturas-contabeis",
            name: "3. Definição de Estruturas Societárias, Gerenciais e Contábeis",
            description: "Estabelecimento das bases organizacionais e financeiras que guiarão o fluxo de informações no sistema.",
            type: "phase",
            nodes: [
                {
                    id: "estrut-societaria",
                    name: "3.1. Estrutura Societária",
                    details: "Cadastro e organização das empresas do grupo no sistema (formal ou virtual).",
                    responsible: "Equipe UGESTOR",
                    dueDate: "2025-05-10",
                    status: "completed",
                    type: "task"
                },
                {
                    id: "estrut-cc",
                    name: "3.2. Estrutura Gerencial – Centros de Custo",
                    details: "Definição dos Centros de Custo para apropriação de receitas e despesas.",
                    responsible: "Cliente + UGESTOR",
                    dueDate: "2025-05-15",
                    status: "in-progress",
                    type: "task"
                },
                {
                    id: "pc-contabil",
                    name: "3.3. Plano de Contas Contábil e DE/PARA",
                    details: "Validação do plano padrão UGESTOR com o contador e elaboração do DE/PARA com o sistema contábil atual.",
                    responsible: "Cliente (Contador) + UGESTOR",
                    dueDate: "2025-05-20",
                    status: "pending",
                    type: "task"
                },
                {
                    id: "pc-financeiro",
                    name: "3.4. Plano de Contas Financeiro",
                    details: "Definição da estrutura de fluxo de caixa (Operacional, Investimento, Financiamento) para visualização no sistema.",
                    responsible: "Cliente + UGESTOR",
                    dueDate: "2025-05-22",
                    status: "pending",
                    type: "task"
                },
                {
                    id: "aplicacao-cc-cf",
                    name: "3.5. Aplicação de Centros de Custo e Conta Financeira",
                    details: "Configuração das regras de como Centros de Custo e Contas Financeiras são aplicados (por item, operação, etc.).",
                    responsible: "UGESTOR",
                    dueDate: "2025-05-25",
                    status: "pending",
                    type: "task",
                    notes: "Aplica Conta Financeira: Por item. Utiliza DFC por Centro de Custo: NÃO. Aplica Centro de Custo: Por item."
                }
            ]
        },
        // --- Fluxos de Processo (Exemplo com aninhamento maior para "mapa mental") ---
        {
            id: "fluxos-operacionais",
            name: "4. Desenho e Parametrização dos Fluxos Operacionais",
            description: "Mapeamento detalhado e configuração dos processos de negócio chave no ERP para garantir a fluidez das operações.",
            type: "phase",
            nodes: [
                {
                    id: "fluxo-compras-geral",
                    name: "4.1. Fluxo e Alçadas do Processo de Compras",
                    details: "Detalha a jornada das aquisições, desde a requisição até a compra final, com suas aprovações.",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "compra-modelo",
                            name: "4.1.1. Definição do Modelo de Compras (4 Módulos)",
                            details: "Utilização do modelo completo com Requisição de Cotação, Cotação, Pedido e Compras.",
                            responsible: "Cliente + UGESTOR",
                            dueDate: "2025-05-15",
                            status: "completed",
                            type: "task"
                        },
                        {
                            id: "compra-mapeamento",
                            name: "4.1.2. Mapeamento do Fluxo de Compras",
                            details: "Desenho e validação do caminho do processo de compras.",
                            responsible: "Cliente",
                            dueDate: "2025-05-20",
                            status: "in-progress",
                            type: "task"
                        },
                        {
                            id: "compra-alcadas",
                            name: "4.1.3. Definição de Alçadas e Usuários de Compras",
                            details: "Identificação dos usuários com acesso e seus respectivos níveis de alçada no processo de compras.",
                            responsible: "Cliente",
                            dueDate: "2025-05-25",
                            status: "pending",
                            type: "task"
                        }
                    ]
                },
                {
                    id: "fluxo-faturamento-geral",
                    name: "4.2. Fluxo e Alçada do Processo de Faturamento",
                    details: "Contempla a saída de produtos e serviços, com foco na integração com o Frente de Loja Agille.",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "faturamento-modelo",
                            name: "4.2.1. Definição do Modelo de Faturamento (Ordem Fat. e Vendas)",
                            details: "Modelo simplificado, utilizado em conjunto com o Frente de Loja Agille.",
                            responsible: "Cliente + UGESTOR",
                            dueDate: "2025-05-15",
                            status: "completed",
                            type: "task"
                        },
                        {
                            id: "faturamento-mapeamento",
                            name: "4.2.2. Mapeamento do Fluxo de Faturamento",
                            details: "Ajuste do fluxo para atender as especificidades do Frente de Loja Agille.",
                            responsible: "Cliente + UGESTOR",
                            dueDate: "2025-05-20",
                            status: "in-progress",
                            type: "task"
                        },
                        {
                            id: "faturamento-alcadas",
                            name: "4.2.3. Definição de Alçadas e Usuários de Faturamento",
                            details: "Configuração dos usuários e suas permissões para o processo de faturamento via Agille.",
                            responsible: "Cliente",
                            dueDate: "2025-05-25",
                            status: "pending",
                            type: "task"
                        }
                    ]
                },
                // ... Adicionar outros fluxos principais como sub-phases (Estoque, Produção, Tributárias/Fiscais)
                {
                    id: "fluxo-estoque",
                    name: "4.3. Modelo de Gestão de Estoque",
                    details: "Definição dos tipos de produtos e locais de estoque para controle preciso.",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "estoque-tipos-produtos",
                            name: "4.3.1. Definição de Tipos de Produtos",
                            details: "Categorização dos itens (revenda, gasto geral, material, etc.).",
                            responsible: "Cliente + UGESTOR",
                            dueDate: "2025-05-20",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "estoque-local",
                            name: "4.3.2. Definição de Locais de Estoque",
                            details: "Configuração dos locais físicos ou lógicos de armazenamento (ex: Estoque Próprio).",
                            responsible: "Cliente + UGESTOR",
                            dueDate: "2025-05-22",
                            status: "pending",
                            type: "task"
                        }
                    ]
                },
                {
                    id: "fluxo-producao",
                    name: "4.4. Processo de Produção",
                    details: "Parametrização do módulo de produção para os empórios e a indústria.",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "producao-emporios",
                            name: "4.4.1. Configuração Produção - Empórios",
                            details: "Aplicação do processo de produção para os dois empórios da Casa Dibs.",
                            responsible: "UGESTOR",
                            dueDate: "2025-06-10",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "producao-industria",
                            name: "4.4.2. Configuração Produção - Indústria",
                            details: "Aplicação do processo de produção para a indústria Casa Dibs.",
                            responsible: "UGESTOR",
                            dueDate: "2025-06-15",
                            status: "pending",
                            type: "task"
                        }
                    ]
                },
                {
                    id: "fiscal-nf",
                    name: "4.5. Definições Tributárias e Fiscais (Emissão de NF)",
                    details: "Preparação para a emissão de Notas Fiscais diretamente no ERP, com dados tributários.",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "fiscal-itens-venda",
                            name: "4.5.1. Preparar lista de ITENS VENDA (NCM, CST, CEST, Origem)",
                            details: "Coleta e input de dados tributários para cada item de venda.",
                            responsible: "Cliente",
                            dueDate: "2025-05-28",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "fiscal-operacoes",
                            name: "4.5.2. Definição das Operações Empresariais (Entradas/Saídas)",
                            details: "Configuração das diversas operações (compra, venda, transferência, devolução, etc.).",
                            responsible: "UGESTOR",
                            dueDate: "2025-05-30",
                            status: "pending",
                            type: "task"
                        }
                    ]
                }
            ]
        },
        // --- Cadastros ---
        {
            id: "cadastros-essenciais",
            name: "5. Definição e Input de Cadastros Essenciais",
            description: "Criação e organização dos dados mestres (entidades, itens, etc.) que são a base de todo o funcionamento do ERP.",
            type: "phase",
            nodes: [
                {
                    id: "cadastro-entidade",
                    name: "5.1. Cadastro de Entidade (Clientes, Fornecedores, etc.)",
                    details: "Coleta e input de dados cadastrais completos: básicos, negocial, societário, contábil/fiscal, gerencial, financeiro.",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "entidade-dados-basicos",
                            name: "5.1.1. Coleta de Dados Básicos (Razão Social, CNPJ, Endereço)",
                            details: "Obtenção das informações fundamentais da entidade.",
                            responsible: "Cliente",
                            dueDate: "2025-05-20",
                            status: "in-progress",
                            type: "task"
                        },
                        {
                            id: "entidade-dados-negocial",
                            name: "5.1.2. Coleta de Dados Negociais e Societários",
                            details: "Informações sobre tipo de sociedade, faturamento anual, etc.",
                            responsible: "Cliente",
                            dueDate: "2025-05-22",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "entidade-dados-contabil-fiscal",
                            name: "5.1.3. Coleta de Dados Contábeis e Fiscais",
                            details: "Regimes tributários, contribuições, CNAEs, etc.",
                            responsible: "Cliente",
                            dueDate: "2025-05-25",
                            status: "pending",
                            type: "task"
                        }
                    ]
                },
                {
                    id: "certificados",
                    name: "5.2. Certificado Digital, NF, Série e Logomarca",
                    details: "Obtenção e configuração dos elementos necessários para emissão de documentos fiscais eletrônicos.",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "cert-digital",
                            name: "5.2.1. Obtenção de Arquivo e Senha do Certificado Digital",
                            details: "Necessário para assinatura de NF-e.",
                            responsible: "Cliente",
                            dueDate: "2025-05-25",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "nf-serie-logomarca",
                            name: "5.2.2. Definição da Última NF, Série e Logomarca",
                            details: "Configuração desses dados no ERP para emissão.",
                            responsible: "Cliente",
                            dueDate: "2025-05-26",
                            status: "pending",
                            type: "task"
                        }
                    ]
                },
                {
                    id: "cadastro-itens",
                    name: "5.3. Cadastro de Itens (Produtos, Serviços, Despesas, Bens)",
                    details: "Validação de planilhas e importação dos dados de itens diversos.",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "itens-servicos",
                            name: "5.3.1. Cadastro de Serviços",
                            details: "Input de dados negociais e fiscais (NBS, Cód. Município, etc.) para serviços.",
                            responsible: "Cliente + UGESTOR",
                            dueDate: "2025-05-28",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "itens-produtos",
                            name: "5.3.2. Cadastro de Produtos",
                            details: "Input de dados negociais e fiscais (NCM, CST, CFOP, etc.) para produtos.",
                            responsible: "Cliente + UGESTOR",
                            dueDate: "2025-05-28",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "itens-despesas",
                            name: "5.3.3. Cadastro de Despesas e Gastos Gerais",
                            details: "Mapeamento a ser realizado e validado pelo Mauro.",
                            responsible: "Mauro (Cliente)",
                            dueDate: "2025-05-29",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "itens-bens",
                            name: "5.3.4. Cadastro de Bens",
                            details: "Inventário de bens a ser realizado e validado pelo Marcos.",
                            responsible: "Marcos (Cliente)",
                            dueDate: "2025-05-29",
                            status: "pending",
                            type: "task"
                        }
                    ]
                }
            ]
        },
        // --- Cronograma e Treinamento ---
        {
            id: "cronograma-treinamento",
            name: "6. Cronograma, Treinamento e Go-Live",
            description: "Marcos temporais, capacitação da equipe e preparação final para a entrada em produção do sistema.",
            type: "phase",
            nodes: [
                {
                    id: "cronograma-principal",
                    name: "6.1. Cronograma de Implantação",
                    details: "Datas chave do projeto: Início, Go-Live e Encerramento Final.",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "data-inicial",
                            name: "6.1.1. Data Inicial do Projeto",
                            details: "Início oficial dos trabalhos de implantação.",
                            responsible: "Equipe UGESTOR + Cliente",
                            dueDate: "2025-04-27",
                            status: "completed",
                            type: "task"
                        },
                        {
                            id: "data-go-live",
                            name: "6.1.2. Data de Entrada em Produção (Go-Live)",
                            details: "Sistema UGESTOR ativo e operacional para uso diário.",
                            responsible: "Equipe UGESTOR + Cliente",
                            dueDate: "2025-06-01",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "data-encerramento",
                            name: "6.1.3. Data de Encerramento Final do Projeto",
                            details: "Conclusão de todas as fases e formalização do fim da implantação.",
                            responsible: "Equipe UGESTOR + Cliente",
                            dueDate: "2025-08-30",
                            status: "pending",
                            type: "task"
                        }
                    ]
                },
                {
                    id: "plano-treinamento",
                    name: "6.2. Plano de Treinamento UGESTOR – FU",
                    details: "Capacitação dos usuários via plataforma Faculdade do Gestor (FU).",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "treinamento-ceo",
                            name: "6.2.1. Cursos para CEO / Controller",
                            details: "Apresentação do Ugestor, Sistema Proc. Operacionais, Gestão de Chamados.",
                            responsible: "CEO / Controller (Cliente)",
                            dueDate: "2025-05-30",
                            status: "in-progress",
                            type: "task",
                            link: "https://faculdadeugestor.com.br/lesson/demo/1517/156"
                        },
                        {
                            id: "treinamento-financeiro",
                            name: "6.2.2. Cursos para Equipe Financeira",
                            details: "Processos Financeiros Contas a Pagar/Receber, Lançamentos Finan., DFC, etc.",
                            responsible: "Equipe Financeira (Cliente)",
                            dueDate: "2025-05-30",
                            status: "pending",
                            type: "task",
                            link: "https://faculdadeugestor.com.br/lesson/detail/255/1457"
                        },
                        // ... Adicione os demais treinamentos por função
                    ]
                }
            ]
        },
        // --- Usuários e Inventários ---
        {
            id: "usuarios-inventarios",
            name: "7. Relação de Usuários e Inventários para Go-Live",
            description: "Finalização das permissões de acesso e coleta/validação dos dados críticos para a virada do sistema.",
            type: "phase",
            nodes: [
                {
                    id: "relacao-usuarios",
                    name: "7.1. Relação de Usuários e Perfil de Acesso",
                    details: "Definição e configuração dos acessos dos usuários no sistema.",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "planilha-usuarios",
                            name: "7.1.1. Envio da Planilha de Usuários por Mauro",
                            details: "Lista de usuários e seus perfis de acesso aprovados para cadastro.",
                            responsible: "Mauro (Cliente)",
                            dueDate: "2025-05-20",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "config-acessos",
                            name: "7.1.2. Configuração de Acessos no Sistema UGESTOR",
                            details: "Criação de usuários e atribuição de perfis.",
                            responsible: "Equipe UGESTOR",
                            dueDate: "2025-05-28",
                            status: "pending",
                            type: "task"
                        }
                    ]
                },
                {
                    id: "inventarios-go-live",
                    name: "7.2. Inventários Críticos para Go-Live",
                    details: "Coleta e validação de dados financeiros e de estoque até a data limite.",
                    type: "sub-phase",
                    nodes: [
                        {
                            id: "inv-contas-receber",
                            name: "7.2.1. Inventário Contas a Receber",
                            details: "Preenchimento da planilha com dados de Contas a Receber.",
                            responsible: "Cliente",
                            dueDate: "2025-05-30",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "inv-contas-pagar",
                            name: "7.2.2. Inventário Contas a Pagar",
                            details: "Preenchimento da planilha com dados de Contas a Pagar.",
                            responsible: "Cliente",
                            dueDate: "2025-05-30",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "inv-caixa-banco",
                            name: "7.2.3. Inventário Caixa e Banco",
                            details: "Conferência e registro dos saldos de caixa e bancos (data-alvo 30/05).",
                            responsible: "Cliente",
                            dueDate: "2025-05-30",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "inv-bens",
                            name: "7.2.4. Inventário Bens",
                            details: "Levantamento detalhado dos bens.",
                            responsible: "Cliente",
                            dueDate: "2025-05-30",
                            status: "pending",
                            type: "task"
                        },
                        {
                            id: "inv-estoque",
                            name: "7.2.5. Inventário Estoque",
                            details: "Contagem e registro do estoque físico.",
                            responsible: "Cliente",
                            dueDate: "2025-05-30",
                            status: "pending",
                            type: "task"
                        }
                    ]
                }
            ]
        }
    ]
};
