Confira também as **mudanças interessantes** introduzidas no [3.0.0 Beta 4](https://github.com/noah-nuebling/mac-mouse-fix/releases/tag/3.0.0-Beta-4)!

---

**3.0.0 Beta 5** restaura a **compatibilidade** com alguns **mouses** no macOS 13 Ventura e **corrige a rolagem** em vários aplicativos.
Também inclui várias outras pequenas correções e melhorias na qualidade de vida.

Aqui está **tudo de novo**:

### Mouse

- Corrigida a rolagem no Terminal e outros aplicativos! Veja a Issue no GitHub [#413](https://github.com/noah-nuebling/mac-mouse-fix/issues/413).
- Corrigida a incompatibilidade com alguns mouses no macOS 13 Ventura, abandonando o uso de APIs Apple não confiáveis em favor de hacks de baixo nível. Espero que isso não introduza novos problemas - me avise se acontecer! Agradecimentos especiais à Maria e ao usuário do GitHub [samiulhsnt](https://github.com/samiulhsnt) por ajudarem a descobrir isso! Veja a Issue no GitHub [#424](https://github.com/noah-nuebling/mac-mouse-fix/issues/424) para mais informações.
- Não usará mais CPU ao clicar nos Botões 1 ou 2 do Mouse. Uso de CPU ligeiramente reduzido ao clicar em outros botões.
    - Esta é uma "Build de Debug", então o uso de CPU pode ser cerca de 10 vezes maior ao clicar nos botões neste beta em comparação com a versão final
- A simulação de rolagem do trackpad usada para os recursos "Rolagem Suave" e "Rolar & Navegar" do Mac Mouse Fix agora está ainda mais precisa. Isso pode levar a um melhor comportamento em algumas situações.

### Interface

- Correção automática de problemas com a concessão de Acesso à Acessibilidade após atualizar de uma versão mais antiga do Mac Mouse Fix. Adota as mudanças descritas nas [Notas de Lançamento 2.2.2](https://github.com/noah-nuebling/mac-mouse-fix/releases/tag/2.2.2).
- Adicionado um botão "Cancelar" na tela "Conceder Acesso à Acessibilidade"
- Corrigido um problema onde a configuração do Mac Mouse Fix não funcionava corretamente após instalar uma nova versão do Mac Mouse Fix, porque a nova versão se conectava à versão antiga do "Mac Mouse Fix Helper". Agora, o Mac Mouse Fix não se conectará mais à versão antiga do "Mac Mouse Fix Helper" e desativará a versão antiga automaticamente quando apropriado.
- Fornecendo instruções ao usuário sobre como corrigir um problema onde o Mac Mouse Fix não pode ser ativado adequadamente devido a outra versão do Mac Mouse Fix presente no sistema. Este problema ocorre apenas no macOS Ventura.
- Comportamento e animações aprimorados na tela "Conceder Acesso à Acessibilidade"
- O Mac Mouse Fix será trazido para o primeiro plano quando for ativado. Isso melhora as interações da interface em algumas situações, como quando você ativa o Mac Mouse Fix depois que ele foi desativado em Configurações do Sistema > Geral > Itens de Login.
- Textos da interface aprimorados na tela "Conceder Acesso à Acessibilidade"
- Textos da interface aprimorados que aparecem ao tentar ativar o Mac Mouse Fix enquanto está desativado nas Configurações do Sistema
- Corrigido um texto em alemão na interface

### Bastidores

- O número de build do "Mac Mouse Fix" e do "Mac Mouse Fix Helper" embutido agora estão sincronizados. Isso é usado para evitar que o "Mac Mouse Fix" se conecte acidentalmente a versões antigas do "Mac Mouse Fix Helper".
- Corrigido problema onde alguns dados sobre sua licença e período de teste às vezes eram exibidos incorretamente ao iniciar o aplicativo pela primeira vez, removendo dados em cache da configuração inicial
- Muita limpeza na estrutura do projeto e código-fonte
- Mensagens de debug aprimoradas

---

### Como Você Pode Ajudar

Você pode ajudar compartilhando suas **ideias**, **problemas** e **feedback**!

O melhor lugar para compartilhar suas **ideias** e **problemas** é o [Assistente de Feedback](https://noah-nuebling.github.io/mac-mouse-fix-feedback-assistant/?type=bug-report).
O melhor lugar para dar feedback **rápido** e não estruturado é a [Discussão de Feedback](https://github.com/noah-nuebling/mac-mouse-fix/discussions/366).

Você também pode acessar esses lugares dentro do aplicativo na aba "**ⓘ Sobre**".

**Obrigado** por ajudar a tornar o Mac Mouse Fix melhor! 💙💛❤️