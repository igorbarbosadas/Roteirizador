
const DELLA_VOLPE_BRANCHES = [
  { key:'branch:rs-canoas', name:'Della Volpe Canoas', type:'Filial', city:'Canoas', uf:'RS', cep:'92420360', street:'Rua Antônio Frederico Ozanan, 555, Galpão 7', district:'Brigadeira', address:'Rua Antônio Frederico Ozanan, 555, Galpão 7, Brigadeira, Canoas - RS, 92420-360', email:'artur.mota@dellavolpe.com.br', phone:'(51) 3429-1058', cnpj:'61.139.432/0111-07', lat:-29.8768623, lng:-51.1626689, coordSource:'Coordenada fixa' },
  { key:'branch:sc-araquari', name:'Della Volpe Araquari', type:'Filial', city:'Araquari', uf:'SC', cep:'89245000', street:'Rua Norberto da Maia, 445', district:'Volta Redonda', address:'Rua Norberto da Maia, 445, Volta Redonda, Araquari - SC, 89245-000', email:'carlos.santana@dellavolpe.com.br', phone:'(11) 95599-8727 | (47) 99210-6103 | (11) 94159-9644', cnpj:'61.139.432/0122-60', lat:-26.3753072, lng:-48.7205174, coordSource:'Coordenada fixa' },
  { key:'branch:pr-curitiba', name:'Della Volpe Curitiba', type:'Filial', city:'Curitiba', uf:'PR', cep:'81170230', street:'Rua Cyro Correia Pereira, 667, Armazém 15C', district:'Cidade Industrial', address:'Rua Cyro Correia Pereira, 667, Armazém 15C, Cidade Industrial, Curitiba - PR, 81170-230', email:'tdv.curitiba@dellavolpe.com.br', phone:'(41) 99184-1838 | (41) 99272-4802', cnpj:'61.139.432/0055-65', lat:-25.53371, lng:-49.316299, coordSource:'Coordenada fixa' },
  { key:'branch:sp-pindamonhangaba', name:'Della Volpe Pindamonhangaba', type:'Filial', city:'Pindamonhangaba', uf:'SP', cep:'12414240', street:'Avenida Independência, 1059', district:'Cidade Nova', address:'Avenida Independência, 1059, Cidade Nova, Pindamonhangaba - SP, 12414-240', email:'tdv.pindagerencia@dellavolpe.com.br', phone:'(12) 3643-2867', cnpj:'61.139.432/0069-60', lat:-22.95237, lng:-45.40583, coordSource:'Coordenada fixa' },
  { key:'branch:sp-ribeirao-preto', name:'Della Volpe Ribeirão Preto', type:'Filial', city:'Ribeirão Preto', uf:'SP', cep:'14061280', street:'Avenida Presidente João Goulart, 481', district:'Geraldo Correia de Carvalho', address:'Avenida Presidente João Goulart, 481, Geraldo Correia de Carvalho, Ribeirão Preto - SP, 14061-280', email:'paulo.macario@dellavolpe.com.br', phone:'(11) 93741-1965', cnpj:'61.139.432/0155-28', lat:-21.1264983, lng:-47.8161883, coordSource:'Coordenada fixa' },
  { key:'branch:sp-santos', name:'Della Volpe Santos', type:'Filial', city:'Santos', uf:'SP', cep:'11085400', street:'Rua Boris Kauffmann, 227', district:'Chico de Paula', address:'Rua Boris Kauffmann, 227, Chico de Paula, Santos - SP, 11085-400', email:'aldo.ferreira@dellavolpe.com.br', phone:'(13) 3291-2021', cnpj:'61.139.432/0019-00', lat:-23.9315, lng:-46.3624, coordSource:'Coordenada fixa' },
  { key:'branch:sp-matriz', name:'Matriz Della Volpe São Paulo', type:'Matriz', city:'São Paulo', uf:'SP', cep:'02177010', street:'Avenida Tenente Amaro Felicíssimo da Silveira, s/n, esquina com Rua Lídice, 22', district:'Parque Novo Mundo', address:'Avenida Tenente Amaro Felicíssimo da Silveira, s/n, Condomínio esquina com Rua Lídice, 22, Parque Novo Mundo, São Paulo - SP, 02177-010', email:'claudemir.passos@dellavolpe.com.br', phone:'(11) 91253-9536', cnpj:'61.139.432/0001-72', lat:-23.5162342, lng:-46.5714091, coordSource:'Coordenada fixa' },
  { key:'branch:rj-rio-de-janeiro', name:'Della Volpe Rio de Janeiro', type:'Filial', city:'Rio de Janeiro', uf:'RJ', cep:'21535000', street:'Rua Embaú, 2475, Rodovia Presidente Dutra km 2', district:'Pavuna', address:'Rua Embaú, 2475, Rodovia Presidente Dutra km 2, Pavuna, Rio de Janeiro - RJ, 21535-000', email:'ricardo.caldas@dellavolpe.com.br', phone:'(21) 2474-4988', cnpj:'61.139.432/0002-53', lat:-22.816929, lng:-43.3445158, coordSource:'Coordenada fixa' },
  { key:'branch:es-serra', name:'Della Volpe Serra', type:'Filial', city:'Serra', uf:'ES', cep:'29168080', street:'Avenida Talma Rodrigues Ribeiro, 1705', district:'Civit II, Lote Quadra XI', address:'Avenida Talma Rodrigues Ribeiro, 1705, Civit II, Lote Quadra XI, Serra - ES, 29168-080', email:'leila.hishmeh@dellavolpe.com.br', phone:'(11) 93077-9875', cnpj:'61.139.432/0044-02', lat:-20.1833907, lng:-40.2372634, coordSource:'Coordenada fixa' },
  { key:'branch:ba-camacari', name:'Della Volpe Camaçari', type:'Filial', city:'Camaçari', uf:'BA', cep:'42801609', street:'Avenida Leste, s/n, Quadra 000E, Lote 02', district:'Polo Plast', address:'Avenida Leste, s/n, Quadra 000E, Lote 02, Polo Plast, Camaçari - BA, 42801-609', email:'valmir.santos@dellavolpe.com.br', phone:'(71) 3627-3764', cnpj:'61.139.432/0145-56', lat:-12.6942375, lng:-38.3179808, coordSource:'Coordenada fixa' },
  { key:'branch:pe-cabo-santo-agostinho', name:'Della Volpe Cabo de Santo Agostinho', type:'Filial', city:'Cabo de Santo Agostinho', uf:'PE', cep:'54503410', street:'BR-101 Sul, km 98, 34200, Quadra D, Lote 8, Galpão 2B', district:'Distrito Industrial', address:'BR-101 Sul, km 98, nº 34200, Quadra D, Lote 8, Galpão 2B, Condomínio Nativa, Distrito Industrial, Cabo de Santo Agostinho - PE, 54503-410', email:'charly.jesus@dellavolpe.com.br', phone:'(11) 91689-5531', cnpj:'61.139.432/0025-40', lat:-8.2662, lng:-35.01919, coordSource:'Coordenada fixa' },
  { key:'branch:ma-acailandia', name:'Della Volpe Açailândia', type:'Filial', city:'Açailândia', uf:'MA', cep:'65930000', street:'Rua São Raimundo, 633, Sala 01, Anexo Posto Santa Maria', district:'Centro', address:'Rua São Raimundo, 633, Sala 01, Centro, Anexo Posto Santa Maria, Açailândia - MA, 65930-000', email:'elizandra.coelho@dellavolpe.com.br', phone:'(99) 99111-1184', cnpj:'61.139.432/0134-01', lat:-4.9540379, lng:-47.5031007, coordSource:'Coordenada fixa' },
  { key:'branch:ma-sao-luis', name:'Della Volpe São Luís', type:'Filial', city:'São Luís', uf:'MA', cep:'65095601', street:'BR-135, Avenida Engenheiro Emiliano Macieira, km 04, 150', district:'Tibiri', address:'BR-135, Avenida Engenheiro Emiliano Macieira, km 04, nº 150, Tibiri, São Luís - MA, 65095-601', email:'carla.melo@dellavolpe.com.br', phone:'(11) 91052-5751', cnpj:'61.139.432/0125-02', lat:-2.68856, lng:-44.30012, coordSource:'Coordenada fixa' },
  { key:'branch:go-aparecida-goiania', name:'Della Volpe Aparecida de Goiânia', type:'Filial', city:'Aparecida de Goiânia', uf:'GO', cep:'74923225', street:'Avenida W6, 241, Quadra CHC, Lote 241', district:'Chácaras São Pedro', address:'Avenida W6, 241, Quadra CHC, Lote 241, Chácaras São Pedro, Aparecida de Goiânia - GO, 74923-225', email:'andreyssa.silva@dellavolpe.com.br', phone:'(62) 4009-2664', cnpj:'61.139.432/0141-22', lat:-16.76554, lng:-49.21926, coordSource:'Coordenada fixa' },
  { key:'branch:mg-contagem', name:'Della Volpe Contagem', type:'Filial', city:'Contagem', uf:'MG', cep:'32184010', street:'Rua das Contendas, 1640', district:'Chácaras Campestre', address:'Rua das Contendas, 1640, Chácaras Campestre, Contagem - MG, 32184-010', email:'cristiano.moreira@dellavolpe.com.br', phone:'(31) 99904-0434', cnpj:'61.139.432/0159-51', lat:-19.8596347, lng:-44.0605907, coordSource:'Coordenada fixa' },
  { key:'branch:ms-corumba', name:'Della Volpe Corumbá', type:'Filial', city:'Corumbá', uf:'MS', cep:'79321856', street:'Rua Paraíba, 184', district:'Nova Corumbá', address:'Rua Paraíba, 184, Nova Corumbá, Corumbá - MS, 79321-856', email:'tdv.corumba@dellavolpe.com.br', phone:'(67) 3232-6023', cnpj:'61.139.432/0150-13', lat:-19.04208, lng:-57.65198, coordSource:'Coordenada fixa' },
  { key:'branch:ms-tres-lagoas', name:'Della Volpe Três Lagoas', type:'Filial', city:'Três Lagoas', uf:'MS', cep:'79610102', street:'Avenida Ranulpho Marques Leal, 2872, Lote 03', district:'Jardim Alvorada', address:'Avenida Ranulpho Marques Leal, 2872, Lote 03, Jardim Alvorada, Três Lagoas - MS, 79610-102', email:'vinicius.s.pereira@dellavolpe.com.br', phone:'(67) 99234-5998', cnpj:'61.139.432/0163-38', lat:-20.7853185, lng:-51.701209, coordSource:'Coordenada fixa' },
  { key:'branch:mt-primavera-leste', name:'Della Volpe Primavera do Leste', type:'Filial', city:'Primavera do Leste', uf:'MT', cep:'78850000', street:'Rodovia MT-130, km 04, 130, saída para Piranatinga', district:'Zona Rural', address:'Rodovia MT-130, km 04, nº 130, saída para Piranatinga, Zona Rural, Primavera do Leste - MT, 78850-000', email:'suelen.gomes@dellavolpe.com.br', phone:'(66) 9977-6429', cnpj:'61.139.432/0169-23', lat:-15.51487839074416, lng:-54.28999311447143, coordSource:'Coordenada fixa' },
  { key:'branch:ro-porto-velho', name:'Della Volpe Porto Velho', type:'Filial', city:'Porto Velho', uf:'RO', cep:'76806138', street:'Rua Peroba, 312', district:'Floresta', address:'Rua Peroba, 312, Floresta, Porto Velho - RO, 76806-138', email:'dayse.eller@dellavolpe.com.br', phone:'(69) 99996-1821', cnpj:'61.139.432/0167-61', lat:-8.776, lng:-63.87785, coordSource:'Coordenada fixa' },
  { key:'branch:pa-barcarena', name:'Della Volpe Barcarena', type:'Filial', city:'Barcarena', uf:'PA', cep:'68445000', street:'Rodovia PA-483, km 14, s/n, Posto 100 Fronteiras', district:'Vila do Conde', address:'Rodovia PA-483, km 14, s/n, Vila do Conde, Posto 100 Fronteiras, Barcarena - PA, 68445-000', email:'simone.moreira@dellavolpe.com.br', phone:'(91) 98499-2537', cnpj:'61.139.432/0156-09', lat:-1.574002, lng:-48.735137, coordSource:'Coordenada fixa' },
  { key:'branch:pa-parauapebas', name:'Della Volpe Parauapebas', type:'Filial', city:'Parauapebas', uf:'PA', cep:'68515000', street:'Rodovia PA-160, km 12,3, s/n', district:'Zona Rural', address:'Rodovia PA-160, km 12,3, s/n, Zona Rural, Parauapebas - PA, 68515-000', email:'grp.operacionalpa@dellavolpe.com.br', phone:'(94) 3346-7402 | (94) 3356-1005', cnpj:'61.139.432/0127-74', lat:-6.0682016, lng:-49.9041696, coordSource:'Coordenada fixa' },
];

