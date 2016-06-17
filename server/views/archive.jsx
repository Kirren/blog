import React from 'react'

// components
import Navbar from './blocks/navbar.jsx'

export default class Home extends React.Component {
  constructor() {
    super()
    this.renderMonth = this.renderMonth.bind(this)
    this.renderCategories = this.renderCategories.bind(this)
    this.renderLatestPosts = this.renderLatestPosts.bind(this)
  }
  renderLatestPosts() {
    let data = this.props.data
    if (data) {
      let latestPosts =
        data
          .slice(0, 5)
          .map((value) => {
            let title = (value.title) ? value.title :
            (value.quote) ? value.quote : 'Unnamed post'

            return (
            <form className="post-archive__form" method="GET" action={`/archive/latest/${value.id}`}>
              <button className="post-archive__item" type="submit">{title}</button>
            </form>
            )

          })
      return latestPosts
    } else return null
  }
  renderCategories() {
    let data = this.props.data
    if (data) {
      let categories =
        data
          .map((value) => {
            let target
            for (let i in value) {
              if (i === 'action') target = value[i]
            }
            return target
          })
          .filter((value, i, arr) => {
            for (let j = i + 1; j < arr.length; j++) {
              let currentValue = value
              let nextValue = arr[j]
              if(currentValue !== nextValue && nextValue) continue
              else return false
            }
            return true
          })
          .map((value) =>
            <form className="post-archive__form" method="GET" action={`/archive/categories/${value}`}>
              <button className="post-archive__item" type="submit">{value}</button>
            </form>
          )
        return categories
    } else return null
  }
  renderMonth() {
    let data = this.props.data

    if (data) {
      let postsByMonth =
        data
          .map((value) => {
            let target
            for (let i in value) {
              if (i === 'date' ) target = value[i]
            }
            return target
          })
          .filter((value, i, arr) => {
            let currentValue = value
            let nextValue = arr[i + 1]

            let currentValueMonth = (currentValue.split('/'))[1]
            let nextValueMonth

            if (nextValue) {
              nextValueMonth = (nextValue.split('/'))[1]
            }

            return currentValueMonth !== nextValueMonth
          })
          .map((value) => {
            let month = (value.split('/'))[1]
            let year = (value.split('/'))[2]
            switch (month) {
              case '1': month = 'January'; break;
              case '2': month = 'February'; break;
              case '3': month = 'March'; break;
              case '4': month = 'April'; break;
              case '5': month = 'May'; break;
              case '6': month = 'June'; break;
              case '7': month = 'July'; break;
              case '8': month = 'August'; break;
              case '9': month = 'September'; break;
              case '10': month = 'October'; break;
              case '11': month = 'November'; break;
              case '12': month = 'December'; break;
            }
            return `${month} ${year}`
          })
          .map((value) =>
            <form className="post-archive__form" method="GET" action={`/archive/month/${value.toLowerCase()}`}>
              <button className="post-archive__item" type="submit">{value}</button>
            </form>
          )
      return postsByMonth
    } else return null
  }
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Document</title>
          <link rel="stylesheet" href="/css/common.css"/>
          <link rel="stylesheet" href="/css/archive.css"/>
        </head>
        <body>
          <Navbar archiveLink={true} />
          <div className="container">
            <div className="post">
              <div className="post-body">
                <h2 className="post-body__title">
                Archive
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe maxime at excepturi rem quo quod deleniti explicabo natus amet modi tempore ratione, expedita, delectus id, doloremque placeat eaque blanditiis illum minus.</span>
                </h2>
                <div className="post-archive">
                  <div className="container">
                    <div className="col-6-cycle">
                      <div className="post-archive__body">
                        <h3 className="post-archive__title">Latest Posts</h3>
                        {this.renderLatestPosts()}
                      </div>
                    </div>
                    <div className="col-6-cycle">
                      <div className="post-archive__body">
                        <h3 className="post-archive__title">Categories</h3>
                        {this.renderCategories()}
                      </div>
                    </div>
                    <div className="col-6-cycle">
                      <div className="post-archive__body">
                        <h3 className="post-archive__title">Posts by Month</h3>
                        {this.renderMonth()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script src="/js/common.js"></script>
          <script src="/js/archive.js"></script>
        </body>
      </html>
    )
  }
}
