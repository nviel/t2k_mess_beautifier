"use strict";

function getViewFAL6(mess) {
    //retourne le code HTML à afficher
    let passenger_rows = '';
    for (let i = 0; i < mess.Body.FormInformation.PassengerList.Passenger.length; i++) {
        let passenger = mess.Body.FormInformation.PassengerList.Passenger[i];
        passenger_rows += `
        <tr>
        <td>${passenger.LastName}</td>
        <td>${passenger.FirstName}</td>
        <td>${passenger.Nationality}</td>
        <td>${passenger.DateOfBirth}</td>
        <td>${passenger.PlaceOfBirth}</td>
        <td>${passenger.CountryOfBirth}</td>
        <td>${passenger.NatureOfIdentityDocument}</td>
        <td>${passenger.NumberOfIdentityDocument}</td>
        <td>${passenger.PortOfEmbarkation}</td>
        <td>${passenger.PortOfDisembarkation}</td>
        <td>${passenger.Transit}</td>
        </tr>`
    }

    return `
      Port: ${mess.Body.ShipCallInformation.PortOfCall}<br/> 
      Numéro d'escale: ${mess.Body.ShipCallInformation.ShipCallId}<br/>
      <div class="tooltip">
      <h2>IMO FAL Form 6 (Pax list)</h2>
      <span class="tooltiptext">
        Numéro de message: ${mess.Header.LARefId}<br/>
        Date d'envoi: ${mess.Header.SentAt}<br/>
        Port émetteur: ${mess.Header.From}
      </span>
      </div><br/>
      <h3>${mess.Body.FormInformation.entryOrExit}</h3>
  
      <table class="infoTable">
      <tr>
        <td>
          1.1 Name and type of ship<br/>
        </td>
        <td>
          1.2 IMO number<br/>
        </td>
      </tr>
      <tr>
        <td >
          ${mess.Body.FormInformation.ShipInformation.ShipName}
        </td>
        <td>
          ${mess.Body.VesselIdentification.IMONumber}
        </td>
      </tr>
      <tr>
        <td >
          1.3 Callsign<br/>
        </td>
        <td>
          1.4 Voyage number<br/>
        </td>
      </tr>
      <tr>
        <td >
          ${mess.Body.FormInformation.ShipInformation.CallSign||' '}
        </td>
        <td>
          ${mess.Body.FormInformation.VoyageNumber||" "}
        </td>
      </tr>
      <tr>
        <td >
          2. Port of ${mess.Body.FormInformation.entryOrExit}<br/>
        </td>
        <td>
          3. Date and time of ${mess.Body.FormInformation.entryOrExit}<br/>
        </td>
      </tr>
      <tr>
        <td >
          ${mess.Body.ShipCallInformation.PortOfCall}
        </td>
        <td>
          ${mess.Body.FormInformation.VoyageInformation.ETDFromPortOfCall||''}${mess.Body.FormInformation.VoyageInformation.ETAToPortOfCall||''}
        </td>
      </tr>
      <tr>
        <td>
          4. Flag State of ship<br/>
        </td>
      </tr>
      <tr>
        <td>
          ${mess.Body.FormInformation.ShipInformation.FlagStateOfShip||' '}
        </td>
      </tr>
      </table>
      <br/>
      <table class="PassengerList listTable">
      <thead><tr>
        <th>5.  Family name</th>
        <th>given names</th>
        <th>6.  Nationality</th>
        <th>7.  Date of birth</th>
        <th>7.  Place of birth</th>
        <th>7.  Country of birth</th>
        <th>8.  Type of identity or travel document</th>
        <th>9.  Serial number of identity or travel document</th>
        <th>10.  Port of embarkation</th>
        <th>11.  Port of disembarkation</th>
        <th>12.  Transit passenger or not</th>
  
      </tr></thead>
      <tbody>
        ${passenger_rows}
      </tbody>
      </table>
      `;
}