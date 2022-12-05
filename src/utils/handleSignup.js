async function handleSignup(inputs) {
  const url = 'https://mern-blog-api.up.railway.app/api/users/register';
  const data = JSON.stringify(inputs);

  console.log(data);

  const options = {
    method: 'POST',
    mode: 'cors',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.data) {
      console.log('User token saved successfully');
    }

    if (json.error) {
      console.log(json);
    }
  } catch (error) {
    console.log(error);
  }
}

export default handleSignup;
