exports.parseUser = (message, user, id, channel) => {
  const member = message.guild.member(user, id, message, channel) || null;
  if (user.id === message.author.id) {
    return message.channel.send('You cannot do that to yourself, why did you try?');
  } else if (member) {
    if (member.highestRole.position >= message.member.highestRole.position) return message.channel.send('The targeted member has a higher or equal role position than you.');
  }
  return user;
};
