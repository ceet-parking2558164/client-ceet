import {Route, Routes} from 'react-router-dom';
import {FC} from 'react';
import {ChildrenProps} from '../types/containers/children/ChildrenProps.ts';
import {NotFound} from '../pages/global/NotFound/NotFound.tsx';

const RoutesNotFound: FC<ChildrenProps> = ({children}) => {
    return (
        <Routes>
            {children}
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
};

export {RoutesNotFound};
