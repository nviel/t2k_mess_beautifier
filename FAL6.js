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
  
      <table>
      <tr>
        <td >
          1.1 Name and type of ship<br/>
          <b>${mess.Body.FormInformation.ShipInformation.ShipName}</b>
        </td>
        <td>
          1.2 IMO number<br/>
          <b>${mess.Body.VesselIdentification.IMONumber}</b>
        </td>
      </tr>
      <tr>
        <td >
          1.3 Callsign<br/>
          <b>${mess.Body.FormInformation.ShipInformation.CallSign||' '}</b>
        </td>
        <td>
          1.4 Voyage number<br/>
          <b>${mess.Body.FormInformation.VoyageNumber||" "}</b>
        </td>
      </tr>
      <tr>
        <td >
          2. Port of ${mess.Body.FormInformation.entryOrExit}<br/>
          <b>${mess.Body.ShipCallInformation.PortOfCall}</b>
        </td>
        <td>
          3. Date and time of ${mess.Body.FormInformation.entryOrExit}<br/>
          <b>${mess.Body.FormInformation.VoyageInformation.ETDFromPortOfCall||''}${mess.Body.FormInformation.VoyageInformation.ETAToPortOfCall||''}</b>
        </td>
      </tr>
      <tr>
        <td>
          4. Flag State of ship<br/>
          <b>${mess.Body.FormInformation.ShipInformation.FlagStateOfShip||' '}</b>
        </td>
      </tr>
      </table>
      <br/>
      <table class="PassengerList">
      <thead><tr>
        <td>5.  Family name</td>
        <td>given names</td>
        <td>6.  Nationality</td>
        <td>7.  Date of birth</td>
        <td>7.  Place of birth</td>
        <td>7.  Country of birth</td>
        <td>8.  Type of identity or travel document</td>
        <td>9.  Serial number of identity or travel document</td>
        <td>10.  Port of embarkation</td>
        <td>11.  Port of disembarkation</td>
        <td>12.  Transit passenger or not</td>
  
      </tr></thead>
      <tbody>
        ${passenger_rows}
      </tbody>
      </table>
      `;
}