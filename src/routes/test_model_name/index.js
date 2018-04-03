import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Page from 'components/Page'
import { Button } from 'antd'


class test_model_name extends React.PureComponent {
	render(){
		const {loading , test_model_name } = this.props
		return (
			<Page loading={ loading.models.test_model_name }>

			</Page>
		)
	}
}

export default connect(
({ test_model_name, loading }) => ({ test_model_name, loading }))(
test_model_name)
