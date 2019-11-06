"use strict";

function getView_NCA_Port(mess) {
        //retourne le code HTML à afficher
        return `
      <div class="escaleinfo">
      Port: ${mess.Body.ShipCallInformation.PortOfCall}<br/> 
      N° escale: ${mess.Body.ShipCallInformation.ShipCallId}<br/>
      </div>
      <div class="tooltip">
      <h2>NCA_Port</h2>
      <span class="tooltiptext">
      Numéro de message: ${mess.Header.LARefId}<br/>
      Date d'envoi: ${mess.Header.SentAt}<br/>
        Port émetteur: ${mess.Header.From}
        </span>
        </div><br/>
        <table class="infoTable">

        <tr>
        <td>
        IMO number<br/>
        </td>
        <td>
        Port de provenance
        </td>
        </tr>
        <tr>
        <td>
        <b>${mess.Body.VesselIdentification.IMONumber}</b>
        </td>
        <td>
        ${mess.Body.VoyageInformation.LastPort}
        </td>
        </tr>


      <tr>
      <td>
      Date prévue d'arrivée
      </td>
      <td>
      Date prévue de départ
      </td>
      </tr>
      
      <tr>
      <td>
      ${mess.Body.VoyageInformation.ETAToPortOfCall}
      </td>
      <td>
      ${mess.Body.VoyageInformation.ETDFromPortOfCall}
      </td>
      </tr>

      <tr>
      <td>
      Nombre de personnes à bord
      </td>
      <td>
      Poste à quai prévu
      </td>
      </tr>
      
      <tr>
      <td>
      ${mess.Body.VoyageInformation.TotalPersonsOnBoard}
      </td>
      <td>
      ${mess.Body.VoyageInformation.PositionInPortOfCall}
      </td>
      </tr>

      </table>
      `;
    }
