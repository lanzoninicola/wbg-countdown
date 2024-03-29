const ptBR = {
  pt: {
    translation: {
      global: {
        yes: "sim",
        no: "não",
        close: "fechar",
        save: "salvar",
        saving: "salvando",
        removing: "removendo",
        update: "atualizar",
        updating: "atualizando",
        copy: "copiar",
        copying: "copiando",
        copied: "copiado!",
        name: "Nome",
        description: "Descrição",
        email: "Email",

        error: "Algo deu errado. Tente novamente.",
        errorTitle: "Ops!",
        success: "Suas alterações foram salvas.",
        successTitle: "Sucesso!",
        mobile: "Móvel",
        desktop: "Desktop",
        tablet: "Tablet",
        i18n: {
          languages: "Mudar idioma",
          popover: {
            header: "Selecione seu idioma",
          },
        },
        pagination: {
          currentPage: "Página",
          previousPage: "Página anterior",
          nextPage: "Próxima página",
          totalPages: "Total de páginas:",
        },
        customize: "Personalizar",
        edit: "Editar",
        htmlEmbeddedCode: {
          buttonLabel: "Gerar contador",
          hideCode: "Ocultar código",
          modalTitle: "HTML code",
          modalDescription:
            "Incorpore o contador regressivo em seu site. Pressione o botão abaixo para copiar o código.",
          linkDisclaimer:
            "O contador contém um link para nosso site, você pode removê-lo atualizando para a versão premium.",
          linkDisclaimerButton: "Atualizar para premium",
          howToText:
            "Adicione o contador regressivo ao seu site, escolha sua plataforma e siga as instruções:",
        },
      },
      premiumFeatures: {
        badgeText: "Função premium",
        additionalText:
          "Esta função só está disponível na versão premium. Conviértese em membro premium para acessá-la.",
        upgradeCTA: {
          variant1: "Atualizar para premium",
          variant2: "Veja as funcionalidades",
          variant3: "Desbloqueie todas as funcionalidades",
          variant4: "Aumente suas vendas",
          popover: {
            title: "Usuário premium",
            body: "Conviértese em usuário premium para personalizar e gerenciar seus contadores sem limitações.",
          },
        },
        modal: {
          title: "Vá além de seus limites",
          body: {
            default:
              "Esta função só está disponível na versão premium. Conviértese em membro premium para acessá-la.",
            newCountdown:
              "Desbloqueie a versão premium para criar um número ilimitado de temporizadores: defina um timer para cada campanha de desconto planejada ou personalize o visual do timer para suas diferentes páginas de desembarque.",
          },
        },
      },
      countdowns: {
        title: "Contadores regressivos",
        table: {
          id: "ID",
          name: "Nome",
          description: "Descrição",
          shortcode: "Shortcode",
          actions: "Ações",
          createdAt: "Criado em",
          updatedAt: "Atualizado em",
        },
        firstCountdown: {
          header: "Bem vindo!",
          body: "Você ainda não tem nenhum contador regressivo. Clique no botão abaixo para criar o primeiro.",
          buttonLabel: "Adicionar seu primeiro contador regressivo",
        },
      },
      countdown_edit_new: {
        buttonLabel: "Adicionar novo",
        header: "Novo contador regressivo",
        namePlaceholder: "Nome do contador regressivo",
        descriptionPlaceholder: "Descrição do contador regressivo",
        createSuccessTitle: "Contador regressivo criado",
        createSuccess: "Agora você pode editar o contador regressivo.",
        openEditor: "Abrir editor",
      },
      countdown_edit_edit: {
        buttonLabel: "Atualizar",
        header: "Atualizar informações",
        updateSuccessTitle: "Contador regressivo atualizado",
        updateSuccess: "Agora você pode editar o contador regressivo.",
      },
      countdown_edit_delete: {
        header: "Tem certeza absoluta?",
        body: "Isto irá apagar o contador regressivo e todos os seus dados. Esta acção não pode ser desfeita.",
      },
      editor: {
        close: "Fechar editor",
        saveSettings: "Salvar configurações",
        timezone: "Fuso horário",
        targetDate: "Data de término",
        countdownStyle: "Estilo do contador regressivo",
        propertiesBar: {
          list: "Lista de contadores regressivos",
          settings: "Data de término e fuso horário",
          layout: "Escolha o layout",
          templates: "Escolha um modelo",
          title: "Personaliza o titulo",
          timer: "Personaliza os digitos",
          labels: "Personaliza as etiquetas",
          separator: "Personaliza o separador",
        },
        propertiesGroup: {
          list: {
            groupTitle: "Lista de contadores regressivos",
          },
          settings: {
            groupTitle: "Data de término e fuso horário",
            targetDate: {
              label: "Data de término",
              placeholder: "Data de término",
            },
            timezone: {
              label: "Fuso horário",
              placeholder: "Fuso horário",
            },
          },
          layout: {
            groupTitle: "Layout",
            orientationLabelProp: "Seleçiona orientação",
            gapLabelProp: "Selecione o espaçamento entre o timer e o texto",
            stretchProp: "Ajustar à largura da página",
            removeLink: "Remover link",
            linkTarget: "Pagína de destino",
            transparentProp: "Fundo transparente",
            backgroundColorProp: "Cor de fundo",
            vertical: {
              title: "Layout vertical",
              description:
                "O titulo é posicionado acima do contador regressivo e os digitos abaixo. Ideal para telas de tamanho pequeno.",
              label: "Vertical",
            },
            horizontal: {
              title: "Horizontal layout",
              description:
                "O titulo é posicionado a esquerda do contador regressivo e os digitos a direita. Ideal para telas de tamanho médio e grande.",
              label: "Horizontal",
            },
          },
          templates: {
            groupTitle: "Modelos",
          },
          title: {
            groupTitle: "Estilo do titulo",
            titlePlaceholder: "Contador regressivo para Ano Novo",
            text: "Texto",
            textFont: "Fonte do texto",
            textSize: "Tamanho do texto",
            textColor: "Cor do texto",
          },
          separator: {
            groupTitle: "Estilo do separador",
            showSeparatorLabel: "Mostrar separador",
            showSeparatorAriaLabel: "Mostrar separador",
            separatorCharLabel: "Separador",
            separatorCharAriaLabel: "Define o separador do contador regressivo",
          },
          unitNumber: {
            groupTitle: "Estilo dos digitos",
            visibility: {
              label: "Unidades mostradas",
              hideDays: "Ocultar dias",
              hideHours: "Ocultar horas",
              hideSeconds: "Ocultar segundos",
            },
            lastUnitColor: "Cor da última unidade",
            digitsFont: "Fonte",
            digitsSize: "Tamanho do numero",
            digitsColor: "Cor do numero",
            padWithZero: "Preencher com zero",
          },
          unitLabel: {
            groupTitle: "Estilo das etiquetas",
            unitLabelLanguage: "Idioma",
            labelFont: "Fonte",
            labelSize: "Tamanho do texto",
            labelColor: "Cor do texto",
          },
        },
        breakpointInfoMessage: {
          prefix: "Este contador regressivo será exibido em ",
          mobile: "dispositivos Móveis.",
          desktop: "dispositivos Desktop.",
          tablet: "dispositivos Tablet.",
        },
        preview: {
          tokenBadge: "Tamanho da tela:",
          smallestDisplay: "Tela mais pequena",
        },
      },
      onboarding: {
        title: "Bem vindo ao ClockDown!",
        body: "Você pode criar contadores regressivos e editá-los em qualquer momento. Cadastre-se abaixo para começar.",
        buttonLabel: "Cadastrar",
        namePlaceholder: "Nome completo",
        emailPlaceholder: "Seu melhor email",
        newsletterConsent:
          "Eu gostaria de assinar seu boletim informativo, mas somente se você prometer não me incomodar (aproximadamente 1-2 por mês). Estou ciente de que posso cancelar minha assinatura sempre que quiser.",
        privacyAndTermsConsent:
          "Seus termos e condições são aceitáveis para mim. Eu li a política de privacidade. Estou ciente de que você se preocupa com minha privacidade e nunca compartilhará meus dados com ninguém.",
        privacyPolicy: "Política de privacidade",
        termsOfService: "Termos de serviço",
        success: {
          title: "Obrigado por se cadastrar!",
          subtitle: "Agora você pode criar seu primeiro contador regressivo.",
          submitButtonLabel: "Continuar",
        },
        failed: {
          title: "Oops!",
          subtitle: "Algo deu errado. Por favor, tente novamente.",
          submitButtonLabel: "Tentar novamente",
        },
        failure_max: {
          title: "Duplo oops!",
          subtitle:
            "Algo deu errado. Mas não se preocupe, você já pode criar seu primeiro contador regressivo.",
          text: "Vamos lá!",
          submitButtonLabel: "Continuar",
        },
      },
    },
  },
};

export default ptBR;
