import React, { Component } from 'react'
import { Button, Input, List } from 'antd'
import '../assets/style/home.less'
import { connect } from 'react-redux'
import { UPDATE, ADD_ITEM, DELETE, GET_LIST } from '../store/ationType'

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.createdData([
        '起床洗脸刷牙',
        '吃饭骑车去公司',
        '打开电脑构思思路',
      ])
    }, 200)
  }

  handleClicktwo = () => {
    this.props.history.push('/list')
  }

  render() {
    return (
      <div>
        <div className="homepage">
          <Input placeholder="请输入内容" onChange={this.props.txtChanged} />
          <Button type="primary" onClick={this.props.handleClick.bind(this)}>
            添加
          </Button>
        </div>
        <List
          size="large"
          bordered
          dataSource={this.props.listItem}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                this.props.deleteData(index)
              }}
            >
              {item}
            </List.Item>
          )}
        />
        <Button type="primary" onClick={this.handleClicktwo}>
          跳转list
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listItem: state.listItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteData(index) {
      let action = {
        type: DELETE,
        Index: index,
      }
      dispatch(action)
    },
    createdData(data) {
      let action = {
        type: GET_LIST,
        data,
      }
      dispatch(action)
    },
    txtChanged(e) {
      let action = {
        type: UPDATE,
        value: e.target.value,
      }
      dispatch(action)
    },
    handleClick() {
      let action = {
        type: ADD_ITEM,
      }
      dispatch(action)
      // this.props.history.push('/list')
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
