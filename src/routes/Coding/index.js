import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Page from 'components/Page'
import { Button } from 'antd'


class Coding extends React.PureComponent {
	render(){
		const {loading , coding } = this.props
		return (
			<Page loading={ loading.models.coding }>

			</Page>
		)
	}
}

export default connect(
({ coding, loading }) => ({ coding, loading }))(
Coding)
