let messageData = [];
export default function(state = [], data) {
  if (
    data.type === "SendMessage" &&
    data.payload !== undefined &&
    data.payload !== null &&
    data.payload !== ""
  ) {
    console.log(data.payload)
    messageData  = [...data.payload];
  } 
  state = messageData ;
  return state;
}