const MIN_RELEASE_CONFIDENCE = 60;

const REQUIRED_COLUMNS = [
  'Nota', 'Numero OEF', 'Fornecedor', 'Cliente', 'Destinatario', 'Destino',
  'UF Destino', 'Almoxarifado', 'Peso', 'Volumes', 'Prioridade',
  'Dt Limite Embarque', 'Dt Final Entrega', 'Mercadoria', 'CEP Destino'
];

const state = {
  rows: [],
  groups: [],
  filteredGroups: [],
  unresolved: [],
  markersByKey: new Map(),
  selectedGroupKey: null,
  route: [],
  routeLegs: [],
  routeLayer: null,
  map: null,
  cluster: null,
  geocodeCache: loadGeocodeCache(),
  routeMode: false,
  baseLayers: {},
  activeBaseLayer: 'navigation',
  showVocatives: false,
  showBranches: true,
  branches: [],
  branchLayer: null,
  branchMarkersByKey: new Map(),
};

const els = {
  fileInput: document.getElementById('fileInput'),
  uploadBtn: document.getElementById('uploadBtn'),
  fileMeta: document.getElementById('fileMeta'),
  statusBanner: document.getElementById('statusBanner'),
  statusAction: document.getElementById('statusAction'),
  metricNfs: document.getElementById('metricNfs'),
  metricDestinos: document.getElementById('metricDestinos'),
  metricPeso: document.getElementById('metricPeso'),
  metricVolumes: document.getElementById('metricVolumes'),
  searchInput: document.getElementById('searchInput'),
  ufFilter: document.getElementById('ufFilter'),
  priorityFilter: document.getElementById('priorityFilter'),
  clearFilters: document.getElementById('clearFilters'),
  mapEmpty: document.getElementById('mapEmpty'),
  fitMapBtn: document.getElementById('fitMapBtn'),
  routeModeBtn: document.getElementById('routeModeBtn'),
  mapNavigationBtn: document.getElementById('mapNavigationBtn'),
  mapStreetBtn: document.getElementById('mapStreetBtn'),
  mapSatelliteBtn: document.getElementById('mapSatelliteBtn'),
  vocativeToggleBtn: document.getElementById('vocativeToggleBtn'),
  branchesToggleBtn: document.getElementById('branchesToggleBtn'),
  detailsEmpty: document.getElementById('detailsEmpty'),
  detailsContent: document.getElementById('detailsContent'),
  routeCountBadge: document.getElementById('routeCountBadge'),
  routeDistance: document.getElementById('routeDistance'),
  routeDuration: document.getElementById('routeDuration'),
  routeWeight: document.getElementById('routeWeight'),
  routeNfs: document.getElementById('routeNfs'),
  routeHint: document.getElementById('routeHint'),
  routeList: document.getElementById('routeList'),
  clearRouteBtn: document.getElementById('clearRouteBtn'),
  recalculateRouteBtn: document.getElementById('recalculateRouteBtn'),
  openGoogleMapsBtn: document.getElementById('openGoogleMapsBtn'),
  toast: document.getElementById('toast'),
  errorModal: document.getElementById('errorModal'),
  errorTableBody: document.getElementById('errorTableBody'),
  closeModalBtn: document.getElementById('closeModalBtn'),
};

initMap();
bindEvents();

function initMap() {
  state.map = L.map('map', {
    zoomControl: true,
    preferCanvas: true,
    minZoom: 3,
    zoomSnap: 0.5,
    zoomDelta: 0.5,
  }).setView([-23.55, -46.63], 6);

  // Modo Navegação com visual mais próximo ao Google Maps.
  // Base colorida, rios em azul claro, áreas verdes suaves e estradas bem legíveis.
  const navigation = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Tiles &copy; Esri', maxZoom: 19, crossOrigin: true }
  );

  const esriStreet = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Tiles &copy; Esri', maxZoom: 19, crossOrigin: true }
  );

  const esriSatellite = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Imagery &copy; Esri', maxZoom: 19, crossOrigin: true }
  );

  state.baseLayers = { navigation, street: esriStreet, satellite: esriSatellite };
  navigation.addTo(state.map);

  state.cluster = L.layerGroup();
  state.map.addLayer(state.cluster);
  state.branchLayer = L.layerGroup();
  state.map.addLayer(state.branchLayer);
  setTimeout(initializeBranches, 0);

  // Recalcula os afastamentos visuais após mudança de zoom.
  // Assim dois vocativos próximos continuam clicáveis e visíveis.
  state.map.on('zoomend', () => {
    if (state.filteredGroups.length) renderMarkers(state.filteredGroups);
  });
}

