async function handleLogin(inputs) {
  const url = 'http://localhost:1800/users/signin';
  const data = JSON.stringify(inputs);

  // console.log(data);

  const options = {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.user) {
      console.log('User token saved successfully');
    }

    if (json.error) {
      alert('Feil brukernavn eller passord');
    }
  } catch (error) {
    console.log(error);
  }
}

export default handleLogin;
