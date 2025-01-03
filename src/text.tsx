import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Close from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from 'react-player';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export function EstacaoSociambiental() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" >Leia mais</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} className="closebutton">
              <Close />
            </IconButton>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="600"
              image='https://www.alessandromusetta.com/geo/tiles/tingua/data/20241122/467868563_2274951316212985_2495551666205615212_n.jpg'
              alt=""
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              A Estação Socioambiental tem como principal objetivo incentivar práticas educativas inovadoras por meio de atividades interativas. A iniciativa busca sensibilizar a comunidade sobre a importância da conservação ambiental e a adoção de comportamentos mais sustentáveis.<br /><br />O que o espaço oferece?<br /><br />Instalações modernas e acessíveis: projetadas para garantir a inclusão e atender a diversos públicos.<br /><br />Atividades práticas e interativas: promovendo o aprendizado por meio da experiência.<br /><br />Programas de educação ambiental: voltados para a formação de uma sociedade mais consciente.<br /><br />Palestras e workshops: abordando temas relacionados à sustentabilidade e inovação.<br /><br />Impactos da Estação Socioambiental de Tinguá<br /><br />onscientização ambiental: um passo decisivo para engajar a população na proteção do meio ambiente.<br /><br />ducação cidadã: um espaço para formar cidadãos mais conscientes e responsáveis.<br /><br />Inovação e sustentabilidade: incentivo ao desenvolvimento de práticas sustentáveis.<br /><br />Modelo de referência: inspiração para outras cidades replicarem iniciativas similares.<br /><br />
            </Typography>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="200"
              image='https://www.alessandromusetta.com/geo/tiles/tingua/data/20241122/467863213_420577727791675_2095876979894051833_n.jpg'
              alt=""
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              “Estou muito feliz em participar da reinauguração da Reserva Biológica do Tinguá, um evento que simboliza não apenas a revitalização de um espaço essencial para a conservação da biodiversidade, mas também o fortalecimento do compromisso coletivo com o meio ambiente”, destacou Marcela Diniz, Diretora do Parque Natural Municipal de Nova Iguaçu.<br /><br />A inauguração da Estação Socioambiental de Tinguá representa um grande avanço para a região, consolidando-se como um símbolo de inovação e preservação ambiental.            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export function CinemaAmbiental() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" >Leia mais</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} className="closebutton">
              <Close />
            </IconButton>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="800"
              image='https://www.alessandromusetta.com/geo/tiles/tingua/data/20230728/tingua_na_lata.jpg'
              alt=""
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              A Mostra de Cinema Ambiental Onda Verde começa nesta quinta (27), na sede da ONG Onda Verde, em Nova Iguaçu (RJ). Com exibição gratuita de 14 filmes durante os 3 dias de evento, o destaque vai para os 4 filmes produzidos pelos 50 jovens da Baixada Fluminense que participaram da Oficina de Cinema Ambiental Onda Verde, realizada desde fevereiro. O foco das obras é a melhora da qualidade de vida do Tinguá, bairro onde vivem e local da sede da Onda Verde.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Os filmes produzidos pelos participantes da oficina são “Ewé – O caminho das folhas”, dirigido por Luiz Lopes, que destaca a relação dos candomblecistas com a natureza e combate noções ancoradas no racismo ambiental sobre a religião; “Os que ficam”, dirigido por Gustavo Roger e Antonio Douglas, que aborda o potencial turístico da região e a importância da preservação dos recursos naturais; “Tinguá – A riqueza das joias da coroa”, dirigido por Ana Beatriz e Raphael Santiago, que fala da importância hídrica do bairro e a necessidade de mobilização pelo direito à água, problema constante na região; e “Tinguá na lata”, dirigido por Fabíola Rocha, onde os participantes buscam respostas aos diversos descasos e mostram sua insatisfação com os problemas do bairro.<br /><br />
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: 400 }}>
              <ReactPlayer height='100%' controls url="https://www.alessandromusetta.com/geo/tiles/tingua/data/20230728/CinemaAmbiental.mp4" />
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Além dos 4 filmes da oficina, a Mostra contará ainda com mais 9 filmes de temática ambiental, como o clássico “Ilha das Flores”, “Paraíba pede socorro”, sobre o rio Paraíba do Sul, e “Salvem o rio”, sobre o rio Pavuna. Entre os temas abordados pelos filmes, estão o consumo consciente, a mitigação de desperdícios e a destinação correta do lixo, aproximando os filmes da realidade dos participantes.<br /><br />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              GABRIEL TUSSINI, <a href='https://oeco.org.br/salada-verde/mostra-de-cinema-em-nova-iguacu-rj-exibe-filmes-ambientais-de-jovens-da-regiao/'>Mostra de cinema em Nova Iguaçu (RJ) exibe filmes ambientais de jovens da região</a>, ((o))eco<br /><br />
            </Typography>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="800"
              image='https://www.alessandromusetta.com/geo/tiles/tingua/data/20230728/joias.jpg'
              alt=""
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="800"
              image='https://www.alessandromusetta.com/geo/tiles/tingua/data/20230728/ewe.jpg'
              alt=""
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="800"
              image='https://www.alessandromusetta.com/geo/tiles/tingua/data/20230728/ficam.jpg'
              alt=""
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export function EstacoesEstradaFerro() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" >Leia mais</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} className="closebutton">
              <Close />
            </IconButton>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image='https://www.alessandromusetta.com/geo/tiles/tingua/data/20230714/103625210.jpg'
              alt=""
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Uma antiga ferrovia que ligava o Rio de Janeiro à Baixada Fluminense está se tornando um polo cultural em Nova Iguaçu.<br />A primeira Estação de Cultura do município foi inaugurada em julho de 2023, no distrito de Tinguá, durante a tradicional Festa do Aipim. O espaço abriga uma mostra de objetos arqueológicos descobertos no Parque Histórico e Arqueológico de Iguassú Velha, que revelam aspectos da história e da cultura da região.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              A Estação Tinguá faz parte do conjunto arquitetônico da antiga Estrada de Ferro Rio D’Ouro, construída em 1876 para transportar materiais e operários envolvidos na obra das adutoras da Serra do Tinguá, que abasteciam a capital fluminense. Em 1883, a estação foi aberta ao público e funcionou até os anos 1970. Parte do seu trajeto foi aproveitado na construção da Linha 2 do metrô, inaugurada em 1998 na Pavuna.<br /><br />Video: @daiturismo<br /><br />
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: 400 }}>
              <ReactPlayer height='100%' controls url='https://www.alessandromusetta.com/geo/tiles/tingua/data/20230714/EstacaodaCulturaTingua.mp4' />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


