export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            成蝶留学
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                服务项目
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                关于我们
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                成功案例
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                成员介绍
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                联系我们
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
