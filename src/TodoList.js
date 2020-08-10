import React, { Component } from 'react';
import { Formik } from 'formik';

const Button = React.forwardRef((_props, ref) => (
  <button ref={ref}>Button</button>
));

const TodoForm = (props) => {
  const { handleSubmit, handleChange } = props;
  const values = props.values || {};
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={values.info} onChange={handleChange} name="info" />
      <button type="submit">提交</button>
    </form>
  )
}

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      info: '',
      list: ['A', 'B', 'C']
    }
  }

  componentDidMount() {
    console.log(this.myRef.current);
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ info: '' }}
          onSubmit={(values) => {
            this.setState({ value: values.info })
          }}>
          {TodoForm}
        </Formik>
        <ul ref={this.myRef}>
          {this.state.list.map(l => {
            return <li key={l}>{l}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList

