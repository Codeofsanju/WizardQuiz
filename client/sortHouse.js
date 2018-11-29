const sortHouse = (answers) => {
  // For now, we're all Gryffindors.
  // Replace this with your own logic to really sort things out!
  return answers[Math.floor(Math.random() * (answers.length-1))];
}

export default sortHouse