function setBaseLayer(name) {
  const next = state.baseLayers[name];
  if (!next || state.activeBaseLayer === name) return;
  Object.values(state.baseLayers).forEach(layer => {
    if (state.map.hasLayer(layer)) state.map.removeLayer(layer);
  });
  next.addTo(state.map);
  next.bringToBack?.();
  state.activeBaseLayer = name;
  els.mapNavigationBtn?.classList.toggle('active', name === 'navigation');
  els.mapStreetBtn?.classList.toggle('active', name === 'street');
  els.mapSatelliteBtn?.classList.toggle('active', name === 'satellite');
}

function toggleRouteMode() {
  state.routeMode = !state.routeMode;
  els.routeModeBtn?.classList.toggle('active', state.routeMode);
  els.routeModeBtn.textContent = state.routeMode ? 'Selecionando rota' : 'Montar rota';
  els.routeModeBtn.title = state.routeMode
    ? 'Clique nos pins para adicionar ou remover destinos da rota'
    : 'Ative para selecionar destinos direto pelo mapa';
  showToast(state.routeMode
    ? 'Modo rota ativo. Clique nos pins, mesmo com o mapa afastado, para montar a rota.'
    : 'Modo rota desativado. Clique nos pins para abrir os detalhes.');
}

function toggleVocatives() {
  state.showVocatives = !state.showVocatives;
  els.vocativeToggleBtn?.classList.toggle('active', state.showVocatives);
  els.vocativeToggleBtn?.setAttribute('aria-pressed', String(state.showVocatives));
  if (els.vocativeToggleBtn) {
    els.vocativeToggleBtn.textContent = state.showVocatives ? 'Ocultar vocativos' : 'Mostrar vocativos';
  }
  renderMarkers(state.filteredGroups);
}

function toggleBranches() {
  state.showBranches = !state.showBranches;
  els.branchesToggleBtn?.classList.toggle('active', state.showBranches);
  els.branchesToggleBtn?.setAttribute('aria-pressed', String(state.showBranches));
  if (els.branchesToggleBtn) els.branchesToggleBtn.textContent = state.showBranches ? 'Ocultar filiais' : 'Mostrar filiais';
  renderBranches();
}

function bindEvents() {
  if (!els.fileInput) {
    console.error('Campo de upload não encontrado.');
    return;
  }
  // O seletor de arquivo usa <label for="fileInput"> no HTML.
  // Isso funciona de forma nativa no GitHub Pages mesmo se o JavaScript ainda estiver carregando.
  els.uploadBtn?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      els.fileInput.click();
    }
  });
  els.fileInput.addEventListener('change', handleFileUpload);
  els.searchInput.addEventListener('input', applyFilters);
  els.ufFilter.addEventListener('change', applyFilters);
  els.priorityFilter.addEventListener('change', applyFilters);
  els.clearFilters.addEventListener('click', () => {
    els.searchInput.value = '';
    els.ufFilter.value = '';
    els.priorityFilter.value = '';
    applyFilters();
  });
  els.fitMapBtn.addEventListener('click', fitMapToVisibleMarkers);
  els.routeModeBtn?.addEventListener('click', toggleRouteMode);
  els.mapNavigationBtn?.addEventListener('click', () => setBaseLayer('navigation'));
  els.mapStreetBtn?.addEventListener('click', () => setBaseLayer('street'));
  els.mapSatelliteBtn?.addEventListener('click', () => setBaseLayer('satellite'));
  els.vocativeToggleBtn?.addEventListener('click', toggleVocatives);
  els.branchesToggleBtn?.addEventListener('click', toggleBranches);
  els.statusAction.addEventListener('click', openErrorModal);
  els.closeModalBtn.addEventListener('click', closeErrorModal);
  els.errorModal.addEventListener('click', (e) => { if (e.target === els.errorModal) closeErrorModal(); });
  els.clearRouteBtn.addEventListener('click', clearRoute);
  els.recalculateRouteBtn.addEventListener('click', calculateRoute);
  els.openGoogleMapsBtn.addEventListener('click', openRouteInGoogleMaps);

  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });
}

async function handleFileUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  resetData();
  setStatus('info', 'Lendo arquivo', 'Validando colunas e preparando as notas fiscais...');
  els.fileMeta.textContent = file.name;

  try {
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: 'array', cellDates: true });
    const sheetName = workbook.SheetNames.includes('Export') ? 'Export' : workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { defval: null, raw: true });

    if (!rows.length) throw new Error('A planilha não possui registros para carregar.');

    const headers = Object.keys(rows[0]);
    const missing = REQUIRED_COLUMNS.filter(c => !headers.includes(c));
    if (missing.length) {
      throw new Error(`Estrutura diferente do padrão. Colunas ausentes: ${missing.join(', ')}`);
    }

    state.rows = normalizeRows(rows);
    state.groups = groupRows(state.rows);
    populateFilters();
    updateSummary(state.groups);

    const geoResult = await geocodeGroups(state.groups);
    state.unresolved = geoResult.unresolved;
    state.groups = geoResult.groups;
    state.filteredGroups = state.groups.slice();

    renderMarkers(state.filteredGroups);
    renderErrorTable();
    els.mapEmpty.classList.add('hidden');

    const locatedCount = state.groups.filter(g => g.lat != null && g.lng != null).length;
    const nfCount = countNfs(state.groups);

    if (state.unresolved.length) {
      setStatus(
        'warning',
        'Carregamento concluído com pendências',
        `${nfCount} NFs processadas. ${locatedCount} destinos localizados e ${state.unresolved.length} não localizados.`,
        true
      );
    } else {
      setStatus('success', 'Carregamento completo', `${nfCount} NFs processadas e ${locatedCount} destinos localizados com sucesso.`);
    }

    showToast('Planilha carregada. O mapa já está atualizado.');
    setTimeout(fitMapToVisibleMarkers, 150);
  } catch (error) {
    console.error(error);
    setStatus('error', 'Não foi possível carregar a planilha', error.message || 'Verifique o arquivo e tente novamente.');
    showToast(error.message || 'Erro ao carregar arquivo.');
  } finally {
    els.fileInput.value = '';
  }
}

function normalizeRows(rows) {
  return rows.map((row, index) => {
    const peso = toNumber(row['Peso']);
    const volumes = toNumber(row['Volumes']);
    const notaRaw = cleanText(row['Nota']);
    const oefRaw = cleanText(row['Numero OEF']);
    return {
      ...row,
      __index: index,
      __notaId: notaRaw || oefRaw || `LINHA-${index + 2}`,
      __peso: peso,
      __volumes: volumes,
      __almox: cleanText(row['Almoxarifado']) || 'SEM ALMOXARIFADO',
      __cep: normalizeCep(row['CEP Destino']),
      __cidade: cleanText(row['Destino']),
      __uf: cleanText(row['UF Destino']).toUpperCase(),
      __prioridade: cleanText(row['Prioridade']) || 'Sem prioridade',
    };
  });
}

function groupRows(rows) {
  const map = new Map();
  for (const row of rows) {
    // Um ponto do mapa representa um vocativo em um CEP específico.
    // Assim, o mesmo almoxarifado pode aparecer em locais diferentes sem juntar as NFs.
    const locationKey = row.__cep || `${row.__cidade}|${row.__uf}`;
    const key = `${row.__almox}::${locationKey}`;
    if (!map.has(key)) {
      map.set(key, {
        key,
        almoxarifado: row.__almox,
        cep: row.__cep,
        cidade: row.__cidade,
        uf: row.__uf,
        rows: [],
        peso: 0,
        volumes: 0,
        nfs: new Set(),
        clientes: new Set(),
        fornecedores: new Set(),
        prioridades: new Set(),
        lat: null,
        lng: null,
        geoSource: null,
      });
    }
    const group = map.get(key);
    group.rows.push(row);
    group.peso += row.__peso;
    group.volumes += row.__volumes;
    group.nfs.add(row.__notaId);
    if (row['Cliente']) group.clientes.add(cleanText(row['Cliente']));
    if (row['Fornecedor']) group.fornecedores.add(cleanText(row['Fornecedor']));
    group.prioridades.add(row.__prioridade);
  }
  return [...map.values()];
}

