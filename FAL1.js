"use strict";

function getViewFAL1(mess) {
    //retourne le code HTML à afficher
    return `
      Port: ${mess.Body.ShipCallInformation.PortOfCall}<br/> 
      Numéro d'escale: ${mess.Body.ShipCallInformation.ShipCallId}<br/>
  
      <div class="tooltip">
      <h2>IMO FAL Form 1 (general declaration)</h2>
      <span class="tooltiptext">
        Numéro de message: ${mess.Header.LARefId}<br/>
        Date d'envoi: ${mess.Header.SentAt}<br/>
        Port émetteur: ${mess.Header.From}
      </span>
      </div><br/>
      <h3>${mess.Body.FormInformation.entryOrExit}</h3>
      <table>
      <tr>
        <td colspan="2">
          1.1 Name and type of ship<br/>
          <b>${mess.Body.FormInformation.ShipInformation.ShipName}</b>
        </td>
        <td>
          1.2 IMO number<br/>
          <b>${mess.Body.VesselIdentification.IMONumber}</b>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          1.3 Callsign<br/>
          <b>${mess.Body.FormInformation.ShipInformation.CallSign||' '}</b>
        </td>
        <td>
          1.4 Voyage number<br/>
          <b>${mess.Body.FormInformation.VoyageNumber||" "}</b>
        </td>
      </tr>
      <tr>
        <td colspan="2">
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
          5. Name of master<br/>
          <b>${mess.Body.FormInformation.ShipInformation.NameOfMaster||" "}</b>
        </td>
        <td>
          6. Last/Next port of call<br/>
          <b>${mess.Body.FormInformation.VoyageInformation.LastPort||" "} / ${mess.Body.FormInformation.VoyageInformation.NextPort||" "}</b>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          7. Certificate of registry (Port; date; number)<br/>
          <b>${mess.Body.FormInformation.CertificateOfRegistry.Locode||''};
          ${mess.Body.FormInformation.CertificateOfRegistry.LocationName||''};
          ${mess.Body.FormInformation.CertificateOfRegistry.Date||''};
          ${mess.Body.FormInformation.CertificateOfRegistry.Number||''}</b>
        </td>
        <td rowspan="3">
          8. Name and contact details of ship’s agent<br/>
          Name: <b>${mess.Body.FormInformation.CertificateOfRegistry.ShippingContactDetails.NameOfAgent||''}</b><br/>
          Phone: <b>${mess.Body.FormInformation.CertificateOfRegistry.ShippingContactDetails.Phone||''}</b><br/>
          Fax: <b>${mess.Body.FormInformation.CertificateOfRegistry.ShippingContactDetails.Fax||''}</b><br/>
          Email: <b>${mess.Body.FormInformation.CertificateOfRegistry.ShippingContactDetails.Email||''}</b><br/>
        </td>
      </tr>
      <tr>
        <td>
          9. Gross tonnage<br/>
          <b>${mess.Body.FormInformation.OtherInformations.GrossTonnage||' '}</b>
        </td>
        <td>
          10. Net tonnage<br/>
          <b>${mess.Body.FormInformation.OtherInformations.NetTonnage||" "}</b>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          11. Position of the ship in the port (berth or station)<br/>
          <b>${mess.Body.FormInformation.OtherInformations.PositionInPortOfCall||' '}</b>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          12.  Brief particulars of voyage (previous and subsequent ports of call; underline where remaining cargo will be discharged)<br/>
          <b>${mess.Body.FormInformation.OtherInformations.BriefParticularsOfVoyage||' '}</b>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          13.  Brief description of the cargo<br/>
          <b>${mess.Body.FormInformation.OtherInformations.BriefDescriptionOfOnBoardCargo||' '}</b>
        </td>
      </tr>
      <tr>
        <td>
          14.  Number of crew <br/>
          <b>${mess.Body.FormInformation.OtherInformations.NumberOfCrew||' '}</b>
        </td>
        <td>
          15.  Number of passengers<br/>
          <b>${mess.Body.FormInformation.OtherInformations.NumberOfPassengers||' '}</b>
        </td>
        <td>
          16.  Remarks<br/>
          <b>${mess.Body.FormInformation.OtherInformations.GeneralRemarks||' '}</b>
        </td>
      </tr>
      </table>
      Numéro d'escale: ${mess.Body.ShipCallInformation.ShipCallId}<br/>
      `;
}