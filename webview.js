module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.hc-mention').length;
    const allMessages = document.querySelectorAll('.aui-badge:not(.hc-mention)').length - directMessages;

    // set Franz badge
    Franz.setBadge(directMessages, allMessages);
  };
  Franz.loop(getMessages);
};