async function geocodeGroups(groups) {
  const unresolved = [];

  // Geocodifica uma única vez cada CEP/localidade e reaproveita a coordenada
  // entre vocativos diferentes. Isso evita que um vocativo seja omitido por
  // respostas diferentes do provedor para o mesmo CEP.
  const locations = new Map();
  for (const group of groups) {
    const locationKey = group.cep
      ? `cep:${group.cep}`
      : `loc:${normalizeSearch(group.cidade)}|${group.uf}`;
    group.__locationKey = locationKey;
    if (!locations.has(locationKey)) locations.set(locationKey, group);
  }

  const entries = [...locations.entries()];
  const resolvedByLocation = new Map();
  const queue = entries.slice();
  const concurrency = 4;
  let completed = 0;

  async function worker() {
    while (queue.length) {
      const [locationKey, representative] = queue.shift();
      let geo = null;
      try {
        geo = await geocodeGroup(representative);
      } catch (e) {
        console.warn('Falha ao localizar', representative.cep || representative.cidade, e);
      }
      resolvedByLocation.set(locationKey, geo);
      completed++;
      setStatus('info', 'Localizando destinos', `${completed} de ${entries.length} CEPs/localidades processados...`);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, queue.length || 1) }, worker));

  // Se CEPs diferentes vierem com coordenadas praticamente idênticas,
  // tratamos isso como suspeito e tentamos uma geocodificação pelo endereço.
  // CEPs iguais podem e devem compartilhar a mesma coordenada-base.
  const coordinateBuckets = new Map();
  for (const [locationKey, geo] of resolvedByLocation) {
    if (!locationKey.startsWith('cep:') || !geo) continue;
    const bucketKey = `${Number(geo.lat).toFixed(5)}|${Number(geo.lng).toFixed(5)}`;
    if (!coordinateBuckets.has(bucketKey)) coordinateBuckets.set(bucketKey, []);
    coordinateBuckets.get(bucketKey).push(locationKey);
  }

  for (const keys of coordinateBuckets.values()) {
    const uniqueCeps = [...new Set(keys.map(k => k.slice(4)))];
    if (uniqueCeps.length < 2) continue;
    for (const locationKey of keys) {
      const representative = locations.get(locationKey);
      const alternative = await geocodeCepByAddress(representative, true);
      if (alternative) {
        resolvedByLocation.set(locationKey, alternative);
        state.geocodeCache[locationKey] = alternative;
      }
    }
  }

  // Última validação: CEPs diferentes não podem terminar no mesmo ponto por erro de provedor.
  // Se isso ainda ocorrer após a segunda tentativa, o ponto vira pendência em vez de ficar escondido.
  const finalBuckets = new Map();
  for (const [locationKey, geo] of resolvedByLocation) {
    if (!locationKey.startsWith('cep:') || !geo) continue;
    const bucketKey = `${Number(geo.lat).toFixed(5)}|${Number(geo.lng).toFixed(5)}`;
    if (!finalBuckets.has(bucketKey)) finalBuckets.set(bucketKey, []);
    finalBuckets.get(bucketKey).push(locationKey);
  }
  for (const keys of finalBuckets.values()) {
    const uniqueCeps = [...new Set(keys.map(k => k.slice(4)))];
    if (uniqueCeps.length > 1) {
      keys.forEach(k => resolvedByLocation.set(k, null));
    }
  }

  for (const group of groups) {
    const geo = resolvedByLocation.get(group.__locationKey);
    if (geo) {
      group.lat = geo.lat;
      group.lng = geo.lng;
      group.geoSource = geo.source;
      group.geoAddress = geo.address || '';
      group.geoConfidence = Number.isFinite(Number(geo.confidence)) ? Number(geo.confidence) : confidenceBySource(geo.source);
    } else {
      group.lat = null;
      group.lng = null;
      const confidence = estimateUnresolvedConfidence(group);
      const candidate = await findReleaseCandidate(group);
      unresolved.push({
        ...group,
        confidence,
        releaseCandidate: candidate,
        reason: group.cep ? 'CEP sem coordenada confiável' : 'Localidade sem coordenada confiável'
      });
    }
  }

  saveGeocodeCache();
  return { groups, unresolved };
}

async function geocodeGroup(group) {
  if (group.cep) {
    const cepKey = `cep:${group.cep}`;
    const cached = state.geocodeCache[cepKey];
    if (cached && isValidCoordinate(cached.lat, cached.lng)) return cached;

    // Fonte principal: endpoint específico de CEP com latitude/longitude.
    // A resposta só é aceita quando o próprio CEP, cidade e UF conferem.
    const awesomeGeo = await geocodeCepAwesomeApi(group);
    if (awesomeGeo) {
      state.geocodeCache[cepKey] = awesomeGeo;
      return awesomeGeo;
    }

    // Fallback: resolve o CEP para logradouro/bairro e geocodifica o endereço completo.
    const addressGeo = await geocodeCepByAddress(group, false);
    if (addressGeo) {
      state.geocodeCache[cepKey] = addressGeo;
      return addressGeo;
    }

    // Com CEP informado, nunca usamos centro da cidade. É melhor apontar pendência
    // do que criar uma rota com um ponto incorreto.
    return null;
  }

  if (group.cidade && group.uf) {
    const locKey = `loc:${normalizeSearch(group.cidade)}|${group.uf}`;
    const cached = state.geocodeCache[locKey];
    if (cached && isValidCoordinate(cached.lat, cached.lng)) return cached;
    const locGeo = await geocodeNominatimStructured({ city: group.cidade, state: group.uf });
    if (locGeo) {
      state.geocodeCache[locKey] = locGeo;
      return locGeo;
    }
  }

  return null;
}

async function geocodeCepAwesomeApi(group) {
  try {
    const res = await fetch(`https://cep.awesomeapi.com.br/json/${group.cep}`);
    if (!res.ok) return null;
    const data = await res.json();
    const returnedCep = normalizeCep(data?.cep);
    const lat = Number(data?.lat);
    const lng = Number(data?.lng);

    if (returnedCep !== group.cep || !isValidCoordinate(lat, lng)) return null;
    if (group.uf && cleanText(data?.state).toUpperCase() !== group.uf) return null;
    if (group.cidade && !samePlaceName(data?.city, group.cidade)) return null;

    return {
      lat,
      lng,
      source: 'AwesomeAPI CEP',
      address: [data?.address, data?.district, data?.city, data?.state, formatCep(group.cep)].filter(Boolean).join(', '),
      providerCep: returnedCep,
      confidence: 98,
    };
  } catch (_) {
    return null;
  }
}

async function geocodeCepByAddress(group, forceRefresh = false) {
  const viaCepAddress = await lookupViaCep(group.cep);
  if (!viaCepAddress) return null;

  const returnedCep = normalizeCep(viaCepAddress?.cep);
  if (returnedCep && returnedCep !== group.cep) return null;
  if (group.uf && cleanText(viaCepAddress?.uf).toUpperCase() !== group.uf) return null;
  if (group.cidade && viaCepAddress?.localidade && !samePlaceName(viaCepAddress.localidade, group.cidade)) return null;

  const address = {
    street: cleanCepStreet(viaCepAddress.logradouro),
    district: cleanText(viaCepAddress.bairro),
    city: cleanText(viaCepAddress.localidade || group.cidade),
    state: cleanText(viaCepAddress.uf || group.uf),
    postalcode: group.cep,
  };

  let geo = await geocodeNominatimStructured(address);
  if (!geo && address.street) {
    geo = await geocodeNominatim([
      address.street,
      address.district,
      address.city,
      address.state,
      formatCep(group.cep),
      'Brasil'
    ].filter(Boolean).join(', '));
  }
  if (!geo) return null;

  return {
    ...geo,
    source: forceRefresh ? 'CEP validado por endereço' : 'ViaCEP + endereço',
    address: [address.street, address.district, address.city, address.state, formatCep(group.cep)].filter(Boolean).join(', '),
    providerCep: group.cep,
    confidence: forceRefresh ? 94 : 90,
  };
}

async function lookupViaCep(cep) {
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data?.erro) return null;
    return data;
  } catch (_) {
    return null;
  }
}

let nominatimNextRequestAt = 0;
async function waitForNominatimSlot() {
  const now = Date.now();
  const wait = Math.max(0, nominatimNextRequestAt - now);
  if (wait) await new Promise(resolve => setTimeout(resolve, wait));
  nominatimNextRequestAt = Date.now() + 1100;
}

async function geocodeNominatimStructured({ street = '', district = '', city = '', state = '', postalcode = '' }) {
  try {
    await waitForNominatimSlot();
    const url = new URL('https://nominatim.openstreetmap.org/search');
    url.searchParams.set('format', 'jsonv2');
    url.searchParams.set('limit', '5');
    url.searchParams.set('countrycodes', 'br');
    url.searchParams.set('addressdetails', '1');
    url.searchParams.set('country', 'Brasil');
    if (street) url.searchParams.set('street', street);
    if (city) url.searchParams.set('city', city);
    if (state) url.searchParams.set('state', state);
    if (postalcode) url.searchParams.set('postalcode', formatCep(postalcode));

    const res = await fetch(url.toString(), { headers: { 'Accept-Language': 'pt-BR' } });
    if (!res.ok) return null;
    const data = await res.json();
    const best = chooseBestNominatimResult(data, { street, district, city, state, postalcode });
    if (!best) return null;
    return {
      lat: Number(best.lat),
      lng: Number(best.lon),
      source: 'OpenStreetMap endereço',
      address: best.display_name || '',
      confidence: 82,
    };
  } catch (_) {
    return null;
  }
}

