import useTrailers from "../hooks/useTrailers.ts";


interface Props {
    gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
    const {data, isLoading, error} = useTrailers(gameId);

    if (isLoading) return null;

    if (error) throw error;

    const first = data?.results[0];

    return  first ? (
        <video
            src={first.data[480]}
            poster={first.preview}
            controls
            width='100%'
        />
    ) : null;
};

export default GameTrailer;