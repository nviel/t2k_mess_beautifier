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
        <td>
          5. Last port of call<br/>
          <b>${mess.Body.FormInformation.VoyageInformation.LastPort||" "}</b>
        </td>
      </tr>
      </table>
      <table class="CrewList">
      <thead><tr>
        <td>7.  Family name</td>
        <td>given names</td>
        <td>8.  Rank or rating</td>
        <td>9.  Nationality</td>
        <td>10.  Date of birth</td>
        <td>Place of birth</td>
        <td>Country of birth</td>
        <td>11. Nature of identity document </td>
        <td>number of identity document </td>
        <td>Visa or residence permit number</td>
      </tr></thead>
      <tbody>
        ${crew_rows}
      </tbody>
      </table>
      `;
}