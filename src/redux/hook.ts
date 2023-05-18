import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from './store.redux';

// export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
