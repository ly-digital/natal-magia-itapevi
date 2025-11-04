# Guia de Importação de Programação

## Tamanho das Fotos de Destaque

**Dimensões recomendadas: 800x600 pixels (proporção 4:3)**

- Formato: JPG ou PNG
- Tamanho máximo: 500KB por imagem
- Qualidade: 80-90%
- Nome do arquivo: use o ID do evento (ex: `evento-001.jpg`)

### Exemplos de fotos adequadas:
- Foto da cortina de teatro para eventos de teatro
- Foto do Papai Noel para visitas
- Foto de desfile para paradinha
- Foto de instrumentos musicais para shows
- Foto de palhaços/artistas para circo

---

## Estrutura da Planilha CSV

Crie uma planilha com as seguintes colunas (ou use o template abaixo):

### Colunas obrigatórias:

| Coluna | Tipo | Exemplo | Descrição |
|--------|------|---------|-----------|
| **id** | Número | 1 | ID único do evento |
| **name** | Texto | "Paradinha de Natal" | Nome do evento |
| **date** | Data | 2025-12-05 | Data no formato YYYY-MM-DD |
| **time** | Hora | 19:00 | Horário no formato HH:MM (24h) |
| **type** | Texto | paradinha | Categoria: musica, teatro, danca, circo, papainoel, paradinha |
| **synopsis** | Texto | "Desfile mágico..." | Descrição do evento (máx 200 caracteres) |
| **location** | Texto | "Praça 18 de Fevereiro" | Opções: "Praça 18 de Fevereiro" ou "Rua Leopoldina de Camargo, 260" |
| **hasLibras** | Booleano | true | true se tiver intérprete de libras, false caso contrário |
| **image** | Texto | evento-001.jpg | Nome do arquivo da imagem (opcional, pode ficar vazio) |

---

## Template CSV

Existe um arquivo modelo **`programacao-eventos.csv`** na raiz do projeto com eventos de exemplo já preenchidos. 

Você pode:
1. Abrir o arquivo no Excel, Google Sheets ou qualquer editor de planilhas
2. Editar os eventos existentes ou adicionar novos
3. Salvar e fazer upload do arquivo atualizado

Copie e cole no Excel/Google Sheets:

```
id,name,date,time,type,synopsis,location,hasLibras,image
1,Paradinha de Natal,2025-12-05,19:00,paradinha,"Desfile mágico com personagens natalinos pelas ruas de Itapevi, trazendo alegria e encantamento para toda a família.",Praça 18 de Fevereiro,true,
2,Espetáculo de Luzes,2025-12-06,20:30,teatro,"Apresentação luminosa que transforma a rua em um cenário mágico de Natal, com efeitos especiais e música.","Rua Leopoldina de Camargo, 260",false,
3,O Príncipe da Paz,2025-12-07,19:30,teatro,"Espetáculo teatral que conta a história do nascimento de Jesus de forma emocionante e envolvente.","Rua Leopoldina de Camargo, 260",true,
```

**Observações importantes:**
- A coluna `image` pode ficar vazia (sem valor) se ainda não tiver a imagem
- Use `true` ou `false` para a coluna `hasLibras` (não use "sim" ou "não")
- As vírgulas dentro da sinopse devem estar entre aspas duplas

---

## Valores Permitidos

### Linguagem (categoria):
- `musica` - Música
- `teatro` - Teatro
- `danca` - Dança
- `circo` - Circo
- `papainoel` - Papai Noel
- `paradinha` - Paradinha

### Libras:
- `true` - Evento com intérprete de Libras
- `false` - Evento sem intérprete de Libras

### Local:
- `Praça 18 de Fevereiro`
- `Rua Leopoldina de Camargo, 260`

---

## Como Importar os Dados

### Opção 1: Manual
1. Edite o arquivo `src/components/CalendarSection.tsx`
2. Localize o array `attractions` no início do arquivo
3. Adicione/edite eventos seguindo a estrutura:

```typescript
{
  id: 1,
  name: "Nome do Evento",
  date: "2025-12-05", // YYYY-MM-DD
  time: "19:00", // HH:MM (24h)
  type: "teatro", // linguagem
  synopsis: "Descrição do evento...",
  location: "Praça 18 de Fevereiro",
  hasLibras: true, // true ou false
  image: null, // ou caminho da imagem
}
```

### Opção 2: Importação Automática (Futura)
Para adicionar importação automática via CSV, será necessário:
1. Upload do arquivo CSV na plataforma
2. Script de conversão automática dos dados
3. Validação dos dados importados

---

## Dicas Importantes

✅ **Faça sempre backup** da programação antes de atualizar

✅ **Teste com poucos eventos** primeiro para verificar se tudo está correto

✅ **Verifique datas e horários** - use sempre o formato 24h

✅ **Mantenha sinopses curtas** - máximo 200 caracteres para melhor visualização

✅ **Nomeie imagens de forma organizada** - use padrão: evento-001, evento-002, etc.

✅ **Comprima as imagens** antes do upload para otimizar carregamento

---

## Funcionalidades da Seção de Programação

✨ **Filtros disponíveis:**
- Próximos eventos / Eventos passados / Todos
- Por linguagem (Música, Teatro, Dança, Circo, Papai Noel, Paradinha)
- Por data específica
- Por período do dia (Manhã, Tarde, Noite)

✨ **Recursos:**
- Exibe apenas 4 eventos mais próximos na home
- Tag "Evento Encerrado" para eventos que já passaram
- Badge de Libras quando disponível
- Link para ver programação completa (se houver mais de 4 eventos)
- Cards com: Nome, Linguagem, Sinopse, Data, Hora, Local e Libras

---

## Suporte

Para dúvidas ou problemas na importação, consulte a documentação técnica ou entre em contato com o suporte.
