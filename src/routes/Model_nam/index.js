import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Page from 'components/Page'
import { Button } from 'antd'


class Model_nam extends React.PureComponent {
	render(){
		const {loading , model_nam } = this.props
		return (
			<Page loading={ loading.models.model_nam }>

			</Page>
		)
	}
}

export default connect(
({ model_nam, loading }) => ({ model_nam, loading }))(
Model_nam)