function chooseBestNominatimResult(results, expected) {
  if (!Array.isArray(results)) return null;
  const expectedCep = normalizeCep(expected.postalcode);
  const expectedCity = normalizeSearch(expected.city);
  const expectedState = normalizeSearch(expected.state);
  const expectedStreet = normalizeSearch(expected.street);
  const expectedDistrict = normalizeSearch(expected.district);

  const scored = results
    .filter(r => isValidCoordinate(Number(r.lat), Number(r.lon)))
    .map(r => {
      const a = r.address || {};
      const resultCep = normalizeCep(a.postcode);
      const resultCity = normalizeSearch(a.city || a.town || a.municipality || a.village || a.county);
      const resultState = normalizeSearch(a.state || a['ISO3166-2-lvl4'] || '');
      const resultRoad = normalizeSearch(a.road || a.pedestrian || a.residential || '');
      const resultDistrict = normalizeSearch(a.suburb || a.neighbourhood || a.city_district || '');
      let score = 0;
      if (expectedCep && resultCep === expectedCep) score += 100;
      else if (expectedCep && resultCep) score -= 50;
      if (expectedCity && resultCity && (resultCity.includes(expectedCity) || expectedCity.includes(resultCity))) score += 30;
      if (expectedState && resultState && resultState.includes(expectedState)) score += 10;
      if (expectedStreet && resultRoad && (resultRoad.includes(expectedStreet) || expectedStreet.includes(resultRoad))) score += 35;
      if (expectedDistrict && resultDistrict && (resultDistrict.includes(expectedDistrict) || expectedDistrict.includes(resultDistrict))) score += 15;
      return { result: r, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored[0]?.score >= 30 ? scored[0].result : null;
}

async function geocodeNominatim(query) {
  try {
    await waitForNominatimSlot();
    const url = new URL('https://nominatim.openstreetmap.org/search');
    url.searchParams.set('format', 'jsonv2');
    url.searchParams.set('limit', '3');
    url.searchParams.set('countrycodes', 'br');
    url.searchParams.set('addressdetails', '1');
    url.searchParams.set('q', query);
    const res = await fetch(url.toString(), { headers: { 'Accept-Language': 'pt-BR' } });
    if (!res.ok) return null;
    const data = await res.json();
    const first = data?.find(item => isValidCoordinate(Number(item?.lat), Number(item?.lon)));
    const lat = Number(first?.lat);
    const lng = Number(first?.lon);
    if (isValidCoordinate(lat, lng)) return { lat, lng, source: 'OpenStreetMap endereço', address: first?.display_name || '', confidence: 72 };
  } catch (_) {}
  return null;
}

function isValidCoordinate(lat, lng) {
  return Number.isFinite(Number(lat)) && Number.isFinite(Number(lng)) &&
    Number(lat) >= -34 && Number(lat) <= 6 && Number(lng) >= -74 && Number(lng) <= -32;
}

function samePlaceName(a, b) {
  const na = normalizeSearch(a);
  const nb = normalizeSearch(b);
  return !!na && !!nb && (na === nb || na.includes(nb) || nb.includes(na));
}

function cleanCepStreet(value) {
  return cleanText(value)
    .replace(/\s+-\s+(de|até|ate)\s+\d+.*$/i, '')
    .replace(/\s+-\s+lado\s+(par|ímpar|impar).*$/i, '')
    .trim();
}

function formatCep(cep) {
  const digits = normalizeCep(cep);
  return digits.length === 8 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;
}


function confidenceBySource(source = '') {
  const s = String(source || '').toLowerCase();
  if (s.includes('awesomeapi')) return 98;
  if (s.includes('validado por endereço')) return 94;
  if (s.includes('viacep')) return 90;
  if (s.includes('openstreetmap endereço')) return 82;
  if (s.includes('coordenada fixa')) return 100;
  return 70;
}

function estimateUnresolvedConfidence(group) {
  // Índice heurístico de confiança dos dados disponíveis, não uma probabilidade estatística.
  // Quanto mais elementos válidos existem, maior a chance de uma revisão manual localizar o ponto.
  let score = 0;
  if (group?.cep && /^\d{8}$/.test(String(group.cep))) score += 35;
  if (group?.cidade) score += 20;
  if (group?.uf) score += 15;
  if (group?.almoxarifado && group.almoxarifado !== 'SEM ALMOXARIFADO') score += 10;
  if (group?.rows?.some?.(r => cleanText(r?.['Destino']))) score += 10;
  if (group?.rows?.some?.(r => cleanText(r?.['Destinatario']))) score += 10;
  return Math.min(score, 65);
}

async function findReleaseCandidate(group) {
  // Gera somente uma posição aproximada para liberação manual do usuário.
  // Ela nunca é exibida automaticamente no mapa.
  try {
    if (group?.cep) {
      const via = await lookupViaCep(group.cep);
      if (via) {
        const street = cleanCepStreet(via.logradouro);
        const district = cleanText(via.bairro);
        const city = cleanText(via.localidade || group.cidade);
        const stateName = cleanText(via.uf || group.uf);
        if (street && city && stateName) {
          const approxAddress = await geocodeNominatim([
            street, district, city, stateName, 'Brasil'
          ].filter(Boolean).join(', '));
          if (approxAddress && isValidCoordinate(approxAddress.lat, approxAddress.lng)) {
            return {
              ...approxAddress,
              source: 'Aproximação por endereço',
              confidence: 58,
              address: approxAddress.address || [street, district, city, stateName].filter(Boolean).join(', ')
            };
          }
        }
        if (city && stateName) {
          const cityGeo = await geocodeNominatimStructured({ city, state: stateName });
          if (cityGeo && isValidCoordinate(cityGeo.lat, cityGeo.lng)) {
            return { ...cityGeo, source: 'Aproximação por cidade', confidence: 35 };
          }
        }
      }
    }

    if (group?.cidade && group?.uf) {
      const cityGeo = await geocodeNominatimStructured({ city: group.cidade, state: group.uf });
      if (cityGeo && isValidCoordinate(cityGeo.lat, cityGeo.lng)) {
        return { ...cityGeo, source: 'Aproximação por cidade', confidence: 35 };
      }
    }
  } catch (_) {}
  return null;
}

function releaseUnresolvedDestination(key) {
  const index = state.unresolved.findIndex(item => item.key === key);
  if (index < 0) return;
  const item = state.unresolved[index];
  const candidate = item.releaseCandidate;
  const releaseConfidence = Math.round(Number(item.confidence) || 0);
  if (!candidate || !isValidCoordinate(candidate.lat, candidate.lng)) {
    showToast('Não há uma posição aproximada disponível para liberar este destino.');
    return;
  }
  if (releaseConfidence < MIN_RELEASE_CONFIDENCE) {
    showToast(`A localização precisa ter pelo menos ${MIN_RELEASE_CONFIDENCE}% de confiança para ser liberada.`);
    return;
  }

  const group = state.groups.find(g => g.key === key);
  if (!group) return;

  group.lat = Number(candidate.lat);
  group.lng = Number(candidate.lng);
  group.geoSource = `${candidate.source || 'Aproximação'} · liberado manualmente`;
  group.geoAddress = candidate.address || '';
  group.geoConfidence = Number(candidate.confidence) || item.confidence || 35;
  group.manuallyReleased = true;

  state.unresolved.splice(index, 1);
  state.filteredGroups = state.groups.filter(g => matchesCurrentFilters(g));
  renderMarkers(state.filteredGroups);
  renderErrorTable();
  updateStatusAfterManualRelease();
  fitMapToVisibleMarkers();
  showToast(`${group.almoxarifado} liberado no mapa com localização aproximada.`);

  if (!state.unresolved.length) closeErrorModal();
}

function matchesCurrentFilters(group) {
  const term = normalizeSearch(els.searchInput?.value || '');
  const uf = els.ufFilter?.value || '';
  const priority = els.priorityFilter?.value || '';
  if (uf && group.uf !== uf) return false;
  if (priority && !group.prioridades?.has?.(priority)) return false;
  if (!term) return true;
  const haystack = normalizeSearch([
    group.almoxarifado, group.cidade, group.uf, group.cep,
    ...(group.rows || []).flatMap(r => [r['Nota'], r['Numero OEF'], r['Fornecedor'], r['Cliente'], r['Destino'], r['Destinatario']])
  ].filter(Boolean).join(' '));
  return haystack.includes(term);
}

function updateStatusAfterManualRelease() {
  const nfCount = countNfs(state.groups);
  const locatedCount = state.groups.filter(g => g.lat != null && g.lng != null).length;
  if (state.unresolved.length) {
    setStatus('warning', 'Carregamento concluído com pendências', `${nfCount} NFs processadas. ${locatedCount} destinos exibidos e ${state.unresolved.length} pendentes.`);
    els.statusAction.classList.remove('hidden');
  } else {
    setStatus('success', 'Carregamento completo', `${nfCount} NFs processadas e ${locatedCount} destinos exibidos.`);
    els.statusAction.classList.add('hidden');
  }
}

function confidenceClass(value) {
  const n = Number(value) || 0;
  if (n >= 85) return 'confidence-high';
  if (n >= 60) return 'confidence-medium';
  return 'confidence-low';
}

function renderMarkers(groups) {
  state.cluster.clearLayers();
  state.markersByKey.clear();

  const visible = groups.filter(g => g.lat != null && g.lng != null);
  const offsets = computeMarkerOffsets(visible);

  for (const group of visible) {
    const selected = state.route.some(r => r.key === group.key);
    const offset = offsets.get(group.key) || { x: 0, y: 0, side: 'right' };
    const icon = buildPinIcon(group, selected, offset);
    const marker = L.marker([group.lat, group.lng], {
      icon,
      riseOnHover: true,
      keyboard: true,
      zIndexOffset: selected ? 1000 : Math.round(Math.abs(offset.x) + Math.abs(offset.y)),
    });
    marker.bindPopup(`
      <div class="popup-title">${escapeHtml(group.almoxarifado)}</div>
      <div class="popup-meta">${group.nfs.size} NFs · ${formatKg(group.peso)} · ${formatNumber(group.volumes)} volumes<br>${escapeHtml(group.cidade || '')}${group.uf ? ` / ${escapeHtml(group.uf)}` : ''}</div>
    `);
    marker.on('click', () => {
      if (state.routeMode) {
        toggleRouteGroup(group.key);
        activateTab('route');
      } else {
        selectGroup(group.key);
      }
    });
    state.cluster.addLayer(marker);
    state.markersByKey.set(group.key, marker);
  }
  renderBranches();
}

function computeMarkerOffsets(groups) {
  const result = new Map();

  // Só afastamos visualmente pins quando o CEP é exatamente o mesmo.
  // CEPs diferentes permanecem na coordenada real, mesmo quando ficam muito próximos.
  const byCep = new Map();
  for (const group of groups) {
    if (!group.cep) {
      result.set(group.key, { x: 0, y: 0, side: 'right' });
      continue;
    }
    if (!byCep.has(group.cep)) byCep.set(group.cep, []);
    byCep.get(group.cep).push(group);
  }

  for (const sameCepGroups of byCep.values()) {
    if (sameCepGroups.length === 1) {
      result.set(sameCepGroups[0].key, { x: 0, y: 0, side: 'right' });
      continue;
    }

    const count = sameCepGroups.length;
    const radius = Math.min(62, 24 + Math.max(0, count - 2) * 6);
    sameCepGroups.forEach((group, order) => {
      const angle = (-Math.PI / 2) + (Math.PI * 2 * order / count);
      const x = Math.round(Math.cos(angle) * radius);
      const y = Math.round(Math.sin(angle) * radius);
      result.set(group.key, { x, y, side: x >= 0 ? 'right' : 'left' });
    });
  }

  return result;
}

function buildPinIcon(group, selected, offset) {
  const label = state.showVocatives
    ? `<div class="pin-vocative pin-vocative-${offset.side}">${escapeHtml(group.almoxarifado)}</div>`
    : '';
  const classes = ['custom-pin'];
  if (selected) classes.push('selected');
  if (group.manuallyReleased) classes.push('manual-release');
  return L.divIcon({
    className: 'pin-host',
    html: `<div class="pin-offset" style="--pin-x:${offset.x}px;--pin-y:${offset.y}px"><div class="${classes.join(' ')}"><div class="pin-shape"><span>${group.nfs.size}</span></div>${group.manuallyReleased ? '<div class="pin-flag">Manual</div>' : ''}${label}</div></div>`,
    iconSize: [42, 50],
    iconAnchor: [21, 48],
    popupAnchor: [offset.x, -44 + offset.y],
  });
}

function initializeBranches() {
  // As unidades Della Volpe são pontos fixos. Não dependem de geocodificação
  // nem de cache do navegador. Isso garante que todas apareçam sempre no mapa.
  state.branches = DELLA_VOLPE_BRANCHES.map(item => ({
    ...item,
    isBranch: true,
    peso: 0,
    volumes: 0,
    nfs: new Set(),
    lat: Number(item.lat),
    lng: Number(item.lng),
    geoSource: item.coordSource || 'Coordenada fixa cadastrada',
    geoStatus: isValidCoordinate(item.lat, item.lng) ? 'Localização fixa' : 'Coordenada inválida',
  }));
  renderBranches();
}

function renderBranches() {
  if (!state.branchLayer) return;
  state.branchLayer.clearLayers();
  state.branchMarkersByKey.clear();
  if (!state.showBranches) return;
  for (const branch of state.branches.filter(b => b.lat != null && b.lng != null)) {
    const selected = state.route.some(r => r.key === branch.key);
    const showLabel = state.map.getZoom() >= 7;
    const icon = L.divIcon({
      className: 'branch-pin-host',
      html: `<div class="branch-pin-wrap"><div class="branch-pin ${selected ? 'selected' : ''}"><span>DV</span></div>${showLabel ? `<div class="branch-label">${escapeHtml(branch.name)}</div>` : ''}</div>`,
      iconSize: [42, 50],
      iconAnchor: [21, 46],
      popupAnchor: [0, -40],
    });
    const marker = L.marker([branch.lat, branch.lng], { icon, riseOnHover: true, zIndexOffset: selected ? 1800 : 1200 });
    marker.bindPopup(`<div class="popup-title">${escapeHtml(branch.name)}</div><div class="popup-meta">${escapeHtml(branch.address)}</div>`);
    marker.on('click', () => {
      if (state.routeMode) {
        toggleRoutePoint(branch.key);
        activateTab('route');
      } else {
        selectBranch(branch.key);
      }
    });
    state.branchLayer.addLayer(marker);
    state.branchMarkersByKey.set(branch.key, marker);
  }
}

function selectBranch(key) {
  const branch = state.branches.find(b => b.key === key);
  if (!branch) return;
  state.selectedGroupKey = key;
  els.detailsEmpty.classList.add('hidden');
  els.detailsContent.classList.remove('hidden');
  const isInRoute = state.route.some(r => r.key === key);
  els.detailsContent.innerHTML = `
    <div class="destination-title">
      <div>
        <span class="branch-detail-badge">DV · ${escapeHtml((branch.type || 'Filial').toUpperCase())}</span>
        <h3 style="margin-top:10px">${escapeHtml(branch.name)}</h3>
        <p>${escapeHtml(branch.city)} · ${escapeHtml(branch.uf)} · CEP ${escapeHtml(formatCep(branch.cep))}</p>
      </div>
    </div>
    <div class="branch-address">${escapeHtml(branch.address)}</div>
    <div class="branch-contact-grid">
      <div><strong>E-mail</strong><span>${escapeHtml(branch.email || '—')}</span></div>
      <div><strong>Telefone</strong><span>${escapeHtml(branch.phone || '—')}</span></div>
      <div><strong>CNPJ</strong><span>${escapeHtml(branch.cnpj || '—')}</span></div>
    </div>
    <button id="addRouteBtn" class="btn ${isInRoute ? 'ghost' : 'primary'} add-route-btn">${isInRoute ? 'Remover da rota' : 'Usar na rota'}</button>
  `;
  activateTab('details');
  document.getElementById('addRouteBtn')?.addEventListener('click', () => toggleRoutePoint(key));
}

function routePointName(point) {
  return point.isBranch ? point.name : point.almoxarifado;
}
function routePointNfs(point) {
  return point?.nfs instanceof Set ? point.nfs.size : 0;
}

function selectGroup(key) {
  const group = state.groups.find(g => g.key === key);
  if (!group) return;
  state.selectedGroupKey = key;
  els.detailsEmpty.classList.add('hidden');
  els.detailsContent.classList.remove('hidden');
  els.detailsContent.innerHTML = buildDetailsHtml(group);
  activateTab('details');

  const addBtn = document.getElementById('addRouteBtn');
  addBtn?.addEventListener('click', () => toggleRouteGroup(key));
}

function buildDetailsHtml(group) {
  const isInRoute = state.route.some(r => r.key === group.key);
  const invoices = group.rows.map(row => `
    <article class="invoice-card">
      <div class="invoice-top">
        <div>
          <strong>NF ${escapeHtml(cleanText(row['Nota']) || 'sem número')}</strong>
          <div class="invoice-oef">OEF ${escapeHtml(cleanText(row['Numero OEF']) || '-')}</div>
        </div>
        <span class="chip">${escapeHtml(row.__prioridade)}</span>
      </div>
      <div class="invoice-grid">
        <span>Fornecedor<b>${escapeHtml(shorten(cleanText(row['Fornecedor']) || '-', 34))}</b></span>
        <span>Mercadoria<b>${escapeHtml(shorten(cleanText(row['Mercadoria']) || '-', 34))}</b></span>
        <span>Peso<b>${formatKg(row.__peso)}</b></span>
        <span>Volumes<b>${formatNumber(row.__volumes)}</b></span>
        <span>Limite de embarque<b>${escapeHtml(formatDate(row['Dt Limite Embarque']))}</b></span>
        <span>Entrega<b>${escapeHtml(formatDate(row['Dt Final Entrega']))}</b></span>
      </div>
    </article>
  `).join('');

  const manualBadge = group.manuallyReleased
    ? `<div class="manual-location-badge">Localização aproximada · liberado manualmente</div>`
    : '';

  return `
    <div class="destination-title">
      <div>
        <h3>${escapeHtml(group.almoxarifado)}</h3>
        <p>${escapeHtml(group.cidade || 'Cidade não informada')}${group.uf ? ` · ${escapeHtml(group.uf)}` : ''}${group.cep ? ` · CEP ${escapeHtml(group.cep)}` : ''}</p>
        ${manualBadge}
      </div>
      <span class="chip">${group.nfs.size} NFs</span>
    </div>

    <div class="detail-summary">
      <div class="mini-card"><span>Peso</span><strong>${formatKg(group.peso)}</strong></div>
      <div class="mini-card"><span>Volumes</span><strong>${formatNumber(group.volumes)}</strong></div>
      <div class="mini-card"><span>Clientes</span><strong>${group.clientes.size}</strong></div>
      <div class="mini-card"><span>Fornecedores</span><strong>${group.fornecedores.size}</strong></div>
    </div>

    <button id="addRouteBtn" class="btn ${isInRoute ? 'ghost' : 'primary'} add-route-btn">${isInRoute ? 'Remover da rota' : 'Adicionar à rota'}</button>

    <div class="section-title">Notas vinculadas</div>
    <div class="invoice-list">${invoices}</div>
  `;
}

function toggleRouteGroup(key) {
  toggleRoutePoint(key);
}

function toggleRoutePoint(key) {
  const idx = state.route.findIndex(r => r.key === key);
  if (idx >= 0) state.route.splice(idx, 1);
  else {
    const point = state.groups.find(g => g.key === key) || state.branches.find(b => b.key === key);
    if (point?.lat != null && point?.lng != null) state.route.push(point);
  }
  state.routeLegs = [];
  updateRouteUI();
  renderMarkers(state.filteredGroups);
  renderBranches();
  if (state.selectedGroupKey) {
    if (String(state.selectedGroupKey).startsWith('branch:')) selectBranch(state.selectedGroupKey);
    else selectGroup(state.selectedGroupKey);
  }
}

function updateRouteUI() {
  els.routeCountBadge.textContent = state.route.length;
  els.routeWeight.textContent = formatKg(state.route.reduce((s, g) => s + Number(g.peso || 0), 0));
  els.routeNfs.textContent = formatNumber(state.route.reduce((s, g) => s + routePointNfs(g), 0));
  els.routeHint.classList.toggle('hidden', state.route.length > 0);

  els.routeList.innerHTML = state.route.map((g, index) => {
    const leg = state.routeLegs[index];
    const legHtml = index < state.route.length - 1 ? `
      <div class="route-leg ${leg ? '' : 'pending'}">
        <span class="route-leg-line"></span>
        <div class="route-leg-info">
          <span>Trecho ${index + 1} → ${index + 2}</span>
          <strong>${leg ? `${(leg.distance / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} km · ${formatDuration(leg.duration)}` : 'Calcule a rota para ver distância e tempo'}</strong>
        </div>
      </div>` : '';

    return `
      <div class="route-stop-wrap">
        <div class="route-stop" data-key="${escapeHtml(g.key)}">
          <div class="stop-index">${index + 1}</div>
          <div class="stop-main">
            <strong>${escapeHtml(routePointName(g))}</strong>
            <span>${escapeHtml(g.cidade || '')}${g.uf ? ` · ${escapeHtml(g.uf)}` : ''}${g.isBranch ? ' · Filial Della Volpe' : ` · ${routePointNfs(g)} NFs`}</span>
          </div>
          <div class="stop-actions">
            <button class="small-btn" data-action="up" title="Mover para cima">↑</button>
            <button class="small-btn" data-action="down" title="Mover para baixo">↓</button>
            <button class="small-btn" data-action="remove" title="Remover">×</button>
          </div>
        </div>
        ${legHtml}
      </div>`;
  }).join('');

  els.routeList.querySelectorAll('.route-stop').forEach(stop => {
    stop.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => moveRouteStop(stop.dataset.key, btn.dataset.action));
    });
  });

  if (state.route.length < 2) {
    els.routeDistance.textContent = '0 km';
    els.routeDuration.textContent = '0 min';
    clearRouteLayer();
  }
}

function moveRouteStop(key, action) {
  const idx = state.route.findIndex(g => g.key === key);
  if (idx < 0) return;
  if (action === 'remove') state.route.splice(idx, 1);
  if (action === 'up' && idx > 0) [state.route[idx - 1], state.route[idx]] = [state.route[idx], state.route[idx - 1]];
  if (action === 'down' && idx < state.route.length - 1) [state.route[idx + 1], state.route[idx]] = [state.route[idx], state.route[idx + 1]];
  state.routeLegs = [];
  updateRouteUI();
  renderMarkers(state.filteredGroups);
  renderBranches();
}

function openRouteInGoogleMaps() {
  if (state.route.length < 2) {
    showToast('Adicione pelo menos dois destinos para abrir a rota no Google Maps.');
    return;
  }

  const points = state.route.map(g => `${g.lat},${g.lng}`);
  const origin = encodeURIComponent(points[0]);
  const destination = encodeURIComponent(points[points.length - 1]);
  const waypoints = points.slice(1, -1).map(encodeURIComponent).join('%7C');
  let url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
  if (waypoints) url += `&waypoints=${waypoints}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

async function calculateRoute() {
  if (state.route.length < 2) {
    showToast('Adicione pelo menos dois destinos para calcular a rota.');
    return;
  }

  els.recalculateRouteBtn.disabled = true;
  els.recalculateRouteBtn.textContent = 'Calculando...';
  try {
    const coords = state.route.map(g => `${g.lng},${g.lat}`).join(';');
    const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson&steps=false`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Serviço de rotas indisponível.');
    const data = await res.json();
    const route = data.routes?.[0];
    if (!route) throw new Error('Não foi possível calcular um trajeto entre os pontos selecionados.');

    els.routeDistance.textContent = `${(route.distance / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} km`;
    els.routeDuration.textContent = formatDuration(route.duration);
    state.routeLegs = (route.legs || []).map(leg => ({ distance: leg.distance || 0, duration: leg.duration || 0 }));
    updateRouteUI();

    clearRouteLayer();
    const casing = L.geoJSON(route.geometry, {
      style: { color: '#ffffff', weight: 9, opacity: .96, lineCap: 'round', lineJoin: 'round' }
    });
    const routeLine = L.geoJSON(route.geometry, {
      style: { color: '#2f5bd3', weight: 5, opacity: .96, lineCap: 'round', lineJoin: 'round' }
    });
    state.routeLayer = L.layerGroup([casing, routeLine]).addTo(state.map);
    // Enquadra somente o trajeto. O zoom máximo 12 mantém rotas urbanas próximas
    // sem abrir excessivamente o mapa. Rotas longas continuam ajustando o zoom
    // automaticamente conforme a extensão real do percurso.
    state.map.invalidateSize();
    state.map.fitBounds(routeLine.getBounds(), {
      paddingTopLeft: [42, 42],
      paddingBottomRight: [42, 42],
      maxZoom: 12,
      animate: true,
      duration: 0.45
    });
    activateTab('route');
    showToast('Rota calculada com sucesso.');
  } catch (e) {
    console.error(e);
    showToast(e.message || 'Falha ao calcular rota.');
  } finally {
    els.recalculateRouteBtn.disabled = false;
    els.recalculateRouteBtn.textContent = 'Calcular rota';
  }
}

