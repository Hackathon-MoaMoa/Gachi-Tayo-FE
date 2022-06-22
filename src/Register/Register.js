import PostCode from "./PostCode";
const Register = () => {
  return (
    <div className='register'>
      <div>출발지</div>
      <div>
        <PostCode />
      </div>
      <div>도착지</div>
      <div>
        <PostCode />
      </div>
      <div>출발시간</div>
      <div>좌석</div>
    </div>
  );
};

export default Register;
