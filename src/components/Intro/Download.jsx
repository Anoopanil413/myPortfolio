const Download = ({ icon }) => {
  return (
    <>
      <a href='*' target='_blank' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-Snow'>Download Resume</span>
        <span>{icon}</span>
      </a>
    </>
  );
};

export default Download;