function clearRoute() {
  state.route = [];
  state.routeLegs = [];
  updateRouteUI();
  clearRouteLayer();
  renderMarkers(state.filteredGroups);
  renderBranches();
  if (state.selectedGroupKey) {
    if (String(state.selectedGroupKey).startsWith('branch:')) selectBranch(state.selectedGroupKey);
    else selectGroup(state.selectedGroupKey);
  }
}

function clearRouteLayer() {
  if (state.routeLayer) {
    state.map.removeLayer(state.routeLayer);
    state.routeLayer = null;
  }
}

function applyFilters() {
  const term = normalizeSearch(els.searchInput.value);
  const uf = els.ufFilter.value;
  const priority = els.priorityFilter.value;

  state.filteredGroups = state.groups.filter(group => {
    if (uf && group.uf !== uf) return false;
    if (priority && !group.prioridades.has(priority)) return false;
    if (!term) return true;

    const haystack = normalizeSearch([
      group.almoxarifado,
      group.cidade,
      group.uf,
      group.cep,
      ...group.rows.flatMap(r => [r['Nota'], r['Numero OEF'], r['Fornecedor'], r['Cliente'], r['Destinatario']])
    ].filter(Boolean).join(' '));
    return haystack.includes(term);
  });

  renderMarkers(state.filteredGroups);
  updateSummary(state.filteredGroups);
}

