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
              ♻️ Reciclar é preservar o nosso próprio planeta!!<br /><br /><br />
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
              Os alunos foram coordenados pelo técnico ambiental Marcos Martins, juntamente com o arte educador Ivan Machado. <br /><br /><br />
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
