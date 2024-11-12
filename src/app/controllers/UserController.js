import Queue from "../lib/Queue";

const store = async (req, res) => {
  const { name, email, password } = req.body;

  const user = {
    name,
    email,
    password,
  };

  //adicionar o job aqui
  await Queue.add("RegistrationMail", { user });

  return res.json(user);
};

export default {
  store,
};