function populateFilters() {
  const ufs = [...new Set(state.groups.map(g => g.uf).filter(Boolean))].sort();
  const priorities = [...new Set(state.rows.map(r => r.__prioridade).filter(Boolean))].sort();
  els.ufFilter.innerHTML = '<option value="">Todos os estados</option>' + ufs.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');
  els.priorityFilter.innerHTML = '<option value="">Todas as prioridades</option>' + priorities.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');
}

function updateSummary(groups) {
  const nfs = countNfs(groups);
  const peso = groups.reduce((s, g) => s + g.peso, 0);
  const volumes = groups.reduce((s, g) => s + g.volumes, 0);
  els.metricNfs.textContent = formatNumber(nfs);
  els.metricDestinos.textContent = formatNumber(groups.length);
  els.metricPeso.textContent = formatKg(peso);
  els.metricVolumes.textContent = formatNumber(volumes);
}

function countNfs(groups) {
  return groups.reduce((sum, g) => sum + g.nfs.size, 0);
}

function fitMapToVisibleMarkers() {
  const coords = state.filteredGroups.filter(g => g.lat != null && g.lng != null).map(g => [g.lat, g.lng]);
  if (!coords.length) return;
  if (coords.length === 1) state.map.setView(coords[0], 10);
  else state.map.fitBounds(L.latLngBounds(coords), { padding: [45, 45], maxZoom: 8 });
}