export function RoleIguacuano() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" >Leia mais</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} className="closebutton">
              <Close />
            </IconButton>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image='https://www.alessandromusetta.com/geo/tiles/tingua/data/20221227/316053953_701024761152361_1630399678539113923_n.jpg'
              alt=""
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Governo do Estado do Rio de Janeiro, Secretaria de Cultura de Estado de Cultura e Economia Criativa do Rio de Janeiro através do Edital Cultura Presente nas Redes 2 apresentam Rolê Iguaçuano.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              No Rolê Iguaçuano de hoje, indicamos a vocês o EcoMuseu Iguassú que fica em Tinguá na Rua Paraná, 34. <br /><br />
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: 400 }}>
              <ReactPlayer height='100%' controls url="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221227/Role-Iguacuano.mp4" />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export function Plaquinhas() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" >Leia mais</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} className="closebutton">
              <Close />
            </IconButton>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image='https://www.alessandromusetta.com/geo/tiles/tingua/data/20221226/321796614_717525479747545_5700836174740805761_n.jpg'
              alt=" Os alunos  da Casa do Jovem Fotógrafo conheceram a Sede da Reserva Biológica do Tinguá, e participaram da colocação das plaquinhas de identificação das árvores da trilha do Circuito das Águas, agora além do contato com a natureza a trilha senso-perceptiva explica um pedacinho da riqueza da flora da REBIO do Tinguá"
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              🌳 Os alunos  da Casa do Jovem Fotógrafo conheceram a Sede da Reserva Biológica do Tinguá, e participaram (26/12/22) da colocação das plaquinhas de identificação das árvores da trilha do Circuito das Águas, agora além do contato com a natureza a trilha senso-perceptiva explica um pedacinho da riqueza da flora da REBIO do Tinguá.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ➡️ As árvores do circuito foram identificadas anteriormente pelos pesquisadores do Jardim Botânico do RJ: Haroldo de Lima, Claudia Barros e Lara Decache.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              📌 As plaquinhas com a identificação foram confeccionadas e posteriormente doadas pela Cedae para esse circuito.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              💦 Os jovens tiveram a oportunidade de registrar a natureza na UC e observar as aves e toda a Biodiversidade da Unidade.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Fotos: alunos da Casa do Jovem Fotógrafo - Onda Verde
            </Typography>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221226/322644059_550831886932630_4730045710192965551_n.jpg"
              alt=" Os alunos  da Casa do Jovem Fotógrafo conheceram a Sede da Reserva Biológica do Tinguá, e participaram da colocação das plaquinhas de identificação das árvores da trilha do Circuito das Águas, agora além do contato com a natureza a trilha senso-perceptiva explica um pedacinho da riqueza da flora da REBIO do Tinguá"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221226/321962950_5920994397957252_6222289159103750655_n.jpg"
              alt=" Os alunos  da Casa do Jovem Fotógrafo conheceram a Sede da Reserva Biológica do Tinguá, e participaram da colocação das plaquinhas de identificação das árvores da trilha do Circuito das Águas, agora além do contato com a natureza a trilha senso-perceptiva explica um pedacinho da riqueza da flora da REBIO do Tinguá"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221226/321831135_905595627128858_8602636201503750352_n.jpg"
              alt=" Os alunos  da Casa do Jovem Fotógrafo conheceram a Sede da Reserva Biológica do Tinguá, e participaram da colocação das plaquinhas de identificação das árvores da trilha do Circuito das Águas, agora além do contato com a natureza a trilha senso-perceptiva explica um pedacinho da riqueza da flora da REBIO do Tinguá"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221226/321796405_553064646415884_8078850280229199057_n.jpg"
              alt=" Os alunos  da Casa do Jovem Fotógrafo conheceram a Sede da Reserva Biológica do Tinguá, e participaram da colocação das plaquinhas de identificação das árvores da trilha do Circuito das Águas, agora além do contato com a natureza a trilha senso-perceptiva explica um pedacinho da riqueza da flora da REBIO do Tinguá"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


