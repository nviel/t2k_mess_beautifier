"use strict";

function getViewFAL5(mess) {
    //retourne le code HTML à afficher
    let crew_rows = '';
    for (let i = 0; i < mess.Body.FormInformation.CrewList.CrewMember.length; i++) {
        let member = mess.Body.FormInformation.CrewList.CrewMember[i];
        crew_rows += `
        <tr>
        <td>${member.LastName}</td>
        <td>${member.FirstName}</td>
        <td>${member.DutyOfCrew}</td>
        <td>${member.Nationality}</td>
        <td>${member.DateOfBirth}</td>
        <td>${member.PlaceOfBirth}</td>
        <td>${member.CountryOfBirth}</td>
        <td>${member.NatureOfIdentityDocument}</td>
        <td>${member.NumberOfIdentityDocument}</td>
        <td>${member.VisaOrResidencePermitNumber}</td>
        </tr>`
    }

    return `
      Port: ${mess.Body.ShipCallInformation.PortOfCall}<br/> 
      Numéro d'escale: ${mess.Body.ShipCallInformation.ShipCallId}<br/>
      <div class="tooltip">
      <h2>IMO FAL Form 5 (Crew list)</h2>
      <span class="tooltiptext">
        Numéro de message: ${mess.Header.LARefId}<br/>
        Date d'envoi: ${mess.Header.SentAt}<br/>
        Port émetteur: ${mess.Header.From}
      </span>
      </div><br/>
      <h3>${mess.Body.FormInformation.entryOrExit}</h3>
  
      <table class="blueTable">
      <tr>
        <th >
          1.1 Name and type of ship<br/>
        </th>
        <th>
          1.2 IMO number<br/>
        </th>
      </tr>
      <tr>
        <td >
          <b>${mess.Body.FormInformation.ShipInformation.ShipName}</b>
        </td>
        <td>
          <b>${mess.Body.VesselIdentification.IMONumber}</b>
        </td>
      </tr>
      <tr>
        <th>
          1.3 Callsign<br/>
        </th>
        <th>
          1.4 Voyage number<br/>
        </th>
      </tr>
      <tr>
        <td >
          <b>${mess.Body.FormInformation.ShipInformation.CallSign||'&nbsp;'}</b>
        </td>
        <td>
          <b>${mess.Body.FormInformation.VoyageNumber||"&nbsp;"}</b>
        </td>
      </tr>
      <tr>
        <th>
          2. Port of ${mess.Body.FormInformation.entryOrExit}<br/>
        </th>
        <th>
          3. Date and time of ${mess.Body.FormInformation.entryOrExit}<br/>
        </th>
      </tr>
      <tr>
        <td >
          <b>${mess.Body.ShipCallInformation.PortOfCall}</b>
        </td>
        <td>
          <b>${mess.Body.FormInformation.VoyageInformation.ETDFromPortOfCall||''}${mess.Body.FormInformation.VoyageInformation.ETAToPortOfCall||''}</b>
        </td>
      </tr>
      <tr>
        <th>
          4. Flag State of ship<br/>
        </th>
        <th>
          5. Last port of call<br/>
        </th>
      </tr>
      <tr>
        <td>
          <b>${mess.Body.FormInformation.ShipInformation.FlagStateOfShip||' '}</b>
        </td>
        <td>
          <b>${mess.Body.FormInformation.VoyageInformation.LastPort||" "}</b>
        </td>
      </tr>
      </table>
      <table class="CrewList blueTable">
      <thead><tr>
        <th>7.  Family name</th>
        <th>given names</th>
        <th>8.  Rank or rating</th>
        <th>9.  Nationality</th>
        <th>10.  Date of birth</th>
        <th>Place of birth</th>
        <th>Country of birth</th>
        <th>11. Nature of identity document </th>
        <th>number of identity document </th>
        <th>Visa or residence permit number</th>
      </tr></thead>
      <tbody>
        ${crew_rows}
      </tbody>
      </table>
      `;
}