import '../scss/Header.scss';

// заголовк
const Header = ({ isHelp, setHelp }) => {
    return (
        <nav>
            Лабиринт
            <div onClick={ () => setHelp(isHelp => !isHelp) }>
                <svg data-testid="help-btn">
                    <use xlinkHref={ isHelp ? "#close" : "#question" }></use>
                </svg>
            </div>
        </nav>
    )
};

export default Header;