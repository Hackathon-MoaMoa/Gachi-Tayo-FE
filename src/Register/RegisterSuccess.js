import RegisterSuccessImg from "./img/register_success_img.png";

const RegisterSuccess = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img
        style={{
          padding: "auto 0",
          width: "461px",
          height: "400px",
        }}
        src={RegisterSuccessImg}
        alt='success'
      />
    </div>
  );
};

export default RegisterSuccess;
