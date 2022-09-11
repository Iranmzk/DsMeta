import axios from 'axios';
import icon from '../../assets/img/Notification-icon.svg'
import { BASE_URL } from '../../utils/Request';

import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(id :number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("SUCESSO");
    });
}

function NotificationButtom( {saleId} : Props) {
    return(
        <div className="dsmeta-redbtm" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )   
  }
  
  export default NotificationButtom