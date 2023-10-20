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

interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder: string;
}

interface IChangeHandlerProps {
  onChangeHandler: (a: string) => void;
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e.target.value)}
  />
);

export default SearchBox;
