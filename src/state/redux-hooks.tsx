import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useStateDispatch = () => useDispatch<AppDispatch>();
