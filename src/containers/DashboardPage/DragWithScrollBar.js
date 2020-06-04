import React from 'react';
import Container from '../../components/DragWithScrollBarItem/Container';
import { DISTANCE_SCROLLBAR_BOUNCE, DISTANCE_TO_CHECK_BOUNCE_OF_SCROLLBAR } from '../App/constant';


export default class DragWithScrollBar extends React.Component {
  constructor(props) {
    super(props);
    const { numberInit, widthItem } = this.props;
    this.state = {
      error: false,
      hasMore: true,
      isScrolling: false,
      isScrolling: false,
      data: [],
      scrollWidth: numberInit * widthItem - DISTANCE_SCROLLBAR_BOUNCE
    };
  }
  componentDidMount() {
    window.addEventListener('mouseup', this.mouseUpHandle);
    window.addEventListener('mousemove', this.mouseMoveHandle);
    this.refs.slider.addEventListener('scroll', () => {
      let { scrollLeft, clientHeight } = this.refs.slider;
      const {scrollWidth} = this.state;
      console.log(scrollLeft,scrollWidth,clientHeight);
      if(scrollLeft + DISTANCE_TO_CHECK_BOUNCE_OF_SCROLLBAR >= scrollWidth || scrollLeft  === 0){
        this.loadItems(scrollLeft);
      } 
    });
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.mouseUpHandle);
    window.removeEventListener('mousemove', this.mouseMoveHandle);
  }
  loadItems = (scrollLeft)=>{
    console.log("load items ... ");
    const { isLoading } = this.state
    const {widthItem} = this.props
    if(isLoading === false){
      if(scrollLeft >0){
        this.setState({ isLoading: true }, () => {
          this.setState({
            isLoading: false,
            scrollWidth: this.state.scrollWidth + widthItem
          });
          this.props.loadItems();
        });
      } else {
        this.setState({ isLoading: true }, () => {
          this.setState({
            isLoading: false,
            scrollWidth: this.state.scrollWidth + widthItem
          })
          this.props.loadItems();
        });
      }
     
    }
  }
  mouseUpHandle = async e => {
    if (this.state.isScrolling) {
      this.state.isScrolling = false;
      this.setState(this.state);
    }
  };
  mouseDownHandle = async e => {
    if (!this.state.isScrolling) {
      this.setState({ isScrolling: true });
      this.lastClientX = e.clientX;
      e.preventDefault();
    }
  };
  mouseMoveHandle = async e => {
    if (this.state.isScrolling) {
      this.refs.slider.scrollLeft -=
        -this.lastClientX + (this.lastClientX = e.clientX);
    }
  };

  render() {
    return (
      <Container
        onMouseDown={this.mouseDownHandle}
        onMouseMove={this.mouseMoveHandle}
        onMouseUp={this.mouseUpHandle}
        onScroll={this.onMouseMove}
        ref={'slider'}
      >
        {this.props.children}
      </Container>
    );
  }
}
