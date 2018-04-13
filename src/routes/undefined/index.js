import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Page from 'components/Page'
import { Button } from 'antd'


class  extends React.PureComponent {
	render(){
		const {loading ,  } = this.props
		return (
			<Page loading={ loading.models. }>

			</Page>
		)
	}
}

export default connect(
({ , loading }) => ({ , loading }))(
)
