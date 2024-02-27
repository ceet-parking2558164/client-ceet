import { Container } from '@mui/material';
import { ContactUs } from '../../../components/ContactUs/ContactUs.tsx';

const Home = () => {
    return (
        <>
            <Container sx={{ pt: 10, textAlign: 'center' }}>
                <video
                    width="100%" height="auto" controls
                    src="https://res.cloudinary.com/dzwebpxyo/video/upload/v1706046114/home%20parking/video-ceet_mmg5hn.mp4">
                </video>
            </Container>
            <ContactUs />
        </>
    );
};

export {Home};
