import { ButtonProps } from '@material-ui/core';
declare type AsyncButtonProps<T> = {
    asyncFunction: () => Promise<T>;
};
export default function AsyncSingleClickButton<T>({ asyncFunction, disabled, children, ...other }: ButtonProps & AsyncButtonProps<T>): JSX.Element;
export {};
