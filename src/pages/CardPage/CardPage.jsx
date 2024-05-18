import { useParams } from "react-router-dom";
import PopBrowse from "../../components/Popups/PopBrowse";

export default function CardPage() {
    let {id} = useParams();

    return <PopBrowse id={id} />
}