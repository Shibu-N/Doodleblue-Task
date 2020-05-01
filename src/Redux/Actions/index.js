export const AddContactDetails = (payload) => {
  return {
    type: "AddContactDetails",
    payload,
  };
};

export const SendMessageDetails = (payload) => {
  return {
    type: "SendMessage",
    payload,
  };
};
