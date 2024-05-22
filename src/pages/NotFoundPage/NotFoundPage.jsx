import { Link } from "react-router-dom";
import { paths } from "../../lib/paths";
import { Wrapper } from "../../styled/Common.styled";
export default function NotFoundPage() {
    return (
        <Wrapper>
            <h1>404</h1>
            <h2>Not found</h2>
            <button><Link to={paths.MAIN}>Перейти на главную страницу</Link></button>
        </Wrapper>
    )
}