import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import styles from './ProductListStyle';
import ProductListSwipe from '../../organization/product_list_siwp/ProductListSwipe';
import ProductKeyFeatures from '../../organization/product_key_features/ProductKeyFeatures';
import ProductCustomerReview from '../../organization/product_customer_review/ProductCustomerReview';
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
          (dim.width = ScreenRatio.width), (dim.height = ScreenRatio.height);
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
    data = this.props.data;
    this.state.dataList.push({
      type: 'NORMAL',
      item: {
        productName: data.productName,
        DateOfPurchase: data.DateOfPurchase,
        productImage: data.productImage,
      },
    });
    this.setState({
      list: new DataProvider((r1, r2) => {
        return r1 != r2;
      }).cloneWithRows(this.state.dataList),
    });
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
    return (
      <View style={{flex: 1}}>
        <ProductListSwipe />
        <ProductKeyFeatures />
        <ProductCustomerReview />
      </View>
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

export default ProductList;
