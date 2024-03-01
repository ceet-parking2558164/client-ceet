import {Container} from '@mui/material';
import {CustomInput} from '../../common/atoms/CustomInput.tsx';
import {CustomButton} from '../../common/atoms/CustomButton.tsx';

const FormSendMessage = () => {
    return (
        <Container >
            <form style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                <CustomInput label='Asunto:' />
                <CustomInput label='Mensaje:' multiline rows={4} />
                <CustomButton variant='contained' type='submit' textValue='Enviar' />
            </form>
        </Container>
    );
};

export {FormSendMessage};
