import { Box, Container } from '@mui/material';
import { ContactUs } from '../../components/ContactUs/ContactUs.tsx';
import './styles.css';

const Home = () => {
    return (
        <Box>
            <Container sx={{ pt: 10, textAlign: 'center' }}>
                <video

                    width="900" height="500" controls autoPlay
                    src="https://res.cloudinary.com/dzwebpxyo/video/upload/v1706046114/home%20parking/video-ceet_mmg5hn.mp4">
                </video>
            </Container>
            <ContactUs />
        </Box>
    );
};

export {Home};
