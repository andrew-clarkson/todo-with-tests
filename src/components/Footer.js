import '../App.css';

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <a href='https://github.com/TallSoup/todo-with-tests'>
        <i className='fa-brands fa-github'></i>
      </a>

      <a href='https://www.linkedin.com/in/andrewtclarkson'>
        <i className='fa-brands fa-linkedin-in'></i>
      </a>

      <span className='name-and-year'>
        <a href='https://github.com/TallSoup'>Andrew Clarkson</a>
        &nbsp;&copy;{year}
      </span>
    </footer>
  );
};

export default Footer;
