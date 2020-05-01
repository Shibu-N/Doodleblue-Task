let contactDetailsData = [];
export default function(state = [], contactDetails) {
  if (
    contactDetails.type === "AddContactDetails" &&
    contactDetails.payload !== undefined &&
    contactDetails.payload !== null &&
    contactDetails.payload !== ""
  ) {
    console.log(contactDetails.payload)
    contactDetailsData = [...contactDetails.payload];
  } 
  state = contactDetailsData;
  return state;
}