import React from 'react'
import { RootState } from '../../redux'
import { connect } from 'react-redux'
import { Product } from '../../shared/Table/Table.mockdata'

declare interface HeaderProps {
  title: string
  firstProduct: Product
}

const Header: React.FC<HeaderProps> = (props) => {
  return <header className="AppHeader">
    <h5> { props.title } - General Data : { props.firstProduct.name }</h5> 
  </header>
}

const mapStateToProps = (state: RootState) => ({
  firstProduct: state.products[0]
})

export default connect(mapStateToProps)(Header)