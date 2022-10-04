import './loader.css'

const Loader = () => {

  const quotes = [
    '"The stories we love best do live in us forever." - J.K. Rowling',
    "I'll tell you a secret. Old storytellers never die. They disappear into their own story.” - Vera Nazarian",
    "I’m writing my story so that others might see fragments of themselves.” - Lena Waithe"
  ]
  return (
    <div className='loader'>
        <div className="loaderRing"></div>
        <div className="quotes">
            <p className='quote'>{quotes[Math.floor(Math.random()*quotes.length)]}</p>
        </div>
    </div>
  )
}

export default Loader