export function Diagnostico2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" >Leia mais</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} className="closebutton">
              <Close />
            </IconButton>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image='https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/316934472_630562562085380_6195941427711428610_n.jpg'
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              📋 Dia de Diagnóstico Ambiental em Tinguá - Mutirão para coleta de Resíduos Sólidos ♻️<br /><br />
              Ontem (26/11/22) os alunos da Casa do Jovem Fotógrafo Onda Verde andaram mais vez pela comunidade de Tinguá para dar continuidade ao diagnóstico ambiental utilizando a plataforma KoBotoolbox.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ♻️ Os jovens coletaram muitos materiais recicláveis, como por exemplo: garrafas pet, latas de alumínio, papel, papelão e bitucas de cigarro. A importância da ação serve como um alerta para a população local sobre a forma com que é descartado irregularmente os resíduos sólidos na comunidade.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              💪Os materias coletados serão retirados pela EMLURB(Empresa Municipal de Limpeza Urbana de Nova Iguaçu),que realiza a Coleta Seletiva porta a porta envolvendo os bairros da cidade de Nova Iguaçu. E Tinguá é um deles!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              🗑️ Vale a pena lembrar que “lixo” é uma palavra geral para designar as palavras “resíduo” (os descartes que ainda têm alguma utilização possível por meio da reciclagem ou reutilização) e “rejeito” (aqueles que já não podem ser utilizados novamente).
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ♻️ Reciclar é preservar o nosso próprio planeta!!<br /><br />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Fotos: alunos da Casa do Jovem Fotógrafo - Onda Verde
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: 400 }}>
              <ReactPlayer height='100%' controls url="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221129/317711830_908169863398322_1982300064525199344_n.mp4" />
            </Box>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/316993123_1211851622698976_1499362131090536439_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/317031517_826019005182511_1247781363689323470_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/317241217_176795614958267_5218432489659969385_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/317228961_1857991174542026_6599830545940236701_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/317061874_1431983767333739_5416802944877874855_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/317093051_963063141338666_4512611372862566301_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export function Mutirao() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" >Leia mais</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} className="closebutton">
              <Close />
            </IconButton>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312926154_487490186640370_3605794588674514977_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              No dia de ontem (24/10/22) os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Além dos sacos de lixo, foi coletado uma sacola de bitucas de cigarro, que foi devidamente destinado ao coletor de bitucas.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Os alunos foram coordenados pelo técnico ambiental Marcos Martins, juntamente com o arte educador Ivan Machado. <br /><br />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Fotos: alunos do Ambiente Jovem - NUP Onda Verde
            </Typography>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312900249_455905026640778_826702457758053596_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312832031_1864685147199914_5642927232514912703_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312730276_213213517863133_3873034217518407222_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312349254_821160605819941_6595101941073287479_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312950282_804448327506822_404481447162671712_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312841036_551247023671077_6347711972693803858_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export function Diagnostico1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" >Leia mais</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} className="closebutton">
              <Close />
            </IconButton>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image='https://www.alessandromusetta.com/geo/tiles/tingua/data/20220818/308376344_3303969729924179_6878166015249261432_n.jpg'
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              📋 No dia de ontem (18/08/22) os alunos da Casa do Jovem Fotógrafo iniciaram um diagnóstico ambiental da comunidade de Tinguá utilizando a plataforma KoBotoolbox.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              📲 Esta plataforma será utilizada até o fim do projeto para o mapeamento de problemas e eventuais soluções socioambientais na comunidade de Tinguá, com a participação das escolas, da comunidade e dos jovens ativistas do projeto.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              💪💧🌍Ao longo do projeto, os dados ambientais levantados serão debatidos em fóruns populares, reuniões de conselhos ambientais das UCs locais e prefeitura.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Fotos: alunos da Casa do Jovem Fotógrafo - Onda Verde
            </Typography>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20220818/308540594_485542253481591_1781687780228134008_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20220818/308795436_1262865877590408_9106620889729543478_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}



