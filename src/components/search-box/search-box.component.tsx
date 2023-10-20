import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

//we never want to use any
// figure out some type of strategy to bind the variable some type
//key thing is to not use 'any' 99.99% of the time

const name: string = "faisal";

//typing a function

const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => {
  return true;
};

//interface

// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder?: string;
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a: string) => void;
// }
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

// type CanadianAddress = {
//   street: string;
//   province: string;
// };

// type USAddress = {
//   street: string;
//   state: string;
// };

// type ItalianAddress = {
//   street: string;
//   region: string;
// };

// type Address = CanadianAddress | USAddress | ItalianAddress;

// const Address: Address = {
//   street: "",
//   state: "",
//   province: "",
// };

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
