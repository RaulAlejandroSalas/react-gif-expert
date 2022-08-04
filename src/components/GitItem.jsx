import PropTypes from 'prop-types'

export const GitItem = ({title,url}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>    
    </div>
  )
}
//The title, url are required
GitItem.propTypes ={
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
