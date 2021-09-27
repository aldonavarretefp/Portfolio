import './portfoliolist.scss';

function PortfolioList({title,isActive,setSelected,id}) {
    return (
        // Regresa la lista de portafolio
        <li className={isActive ? 'active' : ''} onClick={()=>setSelected(id)}>
            {
                title
            }
        </li>
    )
}

export default PortfolioList
