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

export function Diagnostico() {
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
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ???? Dia de Diagn??stico Ambiental em Tingu?? - Mutir??o para coleta de Res??duos S??lidos ??????<br /><br />
              Ontem (26/11/22) os alunos da Casa do Jovem Fot??grafo Onda Verde andaram mais vez pela comunidade de Tingu?? para dar continuidade ao diagn??stico ambiental utilizando a plataforma KoBotoolbox.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ?????? Os jovens coletaram muitos materiais recicl??veis, como por exemplo: garrafas pet, latas de alum??nio, papel, papel??o e bitucas de cigarro. A import??ncia da a????o serve como um alerta para a popula????o local sobre a forma com que ?? descartado irregularmente os res??duos s??lidos na comunidade.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ????Os materias coletados ser??o retirados pela EMLURB(Empresa Municipal de Limpeza Urbana de Nova Igua??u),que realiza a Coleta Seletiva porta a porta envolvendo os bairros da cidade de Nova Igua??u. E Tingu?? ?? um deles!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ??????? Vale a pena lembrar que ???lixo??? ?? uma palavra geral para designar as palavras ???res??duo??? (os descartes que ainda t??m alguma utiliza????o poss??vel por meio da reciclagem ou reutiliza????o) e ???rejeito??? (aqueles que j?? n??o podem ser utilizados novamente).
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ?????? Reciclar ?? preservar o nosso pr??prio planeta!!<br /><br /><br />
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: 400 }}>
              <ReactPlayer height='100%' controls url="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221129/317711830_908169863398322_1982300064525199344_n.mp4" />
            </Box>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/316993123_1211851622698976_1499362131090536439_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/317031517_826019005182511_1247781363689323470_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/317241217_176795614958267_5218432489659969385_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/317228961_1857991174542026_6599830545940236701_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/317061874_1431983767333739_5416802944877874855_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221127/317093051_963063141338666_4512611372862566301_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
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
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              No dia de ontem (24/10/22) os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Al??m dos sacos de lixo, foi coletado uma sacola de bitucas de cigarro, que foi devidamente destinado ao coletor de bitucas.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Os alunos foram coordenados pelo t??cnico ambiental Marcos Martins, juntamente com o arte educador Ivan Machado. <br /><br /><br />
            </Typography>
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312900249_455905026640778_826702457758053596_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312832031_1864685147199914_5642927232514912703_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312730276_213213517863133_3873034217518407222_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312349254_821160605819941_6595101941073287479_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312950282_804448327506822_404481447162671712_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
            />
            <CardMedia
              style={{ marginTop: '2%', maxWidth: 400 }}
              component="img"
              height="400"
              image="https://www.alessandromusetta.com/geo/tiles/tingua/data/20221025/312841036_551247023671077_6347711972693803858_n.jpg"
              alt="No dia 24/10/22 os alunos do Ambiente Jovem - NUP Onda Verde, realizaram um multir??o de limpeza na rua das cachoeiras em Tingu?? - RJ"
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
              Sabor do Tingu??
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Conceituamos o territ??rio n??o apenas como um espa??o f??sico; ?? tanto o produto quanto o produtor de muitas rela????es que nascem e se desenvolvem nele.
              Tentamos representar o que estudamos como padr??o de rela????es: rela????es entre xs moradorxs, entre o meio ambiente e os governos, entre os setores p??blico e privado, entre inova????es e legados e, portanto, entre xs moradorxs e o pr??prio espa??o.
              Assim, pensando nestes espa??os como um fen??meno dial??tico.
              Para entender o territ??rio n??o apenas como espa??o f??sico, mas como um espa??o complexo, ?? importante compreender as din??micas metropolitanas, urbanas e locais, sugerindo uma compreens??o mais complexa da rela????o entre espa??o, territ??rio, meio ambiente, governan??as, organiza????o, fazer e usar.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Pesquisamos sobre a dimens??o morfol??gica e topogr??fica do espa??o como uma paisagem em que a estrutura social, interagindo com o meio ambiente, constr??i e reconstr??i diferentes cen??rios.
              O espa??o metropolitano do Rio de Janeiro, como a maioria das metr??poles da Am??rica Latina, sempre foi fragmentado e sujeito ?? hierarquia de centros e ??reas perif??ricas delimitadas. Isto ocultou uma rica diversidade de rela????es que se expressam na id??ia de bairro, entendido como "uma unidade morfol??gica e estrutural, seja ela uma ??rea central ou perif??rica" (Angelo Serpa, Margens de Salvador: a produ????o do espa??o perif??rico metropolitano).
              Com o enfoque metropolitano do Rio de Janeiro, pretende-se criar conex??es, deslocamentos e interdepend??ncias entre os mundos de uma metr??pole formada por ilhas independentes, mas ao mesmo tempo interligadas pelos fluxos de pessoas, produtos e mercadorias.
              O estudo de din??micas locais pontuais circunscreve ??reas semelhantes que n??o est??o inseridas em fronteiras espec??ficas (administrativas), mas que se caracterizam por ??reas uniformes que refletem - na dimens??o social - a distribui????o da riqueza dentro da popula????o e determinam o tipo de moradia e sua localiza????o de acordo com a acessibilidade dos servi??os e instala????es e a qualidade dos espa??os comuns.
              Da?? a import??ncia de estudar a forma de apropria????o do territ??rio local pelo grupo social que o ocupa.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Se ?? poss??vel descrever Nova Igua??u como uma periferia metropolitana (tendo o significado topol??gico do termo periferia), vemos o Vale do Tingu?? como um tipo diferente de periferia, uma "sombra urbana" tendo sua condi????o perif??rica, usando o termo periferia para se referir a uma "gama de fraturas, descontinuidades, ou dobradi??as disseminadas por territ??rios metropolitanos", seguindo Jaquier.
              O Vale do Tingu?? foi transformado de sua condi????o original por seus habitantes de acordo com o uso que eles escolheram atribuir-lhe (agricultura familiar). A partir desta intera????o entre espa??o f??sico e comunidade local, este territ??rio foi transformado assumindo os valores e as fraquezas da comunidade que o habita.
              Consideramos o Vale do Tingua como um lugar de moradia, subsist??ncia, auto-organiza????o e pol??tica. Este ?? um desafio vital e at?? mesmo radical diante das narrativas dominantes da megacidade, como disse Ananda Roy. Pois compreend??-lo apenas por sua condi????o informal ignora sua complexidade e seu dinamismo. Na verdade, o que acontece ?? que estas periferias podem organizar n??cleos urbanos evacuados.
              Atrav??s da colabora????o com entidades locais (ONGs, comunidade local, munic??pio local...) conseguimos entender os valores da produ????o local que definem o Tingu?? n??o como um assentamento informal, mas como um espa??o de "empreendimento domiciliar" e detectamos este espa??o como um agente de mudan??a que pode atuar em diferentes escalas.
              Ent??o, de que maneira as formas alternativas de pertencer e habitar podem ser expressas cartograficamente, al??m de serem planejadas?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Mapeamento da produ????o do espa??o na dimens??o f??sica: centralidades do bairro, espa??os comuns e, espa??os produtivos. [Padr??o de rela????es: rela????es entre xs moradxres, entre o meio ambiente e os governos, entre os setores p??blico e privado, entre inova????es e legados e, portanto, entre xs moradorxs e o pr??prio espa??o].
              As centralidades locais s??o o resultado de um lento e di??rio processo de "demarca????o do territ??rio". Este processo de 'demarca????o' se traduz em formas espaciais que mostram claramente as caracter??sticas da estrutura social, econ??mica e ambiental da ??rea. Existe uma hierarquia clara dentro dessas centralidades e ela foi determinada por v??rios fatores, tais como, por exemplo, a presen??a de com??rcio e/ou servi??os e a concentra????o espont??nea de pedantes/usu??rios dessas ??reas. Este processo resulta automaticamente em uma hierarquia de espa??os comuns (ruas, pra??as, largos), alguns mais centrais (n??o fisicamente falando, mas com uma apropria????o mais intensa pelos usu??rios) do que outros (com uma import??ncia local relativa). De fato, devido ?? condi????o prec??ria destes locais, estas centralidades emergem acima de tudo da presen??a de fatores que permitem sua forma????o e sua consolida????o.
              Portanto, quando falamos das centralidades do bairro, todas as ??reas de f??cil acesso e circula????o ser??o inclu??das. Como conseq????ncia, uma ??rea ser?? capaz de representar as centralidades de um bairro significativo, sem concentrar atividades terci??rias dentro dele. Estes lugares assumiram, portanto, um car??ter territorial gra??as ??s pr??ticas cotidianas que as comunidades a?? realizam, e ainda devido ao compartilhar de hist??rias que contribuem para a constru????o de valores sociais que se expressam acima de tudo e nas formas de apropria????o do espa??o.
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
