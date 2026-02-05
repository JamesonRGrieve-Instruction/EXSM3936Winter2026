// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars


async function pretendRequest() {
  const min = 1000;
  const max = 2500;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  await new Promise(resolve => setTimeout(resolve, randomNumber));
  output(`Timeout of ${randomNumber}ms complete.`);
}



async function main() {
  await input("Press enter to get a joke.");
  // const joke = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw").then(res => res.json());

  const jokeResponse = await fetch("https://v2.jokeapi.dev/thing");

  if (jokeResponse.status >= 200 && jokeResponse.status <= 299) {
    const joke = await jokeResponse.json();

    console.log(joke);
    output("Retrieved joke number: " + joke.id);
  }
  else {
    output(`An error has occured with status: ${jokeResponse.status} - ${jokeResponse.statusText}`);
  }



}

