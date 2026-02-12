import React, { useActionState, useEffect, useState } from "react";

const App = () => {
  const handleSubmit = async (prevdata, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    await new Promise((res) => setTimeout(res, 2000));
    // console.log('handleSubmit is called',name,password)
    if (name && password) {
      return { message: " Form Submitted", name, password };
    } else {
      return { error: "Data is not Filled", name, password };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);

  const [uiMessage, setUiMessage] = useState(null);

  useEffect(() => {
    if (data?.message || data?.error) {
      setUiMessage(data.message || data.error);
    }
    const timer = setTimeout(() => {
      setUiMessage(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div>
      <h1 className="flex justify-start items-center bg-cover mb-2.5 ml-55 text-xl">
        useActionState Hook
      </h1>

      <form
        className="border-2 rounded-3xl flex flex-col w-150 justify-center items-center p-5 ml-4"
        action={action}
      >
        <input
          className="max-w-fit border-2  p-1.5"
          defaultValue={data?.name}
          type="text"
          placeholder="Enter Name"
          name="name"
        />
        <br />
        <br />
        <input
          className="max-w-fit border-2  p-1.5"
          type="password"
          placeholder="Enter Pass"
          name="password"
        />
        <br />
        <br />
        <button
          className="w-26  border-1.5 p-2 border-r-3 rounded-3xl bg-blue-500 text-white hover:bg-blue-400 cursor-pointer"
          disabled={pending}
        >
          {pending ? "Submiting" : "Submit"}
        </button>
        <br />
        <br />
        {uiMessage && (
          <span style={{ color: data?.error ? "red" : "green" }}>
            {uiMessage}
          </span>
        )}
      </form>
      <h1>Name: {data?.name}</h1>
      <h1>PassWord: {data?.password}</h1>
      <h1>{uiMessage && data?.password}</h1>
    </div>
  );
};

export default App;
