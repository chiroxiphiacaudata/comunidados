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
import { Profumo, Mutirao, Diagnostico1, Diagnostico2, Plaquinhas, RoleIguacuano, CinemaAmbiental, EstacaoSociambiental, EstacoesEstradaFerro } from './text';

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

export default function Stories() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();

  return (
    <div>
      <Button onClick={handleOpen}>Narrações</Button>
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

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                style={{ margin: '2%', width: 372 }}
                component="img"
                height="250"
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20241122/467868563_2274951316212985_2495551666205615212_n.jpg"
                alt=""
              />
              <CardContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Inauguração da 1ª Estação Socioambiental de Tinguá: Um Marco para a Sustentabilidade.<br />No dia 21 de novembro de 2024, foi inaugurada a primeira Estação Socioambiental de Tinguá, um marco histórico para a conscientização ambiental e a educação cidadã na Baixada Fluminense. A Secretaria Municipal de Agricultura e Meio Ambiente (SEMAM) teve a honra de participar deste evento transformador, que reforça o compromisso com a preservação do meio ambiente e o desenvolvimento sustentável.
                </Typography>
              </CardContent>
              <CardActions>
                <EstacaoSociambiental />
              </CardActions>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                style={{ margin: '2%', width: 372 }}
                component="img"
                height="250"
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20230728/oficina.jpg"
                alt=""
              />
              <CardContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Mostra de Cinema Ambiental Onda Verde exibe, entre 28 e 30 de julho de 2023, 14 filmes com temática ambiental; 4 das produções são de jovens participantes de oficina ligada ao evento
                </Typography>
              </CardContent>
              <CardActions>
                <CinemaAmbiental />
              </CardActions>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                style={{ margin: '2%', width: 372 }}
                component="img"
                height="250"
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20230714/103625210.jpg"
                alt=""
              />
              <CardContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  As estações da antiga Estrada de Ferro Rio D'Ouro, em Nova Iguaçu, na Baixada Fluminense, estão sendo transformadas em espaços dedicados à cultura. Durante a Festa do Aipim, no último mês de julho de 2023, a Estação de Cultura do Tinguá foi a primeira inaugurada, já recebendo uma exposição com os primeiros objetos arqueológicos encontrados no Parque Histórico e Arqueológico de Iguassú Velha.
                </Typography>
              </CardContent>
              <CardActions>
                <EstacoesEstradaFerro />
              </CardActions>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                style={{ margin: '2%', width: 372 }}
                component="img"
                height="250"
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20230416/330249744_776288003718030_7483664101693489802_n.jpg"
                alt=""
              />
              <CardContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  A Exposição Fotográfica - Belezas da Baixada Fluminense, inaugura no dia 16 de Abril 2023. A exposição estará aberta ao público durante todo o mês na Praça de Tinguá - Nova Iguaçu.
                </Typography>
              </CardContent>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                style={{ margin: '2%', width: 372 }}
                component="img"
                height="250"
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221227/316053953_701024761152361_1630399678539113923_n.jpg"
                alt=""
              />
              <CardContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  O EcoMuseu Iguassú participa do Rolê Iguaçuano promovido por a Secretaria de Cultura de Estado de Cultura e Economia Criativa do Rio de Janeiro
                </Typography>
              </CardContent>
              <CardActions>
                <RoleIguacuano />
              </CardActions>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                style={{ margin: '2%', width: 372 }}
                component="img"
                height="250"
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221226/321796614_717525479747545_5700836174740805761_n.jpg"
                alt=""
              />
              <CardContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  🌳 Os alunos  da Casa do Jovem Fotógrafo conheceram a Sede da Reserva Biológica do Tinguá, e participaram da colocação das plaquinhas de identificação das árvores da trilha do Circuito das Águas, agora além do contato com a natureza a trilha senso-perceptiva explica um pedacinho da riqueza da flora da REBIO do Tinguá.
                </Typography>
              </CardContent>
              <CardActions>
                <Plaquinhas />
              </CardActions>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                style={{ margin: '2%', width: 372 }}
                component="img"
                height="400"
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221028/308540594_485542253481591_1781687780228134008_n.jpg"
                alt=""
              />
              <CardContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Em aproximadamente dois meses de funcionamento do Peixe PapaPet, situado na sede da entidade ambientalista Onda Verde (Rua Nossa Senhora da Conceição, 6), deixaram de ser encaminhados para os rios e mares 9 sacos de garrafas pet.
                </Typography>
              </CardContent>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                style={{ margin: '2%', width: 372 }}
                component="img"
                height="220"
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/316994212_654178176420565_3872037346402276965_n.jpg"
                alt="📋 Dia de Diagnóstico Ambiental em Tinguá - Mutirão para coleta de Resíduos Sólidos ♻️"
              />
              <CardContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  📋 Dia de Diagnóstico Ambiental em Tinguá - Mutirão para coleta de Resíduos Sólidos ♻️
                </Typography>
              </CardContent>
              <CardActions>
                <Diagnostico2 />
              </CardActions>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                style={{ margin: '2%', width: 372 }}
                component="img"
                height="220"
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312972639_1098601624132143_1564327773776190315_n.jpg"
                alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ"
              />
              <CardContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  No dia de ontem (24/10/22) os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multirão de limpeza na rua das cachoeiras em Tinguá - RJ.
                </Typography>
              </CardContent>
              <CardActions>
                <Mutirao />
              </CardActions>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                style={{ margin: '2%', width: 372 }}
                component="img"
                height="220"
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20220927/308947525_1091159291795246_1599538503510034495_n.jpg"
                alt="Doação de mudas nativas de Mata Atlântica para o sítio do André"
              />
              <CardContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  O sítio do André, com o apoio da Onda Verde, está realizando uma ação de restauração florestal com espécies da Mata Atlântica.
                </Typography>
              </CardContent>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                style={{ margin: '2%', width: 372 }}
                component="img"
                height="220"
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20220818/308376344_3303969729924179_6878166015249261432_n.jpg"
                alt="📋 Dia de Diagnóstico Ambiental em Tinguá - Mutirão para coleta de Resíduos Sólidos ♻️"
              />
              <CardContent>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  📋 No dia de ontem (18/08/22) os alunos da Casa do Jovem Fotógrafo iniciaram um diagnóstico ambiental da comunidade de Tinguá utilizando a plataforma KoBotoolbox.
                </Typography>
              </CardContent>
              <CardActions>
                <Diagnostico1 />
              </CardActions>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sabor do Tinguá
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Conceituamos o território não apenas como um espaço físico; é tanto o produto quanto o produtor de muitas relações que nascem e se desenvolvem nele.
                </Typography>
              </CardContent>
              <CardActions>
                <Profumo />
              </CardActions>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ maxWidth: 400 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ReBio Tinguá, lugar perfeito para uma observação consciente da natureza
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: 400 }}>
                <ReactPlayer controls url='https://vimeo.com/387297233' />
              </Box>
            </Card>
            {/* Fim da narração */}

            {/* Início da narração */}
            <Card sx={{ display: 'flex', maxWidth: 400 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Na roça com João, agricultor
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Áudio
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, maxWidth: 150 }}>
                  <ReactAudioPlayer
                    src="https://www.alessandromusetta.com/geo/tiles/tingua/data/audio/Joao-Tingua.mp3"
                    controls
                  />
                </Box>
              </Box>
              <CardMedia
                style={{ height: "150px", padding: "2%" }}
                component="img"
                sx={{ width: 151 }}
                image="https://www.alessandromusetta.com/geo/tiles/tingua/data/audio/farmer.png"
                alt="Entrevista com João, agricultor orgânico"
              />
            </Card>
            {/* Fim da narração */}

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
