import { Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {FormEvent, useRef} from "react";
import useGameQueryStore from "../store.ts";

// interface Props {
//     onSearch: (searchText: string) => void;
// }

// const SearchInput = ({onSearch}: Props) => {
//     const ref = useRef<HTMLInputElement>(null);
//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         if (ref.current) {
//             if (ref.current.value === "" ) return null;
//             onSearch(ref.current.value);
//             ref.current.value = "";
//         }
//     };
const SearchInput = () => {
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const ref = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (ref.current) {
            if (ref.current.value === "" ) return null;
            setSearchText(ref.current.value);
            ref.current.value = "";
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                    <InputLeftElement
                        onClick={handleSubmit}
                        children={<BsSearch/>}
                        cursor="pointer"
                    />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;