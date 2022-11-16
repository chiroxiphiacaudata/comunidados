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
import Stories from './narracoes';

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

export default function About() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Sobre</Button>
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
              Comunidados
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              \Comunidados\ é uma plataforma participativa para coletar, compartilhar e processar dados, informações, textos, vídeos, imagens, áudio sobre Tinguá e sobre as comunidades do Vale do Tinguá (Nova Iguaçu).
              De uma perspectiva ambientalista e de desenvolvimento sócio-econômico justo e sustentável.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              O objetivo da plataforma é informar as comunidades sobre seus recursos coletivos, proporcionando-lhes uma base de conhecimento para discutir o futuro e promover ações públicas e/ou coletivas.
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              -
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Podem explorar o mapa para encontrar quais dados foram coletados desde 2019 até hoje, começando pelos dados de monitoramento ambiental até aqueles sobre a agricultura orgânica no vale. Podem acessar a seção de narrações para descobrir mais sobre suas comunidades. Experimente!  
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             <Stories />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
