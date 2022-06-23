import RegisterSuccessImg from "./img/register_success_img.png";

const RegisterSuccess = () => {
  return (
    <div>
      <img
        style={{
          position: "absolute",
          top: "224px",
          left: "551px",
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
