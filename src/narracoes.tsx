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
import Profumo  from './text';

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
                image="./icons/farmer.png"
                alt="Entrevista com João, agricultor orgânico"
              />
            </Card>
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
