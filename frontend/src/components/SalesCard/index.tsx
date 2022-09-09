import NotificationButtom from '../NotificationsButtom'
import './styles.css'

function SalesCard() {
  return(
    <div className="dsmeta-card">
    <h2 className="dsmeta-sales-title">Vendas</h2>
    <div>
        <div className="dsmeta-former-control-container">
            <input className="dsmeta-former-control" type="text" />
        </div>
        <div className="dsmeta-former-control-container">
            <input className="dsmeta-former-control" type="text" />
        </div>
    </div>

    <div>
        <table className="dsmeta-sales-table">
            <thead>
            <tr>
                <th className="show992">ID</th>
                <th className="show576">Data</th>
                <th>Vendedor</th>
                <th className="show992">Visitas</th>
                <th className="show992">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="show992">#341</td>
                <td className="show576">01/09/2022</td>
                <td>Anakin</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$5500.00</td>
                <td>
                    <div className="dsmeta-redbtm-container">
                        <NotificationButtom />
                    </div>
                </td>
            </tr>
            <tr>
                <td className="show992">#341</td>
                <td className="show576">01/09/2022</td>
                <td>Maria</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$4800.00</td>
                <td>
                    <div className="dsmeta-redbtm-container">
                    <NotificationButtom />
                    </div>
                </td>
            </tr>
            <tr>
                <td className="show992">#341</td>
                <td className="show576">01/09/2022</td>
                <td>Victor</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$3600.00</td>
                <td>
                    <div className="dsmeta-redbtm-container">
                    <NotificationButtom />
                    </div>
                </td>                        </tr>
            <tr>
                <td className="show992">#341</td>
                <td className="show576">01/09/2022</td>
                <td>Anakin</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$10000.00</td>
                <td>
                    <div className="dsmeta-redbtm-container">
                    <NotificationButtom />
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>

  )
}

export default SalesCard