import './Button.scss';

function Button({ url, title, type }) {
  return (
    <a href={url} className='url'>
      <button className={`btn btn__${type}`}>
        {title}
    </button>
    </a>
  )
}

export default Button