import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import RequestData from './RequstData';
import styles from './RequestListStyle';
import SingleRequest from '../../organization/single_reqest/SingleRequest';
class RequestList extends Component {
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

  //row render single item
  rowRenderer = (type, data, index, extendedState) => {
    const {productName, DateOfPurchase, productImage} = data.item;
    return (
      <SingleRequest
        productName={productName}
        DateOfPurchase={DateOfPurchase}
        productImage={productImage}
      />
    );
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

export default RequestList;
