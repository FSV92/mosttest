import {AppDispatchType, RootStateType} from './../store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

type DispatchFunc = () => AppDispatchType;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
