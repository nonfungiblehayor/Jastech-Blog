import styled from "styled-components"

const StyledButton = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    button {
        width: 83vw;
        border-radius: 8px;
        height: 46px;
        text-align: center;
        background-color: #f65050;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        align-self: center;
        margin: auto;
        margin-top: 20px;
        border: none;
    }
`
const Button = ({
    label,
    onClick,
    className
}: {
    label: string,
    onClick: () => void,
    className: string
}) => {
    return ( <StyledButton>
        <div className="flex-row">
            <button className={className} onClick={onClick}>{label}</button>
        </div>
        </StyledButton>
    )
}
export default Button