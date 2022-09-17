import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import styles from './ProductListStyle';
import RequestData from '../reqest_list/RequstData';
class ProductList extends Component {
  constructor(props) {
    super(props);

    // state Declare
    (this.state = {
      list: new DataProvider((r1, r2) => {
        return r1 !== r2;
      }),
      dataList: [],
    }),
      //ref declare
      (this.layoutProvider = new LayoutProvider(
        i => {
          return this.state.list.getDataForIndex(i).type;
        },
        (type, dim) => {
          (dim.width = ScreenRatio.width),
            (dim.height = ScreenRatio.height / 6);
        },
      )),
      (this.extendedState = {});
  }

  //page rendering
  componentDidMount() {
    this.loadData();
  }

  //loadData Function

  loadData = () => {
    data = RequestData;
    if (data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
        this.state.dataList.push({
          type: 'NORMAL',
          item: {
            productName: data[i].productName,
            DateOfPurchase: data[i].DateOfPurchase,
            productImage: data[i].productImage,
            requestStatus: false,
          },
        });
        if (i == data.length - 1) {
          this.setState({
            list: new DataProvider((r1, r2) => {
              return r1 != r2;
            }).cloneWithRows(this.state.dataList),
          });
        }
      }
    }
  };

  //request change function

  changeStatus = index => {
    this.state.dataList[index].item.requestStatus =
      !this.state.dataList[index].item.requestStatus;
    this.setState({
      extendedState: this.state.dataList[index].item.requestStatus,
    });
  };

  //row render single item
  rowRenderer = (type, data, index, extendedState) => {
    const {productName, DateOfPurchase, productImage, requestStatus} =
      data.item;
    return <View />;
  };

  //footer
  renderFooter = () => {
    return <View style={styles.footer} />;
  };

  // Recycler list View

  render() {
    const {list, dataList} = this.state;
    return (
      <View style={styles.container}>
        {this.state.dataList.length !== 0}
        {
          <RecyclerListView
            dataProvider={list}
            layoutProvider={this.layoutProvider}
            rowRenderer={this.rowRenderer}
            renderFooter={this.renderFooter}
            showsVerticalScrollIndicator={false}
            forceNonDeterministicRendering={false}
            extendedState={{state: this.extendedState}}
          />
        }
      </View>
    );
  }
}

export default ProductList;
