import styled from "styled-components"

const StyledTitle = styled(({ titleType: Component = 'h1', children, ...props }) => {
    return <Component {...props}>{children}</Component>
})`
    font-size: ${props => props.titleType === 'h3' ? '36px' : '48px'};
    ${props => props.titleType === 'h1' ? '' : 'border-bottom: 3px double rgb(172, 174, 222);'}
    width: ${props => props.titleType === 'h2' ? '80vw' : 'auto' };
    font-weight: 100;
    letter-spacing: 8px;
    text-align: center;
    height: calc(1em + 4px);
    position: relative;

    @media (max-width: 768px) {
        font-size: ${props => props.titleType === 'h3' ? '24px' : '32px'};
        justify-self: center;
    }

    & div {
        text-align: start;
        padding-left: 8px;
        padding-right: 4px;

        &:nth-child(1)::after {
            content: '${props => props.content || ''}';
            position: absolute;
            left: 12px;
            display: inline-block;

            @media (max-width: 768px) {
                left: 11px;
            }
        }
    }
`

function Title ({titleType, content}) {
    return (
        <StyledTitle titleType={titleType} content={content} >
            <div>{content}</div>
        </StyledTitle>
    )
}

export default Title