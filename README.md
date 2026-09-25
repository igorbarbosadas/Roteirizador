# Roteirizador NF

Aplicação estática para leitura do relatório Excel, visualização de destinos por vocativo/CEP e montagem de rotas.

## Localização por CEP

A versão atual prioriza a coordenada do CEP exato. O fluxo é:

1. Consulta do CEP exato na AwesomeAPI, validando CEP, cidade e UF.
2. Se necessário, consulta do endereço no ViaCEP e geocodificação do logradouro/bairro/cidade/UF.
3. O sistema não usa o centro da cidade quando há CEP informado.
4. CEPs diferentes não são deslocados artificialmente.
5. Vocativos diferentes com o mesmo CEP compartilham a mesma coordenada-base e são mostrados lado a lado.
6. Se dois CEPs diferentes ainda retornarem exatamente a mesma coordenada após validação, eles são enviados para a lista de pendências em vez de ficarem sobrepostos.

O cache foi versionado novamente para não reutilizar coordenadas antigas.

## Uso

Abra `index.html`, carregue a planilha padrão e aguarde a localização dos destinos. Para publicar, envie os arquivos para um repositório e ative o GitHub Pages.

Atualização v3 - enquadramento de rota
- Corrigido o zoom excessivamente aberto após clicar em Calcular rota.
- Rotas urbanas agora são enquadradas mais de perto.
- Rotas longas continuam usando ajuste automático conforme a extensão do trajeto.


## Atualização v4
- Exibe distância e tempo de cada trecho entre os pontos da rota.
- Os valores aparecem entre as paradas no painel lateral após calcular a rota.
- Alterar a ordem ou remover/adicionar pontos limpa os trechos até um novo cálculo.

## Filiais Della Volpe

Esta versão inclui uma camada independente de filiais Della Volpe.

- O botão **Ocultar filiais / Mostrar filiais** controla a camada sem afetar os clientes e NFs.
- As filiais usam um pin escuro com a sigla **DV**.
- Ao aproximar o mapa, o nome da unidade aparece ao lado do pin.
- Clicar em uma filial abre seus dados e permite **Usar na rota**.
- A filial entra como um ponto normal no cálculo da rota, mas não soma NFs nem peso.
- A localização é resolvida pelo endereço cadastral completo e fica salva no cache do navegador.

A lista inicial foi cadastrada a partir de endereços públicos da matriz e de filiais. Como a empresa possui mais de 30 unidades e a relação pública pode mudar, a constante `DELLA_VOLPE_BRANCHES` no início do `app.js` foi deixada centralizada para facilitar revisão, inclusão ou retirada de unidades pela equipe.


## Base Della Volpe atualizada

A versão inclui 21 unidades informadas pelo usuário, com São Paulo identificada como matriz. Os pins da Della Volpe usam laranja e podem ser mostrados ou ocultados no mapa. A geocodificação das unidades usa endereço completo e CEP, com cache versionado para não reaproveitar coordenadas da lista anterior.


## V8 - filiais com coordenadas fixas

As 21 unidades Della Volpe cadastradas no sistema agora possuem latitude e longitude salvas diretamente no código. O sistema não consulta API de CEP ou geocodificação para exibir as filiais. Assim, elas aparecem imediatamente e não somem por falhas externas. Clientes e vocativos da planilha continuam usando a lógica dinâmica de localização.


V10: corrigida a leitura de datas do Excel no painel de NFs. Datas vazias/seriais inválidos não aparecem mais como 31/12/1969. Adicionados Limite de embarque e Mercadoria aos cartões das notas.


V11: tempo da rota identificado como estimativa base sem trânsito em tempo real e botão para abrir a mesma sequência de pontos no Google Maps.

V13: modo Navegação mais flat, com relevo reduzido e rótulos de cidades, estados e bairros reforçados.


V17: o botão Liberar só aparece para localizações aproximadas com confiança de 60% ou mais.


V18: o botão Liberar usa a mesma porcentagem exibida na coluna Confiança. A partir de 60%, havendo coordenada aproximada disponível, o botão aparece.


V19: destinos liberados manualmente aparecem com pin laranja e selo "Manual", além de badge nos detalhes.


V20: destinos liberados manualmente usam pin vermelho.
