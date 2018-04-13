import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Page from 'components/Page'
import { Button } from 'antd'


class 123 extends React.PureComponent {
	render(){
		return (
			<Page loading={loading.models.123  }>

			</Page>
		)
	}
}

export default connect(
({ 123, loading }) => ({ 123, loading }))(
123)
