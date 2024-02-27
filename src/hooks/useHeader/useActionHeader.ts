import { useDispatch } from 'react-redux';
import { toggleOpenDrawer } from '../../redux/reducer/globa.slice';


const useActionHeader = () => {

    const dispatch = useDispatch();

    const toggleDrawer =
      (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        dispatch(toggleOpenDrawer(open));

    };

    return {
        toggleDrawer
    };

};

export {useActionHeader};