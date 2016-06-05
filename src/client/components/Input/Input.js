import { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import MdClear from 'react-icons/lib/md/clear';

import { sizesList, getSizeClassName } from 'client/utils/sizeMapper';
import s from './Input.pcss';

@withStyles(s)
class Input extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'text',
      'password',
    ]),
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(sizesList),
    availableWidth: PropTypes.bool,
    hasClear: PropTypes.bool,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  };

  static defaultProps = {
    type: 'text',
    defaultValue: '',
    placeholder: '',
    size: 'm',
    availableWidth: false,
    hasClear: false,
    className: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.defaultValue,
    };
  }

  onChangeInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  onClickClear = () => {
    this.setState({
      value: '',
    });
  }

  render() {
    const {
      type,
      placeholder,
      size,
      hasClear,
      availableWidth,
      defaultValue, // eslint-disable-line no-unused-vars
      className,
      ...props,
    } = this.props;

    const { value } = this.state;

    const classNames = cx(
      s.root,
      (availableWidth && s.availableWidth),
      (hasClear && s.hasClear),
      s[getSizeClassName(size)],
      className,
    );

    return (
      <span className={classNames}>
        <span className={s.box}>
          <input
            {...props}
            type={type}
            value={value}
            placeholder={placeholder}
            className={s.control}
            onChange={this.onChangeInput}
          />

          {hasClear && (
            <MdClear
              className={s.clear}
              onClick={this.onClickClear}
            />
          )}
        </span>
      </span>
    );
  }
}

export default Input;
