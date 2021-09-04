export default function ListItem({menuOpen, setMenuOpen}, props){
    <li onClick={() => setMenuOpen(false)}>
                    <a href={props.ref}>{props.title}</a>
                </li>
}