export function Profumo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" >Leia mais</Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton onClick={handleClose} className="closebutton">
              <Close />
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Sabor do Tinguá
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Conceituamos o território não apenas como um espaço físico; é tanto o produto quanto o produtor de muitas relações que nascem e se desenvolvem nele.
              Tentamos representar o que estudamos como padrão de relações: relações entre xs moradorxs, entre o meio ambiente e os governos, entre os setores público e privado, entre inovações e legados e, portanto, entre xs moradorxs e o próprio espaço.
              Assim, pensando nestes espaços como um fenômeno dialético.
              Para entender o território não apenas como espaço físico, mas como um espaço complexo, é importante compreender as dinâmicas metropolitanas, urbanas e locais, sugerindo uma compreensão mais complexa da relação entre espaço, território, meio ambiente, governanças, organização, fazer e usar.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Pesquisamos sobre a dimensão morfológica e topográfica do espaço como uma paisagem em que a estrutura social, interagindo com o meio ambiente, constrói e reconstrói diferentes cenários.
              O espaço metropolitano do Rio de Janeiro, como a maioria das metrópoles da América Latina, sempre foi fragmentado e sujeito à hierarquia de centros e áreas periféricas delimitadas. Isto ocultou uma rica diversidade de relações que se expressam na idéia de bairro, entendido como "uma unidade morfológica e estrutural, seja ela uma área central ou periférica" (Angelo Serpa, Margens de Salvador: a produção do espaço periférico metropolitano).
              Com o enfoque metropolitano do Rio de Janeiro, pretende-se criar conexões, deslocamentos e interdependências entre os mundos de uma metrópole formada por ilhas independentes, mas ao mesmo tempo interligadas pelos fluxos de pessoas, produtos e mercadorias.
              O estudo de dinâmicas locais pontuais circunscreve áreas semelhantes que não estão inseridas em fronteiras específicas (administrativas), mas que se caracterizam por áreas uniformes que refletem - na dimensão social - a distribuição da riqueza dentro da população e determinam o tipo de moradia e sua localização de acordo com a acessibilidade dos serviços e instalações e a qualidade dos espaços comuns.
              Daí a importância de estudar a forma de apropriação do território local pelo grupo social que o ocupa.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Se é possível descrever Nova Iguaçu como uma periferia metropolitana (tendo o significado topológico do termo periferia), vemos o Vale do Tinguà como um tipo diferente de periferia, uma "sombra urbana" tendo sua condição periférica, usando o termo periferia para se referir a uma "gama de fraturas, descontinuidades, ou dobradiças disseminadas por territórios metropolitanos", seguindo Jaquier.
              O Vale do Tinguá foi transformado de sua condição original por seus habitantes de acordo com o uso que eles escolheram atribuir-lhe (agricultura familiar). A partir desta interação entre espaço físico e comunidade local, este território foi transformado assumindo os valores e as fraquezas da comunidade que o habita.
              Consideramos o Vale do Tingua como um lugar de moradia, subsistência, auto-organização e política. Este é um desafio vital e até mesmo radical diante das narrativas dominantes da megacidade, como disse Ananda Roy. Pois compreendê-lo apenas por sua condição informal ignora sua complexidade e seu dinamismo. Na verdade, o que acontece é que estas periferias podem organizar núcleos urbanos evacuados.
              Através da colaboração com entidades locais (ONGs, comunidade local, município local...) conseguimos entender os valores da produção local que definem o Tinguà não como um assentamento informal, mas como um espaço de "empreendimento domiciliar" e detectamos este espaço como um agente de mudança que pode atuar em diferentes escalas.
              Então, de que maneira as formas alternativas de pertencer e habitar podem ser expressas cartograficamente, além de serem planejadas?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Mapeamento da produção do espaço na dimensão física: centralidades do bairro, espaços comuns e, espaços produtivos. [Padrão de relações: relações entre xs moradxres, entre o meio ambiente e os governos, entre os setores público e privado, entre inovações e legados e, portanto, entre xs moradorxs e o próprio espaço].
              As centralidades locais são o resultado de um lento e diário processo de "demarcação do território". Este processo de 'demarcação' se traduz em formas espaciais que mostram claramente as características da estrutura social, econômica e ambiental da área. Existe uma hierarquia clara dentro dessas centralidades e ela foi determinada por vários fatores, tais como, por exemplo, a presença de comércio e/ou serviços e a concentração espontânea de pedantes/usuários dessas áreas. Este processo resulta automaticamente em uma hierarquia de espaços comuns (ruas, praças, largos), alguns mais centrais (não fisicamente falando, mas com uma apropriação mais intensa pelos usuários) do que outros (com uma importância local relativa). De fato, devido à condição precária destes locais, estas centralidades emergem acima de tudo da presença de fatores que permitem sua formação e sua consolidação.
              Portanto, quando falamos das centralidades do bairro, todas as áreas de fácil acesso e circulação serão incluídas. Como conseqüência, uma área será capaz de representar as centralidades de um bairro significativo, sem concentrar atividades terciárias dentro dele. Estes lugares assumiram, portanto, um caráter territorial graças às práticas cotidianas que as comunidades aí realizam, e ainda devido ao compartilhar de histórias que contribuem para a construção de valores sociais que se expressam acima de tudo e nas formas de apropriação do espaço.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <hr /> Giulia
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
