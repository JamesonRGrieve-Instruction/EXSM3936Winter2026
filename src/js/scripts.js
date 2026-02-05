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
  await input("Press enter to do a pretend request: ");
  // await pretendRequest();
  // await pretendRequest();
  // await pretendRequest();
  // await pretendRequest();
  // await pretendRequest();
  // await pretendRequest();
  // await pretendRequest();
  // await pretendRequest();
  // await pretendRequest();
  // await pretendRequest();


  await Promise.all([
    pretendRequest(),
    pretendRequest(),
    pretendRequest(),
    pretendRequest(),
    pretendRequest(),
    pretendRequest(),
    pretendRequest(),
    pretendRequest(),
    pretendRequest(),
    pretendRequest()
  ]);

}

