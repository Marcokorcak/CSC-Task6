 import { Link, useLocation } from "react-router-dom";
import './breadcrumb.css'

export default function Crumb() {

    const location = useLocation();
    console.log(location);

    let link = '';

    const crumbs = location.pathname.split('/')
      .filter(crumb => crumb !== '')
      .map(crumb => {
        link += `/${crumb}`

        console.log({crumb})

        return (
            <div className="crumb" key={crumb}>
                <a>
                <Link to={link}>{crumb}</Link>
                </a>
            </div>
        )
      })

    return (
        <div  className="breadcrumbs">
            {crumbs}
        </div>
    )
} 