function renderErrorTable() {
  els.errorTableBody.innerHTML = state.unresolved.map(item => {
    const hasCandidate = !!item.releaseCandidate && isValidCoordinate(item.releaseCandidate.lat, item.releaseCandidate.lng);
    const releaseConfidence = Math.round(Number(item.confidence) || 0);
    const canRelease = hasCandidate && releaseConfidence >= MIN_RELEASE_CONFIDENCE;
    return `
      <tr>
        <td>${escapeHtml(item.almoxarifado)}</td>
        <td>${escapeHtml(item.cep || '-')}</td>
        <td>${escapeHtml(item.cidade || '-')}${item.uf ? ` / ${escapeHtml(item.uf)}` : ''}</td>
        <td>${item.nfs?.size ?? 0}</td>
        <td><span class="confidence-badge ${confidenceClass(item.confidence)}">${Math.round(Number(item.confidence) || 0)}%</span></td>
        <td>${escapeHtml(item.reason || 'Não localizado')}</td>
        <td>
          ${canRelease
            ? `<button type="button" class="release-location-btn" data-release-key="${escapeHtml(item.key)}" title="Mostrar usando a melhor posição aproximada encontrada">Liberar <span>${releaseConfidence}%</span></button>`
            : hasCandidate
              ? `<span class="release-unavailable">Confiança abaixo de ${MIN_RELEASE_CONFIDENCE}%</span>`
              : `<span class="release-unavailable">Sem posição</span>`}
        </td>
      </tr>`;
  }).join('');

  els.errorTableBody.querySelectorAll('[data-release-key]').forEach(btn => {
    btn.addEventListener('click', () => releaseUnresolvedDestination(btn.dataset.releaseKey));
  });
}

function openErrorModal() {
  if (!state.unresolved.length) return;
  els.errorModal.classList.remove('hidden');
}
function closeErrorModal() { els.errorModal.classList.add('hidden'); }

function activateTab(name) {
  document.querySelectorAll('.tab').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === name));
  document.getElementById('detailsTab').classList.toggle('active', name === 'details');
  document.getElementById('routeTab').classList.toggle('active', name === 'route');
}

function resetData() {
  state.rows = [];
  state.groups = [];
  state.filteredGroups = [];
  state.unresolved = [];
  state.route = [];
  state.routeLegs = [];
  state.selectedGroupKey = null;
  state.cluster.clearLayers();
  state.markersByKey.clear();
  clearRouteLayer();
  updateRouteUI();
  updateSummary([]);
  els.detailsEmpty.classList.remove('hidden');
  els.detailsContent.classList.add('hidden');
  els.mapEmpty.classList.remove('hidden');
  els.statusAction.classList.add('hidden');
}

function setStatus(type, title, message, showAction = false) {
  els.statusBanner.className = `status-banner ${type}`;
  els.statusBanner.querySelector('strong').textContent = title;
  els.statusBanner.querySelector('span').textContent = message;
  els.statusAction.classList.toggle('hidden', !showAction);
}

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.remove('hidden');
  toastTimer = setTimeout(() => els.toast.classList.add('hidden'), 3200);
}

function loadGeocodeCache() {
  try { return JSON.parse(localStorage.getItem('roteirizadorNF.geoCache.v4') || '{}'); }
  catch (_) { return {}; }
}
function saveGeocodeCache() {
  try { localStorage.setItem('roteirizadorNF.geoCache.v4', JSON.stringify(state.geocodeCache)); }
  catch (_) {}
}

function normalizeCep(value) { return cleanText(value).replace(/\D/g, '').slice(0, 8); }
function cleanText(value) { return value == null ? '' : String(value).trim(); }
function toNumber(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  const text = cleanText(value).replace(/\./g, '').replace(',', '.');
  const num = Number(text);
  return Number.isFinite(num) ? num : 0;
}
function formatNumber(value) { return Number(value || 0).toLocaleString('pt-BR', { maximumFractionDigits: 2 }); }
function formatKg(value) { return `${Number(value || 0).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} kg`; }
function formatDate(value) {
  if (value == null || value === '') return '-';

  // O relatório pode trazer datas como Date, número serial do Excel ou texto.
  // Evitamos new Date(valor) diretamente porque zeros e seriais inválidos podem
  // virar 31/12/1969 por causa do Unix epoch/fuso horário.
  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) return '-';
    const year = value.getFullYear();
    if (year < 2000) return '-';
    return `${String(value.getDate()).padStart(2, '0')}/${String(value.getMonth() + 1).padStart(2, '0')}/${year}`;
  }

  if (typeof value === 'number') {
    if (!Number.isFinite(value) || value <= 0) return '-';
    try {
      const parsed = XLSX?.SSF?.parse_date_code?.(value);
      if (!parsed || parsed.y < 2000) return '-';
      return `${String(parsed.d).padStart(2, '0')}/${String(parsed.m).padStart(2, '0')}/${parsed.y}`;
    } catch (_) {
      return '-';
    }
  }

  const text = cleanText(value);
  if (!text || text === '0') return '-';

  let m = text.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})(?:\s.*)?$/);
  if (m) {
    const day = Number(m[1]);
    const month = Number(m[2]);
    const year = Number(m[3]);
    if (year < 2000 || month < 1 || month > 12 || day < 1 || day > 31) return '-';
    return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
  }

  m = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T\s].*)?$/);
  if (m) {
    const year = Number(m[1]);
    const month = Number(m[2]);
    const day = Number(m[3]);
    if (year < 2000 || month < 1 || month > 12 || day < 1 || day > 31) return '-';
    return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
  }

  return text;
}
function formatDuration(seconds) {
  const min = Math.round(seconds / 60);
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h ? `${h}h ${m}min` : `${m} min`;
}
function normalizeSearch(text) {
  return cleanText(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
function shorten(text, max) { return text.length > max ? `${text.slice(0, max - 1)}…` : text; }
function escapeHtml(value) {
  return cleanText(value).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}
